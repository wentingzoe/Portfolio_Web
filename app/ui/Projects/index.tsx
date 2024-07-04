import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
import { projects } from "@/app/lib/data";

export default function Index() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        {projects.map((project, index) => {
          return (
            <div className={styles.project} key={index}>
              <Project
                index={index}
                title={project.title}
                role={project.role}
                setModal={setModal}
              />
            </div>
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
}
