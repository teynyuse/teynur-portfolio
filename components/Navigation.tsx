/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const homeActive = pathname === "/";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

        <div className={styles.desktopLinks}>
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

        <div className={styles.desktopLanguage}>
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

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className={`siteContainer ${styles.mobileMenuInner}`}>
          <div className={styles.mobileLinks}>
            {navigation.map((item, index) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileLink} ${
                    active ? styles.mobileActive : ""
                  }`}
                  style={{
                    transitionDelay: menuOpen
                      ? `${100 + index * 55}ms`
                      : "0ms",
                  }}
                >
                  <span className={styles.mobileIndex}>
                    0{index + 1}
                  </span>

                  <span className={styles.mobileLabel}>
                    {item.label}
                  </span>

                  <span
                    className={styles.mobileDots}
                    aria-hidden="true"
                  >
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileMenuBottom}>
            <div className={styles.mobileLanguage}>
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

            <p>
              developer.
              <br />
              designer.
              <br />
              maker.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}