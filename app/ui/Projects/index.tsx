"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import Project from "./Project"; // Import the Project component

export default function Index() {
  const projects = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
    },
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        {projects.map((project, index) => {
          return <Project key={index} project={project} setModal={setModal} />;
        })}
      </div>
    </div>
  );
}
