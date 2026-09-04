import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";

export default function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className={`siteContainer ${styles.hero}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            {t("line1")}
          </span>

          <span className={styles.line}>
            {t("line2")}
          </span>

          <span className={styles.line}>
            {t("line3")}
          </span>
        </h1>

        <p className={styles.description}>
          {t("descriptionLine1")}
          <br />
          {t("descriptionLine2")}
        </p>
      </div>
    </section>
  );
}