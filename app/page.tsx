"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";

export default function Home() {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (maskRef.current) {
        const rect = maskRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        maskRef.current.style.setProperty("--mouse-x", `${x}px`);
        maskRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className={styles.main}>
      <Landing />
      <Projects />
      <div className={styles.content}>
        <div className={styles.backgroundLayer}>
          <p>
            I'm a <span>selectively skilled</span> product designer with strong
            focus on producing high quality & impactful digital experience.
          </p>
        </div>
        <div
          className={`${styles.foregroundLayer} ${styles.mask}`}
          data-cursor-detect
          ref={maskRef}
        >
          <p>
            A visual designer - with skills that haven't been replaced by A.I
            (yet) - making good shit only if the paycheck is equally good.
          </p>
        </div>
      </div>
    </main>
  );
}
