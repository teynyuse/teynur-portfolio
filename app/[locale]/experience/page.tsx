/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import styles from "./Experience.module.css";

export const metadata: Metadata = {
  title: "Experience - Developer, Designer & Creative Technologist",

  description:
    "Explore the professional experience, education and technical skills of Teynur Yuseinov, a developer and designer working across software, interaction design and creative technology.",

  keywords: [
    "Teynur Yuseinov",
    "developer Belgium",
    "frontend developer",
    "full stack developer",
    "interaction designer",
    "creative technologist",
    "software developer",
    "web developer Ghent",
    "portfolio Belgium",
    "React developer",
    "Next.js developer",
    "Raspberry Pi",
    "Unreal Engine",
  ],

  openGraph: {
    title: "Experience - Teynur Yuseinov",

    description:
      "Professional experience, education and technical skills across software development, interaction design and creative technology.",

    type: "profile",
  },
};

/* =========================
   DATA
========================= */

const experience = [
  {
    key: "sqlDeveloper",
    company: "FPS Finance",

    technologies: [
      "SQL",
      "DB2",
      "DBVisualizer",
      "Data Migration",
      "Database Testing",
      "Jira",
      "Confluence",
    ],

    current: true,
  },

  {
    key: "applicationTester",
    company: "FPS Finance",

    technologies: [
      "Functional Testing",
      "SoapUI",
      "SQL",
      "DB2",
      "Jira",
      "Confluence",
    ],

    current: false,
  },

  {
    key: "webDeveloperIntern",
    company: "Techbirds / Techjane",

    technologies: [
      "Web Development",
      "Frontend",
      "Backend",
    ],

    current: false,
  },

  {
    key: "graphicIntern",
    company: "3Plus NV",

    technologies: [
      "Graphic Design",
      "Print",
      "Adobe Creative Cloud",
    ],

    current: false,
  },
] as const;

const education = [
  {
    key: "bachelor",
    school: "Artevelde University of Applied Sciences",
  },

  {
    key: "graduate",
    school: "Artevelde University of Applied Sciences",
  },

  {
    key: "secondary",
    school: "VISO Mariakerke",
  },
] as const;

const skillGroups = [
  {
    key: "development",

    skills: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "Node.js",
    ],
  },

  {
    key: "frameworks",

    skills: [
      "React",
      "Next.js",
      "Express.js",
      "Laravel",
      "Vite",
      "Tailwind CSS",
    ],
  },

  {
    key: "creativeTechnology",

    skills: [
      "Raspberry Pi",
      "ESP32",
      "RFID",
      "Arduino",
      "Unreal Engine",
      "Blueprints",
    ],
  },

  {
    key: "dataBackend",

    skills: [
      "PostgreSQL",
      "DB2",
      "REST APIs",
      "Express.js",
      "DBVisualizer",
      "SQL",
    ],
  },

  {
    key: "design",

    skills: [
      "Interaction Design",
      "UI Design",
      "Graphic Design",
      "Brand Identity",
      "Figma",
      "Adobe Creative Cloud",
    ],
  },

  {
    key: "tools",

    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Confluence",
      "VS Code",
      "WordPress",
    ],
  },
] as const;

/* =========================
   DOTS
========================= */

function Dots() {
  return (
    <span
      className={styles.dots}
      aria-hidden="true"
    >
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}

/* =========================
   PAGE
========================= */

export default async function ExperiencePage() {
  const t = await getTranslations("experience");

  const structuredData = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Teynur Yuseinov",

    url: "https://www.teynuryuseinov.be",

    jobTitle:
      "Developer, Designer & Creative Technologist",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Ghent",

      addressCountry: "BE",
    },

    knowsAbout: [
      "Software Development",
      "Web Development",
      "Interaction Design",
      "Creative Technology",
      "React",
      "Next.js",
      "Node.js",
      "Internet of Things",
      "Unreal Engine",
      "Graphic Design",
    ],

    alumniOf: {
      "@type": "CollegeOrUniversity",

      name: "Artevelde University of Applied Sciences",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ),
        }}
      />

      <main className={styles.page}>

        {/* =========================
            HERO
        ========================= */}

        <section
          className={`siteContainer ${styles.hero}`}
        >
          <div className={styles.heroContent}>
            <h1>
              {t("hero.line1")}
              <br />

              {t("hero.line2")}
              <br />

              {t("hero.line3")}
            </h1>

            <p className={styles.intro}>
              {t("hero.description")}
            </p>
          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}

        <section className={styles.experienceSection}>
          <div
            className={`siteContainer ${styles.sectionInner}`}
          >
            <div className={styles.sectionTitle}>
              <h2>
                {t("sections.experience")}
              </h2>

              <Dots />
            </div>

            <div className={styles.timeline}>
              {experience.map((item) => (
                <article
                  className={styles.timelineItem}
                  key={`${item.company}-${item.key}`}
                >
                  <div className={styles.period}>
                    <span>
                      {t(
                        `jobs.${item.key}.period`
                      )}
                    </span>

                    {item.current && (
                      <span className={styles.current}>
                        {t("labels.current")}
                      </span>
                    )}
                  </div>

                  <div
                    className={styles.experienceHeading}
                  >
                    <h3>{item.company}</h3>

                    <p className={styles.role}>
                      {t(
                        `jobs.${item.key}.role`
                      )}
                    </p>

                    <p className={styles.location}>
                      {t(
                        `jobs.${item.key}.location`
                      )}
                    </p>
                  </div>

                  <div
                    className={
                      styles.experienceDescription
                    }
                  >
                    <p>
                      {t(
                        `jobs.${item.key}.description`
                      )}
                    </p>

                    <div className={styles.tags}>
                      {item.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            EDUCATION
        ========================= */}

        <section className={styles.educationSection}>
          <div
            className={`siteContainer ${styles.sectionInner}`}
          >
            <div
              className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}
            >
              <h2>
                {t("sections.education")}
              </h2>

              <Dots />
            </div>

            <div className={styles.educationGrid}>
              {education.map((item) => (
                <article
                  className={styles.educationCard}
                  key={`${item.school}-${item.key}`}
                >
                  <p
                    className={
                      styles.educationPeriod
                    }
                  >
                    {t(
                      `education.${item.key}.period`
                    )}
                  </p>

                  <h3>{item.school}</h3>

                  <p className={styles.programme}>
                    {t(
                      `education.${item.key}.programme`
                    )}
                  </p>

                  <p
                    className={
                      styles.educationDescription
                    }
                  >
                    {t(
                      `education.${item.key}.description`
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            TOOLBOX
        ========================= */}

        <section className={styles.skillsSection}>
          <div
            className={`siteContainer ${styles.sectionInner}`}
          >
            <div className={styles.sectionTitle}>
              <h2>
                {t("sections.toolbox")}
              </h2>

              <Dots />
            </div>

            <div className={styles.skillsIntro}>
              <p>
                {t("toolbox.intro")}
              </p>
            </div>

            <div className={styles.skillsGrid}>
              {skillGroups.map((group) => (
                <article
                  className={styles.skillGroup}
                  key={group.key}
                >
                  <h3>
                    {t(
                      `toolbox.${group.key}`
                    )}
                  </h3>

                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}