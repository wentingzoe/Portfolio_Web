"use client";
import React, { useEffect, useState } from "react";
import { useHoverMask } from "./useHoverMask";
import styles from "./cursor.module.scss";

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const cursorSize = 40;

  const { isHovering, hoverRef } = useHoverMask(cursorSize);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    width: isHovering ? cursorSize * 5 : cursorSize,
    height: isHovering ? cursorSize * 5 : cursorSize,
    transform: `translate(${
      cursorX - (isHovering ? cursorSize * 2.5 : cursorSize / 2)
    }px, ${cursorY - (isHovering ? cursorSize * 2.5 : cursorSize / 2)}px)`,
  };

  return (
    <div
      className={`${styles.cursor} ${isHovering ? styles.hovering : ""}`}
      style={cursorStyle}
      ref={hoverRef}
    />
  );
};

export default Cursor;
