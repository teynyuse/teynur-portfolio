import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import ContactForm from "./ContactForm";
import CopyEmail from "@/components/CopyEmail";

import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact - Teynur Yuseinov",

  description:
    "Get in touch with Teynur Yuseinov for software development, interaction design, creative technology and digital projects.",

  openGraph: {
    title: "Contact - Teynur Yuseinov",

    description:
      "Get in touch about software, design, interactive experiences and creative technology.",

    type: "website",
  },
};

export default async function ContactPage() {
  const t =
    await getTranslations("contact");

  return (
    <main className={styles.page}>
      <section
        className={`siteContainer ${styles.hero}`}
      >
        <div className={styles.heroContent}>

          <h1 className={styles.heroTitle}>
            <span>
              {t("hero.line1")}
            </span>

            <span>
              {t("hero.line2")}
            </span>

            <span>
              {t("hero.line3")}
            </span>
          </h1>

          <p className={styles.heroIntro}>
            {t("hero.description")}
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div
          className={`siteContainer ${styles.contactLayout}`}
        >
          <aside className={styles.contactAside}>
            <div>
              <span className={styles.asideEyebrow}>
                {t("info.eyebrow")}
              </span>

              <h2>
                {t("info.title")}
              </h2>

              <p className={styles.asideIntro}>
                {t("info.description")}
              </p>
            </div>

            <div className={styles.contactMeta}>
              <div>
                <span>
                  {t("info.email")}
                </span>

                <CopyEmail variant="dark" />
              </div>

              <div>
                <span>
                  {t("info.basedIn")}
                </span>

                <p>
                  {t("info.location")}
                </p>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/in/teynuryuseinov/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/teynyuse"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>

            <p className={styles.replyText}>
              {t("info.reply")}
            </p>
          </aside>

          <ContactForm />
        </div>
      </section>

      <section className={styles.messageSection}>
        <div
          className={`siteContainer ${styles.messageInner}`}
        >
          <span>
            {t("message.label")}
          </span>

          <p>
            {t("message.text")}
          </p>
        </div>
      </section>
    </main>
  );
}