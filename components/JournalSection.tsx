import { useTranslations } from "next-intl";

import journals from "@/data/journals.json";

import JournalCard from "./JournalCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

import styles from "./JournalSection.module.css";

export default function JournalSection() {
  const t = useTranslations("journalSection");

  const selectedJournals = journals.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={`siteContainer ${styles.content}`}>
        <Reveal>
          <SectionTitle
            title={t("title")}
            variant="light"
          />
        </Reveal>

        <div className={styles.grid}>
          {selectedJournals.map((journal, index) => (
            <Reveal
              key={journal.id}
              delay={index * 120}
            >
              <JournalCard journal={journal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}