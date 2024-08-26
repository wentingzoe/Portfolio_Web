// components/Cursor.js
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [cursorSize, setCursorSize] = useState(40);
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(null);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const size = isHovering ? cursorSize * 5 : cursorSize;
      const halfSize = size / 2;
      cursorX.set(event.clientX - halfSize);
      cursorY.set(event.clientY - halfSize);

      if (isHovering && hoverRef.current) {
        hoverRef.current.style.WebkitMaskPosition = `${
          event.clientX - halfSize
        }px ${event.clientY - halfSize}px`;
        hoverRef.current.style.WebkitMaskSize = `${size}px`;
      }
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest("[data-cursor-detect]");
      if (target) {
        hoverRef.current = target;
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      hoverRef.current = null;
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, cursorSize, isHovering]);

  return (
    <motion.div
      className={`${styles.cursor} ${isHovering ? styles.hovering : ""}`}
      style={{
        width: isHovering ? cursorSize * 5 : cursorSize,
        height: isHovering ? cursorSize * 5 : cursorSize,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
