"use client";
import styles from "./style.module.scss";
import NavLink from "./NavLink";
import Social from "./Social";
import Curve from "./Curve";
import { bgFade, menuSlide } from "@/app/lib/animations";
import { motion } from "framer-motion";
import { navItems } from "@/app/lib/data";

export default function Nav({ onClose }: { onClose: () => void }) {
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.nav}
      >
        <div className={styles.nav__inner}>
          <div className={styles.nav__top}>
            <h5>Navigation</h5>
            <div className={styles.nav__stripe} />
            <ul className={styles.nav__list}>
              {navItems.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    data={{ ...item, index }}
                    onClose={onClose}
                  />
                );
              })}
            </ul>
          </div>
          <Social />
        </div>
        <Curve />
      </motion.div>
      <motion.div
        className={styles.nav__back}
        onClick={onClose}
        variants={bgFade}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </>
  );
}
