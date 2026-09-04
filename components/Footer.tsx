import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Link } from "@/i18n/navigation";

import CopyEmail from "./CopyEmail";

import styles from "./Footer.module.css";

export default function Footer() {
  const tFooter = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className={styles.footer}>
      <div className={`siteContainer ${styles.main}`}>
        <div className={styles.left}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Home"
          >
            <span className={styles.logo}>t</span>

            <span
              className={styles.logoDots}
              aria-hidden="true"
            >
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </Link>

          <nav
            className={styles.links}
            aria-label="Footer navigation"
          >
            <Link href="/work">
              {tNav("work")}
            </Link>

            <Link href="/experience">
              {tNav("experience")}
            </Link>

            <Link href="/about">
              {tNav("about")}
            </Link>

            <Link href="/journal">
              {tNav("journal")}
            </Link>

            <Link href="/contact">
              {tNav("contact")}
            </Link>
          </nav>
        </div>

        <div className={styles.right}>
          <p className={styles.cta}>
            {tFooter("ctaLine1")}
            <br />
            {tFooter("ctaLine2")}
          </p>

          <CopyEmail />

          <div className={styles.socials}>
            <a
              href="https://github.com/teynyuse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/teynuryuseinov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div
          className={`siteContainer ${styles.bottomInner}`}
        >
          <small>
            {tFooter("copyright")} · {tFooter("location")}
          </small>

          <div className={styles.bottomLinks}>
            <span>
              {tFooter("disciplines")}
            </span>

            <Link href="/privacy">
              {tFooter("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}