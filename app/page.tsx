"use client";
import { useEffect } from "react";
import styles from "@/app/home.module.scss";
import Landing from "@/app/ui/home/Landing";
import Projects from "@/app/ui/home/Projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <SlidingImages />
      <Contact /> */}
      <Landing />
      <Projects />
    </main>
  );
}
