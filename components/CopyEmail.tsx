"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

import styles from "./Footer.module.css";

type CopyEmailProps = {
  variant?: "default" | "dark";
};

export default function CopyEmail({
  variant = "default",
}: CopyEmailProps) {
  const t = useTranslations("footer");

  const [copied, setCopied] = useState(false);

  const email = "contact@teynuryuseinov.be";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={`${styles.emailCopy} ${
        variant === "dark"
          ? styles.emailCopyDark
          : ""
      }`}
      onClick={handleCopy}
      aria-label={t("copyEmail")}
    >
      <span>
        {copied ? t("copied") : email}
      </span>

      <HiOutlineClipboardDocument
        aria-hidden="true"
      />
    </button>
  );
}