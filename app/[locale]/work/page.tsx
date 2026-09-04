import type { Metadata } from "next";
import {
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import SectionTitle from "@/components/SectionTitle";
import WorkGrid from "@/components/WorkGrid";

import styles from "./WorkPage.module.css";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "nl") {
    return {
      title:
        "Projecten - Webdevelopment & Interactieve Ervaringen",

      description:
        "Bekijk projecten van Teynur Yuseinov, webontwikkelaar en creative developer uit Gent. Werk rond webdevelopment, React, Next.js, interactiedesign, software en interactieve technologie.",

      keywords: [
        "Teynur Yuseinov projecten",
        "webdevelopment Gent",
        "web developer Gent portfolio",
        "React projecten Gent",
        "Next.js projecten Gent",
        "creative developer Gent",
        "interactiedesign Gent",
        "software development Gent",
        "webontwikkelaar Gent portfolio",
      ],

      alternates: {
        canonical:
          "https://www.teynuryuseinov.be/nl/work",

        languages: {
          en: "https://www.teynuryuseinov.be/en/work",
          nl: "https://www.teynuryuseinov.be/nl/work",
        },
      },

      openGraph: {
        title:
          "Projecten - Teynur Yuseinov",

        description:
          "Webdevelopment, software, interaction design en creatieve technologie door Teynur Yuseinov uit Gent, België.",

        url:
          "https://www.teynuryuseinov.be/nl/work",

        type: "website",
      },
    };
  }

  return {
    title:
      "Projects - Web Development & Interactive Experiences",

    description:
      "Explore projects by Teynur Yuseinov, a web developer and creative developer based in Ghent. Work across web development, React, Next.js, interaction design, software and interactive technology.",

    keywords: [
      "Teynur Yuseinov projects",
      "web development Ghent",
      "web developer Ghent portfolio",
      "React projects Ghent",
      "Next.js projects Ghent",
      "creative developer Ghent",
      "interaction design Ghent",
      "software development Ghent",
    ],

    alternates: {
      canonical:
        "https://www.teynuryuseinov.be/en/work",

      languages: {
        en: "https://www.teynuryuseinov.be/en/work",
        nl: "https://www.teynuryuseinov.be/nl/work",
      },
    },

    openGraph: {
      title:
        "Projects - Teynur Yuseinov",

      description:
        "Web development, software, interaction design and creative technology by Teynur Yuseinov, based in Ghent, Belgium.",

      url:
        "https://www.teynuryuseinov.be/en/work",

      type: "website",
    },
  };
}

export default async function WorkPage({
  params,
}: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("work.hero");

  return (
    <main className={styles.page}>
      <section
        className={`siteContainer ${styles.intro}`}
      >
        <SectionTitle title={t("title")} />

        <p className={styles.lead}>
          {t("description")}
        </p>
      </section>

      <section className={styles.projectsSection}>
        <div
          className={`siteContainer ${styles.projectsInner}`}
        >
          <WorkGrid />
        </div>
      </section>
    </main>
  );
}