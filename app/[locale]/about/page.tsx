import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About - Developer, Designer & Creative Technologist",

  description:
    "Learn more about Teynur Yuseinov, a Belgium-based developer and designer working across software development, interaction design, physical computing and creative technology.",

  keywords: [
    "Teynur Yuseinov",
    "developer Belgium",
    "designer Ghent",
    "creative technologist",
    "interaction designer",
    "software developer",
    "web developer",
    "physical computing",
    "portfolio Belgium",
  ],

  openGraph: {
    title: "About - Teynur Yuseinov",

    description:
      "Developer, designer and creative technologist working across software, interaction and physical experiences.",

    type: "profile",
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

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={`siteContainer ${styles.hero}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>{t("hero.line1")}</span>
              <span>{t("hero.line2")}</span>
              <span>{t("hero.line3")}</span>
            </h1>

            <p className={styles.heroIntro}>
              {t("hero.intro")}
            </p>
          </div>

          <div className={styles.portrait}>
            <img
              src="/images/profile.jpg"
              alt={t("hero.portraitAlt")}
            />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className={styles.introSection}>
        <div className={`siteContainer ${styles.introInner}`}>
          <div className={styles.sectionTitle}>
            <h2>{t("intro.title")}</h2>
            <Dots />
          </div>

          <p className={styles.largeText}>
            {t("intro.text")}
          </p>
        </div>
      </section>

      {/* STORY */}

      <section className={`siteContainer ${styles.storySection}`}>
        <div className={styles.storyLabel}>
          <span>01</span>

          <h2>{t("story.title")}</h2>
        </div>

        <div className={styles.storyContent}>
          <p>{t("story.paragraph1")}</p>

          <p>{t("story.paragraph2")}</p>
        </div>
      </section>

      {/* CURRENT */}

      <section className={styles.currentSection}>
        <div className={`siteContainer ${styles.currentInner}`}>
          <div className={styles.storyLabel}>
            <span>02</span>

            <h2>{t("current.title")}</h2>
          </div>

          <div className={styles.currentGrid}>
            <div className={styles.currentLead}>
              <p>{t("current.lead")}</p>
            </div>

            <div className={styles.currentText}>
              <p>{t("current.paragraph1")}</p>

              <p>{t("current.paragraph2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING STYLE */}

      <section className={`siteContainer ${styles.approachSection}`}>
        <div className={styles.sectionTitle}>
          <h2>{t("approach.title")}</h2>

          <Dots />
        </div>

        <div className={styles.approachGrid}>
          <article>
            <span>01</span>

            <h3>{t("approach.understand.title")}</h3>

            <p>
              {t("approach.understand.text")}
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>{t("approach.make.title")}</h3>

            <p>
              {t("approach.make.text")}
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>{t("approach.refine.title")}</h3>

            <p>
              {t("approach.refine.text")}
            </p>
          </article>
        </div>
      </section>

      {/* FOCUS */}

      <section className={styles.focusSection}>
        <div className={`siteContainer ${styles.focusInner}`}>
          <div
            className={`${styles.sectionTitle} ${styles.lightTitle}`}
          >
            <h2>{t("focus.title")}</h2>

            <Dots />
          </div>

          <div className={styles.focusGrid}>
            <div>
              <span>{t("focus.software.title")}</span>

              <p>
                {t("focus.software.text")}
              </p>
            </div>

            <div>
              <span>{t("focus.interaction.title")}</span>

              <p>
                {t("focus.interaction.text")}
              </p>
            </div>

            <div>
              <span>{t("focus.physical.title")}</span>

              <p>
                {t("focus.physical.text")}
              </p>
            </div>

            <div>
              <span>{t("focus.visual.title")}</span>

              <p>
                {t("focus.visual.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}