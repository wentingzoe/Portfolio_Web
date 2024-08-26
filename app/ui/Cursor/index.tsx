"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [cursorSize, setCursorSize] = useState(40);
  const [isHovering, setIsHovering] = useState(false); // State to track hovering
  const hoverRef = useRef(null); // Ref to manage hover state more consistently

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const size = isHovering ? cursorSize * 2 : cursorSize;
      cursorX.set(event.clientX - size / 2);
      cursorY.set(event.clientY - size / 2);

      if (isHovering && hoverRef.current) {
        hoverRef.current.style.clipPath = `circle(${size}px at ${event.clientX}px ${event.clientY}px)`;
        hoverRef.current.style.opacity = "1";
      }
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest("[data-cursor-detect]");
      if (target) {
        hoverRef.current = target;
        setIsHovering(true); // Start hovering
      }
    };

    const handleMouseOut = () => {
      if (hoverRef.current) {
        hoverRef.current.style.clipPath = "none";
        hoverRef.current.style.opacity = "0";
      }
      hoverRef.current = null;
      setIsHovering(false); // Stop hovering
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
        width: isHovering ? cursorSize * 2 : cursorSize,
        height: isHovering ? cursorSize * 2 : cursorSize,

        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
