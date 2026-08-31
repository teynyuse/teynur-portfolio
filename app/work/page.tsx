import SectionTitle from "@/components/SectionTitle";
import WorkGrid from "@/components/WorkGrid";

import styles from "./WorkPage.module.css";

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <section className={`siteContainer ${styles.intro}`}>
        <SectionTitle title="work" />

        <p className={styles.lead}>
          A selection of digital products, interactive experiences and visual
          identities - built across software, design and physical interaction.
        </p>
      </section>

      <section className={styles.projectsSection}>
        <div className={`siteContainer ${styles.projectsInner}`}>
          <WorkGrid />
        </div>
      </section>
    </main>
  );
}