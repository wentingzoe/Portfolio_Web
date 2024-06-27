"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinkSlide, navLinkScale } from "@/app/common/animations";
import clsx from "clsx";

export default function NavLink({ data }: { data: any }) {
  const { title, href, index } = data;
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === href;

  return (
    <motion.div
      custom={index}
      variants={navLinkSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.item}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        variants={navLinkScale}
        animate={isHovered ? "hover" : isActive ? "enter" : "exit"}
        className={clsx(styles.indicator, {
          [styles.active]: isActive,
          [styles.hover]: isHovered && !isActive,
        })}
      ></motion.div>
      <Link href={href}>
        <h3>{title}</h3>
      </Link>
    </motion.div>
  );
}
