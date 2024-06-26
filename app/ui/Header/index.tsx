"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import clsx from "clsx";
import Link from "next/link";
import { navItems } from "@/app/common/data";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <Link href="/" className={styles.header__logo}>
          <span className={styles.header__copyright}>©</span>
          <div className={styles.header__name}>
            <span className={styles.header__codeBy}>Code by</span>
            <span className={styles.header__fn}>Wenting</span>
            <span className={styles.header__ln}>Yong</span>
          </div>
        </Link>

        <div className={styles.header__nav}>
          {navItems.map(
            (item, index) =>
              index > 0 && (
                <Link
                  key={index}
                  href={item.href}
                  className={styles.header__item}
                >
                  <span>{item.title}</span>
                  <span className={styles.header__indicator} />
                </Link>
              )
          )}
        </div>
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
