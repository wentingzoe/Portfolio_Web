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
        <div className={`${styles.grid__1} ${styles.icon}`}></div>
        <div className={`${styles.grid__2} ${styles.name}`}>
          <div className={styles.name__first}>
            <span>Code by</span>
            <h1>WenTing</h1>
          </div>
          <div className={styles.name__last}>
            <div className={styles["small-circle"]}></div>
            <h1>Yong</h1>
          </div>
        </div>
        <div className={`${styles.grid__3} ${styles.title}`}>
          <h1 className={styles.title__creative}>CREATIVE</h1>

          <div className={styles.title__item}>
            <h1>Developer</h1>
            <h1>&Designer</h1>
          </div>
        </div>
        <div className={`${styles.grid__4} ${styles}`}></div>
        <div className={`${styles.grid__5} ${styles}`}></div>
        <div className={`${styles.grid__6} ${styles}`}></div>
        <div className={`${styles.grid__7} ${styles}`}></div>
        <div className={`${styles.grid__8} ${styles}`}></div>
        <div className={`${styles.grid__9} ${styles}`}></div>
        <div className={`${styles.grid__10} ${styles}`}></div>
        <div className={`${styles.grid__11} ${styles}`}></div>
        <div className={`${styles.grid__12} ${styles}`}></div>
        <div className={`${styles.grid__13} ${styles.halfcircle}`}>
          <div className={styles.halfcircle__inner}></div>
        </div>
        <div className={`${styles.grid__14} ${styles}`}></div>
        <div className={`${styles.grid__15} ${styles}`}></div>
        <div className={`${styles.grid__16} ${styles}`}></div>
        <div className={`${styles.grid__17} ${styles}`}></div>
        <div className={`${styles.grid__18} ${styles}`}></div>
        <div className={`${styles.grid__19} ${styles}`}></div>
        <div className={`${styles.grid__20} ${styles}`}></div>
        <div className={`${styles.grid__21} ${styles}`}></div>
      </div>
    </section>
  );
}
