import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact — Teynur Yuseinov",
  description:
    "Get in touch with Teynur Yuseinov for software development, interaction design, creative technology and digital projects.",
  openGraph: {
    title: "Contact — Teynur Yuseinov",
    description:
      "Get in touch about software, design, interactive experiences and creative technology.",
    type: "website",
  },
};

function Dots() {
  return (
    <span className={styles.dots} aria-hidden="true">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`siteContainer ${styles.hero}`}>
        <div className={styles.heroContent}>

          <h1 className={styles.heroTitle}>
            <span>have something</span>
            <span>in mind?</span>
            <span>let&apos;s talk.</span>
          </h1>

          <p className={styles.heroIntro}>
            Whether it is a digital product, an interactive experience,
            creative technology or simply an interesting idea. Feel free to
            reach out.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contactSection}>
        <div className={`siteContainer ${styles.contactInner}`}>
          <div className={styles.sectionTitle}>
            <h2>get in touch</h2>
            <Dots />
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <span className={styles.label}>email</span>

                <a href="mailto:contact@teynuryuseinov.be">
                  contact@teynuryuseinov.be
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.label}>based in</span>

                <p>Ghent, Belgium</p>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.label}>online</span>

                <div className={styles.socialLinks}>
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
              </div>

              <p className={styles.smallText}>
                I usually reply as soon as I can.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className={styles.messageSection}>
        <div className={`siteContainer ${styles.messageInner}`}>
          <span>no perfect brief required.</span>

          <p>
            Sometimes a good project starts with nothing more than
            an idea and a conversation.
          </p>
        </div>
      </section>
    </main>
  );
}