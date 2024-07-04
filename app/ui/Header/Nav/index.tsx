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
        className={styles.overlay}
        onClick={onClose}
        variants={bgFade}
        initial="initial"
        animate="enter"
        exit="exit"
      />
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.nav}
      >
        <div className={styles.inner}>
          <div className={styles.row}>
            <div className={styles.header}>
              <h5>Navigation</h5>
            </div>
            {navItems.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  data={{ ...item, index }}
                  onClose={onClose}
                />
              );
            })}
          </div>
          <Social />
        </div>
        <Curve />
      </motion.div>
    </>
  );
}
