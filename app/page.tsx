"use client";
import { useEffect, useState, useRef } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";

export default function Home() {
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
        <div className={`${styles.foregroundLayer}`} data-cursor-detect>
          <p>
            A visual designer - with skills that haven't been replaced by A.I
            (yet) - making good stuff only if the paycheck is equally good.
          </p>
        </div>
      </div>
    </main>
  );
}
