"use client";
import { useEffect, useState } from "react";
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
            I'm a <span>selectively skilled</span> product designer with a focus
            on quality.
          </p>
        </div>
        <div className={styles.foregroundLayer} data-cursor-detect>
          <p>A visual designer making good stuff with AI technology.</p>
        </div>
      </div>
    </main>
  );
}
