"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

import styles from "./WorkGrid.module.css";

const filters = [
  "all",
  "web development",
  "brand identity",
  "interactive",
];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] =
    useState("all");

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
        aria-label="Filter projects"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`${styles.filterButton} ${
              activeFilter === filter
                ? styles.activeFilter
                : ""
            }`}
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
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