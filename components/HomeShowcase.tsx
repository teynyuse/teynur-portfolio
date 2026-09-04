import { useTranslations } from "next-intl";

import SelectedWork from "./SelectedWork";
import JournalSection from "./JournalSection";

import styles from "./HomeShowcase.module.css";

export default function HomeShowcase() {
  const t = useTranslations("home.homeShowcase");

  return (
    <section className={styles.wrapper}>
      <SelectedWork />

      <div className={styles.quote}>
        <div className={styles.quoteInner}>
          <p>{t("quote")}</p>

          <strong>{t("skills")}</strong>
        </div>
      </div>

      <JournalSection />
    </section>
  );
}