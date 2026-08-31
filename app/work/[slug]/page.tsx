import { notFound } from "next/navigation";
import projects from "@/data/projects.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1>{project.title}</h1>

      <p>{project.subtitle}</p>

      <p>{project.description}</p>

      <p>{project.year}</p>

      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </main>
  );
}