"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef } from "react";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  return (
    <main className={styles.landing}>
      <Image src="/images/background.jpg" fill={true} alt="background" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Front-End Developer -</p>
          <p ref={secondText}>Design -</p>
        </div>
      </div>
    </main>
  );
}
