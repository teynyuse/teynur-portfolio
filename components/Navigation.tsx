/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import {
  useLocale,
  useTranslations,
} from "next-intl";

import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

import styles from "./Navigation.module.css";

const navigation = [
  { key: "work", href: "/work" },
  { key: "experience", href: "/experience" },
  { key: "about", href: "/about" },
  { key: "journal", href: "/journal" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navigation() {
  const locale = useLocale();
  const t = useTranslations("nav");

  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const homeActive = pathname === "/";

  const isActive = (href: string) =>
    pathname === href ||
    pathname.startsWith(`${href}/`);

  function changeLanguage(
    newLocale: "en" | "nl",
  ) {
    if (locale === newLocale) {
      return;
    }

    router.replace(pathname, {
      locale: newLocale,
    });

    setMenuOpen(false);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

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

          <span
            className={styles.logoDots}
            aria-hidden="true"
          >
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
                <span>
                  {t(item.key)}
                </span>

                <span
                  className={styles.dots}
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

        {/* =========================
            DESKTOP LANGUAGE
        ========================= */}

        <div className={styles.desktopLanguage}>
          <button
            type="button"
            onClick={() =>
              changeLanguage("en")
            }
            className={
              locale === "en"
                ? styles.languageActive
                : ""
            }
            aria-pressed={locale === "en"}
          >
            en
          </button>

          <span>/</span>

          <button
            type="button"
            onClick={() =>
              changeLanguage("nl")
            }
            className={
              locale === "nl"
                ? styles.languageActive
                : ""
            }
            aria-pressed={locale === "nl"}
          >
            nl
          </button>
        </div>

        {/* =========================
            MOBILE BUTTON
        ========================= */}

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen
              ? styles.menuButtonOpen
              : ""
          }`}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          aria-label={
            menuOpen
              ? t("closeMenu")
              : t("openMenu")
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================= */}

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`siteContainer ${styles.mobileMenuInner}`}
        >
          <div className={styles.mobileLinks}>
            {navigation.map(
              (item, index) => {
                const active = isActive(
                  item.href,
                );

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.mobileLink} ${
                      active
                        ? styles.mobileActive
                        : ""
                    }`}
                    style={{
                      transitionDelay:
                        menuOpen
                          ? `${
                              100 +
                              index * 55
                            }ms`
                          : "0ms",
                    }}
                  >
                    <span
                      className={
                        styles.mobileIndex
                      }
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={
                        styles.mobileLabel
                      }
                    >
                      {t(item.key)}
                    </span>

                    <span
                      className={
                        styles.mobileDots
                      }
                      aria-hidden="true"
                    >
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </span>
                  </Link>
                );
              },
            )}
          </div>

          <div className={styles.mobileMenuBottom}>
            {/* =========================
                MOBILE LANGUAGE
            ========================= */}

            <div
              className={styles.mobileLanguage}
            >
              <button
                type="button"
                onClick={() =>
                  changeLanguage("en")
                }
                className={
                  locale === "en"
                    ? styles.languageActive
                    : ""
                }
                aria-pressed={
                  locale === "en"
                }
              >
                en
              </button>

              <span>/</span>

              <button
                type="button"
                onClick={() =>
                  changeLanguage("nl")
                }
                className={
                  locale === "nl"
                    ? styles.languageActive
                    : ""
                }
                aria-pressed={
                  locale === "nl"
                }
              >
                nl
              </button>
            </div>

            <p>
              {t("role1")}
              <br />
              {t("role2")}
              <br />
              {t("role3")}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}