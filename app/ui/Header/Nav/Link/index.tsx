import styles from "./style.module.scss";
import Link from "next/link";

export default function index({ data }: { data: any }) {
  return (
    <div className={styles.link}>
      <div className={styles.indicator}></div>
      <Link href={data.href}>{data.title}</Link>
    </div>
  );
}
