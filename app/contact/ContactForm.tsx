"use client";

import {
  FormEvent,
  useState,
} from "react";

import styles from "./Contact.module.css";

type Status =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function ContactForm() {
  const [status, setStatus] =
    useState<Status>("idle");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") {
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(
        formData.get("subject") || ""
      ),
      message: String(
        formData.get("message") || ""
      ),
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Could not send message"
        );
      }

      setStatus("success");

      form.reset();
    } catch (error) {
      console.error(error);

      setStatus("error");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.formRow}>
        <label className={styles.field}>
          <span>name</span>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className={styles.field}>
          <span>email</span>

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>subject</span>

        <input
          type="text"
          name="subject"
          placeholder="What would you like to talk about?"
          required
        />
      </label>

      <label
        className={`${styles.field} ${styles.messageField}`}
      >
        <span>message</span>

        <textarea
          name="message"
          placeholder="Tell me a little about your idea..."
          rows={7}
          required
        />
      </label>

      <div className={styles.formBottom}>
        <div className={styles.formStatus}>
          {status === "idle" && (
            <p>
              Your message will be sent directly
              to me.
            </p>
          )}

          {status === "sending" && (
            <p>sending message...</p>
          )}

          {status === "success" && (
            <p className={styles.success}>
              message sent. thank you.
            </p>
          )}

          {status === "error" && (
            <p className={styles.error}>
              something went wrong. please try
              again.
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
        >
          <span>
            {status === "sending"
              ? "sending..."
              : "send message"}
          </span>

          <span>↗</span>
        </button>
      </div>
    </form>
  );
}