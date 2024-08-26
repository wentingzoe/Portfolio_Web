"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [cursorSize, setCursorSize] = useState(40);
  const hoverRef = useRef(null); // Ref to manage hover state more consistently

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const size = hoverRef.current ? cursorSize * 2 : cursorSize;
      cursorX.set(event.clientX - size / 2);
      cursorY.set(event.clientY - size / 2);

      if (hoverRef.current) {
        hoverRef.current.style.clipPath = `circle(${size}px at ${event.clientX}px ${event.clientY}px)`;
        hoverRef.current.style.opacity = "1";
      }
    };

    const handleMouseOverOut = (event) => {
      const target = event.target.closest("[data-cursor-detect]");
      if (event.type === "mouseover" && target) {
        hoverRef.current = target;
      } else if (event.type === "mouseout" && target) {
        if (hoverRef.current) {
          hoverRef.current.style.clipPath = "none";
          hoverRef.current.style.opacity = "0";
        }
        hoverRef.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOverOut);
    window.addEventListener("mouseout", handleMouseOverOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOverOut);
      window.removeEventListener("mouseout", handleMouseOverOut);
    };
  }, [cursorX, cursorY, cursorSize]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        width: hoverRef.current ? cursorSize * 2 : cursorSize,
        height: hoverRef.current ? cursorSize * 2 : cursorSize,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
