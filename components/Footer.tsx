import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`siteContainer ${styles.main}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            <span className={styles.logo}>t</span>

            <span className={styles.logoDots} aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </Link>

          <nav className={styles.links}>
            <Link href="/work">work</Link>
            <Link href="/experience">experience</Link>
            <Link href="/about">about</Link>
            <Link href="/journal">journal</Link>
            <Link href="/contact">contact</Link>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <a
              href="https://github.com/teynyuse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="/ui/github.svg"
                alt=""
                width={40}
                height={40}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/teynuryuseinov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/ui/linkedin.svg"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </div>

          <p className={styles.cta}>
            let&apos;s make something worth
            <br />
            remembering.
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`siteContainer ${styles.bottomInner}`}>
          <small>© 2026 Teynur Yuseinov · Ghent, Belgium</small>

          <Link href="/privacy">privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}