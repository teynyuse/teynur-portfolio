import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";

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
        "Teynur Yuseinov - Webontwikkelaar & Softwareontwikkelaar in Gent",

      description:
        "Portfolio van Teynur Yuseinov, webontwikkelaar en Softwareontwikkelaar uit Gent, België. Gespecialiseerd in React, Next.js, TypeScript, softwareontwikkeling, interactiedesign en creatieve technologie.",

      keywords: [
        "Teynur Yuseinov",
        "webontwikkelaar Gent",
        "web developer Gent",
        "developer Gent",
        "software developer Gent",
        "frontend developer Gent",
        "React developer Gent",
        "Next.js developer Gent",
        "creative developer Gent",
        "softwareontwikkelaar",
      ],

      alternates: {
        canonical:
          "https://www.teynuryuseinov.be/nl",

        languages: {
          en: "https://www.teynuryuseinov.be/en",
          nl: "https://www.teynuryuseinov.be/nl",
        },
      },

      openGraph: {
        title:
          "Teynur Yuseinov - Webontwikkelaar in Gent",

        description:
          "Webdevelopment, software, interactiedesign en creatieve technologie door Teynur Yuseinov uit Gent, België.",

        url:
          "https://www.teynuryuseinov.be/nl",

        type: "website",
      },
    };
  }

  return {
    title:
      "Teynur Yuseinov - Web Developer & Software Developer in Ghent",

    description:
      "Portfolio of Teynur Yuseinov, a web developer and software developer based in Ghent, Belgium. Working with React, Next.js, TypeScript, software development, interaction design and creative technology.",

    keywords: [
      "Teynur Yuseinov",
      "web developer Ghent",
      "developer Ghent",
      "software developer Ghent",
      "frontend developer Ghent",
      "React developer Ghent",
      "Next.js developer Ghent",
      "creative developer Ghent",
      "web developer Belgium",
    ],

    alternates: {
      canonical:
        "https://www.teynuryuseinov.be/en",

      languages: {
        en: "https://www.teynuryuseinov.be/en",
        nl: "https://www.teynuryuseinov.be/nl",
      },
    },

    openGraph: {
      title:
        "Teynur Yuseinov - Web Developer in Ghent",

      description:
        "Web development, software, interaction design and creative technology by Teynur Yuseinov, based in Ghent, Belgium.",

      url:
        "https://www.teynuryuseinov.be/en",

      type: "website",
    },
  };
}

export default async function Home({
  params,
}: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <HomeShowcase />
    </main>
  );
}