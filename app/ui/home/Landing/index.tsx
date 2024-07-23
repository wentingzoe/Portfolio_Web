"use client";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Home() {
  return (
    <section className={styles.landing}>
      <div className={styles.landing__container}>
        {[...Array(21)].map((_, index) => {
          return (
            <div
              key={index}
              className={`${styles.grid} ${styles[`grid__${index + 1}`]}`}
            >
              {index + 1}
            </div>
          );
        })}
        <div className={styles.grid__2}>
          <h1>WenTing</h1>
          <h1>Yong</h1>
        </div>
      </div>
    </section>
  );
}
