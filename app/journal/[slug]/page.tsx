import { notFound } from "next/navigation";
import journals from "@/data/journals.json";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;

  const journal = journals.find((journal) => journal.slug === slug);

  if (!journal) {
    notFound();
  }

  return (
    <main>
      <p>{journal.category}</p>

      <h1>{journal.title}</h1>

      <time dateTime={journal.date}>{journal.date}</time>

      <p>{journal.excerpt}</p>
    </main>
  );
}