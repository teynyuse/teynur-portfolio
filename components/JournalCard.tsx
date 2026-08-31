"use client";

import Link from "next/link";
import type { Journal } from "@/types/journal";
import styles from "./JournalCard.module.css";

type JournalCardProps = {
  journal: Journal;
};

export default function JournalCard({ journal }: JournalCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/journal/${journal.slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          {journal.image && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={journal.image}
                alt={journal.title}
                className={styles.image}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </>
          )}
        </div>

        <div className={styles.info}>
          <p className={styles.meta}>
            {journal.category} · {journal.date}
          </p>

          <h3>{journal.title}</h3>

          <p className={styles.excerpt}>{journal.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}