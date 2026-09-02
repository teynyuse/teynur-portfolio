import type { Metadata } from "next";
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

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`siteContainer ${styles.hero}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>

            <h1 className={styles.heroTitle}>
              <span>developer.</span>
              <span>designer.</span>
              <span>maker.</span>
            </h1>

            <p className={styles.heroIntro}>
              I work across software, interaction design and physical
              computing, combining technical development with a visual
              background in design.
            </p>
          </div>

          <div className={styles.portrait}>
            <img
              src="/images/profile.jpg"
              alt="Portrait of Teynur Yuseinov"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.introSection}>
        <div className={`siteContainer ${styles.introInner}`}>
          <div className={styles.sectionTitle}>
            <h2>who I am</h2>
            <Dots />
          </div>

          <p className={styles.largeText}>
            I started with graphic design and gradually moved into
            programming, software development and creative technology.
            That mix still defines how I work today: I care about how
            something functions, how it looks and how people experience it.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className={`siteContainer ${styles.storySection}`}>
        <div className={styles.storyLabel}>
          <span>01</span>
          <h2>background</h2>
        </div>

        <div className={styles.storyContent}>
          <p>
            My first background was visual. I worked with typography,
            layout, branding and print production before moving deeper into
            digital design and development.
          </p>

          <p>
            Programming gave me another way to create. Instead of only
            designing what something should look like, I could build how it
            behaves, how data moves through it and how people interact with it.
          </p>
        </div>
      </section>

      {/* CURRENT */}
      <section className={styles.currentSection}>
        <div className={`siteContainer ${styles.currentInner}`}>
          <div className={styles.storyLabel}>
            <span>02</span>
            <h2>today</h2>
          </div>

          <div className={styles.currentGrid}>
            <div className={styles.currentLead}>
              <p>
                Today my work sits somewhere between software development,
                database work, interaction design and creative technology.
              </p>
            </div>

            <div className={styles.currentText}>
              <p>
                Professionally, I work as an SQL Developer while continuing
                to build interactive digital and physical projects alongside
                my studies.
              </p>

              <p>
                I particularly enjoy projects where software connects to the
                physical world — interfaces, installations, sensors, embedded
                systems and experiences people can actually touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING STYLE */}
      <section className={`siteContainer ${styles.approachSection}`}>
        <div className={styles.sectionTitle}>
          <h2>how I work</h2>
          <Dots />
        </div>

        <div className={styles.approachGrid}>
          <article>
            <span>01</span>
            <h3>understand</h3>
            <p>
              I start by understanding the problem, the context and what the
              experience actually needs to achieve.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>make</h3>
            <p>
              I like turning ideas into working prototypes early instead of
              keeping everything theoretical for too long.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>refine</h3>
            <p>
              Once something works, I refine the interaction, visual details
              and technical structure until the experience feels coherent.
            </p>
          </article>
        </div>
      </section>

      {/* FOCUS */}
      <section className={styles.focusSection}>
        <div className={`siteContainer ${styles.focusInner}`}>
          <div className={`${styles.sectionTitle} ${styles.lightTitle}`}>
            <h2>what I work with</h2>
            <Dots />
          </div>

          <div className={styles.focusGrid}>
            <div>
              <span>software</span>
              <p>
                TypeScript, React, Next.js, Node.js, SQL, APIs and backend
                development.
              </p>
            </div>

            <div>
              <span>interaction</span>
              <p>
                UI design, interaction design, prototyping and digital product
                experiences.
              </p>
            </div>

            <div>
              <span>physical</span>
              <p>
                Raspberry Pi, ESP32, RFID, sensors, LEDs and interactive
                installations.
              </p>
            </div>

            <div>
              <span>visual</span>
              <p>
                Graphic design, brand identity, typography, layout and visual
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}