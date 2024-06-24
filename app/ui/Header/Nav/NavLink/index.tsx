"use client";

import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinkSlide } from "@/app/common/animations";
import clsx from "clsx";

export default function NavLink({ data }: { data: any }) {
  const pathname = usePathname();
  return (
    <motion.div
      custom={data.index}
      variants={navLinkSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.item}
    >
      <div
        className={clsx({ [styles.indicator]: pathname === data.href })}
      ></div>
      <Link href={data.href}>
        <h3>{data.title}</h3>
      </Link>
    </motion.div>
  );
}
