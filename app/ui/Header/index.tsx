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
        <div className={styles.logo}>
          <span className={styles.copyright}>©</span>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.fname}>Wenting</p>
            <p className={styles.lname}>Yong</p>
          </div>
        </div>
        <ul className={styles.nav}>
          {navItems.map((item, index) => {
            return (
              <li key={index} className={styles.item}>
                <a href={item.href}>{item.title}</a>
                <span className={styles.indicator} />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={clsx(styles.burgerButton, {
          [styles.burgerButtonActive]: isActive,
        })}
      >
        <div
          className={clsx(styles.icon, { [styles.iconActive]: isActive })}
        ></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
