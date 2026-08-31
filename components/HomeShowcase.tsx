import SelectedWork from "./SelectedWork";
import JournalSection from "./JournalSection";
import styles from "./HomeShowcase.module.css";

export default function HomeShowcase() {
  return (
    <section className={styles.wrapper}>
      <SelectedWork />

      <div className={styles.quote}>
        <div className={styles.quoteInner}>
          <p>
            I like working where software, design and the physical world meet.
          </p>

          <strong>
            web development / interaction design / creative technology /
            prototyping
          </strong>
        </div>
      </div>

      <JournalSection />
    </section>
  );
}