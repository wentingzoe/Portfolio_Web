"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";
import Masking from "@/app/ui/home/Masking";
import { motion } from "framer-motion";
import useMousePosition from "@/app/lib/useMousePosition";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const size = isHovered ? 200 : 40;
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          //mixBlendMode: "difference",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <Masking setIsHovered={setIsHovered} />
      </motion.div>
      <Landing />
      <Projects />
    </main>
  );
}
