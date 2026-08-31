"use client";

import { useMemo, useState } from "react";

import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

import styles from "@/app/work/WorkPage.module.css";

type Filter =
  | "all"
  | "Web Development"
  | "Brand Identity"
  | "Interactive";

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.tag?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <>
      <div className={styles.filters}>
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={activeFilter === "all" ? styles.activeFilter : ""}
        >
          all
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("Web Development")}
          className={
            activeFilter === "Web Development"
              ? styles.activeFilter
              : ""
          }
        >
          web development
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("Brand Identity")}
          className={
            activeFilter === "Brand Identity"
              ? styles.activeFilter
              : ""
          }
        >
          brand identity
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("Interactive")}
          className={
            activeFilter === "Interactive"
              ? styles.activeFilter
              : ""
          }
        >
          interactive
        </button>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}