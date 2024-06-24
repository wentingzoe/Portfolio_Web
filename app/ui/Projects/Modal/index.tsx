"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { modalScale } from "@/app/common/animations";

export default function Modal({
  projects,
  modal,
}: {
  projects: any;
  modal: any;
}) {
  const { active, index } = modal;
  const container = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);
  return (
    <motion.div
      ref={container}
      variants={modalScale}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.container}
    >
      <div style={{ top: index * -100 + "%" }} className={styles.slider}>
        {projects.map((project: any, index: any) => {
          const { src, color, title } = project;
          return (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: color }}
              className={styles.modal}
            >
              <Image
                className={styles.image}
                src={`/images/${src}`}
                alt={title}
                width={300}
                height={0}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
