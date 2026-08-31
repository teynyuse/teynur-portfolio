import type { Metadata } from "next";
import styles from "./Experience.module.css";

export const metadata: Metadata = {
  title: "Experience — Developer, Designer & Creative Technologist",
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
    title: "Experience — Teynur Yuseinov",
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
    period: "2026 — present",
    company: "FPS Finance",
    role: "SQL Developer",
    location: "Brussels, Belgium",
    description:
      "Working on SQL-driven data analysis, database updates and migration-related tasks within a large government IT environment. My work includes writing and validating SQL scripts, analysing DB2 data, testing database changes and supporting application and data migration processes.",
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
    period: "2025 — 2026",
    company: "FPS Finance",
    role: "Application Tester",
    location: "Brussels, Belgium",
    description:
      "Started at FPS Finance as an application tester, validating financial applications through functional testing, test scenarios, API testing and database checks before moving into a more SQL-focused development role.",
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
    period: "2024",
    company: "Techbirds / Techjane",
    role: "Web Developer Intern",
    location: "Belgium",
    description:
      "Worked in a development environment where I gained practical experience building and maintaining digital products and translating designs into working web interfaces.",
    technologies: [
      "Web Development",
      "Frontend",
      "Backend",
    ],
    current: false,
  },
  {
    period: "2022",
    company: "3Plus NV",
    role: "Graphic Designer & Print Production Intern",
    location: "Belgium",
    description:
      "Worked with graphic production, print preparation and visual design. This experience gave me a strong foundation in typography, layout, colour and production-oriented design.",
    technologies: [
      "Graphic Design",
      "Print",
      "Adobe Creative Cloud",
    ],
    current: false,
  },
];

const education = [
  {
    period: "2025 — present",
    school: "Artevelde University of Applied Sciences",
    programme: "Bachelor Applied Computer Science",
    description:
      "Continuing my studies while working, with a focus on software development, interactive applications, IoT and creative technology.",
  },
  {
    period: "2022 — 2024",
    school: "Artevelde University of Applied Sciences",
    programme: "Graduate Degree in Programming",
    description:
      "A practice-oriented programming programme covering frontend and backend development, databases, APIs and full-stack application development.",
  },
  {
    period: "2015 — 2021",
    school: "VISO Mariakerke",
    programme: "Graphic Design & Print Production",
    description:
      "Built my visual foundation in graphic design, typography, prepress, print production and digital communication.",
  },
];

const skillGroups = [
  {
    title: "development",
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
    title: "frameworks",
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
    title: "creative technology",
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
    title: "data & backend",
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
    title: "design",
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
    title: "tools",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Confluence",
      "VS Code",
      "WordPress",
    ],
  },
];

/* =========================
   DOTS
========================= */

function Dots() {
  return (
    <span className={styles.dots} aria-hidden="true">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
}

/* =========================
   PAGE
========================= */

export default function ExperiencePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Teynur Yuseinov",
    url: "https://www.teynuryuseinov.be",
    jobTitle: "Developer, Designer & Creative Technologist",
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
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className={styles.page}>
        {/* =========================
            HERO
        ========================= */}

        <section className={`siteContainer ${styles.hero}`}>
          <div className={styles.heroContent}>

            <h1>
              from design
              <br />
              to development
              <br />
              and beyond.
            </h1>

            <p className={styles.intro}>
              My background started in graphic design and gradually
              moved into software development, interaction design and
              creative technology. Today I like working where those
              disciplines meet.
            </p>
          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}

        <section className={styles.experienceSection}>
          <div className={`siteContainer ${styles.sectionInner}`}>
            <div className={styles.sectionTitle}>
              <h2>experience</h2>
              <Dots />
            </div>

            <div className={styles.timeline}>
              {experience.map((item) => (
                <article
                  className={styles.timelineItem}
                  key={`${item.company}-${item.period}`}
                >
                  <div className={styles.period}>
                    <span>{item.period}</span>

                    {item.current && (
                      <span className={styles.current}>
                        current
                      </span>
                    )}
                  </div>

                  <div className={styles.experienceHeading}>
                    <h3>{item.company}</h3>

                    <p className={styles.role}>
                      {item.role}
                    </p>

                    <p className={styles.location}>
                      {item.location}
                    </p>
                  </div>

                  <div className={styles.experienceDescription}>
                    <p>{item.description}</p>

                    <div className={styles.tags}>
                      {item.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
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
          <div className={`siteContainer ${styles.sectionInner}`}>
            <div
              className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}
            >
              <h2>education</h2>
              <Dots />
            </div>

            <div className={styles.educationGrid}>
              {education.map((item) => (
                <article
                  className={styles.educationCard}
                  key={`${item.school}-${item.period}`}
                >
                  <p className={styles.educationPeriod}>
                    {item.period}
                  </p>

                  <h3>{item.school}</h3>

                  <p className={styles.programme}>
                    {item.programme}
                  </p>

                  <p className={styles.educationDescription}>
                    {item.description}
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
          <div className={`siteContainer ${styles.sectionInner}`}>
            <div className={styles.sectionTitle}>
              <h2>toolbox</h2>
              <Dots />
            </div>

            <div className={styles.skillsIntro}>
              <p>
                I work across software, design and physical
                computing. The tools change depending on the
                project - the goal stays the same: making something
                that works and feels considered.
              </p>
            </div>

            <div className={styles.skillsGrid}>
              {skillGroups.map((group) => (
                <article
                  className={styles.skillGroup}
                  key={group.title}
                >
                  <h3>{group.title}</h3>

                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
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