export type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  tag?: string[];
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
};