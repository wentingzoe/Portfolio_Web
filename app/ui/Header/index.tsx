"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import clsx from "clsx";
import { navItems } from "@/app/common/data";
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <span className={styles.header__copyright}>©</span>
          <div className={styles.header__name}>
            <p className={styles.header__codeBy}>Code by</p>
            <p className={styles.header__fname}>Wenting</p>
            <p className={styles.header__lname}>Yong</p>
          </div>
        </div>
        <ul className={styles.header__nav}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.header__item}>
              <a href={item.href} className={styles.header__link}>
                {item.title}
              </a>
              <span className={styles.header__indicator} />
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={clsx(styles["burger-button"], {
          [styles["burger-button--active"]]: isActive,
        })}
      >
        <div
          className={clsx(styles["burger-button__icon"], {
            [styles["burger-button__icon--active"]]: isActive,
          })}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
