import JournalCard from "@/components/JournalCard";
import journals from "@/data/journals.json";

export default function JournalPage() {
  return (
    <main>
      <h1>journal:</h1>

      {journals.map((journal) => (
        <JournalCard key={journal.id} journal={journal} />
      ))}
    </main>
  );
}