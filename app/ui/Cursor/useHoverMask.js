import { useState, useEffect, useRef } from "react";

export const useHoverMask = (cursorSize) => {
  const [isHovering, setIsHovering] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const size = isHovering ? cursorSize * 5 : cursorSize;
      const halfSize = size / 2;

      if (isHovering && hoverRef.current) {
        const offsetX = event.clientX;
        const offsetY = event.clientY;

        hoverRef.current.style.WebkitMaskPosition = `${offsetX - halfSize}px ${
          offsetY - halfSize
        }px`;
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
  }, [cursorSize, isHovering]);

  return { isHovering, hoverRef };
};
