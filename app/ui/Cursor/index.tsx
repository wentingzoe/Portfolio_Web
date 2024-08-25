"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./cursor.module.scss";

const Cursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorSize, setCursorSize] = useState(40);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const getBaseCursorSize = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 20;
      if (window.innerWidth < 1024) return 30;
      return 40;
    }
    return 40;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCursorSize(getBaseCursorSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getBaseCursorSize]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const size = isHovered ? cursorSize * 5 : cursorSize;
      const newX = event.clientX - size / 2;
      const newY = event.clientY - size / 2;
      cursorX.set(newX);
      cursorY.set(newY);

      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`
      );
    };

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const hoverArea = target.closest("[data-cursor-detect]") as HTMLElement;
      setIsHovered(!!hoverArea);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", () => setIsHovered(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", () => setIsHovered(false));
    };
  }, [cursorX, cursorY, cursorSize, isHovered]);

  const size = isHovered ? cursorSize * 5 : cursorSize;

  return (
    <motion.div
      className={`${styles.cursor} ${isHovered ? styles.cursorHovered : ""}`}
      style={{
        width: size,
        height: size,
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
