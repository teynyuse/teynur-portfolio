import { useTranslations } from "next-intl";

import projects from "@/data/projects.json";
import { Link } from "@/i18n/navigation";

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const t = useTranslations("selectedWork");

  const selectedProjects = projects.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Reveal>
          <SectionTitle
            title={t("title")}
            variant="dark"
          />
        </Reveal>

        <div className={styles.grid}>
          {selectedProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.cardWrapper}
              data-position={index}
            >
              <Reveal delay={index * 140}>
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={180}>
          <div className={styles.allWorkRow}>
            <Link
              href="/work"
              className={styles.allWorkLink}
            >
              <span>{t("viewAll")}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}