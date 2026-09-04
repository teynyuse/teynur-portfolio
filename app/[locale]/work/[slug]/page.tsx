/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import projects from "@/data/projects.json";

import styles from "./ProjectDetail.module.css";

type Locale = "en" | "nl";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

/* ========================================
   METADATA
======================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const currentLocale: Locale =
    locale === "nl" ? "nl" : "en";

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return {};
  }

  const projectUrl =
    `https://www.teynuryuseinov.be/${currentLocale}/work/${project.slug}`;

  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `https://www.teynuryuseinov.be${project.image}`
    : undefined;

  return {
    title:
      project.seo.title[currentLocale],

    description:
      project.seo.description[currentLocale],

    keywords:
      project.seo.keywords[currentLocale],

    alternates: {
      canonical: projectUrl,

      languages: {
        en:
          `https://www.teynuryuseinov.be/en/work/${project.slug}`,

        nl:
          `https://www.teynuryuseinov.be/nl/work/${project.slug}`,
      },
    },

    openGraph: {
      title:
        project.seo.title[currentLocale],

      description:
        project.seo.description[currentLocale],

      url: projectUrl,

      type: "article",

      siteName: "Teynur Yuseinov",

      images: imageUrl
        ? [
            {
              url: imageUrl,

              alt:
                `${project.title} — ${project.subtitle[currentLocale]}`,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title:
        project.seo.title[currentLocale],

      description:
        project.seo.description[currentLocale],

      images: imageUrl
        ? [imageUrl]
        : [],
    },
  };
}

/* ========================================
   PAGE
======================================== */

