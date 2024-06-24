"use client";
import styles from "./style.module.scss";

export default function Index({ index, title, role, setModal }) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
