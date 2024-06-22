"use client";
import styles from "./style.module.scss";

export default function Index({ index, title, role, setModal }) {
  return (
    <div className={styles.project}>
      <h2 className={styles.title}>{title}</h2>
      <p>{role}</p>
    </div>
  );
}
