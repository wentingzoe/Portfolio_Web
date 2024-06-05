import styles from "./style.module.scss";
import Link from "next/link";

export default function index({ data }: { data: any }) {
  return (
    <div className={styles.link}>
      <Link href={data.href}>{data.title}</Link>
    </div>
  );
}