export default async function ProjectPage({
  params,
}: Props) {
  const { locale, slug } = await params;

  const currentLocale: Locale =
    locale === "nl" ? "nl" : "en";

  const t = await getTranslations({
    locale,
    namespace: "work.detail",
  });

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  const projectUrl =
    `https://www.teynuryuseinov.be/${currentLocale}/work/${project.slug}`;

  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `https://www.teynuryuseinov.be${project.image}`
    : undefined;

  const projectSchema = {
    "@context": "https://schema.org",

    "@type": "CreativeWork",

    "@id":
      `${projectUrl}#project`,

    name:
      project.title,

    headline:
      project.subtitle[currentLocale],

    description:
      project.overview[currentLocale],

    url:
      projectUrl,

    inLanguage:
      currentLocale === "nl"
        ? "nl-BE"
        : "en-BE",

    image:
      imageUrl,

    dateCreated:
      String(project.year),

    creator: {
      "@type": "Person",

      "@id":
        "https://www.teynuryuseinov.be/#person",

      name:
        "Teynur Yuseinov",

      url:
        "https://www.teynuryuseinov.be",
    },

    author: {
      "@type": "Person",

      "@id":
        "https://www.teynuryuseinov.be/#person",

      name:
        "Teynur Yuseinov",
    },

    keywords: [
      ...project.tag,
      ...project.technologies,
    ],

    about:
      project.technologies.map(
        (technology) => ({
          "@type": "Thing",

          name: technology,
        })
      ),

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id":
        projectUrl,
    },
  };

  return (
    <main className={styles.page}>
      {/* ========================================
          STRUCTURED DATA
      ======================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectSchema
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* ========================================
          HERO
      ======================================== */}

      <section
        className={`siteContainer ${styles.hero}`}
      >
        <div className={styles.heading}>
          <div>
            <h1>
              {project.title}
            </h1>

            <p
              className={styles.subtitle}
            >
              {
                project.subtitle[
                  currentLocale
                ]
              }
            </p>
          </div>

          <p className={styles.year}>
            {project.year}
          </p>
        </div>
      </section>

      {/* ========================================
          COVER
      ======================================== */}

      <section
        className={styles.coverSection}
      >
        <div
          className={styles.coverInner}
        >
          <div
            className={styles.cover}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} – ${project.subtitle[currentLocale]}`}
              />
            ) : (
              <div
                className={
                  styles.placeholder
                }
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </section>

      {/* ========================================
          OVERVIEW
      ======================================== */}

      <section
        className={`siteContainer ${styles.overviewSection}`}
      >
        <div
          className={styles.projectInfo}
        >
          <div
            className={styles.infoItem}
          >
            <span>
              {t("client")}
            </span>

            <p>
              {project.details.client}
            </p>
          </div>

          <div
            className={styles.infoItem}
          >
            <span>
              {t("role")}
            </span>

            <p>
              {
                project.details.role[
                  currentLocale
                ]
              }
            </p>
          </div>

          <div
            className={styles.infoItem}
          >
            <span>
              {t("type")}
            </span>

            <p>
              {
                project.details.type[
                  currentLocale
                ]
              }
            </p>
          </div>

          <div
            className={styles.infoItem}
          >
            <span>
              {t("year")}
            </span>

            <p>
              {project.year}
            </p>
          </div>

          {project.details.status && (
            <div
              className={styles.infoItem}
            >
              <span>
                {t("status")}
              </span>

              <p>
                {
                  project.details.status[
                    currentLocale
                  ]
                }
              </p>
            </div>
          )}

          {project.tag.length > 0 && (
            <div
              className={styles.infoItem}
            >
              <span>
                {t("category")}
              </span>

              <p>
                {project.tag.join(" / ")}
              </p>
            </div>
          )}
        </div>

        <div
          className={styles.overview}
        >
          <p>
            {
              project.overview[
                currentLocale
              ]
            }
          </p>
        </div>
      </section>

      {/* ========================================
          TECHNOLOGIES
      ======================================== */}

      {project.technologies.length >
        0 && (
        <section
          className={`siteContainer ${styles.technologiesSection}`}
        >
          <div
            className={styles.sectionLabel}
          >
            <span>
              01
            </span>

            <h2>
              {t("technologies")}
            </h2>
          </div>

          <div
            className={
              styles.technologyList
            }
          >
            {project.technologies.map(
              (technology) => (
                <span
                  key={technology}
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>
      )}

      {/* ========================================
          ABOUT
      ======================================== */}

      <section
        className={styles.contentSection}
      >
        <div
          className={`siteContainer ${styles.contentInner}`}
        >
          <div
            className={styles.sectionLabel}
          >
            <span>
              {project.technologies.length >
              0
                ? "02"
                : "01"}
            </span>

            <h2>
              {t("about")}
            </h2>
          </div>

          <div
            className={styles.largeText}
          >
            <p>
              {
                project.content.intro[
                  currentLocale
                ]
              }
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          CHALLENGE + APPROACH
      ======================================== */}

      {(project.content.challenge ||
        project.content.approach) && (
        <section
          className={`siteContainer ${styles.twoColumnSection}`}
        >
          {project.content
            .challenge && (
            <article
              className={
                styles.contentBlock
              }
            >
              <div
                className={
                  styles.sectionLabel
                }
              >
                <span>
                  {project.technologies
                    .length > 0
                    ? "03"
                    : "02"}
                </span>

                <h2>
                  {t("challenge")}
                </h2>
              </div>

              <p>
                {
                  project.content
                    .challenge[
                    currentLocale
                  ]
                }
              </p>
            </article>
          )}

          {project.content
            .approach && (
            <article
              className={
                styles.contentBlock
              }
            >
              <div
                className={
                  styles.sectionLabel
                }
              >
                <span>
                  {project.technologies
                    .length > 0
                    ? "04"
                    : "03"}
                </span>

                <h2>
                  {t("approach")}
                </h2>
              </div>

              <p>
                {
                  project.content
                    .approach[
                    currentLocale
                  ]
                }
              </p>
            </article>
          )}
        </section>
      )}

      {/* ========================================
          RESULT
      ======================================== */}

      {project.content.result && (
        <section
          className={
            styles.resultSection
          }
        >
          <div
            className={`siteContainer ${styles.resultInner}`}
          >
            <div
              className={
                styles.sectionLabel
              }
            >
              <span>
                {project.technologies
                  .length > 0
                  ? "05"
                  : "04"}
              </span>

              <h2>
                {t("result")}
              </h2>
            </div>

            <div
              className={styles.largeText}
            >
              <p>
                {
                  project.content
                    .result[
                    currentLocale
                  ]
                }
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ========================================
          GALLERY
      ======================================== */}

      {project.gallery.length > 0 && (
        <section
          className={
            styles.gallerySection
          }
        >
          <div
            className={`siteContainer ${styles.galleryInner}`}
          >
            <div
              className={
                styles.sectionLabel
              }
            >
              <span>
                {project.technologies
                  .length > 0
                  ? "06"
                  : "05"}
              </span>

              <h2>
                {t("gallery")}
              </h2>
            </div>

            <div
              className={styles.gallery}
            >
              {project.gallery.map(
                (image, index) => (
                  <figure
                    key={`${image.src}-${index}`}
                    className={
                      index % 3 === 0
                        ? styles.galleryLarge
                        : styles.gallerySmall
                    }
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                    />
                  </figure>
                )
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}