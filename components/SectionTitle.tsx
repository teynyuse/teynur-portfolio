import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  title: string;
  variant?: "dark" | "light";
};

export default function SectionTitle({
  title,
  variant = "dark",
}: SectionTitleProps) {
  return (
    <div className={`${styles.sectionTitle} ${styles[variant]}`}>
      <h2>{title}</h2>

      <span className={styles.dots} aria-hidden="true">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  );
}