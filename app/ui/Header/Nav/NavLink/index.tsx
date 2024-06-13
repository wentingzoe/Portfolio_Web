import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide } from "../../animations";

export default function index({ data }: { data: any }) {
  console.log("data", data);
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.item}
    >
      <div className={styles.indicator}></div>
      <Link href={data.href}>
        <h3>{data.title}</h3>
      </Link>
    </motion.div>
  );
}
