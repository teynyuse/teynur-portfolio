import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`siteContainer ${styles.hero}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.line}>developer.</span>
          <span className={styles.line}>designer.</span>
          <span className={styles.line}>maker.</span>
        </h1>

        <p className={styles.description}>
          I build interactive experiences across software,
          <br />
          hardware and design – turning ideas into things people can see,
          touch and use.
        </p>
      </div>
    </section>
  );
}