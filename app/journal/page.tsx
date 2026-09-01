/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import journals from "@/data/journals.json";
import styles from "./JournalPage.module.css";

export const metadata: Metadata = {
  title: "Journal - Teynur Yuseinov",
  description:
    "Notes, reflections and stories about software development, interaction design, creative technology and building digital and physical experiences.",
  keywords: [
    "Teynur Yuseinov",
    "developer journal",
    "software development",
    "interaction design",
    "creative technology",
    "web development",
    "portfolio journal",
    "Belgium developer",
  ],
  openGraph: {
    title: "Journal - Teynur Yuseinov",
    description:
      "Notes and reflections about software, design, interactive experiences and creative technology.",
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

export default function JournalPage() {
  const sortedJournals = [...journals].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  const [featured, ...rest] = sortedJournals;

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={`siteContainer ${styles.hero}`}>
        <div className={styles.heroContent}>

          <h1 className={styles.title}>
            thoughts from
            <br />
            the things
            <br />
            I make.
          </h1>

          <p className={styles.intro}>
            Notes about software, design, creative technology and
            what I learn while building things.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className={styles.featuredSection}>
          <div className={`siteContainer ${styles.featuredInner}`}>
            <div className={styles.sectionTitle}>
              <h2>latest entry</h2>
              <Dots />
            </div>

            <Link
              href={`/journal/${featured.slug}`}
              className={styles.featuredCard}
            >
              <div className={styles.featuredImage}>
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                  />
                ) : (
                  <div className={styles.imagePlaceholder} />
                )}
              </div>

              <div className={styles.featuredContent}>
                <div className={styles.meta}>
                  <span>{featured.category}</span>
                  <span>{formatDate(featured.date)}</span>
                </div>

                <h3>{featured.title}</h3>

                <p>{featured.excerpt}</p>

                <span className={styles.readMore}>
                  read entry →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ARCHIVE */}
      <section className={`siteContainer ${styles.archiveSection}`}>
        <div className={styles.sectionTitle}>
          <h2>all entries</h2>
          <Dots />
        </div>

        <div className={styles.archive}>
          {rest.map((journal, index) => (
            <Link
              key={journal.slug}
              href={`/journal/${journal.slug}`}
              className={styles.archiveItem}
            >
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className={styles.archiveMain}>
                <div className={styles.archiveMeta}>
                  <span>{journal.category}</span>
                  <span>{formatDate(journal.date)}</span>
                </div>

                <h3>{journal.title}</h3>

                <p>{journal.excerpt}</p>
              </div>

              <span className={styles.arrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BOTTOM TEXT */}
      <section className={styles.bottomSection}>
        <div className={`siteContainer ${styles.bottomInner}`}>
          <p>
            A place for things that do not necessarily belong in
            a case study — observations, lessons and notes from
            the work behind the work.
          </p>
        </div>
      </section>
    </main>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}