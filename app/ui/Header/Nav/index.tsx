import styles from "./style.module.scss";
import Link from "./Link";
import Footer from "./Footer";
import Curve from "./Curve";
import { menuSlide } from "../animations";
import { motion } from "framer-motion";

export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link key={index} data={{ ...item, index }} />;
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
