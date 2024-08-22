"use client";
import { useEffect, useState } from "react";
import styles from "@/app/ui/home/home.module.scss";
import Landing from "@/app/ui/home/Landing/index";
import Projects from "@/app/ui/home/Projects";
import useMousePosition from "@/app/lib/useMousePosition";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Projects />
    </main>
  );
}
