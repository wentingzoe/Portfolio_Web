"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems, socialItems, shapeImages } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const estTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(estTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderGridItems = () =>
    [...Array(18)].map((_, index) => (
      <div
        key={index}
        className={`${styles.grid} ${styles[`grid__${index + 1}`]}`}
      />
    ));

  const renderSocialIcons = () => (
    <div className={styles.contact__iconGroup}>
      {[...Array(9)].map((_, index) => {
        const socialItem = socialItems[(index - 3) as number];
        return (
          <div key={index} className={styles.contact__gridItem}>
            {index >= 3 && index < 6 && socialItem ? (
              <a
                href={socialItem.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/images/${socialItem.src}`}
                  alt={socialItem.title}
                  layout="responsive"
                  width={40}
                  height={40}
                />
              </a>
            ) : (
              <div className={styles.contact__shape} />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderNavItems = () => {
    return navItems.slice(1, -1).map((item, index) => {
      const gridClass = `grid__${index + 6}`;
      const shapeClass = `menu__shape__${item.title.toLowerCase()}`;

      return (
        <div key={item.title} className={`${styles[gridClass]} ${styles.menu}`}>
          <Link href={item.href} className={styles.menu__nav}>
            <div className={styles.menu__icon}>
              <Image
                src={`/images/shape_${item.title.toLowerCase()}.svg`}
                alt={item.title}
                layout="responsive"
                width={100}
                height={40}
              />
            </div>
            <div className={styles.menu__text}>
              <h3>{item.title}</h3>
            </div>
          </Link>
          <div className={styles.menu__shape}>
            <div className={styles[shapeClass]} />
          </div>
        </div>
      );
    });
  };

  return (
    <section className={styles.landing}>
      <div className={styles.landing__container}>
        {renderGridItems()}

        {/* Icon */}
        <div className={`${styles.grid__1} ${styles.icon}`}>
          {["square", "circle", "triangle", "smallcircle"].map((shape) => (
            <span key={shape} className={styles[`icon__${shape}`]} />
          ))}
        </div>

        {/* Name */}
        <div className={`${styles.grid__2} ${styles.name}`}>
          <div className={styles.name__first}>
            <span>Code by</span>
            <h1>WenTing</h1>
          </div>
          <div className={styles.name__last}>
            <div className={styles["small-circle"]} />
            <h1>Yong</h1>
          </div>
        </div>

        {/* Title */}
        <div className={`${styles.grid__3} ${styles.title}`}>
          <h1 className={styles.title__creative}>CREATIVE</h1>
          <div className={styles.title__item}>
            <h1>Developer</h1>
            <h1>&Designer</h1>
          </div>
        </div>

        {/* Location */}
        <div className={`${styles.grid__4} ${styles.location}`}>
          <div className={styles.location__icon}>
            <Image
              src="/images/icon_loction.svg"
              alt="location"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.location__text}>
            <h4>Based in</h4>
            <h4>CANADA/EST</h4>
            <h4>{time}</h4>
          </div>
        </div>

        {/* Contact */}
        <div className={`${styles.grid__5} ${styles.contact}`}>
          {renderSocialIcons()}
          <Link href="/contact" className={styles.contact__text}>
            <h3>Contact</h3>
          </Link>
        </div>

        {/* Menu grid__6,7,8 */}
        {renderNavItems()}

        {/* Version */}
        <div className={`${styles.grid__9} ${styles.version}`}>
          <h4 className={styles.version__text}>© 2024</h4>
        </div>

        <div className={`${styles.grid__10} ${styles.halfCircle}`}>
          <div className={styles.halfCircle__inner} />
        </div>

        {/* Shape Images */}
        {shapeImages.map((image, index) => (
          <div
            key={image}
            className={`${styles[`grid__${index + 11}`]} ${styles.shape}`}
          >
            <Image
              src={`/images/${image}`}
              alt="shape"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
