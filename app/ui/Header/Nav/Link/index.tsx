import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../animations";

export default function index({ data }: { data: any }) {
  return (
    <motion.div
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.link}
    >
      <div className={styles.indicator}></div>
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
}
