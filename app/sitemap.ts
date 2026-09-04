import type { MetadataRoute } from "next";

import projects from "@/data/projects.json";
import journals from "@/data/journals.json";

const baseUrl = "https://www.teynuryuseinov.be";

const locales = ["en", "nl"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/experience",
    "/about",
    "/journal",
    "/contact",
  ];

  const staticPages: MetadataRoute.Sitemap = locales.flatMap(
    (locale) =>
      staticRoutes.map((route) => ({
        url: `${baseUrl}/${locale}${route}`,

        lastModified: new Date(),

        changeFrequency:
          route === "/journal"
            ? "weekly"
            : route === "/contact"
              ? "yearly"
              : "monthly",

        priority:
          route === ""
            ? 1
            : route === "/work"
              ? 0.9
              : route === "/contact"
                ? 0.6
                : 0.8,

        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            nl: `${baseUrl}/nl${route}`,
          },
        },
      }))
  );

  const projectPages: MetadataRoute.Sitemap =
    locales.flatMap((locale) =>
      projects.map((project) => ({
        url:
          `${baseUrl}/${locale}/work/${project.slug}`,

        lastModified: new Date(),

        changeFrequency: "monthly",

        priority: 0.8,

        alternates: {
          languages: {
            en:
              `${baseUrl}/en/work/${project.slug}`,

            nl:
              `${baseUrl}/nl/work/${project.slug}`,
          },
        },
      }))
    );

  const journalPages: MetadataRoute.Sitemap =
    locales.flatMap((locale) =>
      journals.map((journal) => ({
        url:
          `${baseUrl}/${locale}/journal/${journal.slug}`,

        lastModified:
          new Date(journal.date),

        changeFrequency: "monthly",

        priority: 0.7,

        alternates: {
          languages: {
            en:
              `${baseUrl}/en/journal/${journal.slug}`,

            nl:
              `${baseUrl}/nl/journal/${journal.slug}`,
          },
        },
      }))
    );

  return [
    ...staticPages,
    ...projectPages,
    ...journalPages,
  ];
}