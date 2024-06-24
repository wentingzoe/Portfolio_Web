"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { modalScale } from "@/app/common/animations";
interface ModalProps {
  projects: {
    title: string;
    src: string;
    color: string;
    role: string;
    url: string;
  }[];
  modal: {
    active: boolean;
    index: number;
  };
}

export default function Modal({ projects, modal }: ModalProps) {
  const { active, index } = modal;
  return (
    <motion.div
      variants={modalScale}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.container}
    >
      <div style={{ top: index * -100 + "%" }} className={styles.slider}>
        {projects.map((project, index) => {
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
