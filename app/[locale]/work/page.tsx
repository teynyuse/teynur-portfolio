import { useTranslations } from "next-intl";

import SectionTitle from "@/components/SectionTitle";
import WorkGrid from "@/components/WorkGrid";

import styles from "./WorkPage.module.css";

export default function WorkPage() {
  const t = useTranslations("work.hero");

  return (
    <main className={styles.page}>
      <section className={`siteContainer ${styles.intro}`}>
        <SectionTitle title={t("title")} />

        <p className={styles.lead}>
          {t("description")}
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