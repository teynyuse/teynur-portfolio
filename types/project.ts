export type Project = {
  id: number;
  slug: string;

  title: string;
  subtitle: string;
  year: number;

  featured: boolean;

  tag: string[];
  technologies: string[];

  image: string;

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  overview: string;

  details: {
    client: string;
    role: string;
    type: string;
    status?: string;
  };

  content: {
    intro: string;
    challenge?: string;
    approach?: string;
    result?: string;
  };

  gallery: {
    src: string;
    alt: string;
  }[];

  links?: {
    website?: string;
    github?: string;
  };
};