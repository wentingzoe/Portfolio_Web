"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinkSlide, navLinkScale } from "@/app/common/animations";
import clsx from "clsx";

export default function NavLink({
  data,
  onClose,
}: {
  data: any;
  onClose: () => void;
}) {
  const { title, href, index } = data;
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === href;

  return (
    <Link href={href} onClick={onClose}>
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

        <h3>{title}</h3>
      </motion.div>
    </Link>
  );
}
