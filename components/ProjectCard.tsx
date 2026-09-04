"use client";

import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "next-intl";

import { Link } from "@/i18n/navigation";

import styles from "./ProjectCard.module.css";

type LocalizedText = {
  en: string;
  nl: string;
};

type Project = {
  id: number | string;
  slug: string;
  title: string;
  subtitle: LocalizedText;
  year: number | string;
  tag?: string[];
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const t = useTranslations("selectedWork");
  const tTags = useTranslations("projectTags");

  const locale = useLocale();

  const currentLocale =
    locale === "nl" ? "nl" : "en";

  return (
    <article className={styles.card}>
      <Link
        href={`/work/${project.slug}`}
        className={styles.link}
      >
        <Image
          src={project.image}
          alt={`${project.title} - ${project.subtitle[currentLocale]}`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className={styles.image}
        />

        <div className={styles.overlay} />

        <div className={styles.topMeta}>
          <div className={styles.tags}>
            {project.tag
              ?.slice(0, 2)
              .map((tag) => (
                <span
                  key={tag}
                  className={styles.tag}
                >
                  {tTags(tag)}
                </span>
              ))}
          </div>

          <span className={styles.year}>
            {project.year}
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h3>{project.title}</h3>

            <p>
              {project.subtitle[currentLocale]}
            </p>
          </div>

          <span className={styles.viewProject}>
            {t("viewProject")}

            <span aria-hidden="true">
              ↗
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}