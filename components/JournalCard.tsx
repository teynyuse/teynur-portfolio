"use client";

import Image from "next/image";
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
            <Image
              src={journal.image}
              alt={journal.title}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
              className={styles.image}
            />
          )}

          <div className={styles.imageOverlay} />

          <span className={styles.category}>
            {journal.category}
          </span>
        </div>

        <div className={styles.info}>
          <p className={styles.date}>
            {journal.date}
          </p>

          <h3>{journal.title}</h3>

          <p className={styles.excerpt}>
            {journal.excerpt}
          </p>

          <span className={styles.readMore}>
            read article
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}