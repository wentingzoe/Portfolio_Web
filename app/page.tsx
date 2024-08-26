"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";
import { motion } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={styles.main}>
      <Landing />
      <Projects />

      {/* Test Cursor Hover */}
      <div className={styles.content}>
        <div className={styles.backgroundLayer}>
          <p>
            I'm a <span>selectively skilled</span> product designer with a focus
            on quality.
          </p>
        </div>

        <motion.div
          className={`${styles.foregroundLayer} ${styles.mask} ${
            isHovered ? styles.hovered : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-cursor-detect
        >
          <p>A visual designer making good stuff with AI technology.</p>
        </motion.div>
      </div>
    </main>
  );
}
