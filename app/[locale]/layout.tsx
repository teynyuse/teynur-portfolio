import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";

import {
  getMessages,
  setRequestLocale,
} from "next-intl/server";

import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;

  params: Promise<{
    locale: string;
  }>;
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

   "@id":
    "https://www.teynuryuseinov.be/#person",

  name: "Teynur Yuseinov",

  url: "https://www.teynuryuseinov.be",

  image:
    "https://www.teynuryuseinov.be/images/profile.jpg",

  jobTitle: [
    "Web Developer",
    "Software Developer",
    "Creative Developer",
    "Designer",
  ],

  address: {
    "@type": "PostalAddress",

    addressLocality: "Ghent",
    addressRegion: "East Flanders",
    addressCountry: "BE",
  },

  sameAs: [
    "https://www.linkedin.com/in/teynuryuseinov/",
    "https://github.com/teynyuse",
  ],

  knowsAbout: [
    "Web Development",
    "Front-end Development",
    "Software Development",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "SQL",
    "Interaction Design",
    "Creative Technology",
    "Physical Computing",
    "Raspberry Pi",
    "ESP32",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <Navigation />

      {children}

      <Footer />
    </NextIntlClientProvider>
  );
}