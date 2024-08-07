"use client";
import styles from "./style.module.scss";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import clsx from "clsx";
import Link from "next/link";
import { navItems } from "@/app/lib/data";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  const toggleMenu = () => setIsActive(!isActive);
  const closeMenu = () => setIsActive(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 200,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className={styles.header__logo}>
          <span className={styles.header__copyright}>©</span>
          <div className={styles.header__name}>
            <span className={styles.header__codeBy}>Code by</span>
            <span className={styles.header__fn}>Wenting</span>
            <span className={styles.header__ln}>Yong</span>
          </div>
        </Link>

        <nav className={styles.header__nav}>
          <div className={styles["header__nav--small"]} onClick={toggleMenu}>
            <div className={styles.header__item}>
              <span>Menu</span>
              <span className={styles.header__indicator} />
            </div>
          </div>
          <div className={styles["header__nav--large"]}>
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
        </nav>
      </header>
      <div
        ref={burger}
        onClick={toggleMenu}
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
      <AnimatePresence mode="wait">
        {isActive && <Nav onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
