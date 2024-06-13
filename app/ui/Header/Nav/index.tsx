import styles from "./style.module.scss";
import NavLink from "./NavLink";
import Social from "./Social";
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
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.header}>
            <h5>Navigation</h5>
          </div>
          {navItems.map((item, index) => {
            return <NavLink key={index} data={{ ...item, index }} />;
          })}
        </div>
        <Social />
      </div>
      <Curve />
    </motion.div>
  );
}
