"use client";
import { useEffect } from "react";
import styles from "@/app/ui/page.module.scss";
import Landing from "@/app/ui/Landing";
import Header from "@/app/ui/Header";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <div>
        {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact /> */}
        <Header />
        <Landing />
      </div>
    </main>
  );
}
