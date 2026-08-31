"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navigation = [
  { label: "work", href: "/work" },
  { label: "experience", href: "/experience" },
  { label: "about", href: "/about" },
  { label: "journal", href: "/journal" },
  { label: "contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  const homeActive = pathname === "/";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={styles.header}>
      <nav className={`siteContainer ${styles.nav}`}>
        <Link
          href="/"
          className={`${styles.logoLink} ${
            homeActive ? styles.logoActive : ""
          }`}
          aria-label="Home"
        >
          <span className={styles.logo}>t</span>

          <span className={styles.logoDots} aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </Link>

        <div className={styles.links}>
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  active ? styles.active : ""
                }`}
              >
                <span>{item.label}</span>

                <span className={styles.dots} aria-hidden="true">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </Link>
            );
          })}
        </div>

        <div className={styles.language}>
          <button
            type="button"
            className={styles.languageActive}
          >
            en
          </button>

          <span>/</span>

          <button type="button">
            nl
          </button>
        </div>
      </nav>
    </header>
  );
}