import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import styles from "./SelectedWork.module.css";
import Reveal from "./Reveal";

export default function SelectedWork() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={`siteContainer ${styles.content}`}>
        <Reveal>
          <SectionTitle title="selected work" variant="dark" />
        </Reveal>

        <div className={styles.grid}>
          {selectedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 140}>
              <div
                className={styles.cardWrapper}
                data-position={index}
              >
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}