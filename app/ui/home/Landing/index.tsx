"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const direction = useRef(-1);
  let xPercent = 0;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25, //smooth scrubbing, takes 0.25 second to "catch up" to the scrollbar
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.07 * direction.current;
    // control the speed and direction of the animation
  };

  return (
    <section className={styles.landing}>
      <div className={styles["landing__container"]}>
        <div className="landing__name">
          <h1>Wenting</h1>
          <h1>Yong</h1>
        </div>
        <Image
          className={`${styles.landing__line} ${styles["landing__line--mobile"]}`}
          src="/images/landing_line_small.svg"
          alt="line mobile"
          fill={true}
        />
        <Image
          className={`${styles.landing__line} ${styles["landing__line--desktop"]}`}
          src="/images/landing_line_only.svg"
          alt="line"
          fill={true}
        />
      </div>
    </section>
  );
}
