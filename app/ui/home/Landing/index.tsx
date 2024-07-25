"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const estTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(estTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className={styles.landing}>
      <div className={styles.landing__container}>
        {[...Array(21)].map((_, index) => {
          return (
            <div
              key={index}
              className={`${styles.grid} ${styles[`grid__${index + 1}`]}`}
            >
              {index + 1}
            </div>
          );
        })}
        <div className={`${styles.grid__1} ${styles.icon}`}>
          <span className={styles.icon__square} />
          <span className={styles.icon__circle} />
          <span className={styles.icon__triangle} />
          <span className={styles.icon__smallcircle} />
        </div>

        <div className={`${styles.grid__2} ${styles.name}`}>
          <div className={styles.name__first}>
            <span>Code by</span>
            <h1>WenTing</h1>
          </div>
          <div className={styles.name__last}>
            <div className={styles["small-circle"]}></div>
            <h1>Yong</h1>
          </div>
        </div>
        <div className={`${styles.grid__3} ${styles.title}`}>
          <h1 className={styles.title__creative}>CREATIVE</h1>

          <div className={styles.title__item}>
            <h1>Developer</h1>
            <h1>&Designer</h1>
          </div>
        </div>
        <div className={`${styles.grid__4} ${styles.location}`}>
          <div className={styles.location__icon}></div>
          <div className={styles.location__text}>
            <h4>Based in</h4>
            <h4>CANADA/EST</h4>
            <h4>{time}</h4>
          </div>
        </div>
        {/* Contact */}
        <div className={`${styles.grid__5} ${styles.contact}`}></div>

        {/* Menu */}
        <div className={`${styles.grid__6} ${styles.menu}`}>
          <div className={styles.menu__icon}>
            <Image
              src="/images/icon_square_about.svg"
              alt="about"
              layout="responsive"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.menu__text}>
            <h3>About</h3>
          </div>
        </div>
        <div className={`${styles.grid__7} ${styles.menu}`}>
          <div className={styles.menu__icon}>
            <Image
              src="/images/icon_circle_work.svg"
              alt="work"
              layout="responsive"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.menu__text}>
            <h3>Work</h3>
          </div>
        </div>
        <div className={`${styles.grid__8} ${styles.menu}`}>
          <div className={styles.menu__icon}>
            <Image
              src="/images/icon_triangle_resume.svg"
              alt="resume"
              layout="responsive"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.menu__text}>
            <h3>resume</h3>
          </div>
        </div>
        <div className={`${styles.grid__9} ${styles.menuSide}`}>
          <div className={styles.menuSide__square}></div>
        </div>
        <div className={`${styles.grid__10} ${styles.menuSide}`}>
          <div className={styles.menuSide__circle}></div>
        </div>
        <div className={`${styles.grid__11} ${styles.menuSide}`}>
          <div className={styles.menuSide__triangle}></div>
        </div>
        <div className={`${styles.grid__12} ${styles}`}></div>
        <div className={`${styles.grid__13} ${styles.halfcircle}`}>
          <div className={styles.halfcircle__inner}></div>
        </div>
        <div className={`${styles.grid__14} ${styles}`}></div>
        <div className={`${styles.grid__15} ${styles}`}></div>
        <div className={`${styles.grid__16} ${styles}`}></div>
        <div className={`${styles.grid__17} ${styles}`}></div>
        <div className={`${styles.grid__18} ${styles}`}></div>
        <div className={`${styles.grid__19} ${styles}`}></div>
        <div className={`${styles.grid__20} ${styles}`}></div>
        <div className={`${styles.grid__21} ${styles}`}></div>
      </div>
    </section>
  );
}
