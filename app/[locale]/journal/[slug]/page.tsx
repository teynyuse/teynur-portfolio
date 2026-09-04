import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTranslations,
} from "next-intl/server";

import { Link } from "@/i18n/navigation";
import journals from "@/data/journals.json";

import styles from "./JournalDetail.module.css";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

/* =========================
   SEO
========================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const journal = journals.find(
    (journal) => journal.slug === slug
  );

  if (!journal) {
    return {};
  }

  return {
    title: journal.seo.title,

    description: journal.seo.description,

    keywords: journal.seo.keywords,

    openGraph: {
      title: journal.seo.title,

      description: journal.seo.description,

      type: "article",

      publishedTime: journal.date,

      images: journal.image
        ? [
            {
              url: journal.image,
              alt: journal.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title: journal.seo.title,

      description: journal.seo.description,

      images: journal.image
        ? [journal.image]
        : [],
    },
  };
}

/* =========================
   PAGE
========================= */

export default async function JournalDetailPage({
  params,
}: Props) {
  const { locale, slug } = await params;

  const t = await getTranslations({
    locale,
    namespace: "journal.detail",
  });

  const journal = journals.find(
    (journal) => journal.slug === slug
  );

  if (!journal) {
    notFound();
  }

  const currentIndex = journals.findIndex(
    (item) => item.slug === slug
  );

  const nextJournal =
    journals[(currentIndex + 1) % journals.length];

  const readingMinutes =
    estimateReadingTime(journal);

  return (
    <main className={styles.page}>

      {/* HERO */}

      <header
        className={`siteContainer ${styles.hero}`}
      >
        <div className={styles.meta}>
          <span>
            {journal.category}
          </span>

          <span>·</span>

          <time dateTime={journal.date}>
            {formatDate(
              journal.date,
              locale
            )}
          </time>
        </div>

        <h1>
          {journal.title}
        </h1>

        <p className={styles.excerpt}>
          {journal.excerpt}
        </p>
      </header>

      {/* COVER */}

      {journal.image && (
        <section className={styles.coverSection}>
          <div className={styles.coverInner}>
            <div className={styles.cover}>
              <img
                src={journal.image}
                alt={journal.title}
              />
            </div>
          </div>
        </section>
      )}

      {/* ARTICLE */}

      <article className={styles.article}>
        <div className={styles.articleMeta}>
          <span>
            {t("label")}
          </span>

          <span>
            {t("readingTime", {
              minutes: readingMinutes,
            })}
          </span>
        </div>

        <div className={styles.readingColumn}>
          <p className={styles.introduction}>
            {journal.content.intro}
          </p>

          {journal.content.sections.map(
            (section, index) => (
              <section
                className={styles.articleSection}
                key={`${section.heading}-${index}`}
              >
                <div
                  className={
                    styles.sectionNumber
                  }
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <h2>
                  {section.heading}
                </h2>

                {section.paragraphs.map(
                  (
                    paragraph,
                    paragraphIndex
                  ) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  )
                )}

                {index === 0 &&
                  journal.content.quote && (
                    <blockquote>
                      {journal.content.quote}
                    </blockquote>
                  )}
              </section>
            )
          )}

          {journal.content.closing && (
            <p className={styles.closing}>
              {journal.content.closing}
            </p>
          )}
        </div>
      </article>

      {/* ARTICLE FOOTER */}

      <section className={styles.articleFooter}>
        <div
          className={`siteContainer ${styles.articleFooterInner}`}
        >
          <Link
            href="/journal"
            className={styles.backLink}
          >
            ← {t("back")}
          </Link>

          {nextJournal &&
            nextJournal.slug !==
              journal.slug && (
              <Link
                href={`/journal/${nextJournal.slug}`}
                className={styles.nextArticle}
              >
                <span>
                  {t("nextArticle")}
                </span>

                <strong>
                  {nextJournal.title}
                </strong>

                <span
                  className={styles.arrow}
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            )}
        </div>
      </section>
    </main>
  );
}

/* =========================
   DATE
========================= */

function formatDate(
  date: string,
  locale: string
) {
  return new Intl.DateTimeFormat(
    locale === "nl"
      ? "nl-BE"
      : "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }
  ).format(new Date(date));
}

/* =========================
   READING TIME
========================= */

function estimateReadingTime(
  journal: (typeof journals)[number]
) {
  const words = [
    journal.content.intro,
    journal.content.quote ?? "",
    journal.content.closing ?? "",
    ...journal.content.sections.flatMap(
      (section) =>
        section.paragraphs
    ),
  ]
    .join(" ")
    .trim()
    .split(/\s+/).length;

  return Math.max(
    1,
    Math.ceil(words / 220)
  );
}