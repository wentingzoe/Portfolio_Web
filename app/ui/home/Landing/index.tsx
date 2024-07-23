"use client";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Home() {
  return (
    <section className={styles.landing}>
      <div className={styles.landing__container}>
        {[...Array(32)].map((_, index) => {
          const row = Math.floor(index / 8) + 1;
          const column = (index % 8) + 1;
          return (
            <div
              key={index}
              className={`${styles.grid} ${styles[`grid__${index + 1}`]}`}
              // style={{ gridArea: `${row} / ${column} / span 1 / span 1` }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </section>
  );
}
