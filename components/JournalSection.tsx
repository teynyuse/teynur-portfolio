import journals from "@/data/journals.json";
import JournalCard from "./JournalCard";
import SectionTitle from "./SectionTitle";
import styles from "./JournalSection.module.css";
import Reveal from "./Reveal";

export default function JournalSection() {
  const selectedJournals = journals.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={`siteContainer ${styles.content}`}>
        <Reveal>
          <SectionTitle title="journal" variant="light" />
        </Reveal>

        <div className={styles.grid}>
          {selectedJournals.map((journal, index) => (
            <Reveal key={journal.id} delay={index * 120}>
              <JournalCard journal={journal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}