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
      cursorX.set(event.clientX - cursorSize / 2);
      cursorY.set(event.clientY - cursorSize / 2);
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
  }, [cursorX, cursorY, cursorSize]);

  const size = isHovered ? cursorSize * 10 : cursorSize;

  useEffect(() => {
    if (isHovered) {
      cursorX.set(cursorX.get() - (size - cursorSize) / 2);
      cursorY.set(cursorY.get() - (size - cursorSize) / 2);
    }
  }, [isHovered, size, cursorSize, cursorX, cursorY]);

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
