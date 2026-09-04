/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import styles from "./Experience.module.css";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

/* =========================
   METADATA
========================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "nl") {
    return {
      title:
        "Ervaring - Web- & Softwareontwikkelaar in Gent",

      description:
        "Bekijk de professionele ervaring, opleiding en technische vaardigheden van Teynur Yuseinov, web- en softwareontwikkelaar uit Gent, België. Ervaring met SQL, React, Next.js, databases, webontwikkeling en interactieve technologie.",

      keywords: [
        "Teynur Yuseinov",
        "webontwikkelaar Gent",
        "softwareontwikkelaar Gent",
        "SQL developer België",
        "SQL ontwikkelaar",
        "React developer Gent",
        "Next.js developer Gent",
        "frontendontwikkeling",
        "webontwikkeling Gent",
        "DB2",
        "TypeScript",
        "Node.js",
        "interactiedesign",
        "creatieve technologie",
      ],

      alternates: {
        canonical:
          "https://www.teynuryuseinov.be/nl/experience",

        languages: {
          en:
            "https://www.teynuryuseinov.be/en/experience",

          nl:
            "https://www.teynuryuseinov.be/nl/experience",
        },
      },

      openGraph: {
        title:
          "Ervaring - Teynur Yuseinov",

        description:
          "Professionele ervaring, opleiding en technische vaardigheden van Teynur Yuseinov op het gebied van webontwikkeling, software, SQL, databases en interactieve technologie.",

        url:
          "https://www.teynuryuseinov.be/nl/experience",

        type: "profile",
      },
    };
  }

  return {
    title:
      "Experience - Web & Software Developer in Ghent",

    description:
      "Explore the professional experience, education and technical skills of Teynur Yuseinov, a web and software developer based in Ghent, Belgium. Experience with SQL, React, Next.js, databases, web development and interactive technology.",

    keywords: [
      "Teynur Yuseinov",
      "web developer Ghent",
      "software developer Ghent",
      "SQL developer Belgium",
      "React developer Ghent",
      "Next.js developer Ghent",
      "frontend developer Ghent",
      "web development Ghent",
      "DB2",
      "TypeScript",
      "Node.js",
      "interaction design",
      "creative technology",
    ],

    alternates: {
      canonical:
        "https://www.teynuryuseinov.be/en/experience",

      languages: {
        en:
          "https://www.teynuryuseinov.be/en/experience",

        nl:
          "https://www.teynuryuseinov.be/nl/experience",
      },
    },

    openGraph: {
      title:
        "Experience - Teynur Yuseinov",

      description:
        "Professional experience, education and technical skills across web development, software, SQL, databases and interactive technology.",

      url:
        "https://www.teynuryuseinov.be/en/experience",

      type: "profile",
    },
  };
}

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
    school:
      "Artevelde University of Applied Sciences",
  },

  {
    key: "graduate",
    school:
      "Artevelde University of Applied Sciences",
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

export default async function ExperiencePage({
  params,
}: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations(
    "experience"
  );

  return (
    <main className={styles.page}>
      {/* =========================
          HERO
      ========================= */}

      <section
        className={`siteContainer ${styles.hero}`}
      >
        <div
          className={styles.heroContent}
        >
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

      <section
        className={
          styles.experienceSection
        }
      >
        <div
          className={`siteContainer ${styles.sectionInner}`}
        >
          <div
            className={styles.sectionTitle}
          >
            <h2>
              {t(
                "sections.experience"
              )}
            </h2>

            <Dots />
          </div>

          <div className={styles.timeline}>
            {experience.map(
              (item) => (
                <article
                  className={
                    styles.timelineItem
                  }
                  key={`${item.company}-${item.key}`}
                >
                  <div
                    className={
                      styles.period
                    }
                  >
                    <span>
                      {t(
                        `jobs.${item.key}.period`
                      )}
                    </span>

                    {item.current && (
                      <span
                        className={
                          styles.current
                        }
                      >
                        {t(
                          "labels.current"
                        )}
                      </span>
                    )}
                  </div>

                  <div
                    className={
                      styles.experienceHeading
                    }
                  >
                    <h3>
                      {item.company}
                    </h3>

                    <p
                      className={
                        styles.role
                      }
                    >
                      {t(
                        `jobs.${item.key}.role`
                      )}
                    </p>

                    <p
                      className={
                        styles.location
                      }
                    >
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

                    <div
                      className={
                        styles.tags
                      }
                    >
                      {item.technologies.map(
                        (
                          technology
                        ) => (
                          <span
                            key={
                              technology
                            }
                          >
                            {
                              technology
                            }
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}

      <section
        className={
          styles.educationSection
        }
      >
        <div
          className={`siteContainer ${styles.sectionInner}`}
        >
          <div
            className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}
          >
            <h2>
              {t(
                "sections.education"
              )}
            </h2>

            <Dots />
          </div>

          <div
            className={
              styles.educationGrid
            }
          >
            {education.map(
              (item) => (
                <article
                  className={
                    styles.educationCard
                  }
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

                  <h3>
                    {item.school}
                  </h3>

                  <p
                    className={
                      styles.programme
                    }
                  >
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
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================
          TOOLBOX
      ========================= */}

      <section
        className={styles.skillsSection}
      >
        <div
          className={`siteContainer ${styles.sectionInner}`}
        >
          <div
            className={styles.sectionTitle}
          >
            <h2>
              {t(
                "sections.toolbox"
              )}
            </h2>

            <Dots />
          </div>

          <div
            className={styles.skillsIntro}
          >
            <p>
              {t("toolbox.intro")}
            </p>
          </div>

          <div
            className={styles.skillsGrid}
          >
            {skillGroups.map(
              (group) => (
                <article
                  className={
                    styles.skillGroup
                  }
                  key={group.key}
                >
                  <h3>
                    {t(
                      `toolbox.${group.key}`
                    )}
                  </h3>

                  <ul>
                    {group.skills.map(
                      (skill) => (
                        <li key={skill}>
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}