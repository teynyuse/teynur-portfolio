"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

import styles from "./WorkGrid.module.css";

const filters = [
  {
    key: "all",
    value: "all",
  },
  {
    key: "webDevelopment",
    value: "web development",
  },
  {
    key: "brandIdentity",
    value: "brand identity",
  },
  {
    key: "interactive",
    value: "interactive",
  },
] as const;

type FilterValue =
  (typeof filters)[number]["value"];

export default function WorkGrid() {
  const t = useTranslations("work.filters");

  const [activeFilter, setActiveFilter] =
    useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.tag?.some(
        (tag) =>
          tag.toLowerCase() ===
          activeFilter.toLowerCase()
      )
    );
  }, [activeFilter]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.filters}
        aria-label={t("ariaLabel")}
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`${styles.filterButton} ${
              activeFilter === filter.value
                ? styles.activeFilter
                : ""
            }`}
            onClick={() =>
              setActiveFilter(filter.value)
            }
          >
            {t(filter.key)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}