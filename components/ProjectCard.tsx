import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

type Project = {
  id: number | string;
  slug: string;
  title: string;
  subtitle: string;
  year: number | string;
  tag?: string[];
  image: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/work/${project.slug}`} className={styles.link}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          className={styles.image}
        />

        <div className={styles.overlay} />

        <div className={styles.topMeta}>
          <div className={styles.tags}>
            {project.tag?.slice(0, 2).map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <span className={styles.year}>{project.year}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.text}>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>

          <span className={styles.viewProject}>
            view project
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}