"use client";

import Link from "next/link";
import type { Project } from "@/types/project";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const tags = project.tag ?? [];

  return (
    <article className={styles.card}>
      <Link href={`/work/${project.slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          {project.image && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </>
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.text}>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>

          <span className={styles.year}>{project.year}</span>
        </div>
      </Link>
    </article>
  );
}