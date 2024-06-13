"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import clsx from "clsx";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
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
