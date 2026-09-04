"use client";

import {
  FormEvent,
  useState,
} from "react";
import { useTranslations } from "next-intl";

import styles from "./Contact.module.css";

type Status =
  | "idle"
  | "sending"
  | "success"
  | "error";

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [status, setStatus] =
    useState<Status>("idle");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(
        formData.get("name") || ""
      ),
      email: String(
        formData.get("email") || ""
      ),
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
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const result =
          await response.json();

        throw new Error(
          result.error ||
            "Could not send message"
        );
      }

      form.reset();

      setStatus("success");
    } catch (error) {
      console.error(error);

      setStatus("error");
    }
  };

  return (
    <div className={styles.formWrap}>
      {status === "success" && (
        <div
          className={styles.successBanner}
          role="status"
          aria-live="polite"
        >
          <div className={styles.statusIcon}>
            ✓
          </div>

          <div>
            <strong>
              {t("successTitle")}
            </strong>

            <p>{t("success")}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div
          className={styles.errorBanner}
          role="alert"
        >
          <div className={styles.statusIcon}>
            !
          </div>

          <div>
            <strong>
              {t("errorTitle")}
            </strong>

            <p>{t("error")}</p>
          </div>
        </div>
      )}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <div className={styles.formTop}>
          <span className={styles.formEyebrow}>
            {t("eyebrow")}
          </span>

          <h2>{t("title")}</h2>

          <p>{t("description")}</p>
        </div>

        <div className={styles.formRow}>
          <label className={styles.field}>
            <span>{t("name")}</span>

            <input
              type="text"
              name="name"
              placeholder={t(
                "namePlaceholder"
              )}
              autoComplete="name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>{t("email")}</span>

            <input
              type="email"
              name="email"
              placeholder={t(
                "emailPlaceholder"
              )}
              autoComplete="email"
              required
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>{t("subject")}</span>

          <input
            type="text"
            name="subject"
            placeholder={t(
              "subjectPlaceholder"
            )}
            required
          />
        </label>

        <label className={styles.field}>
          <span>{t("message")}</span>

          <textarea
            name="message"
            placeholder={t(
              "messagePlaceholder"
            )}
            rows={7}
            required
          />
        </label>

        <div className={styles.formBottom}>
          <p>
            {status === "sending"
              ? t("sendingMessage")
              : t("hint")}
          </p>

          <button
            type="submit"
            disabled={status === "sending"}
          >
            <span>
              {status === "sending"
                ? t("sending")
                : t("send")}
            </span>

            <span aria-hidden="true">
              ↗
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}