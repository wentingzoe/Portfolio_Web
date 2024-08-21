"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";
import useMousePosition from "@/app/lib/useMousePosition";
import { motion } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 20;

  const variants = {
    default: {
      x: x - size / 2,
      y: y - size / 2,
    },
    text: {
      height: size,
      width: size,
      x: x - size / 2,
      y: y - size / 2,
      backgroundColor: "#f28705",
      mixBlendMode: "difference",
    },
  };

  return (
    <main className={styles.main}>
      <Landing setIsHovered={setIsHovered} />
      <Projects />

      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={isHovered ? "text" : "default"}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </main>
  );
}
