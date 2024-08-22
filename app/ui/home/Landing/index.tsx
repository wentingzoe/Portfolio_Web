"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems, socialItems, shapeImages } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Landing() {
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

  return (
    <section className={styles.landing}>
      <div className={styles.landing__container}>
        {/* Icon */}
        <div className={`${styles.grid} ${styles.icon}`}>
          {["square", "circle", "triangle", "smallcircle"].map((shape) => (
            <span key={shape} className={styles[`icon__${shape}`]} />
          ))}
        </div>

        {/* Name */}
        <div className={`${styles.grid} ${styles.name}`}>
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
        <div className={`${styles.grid} ${styles.title}`}>
          <h1 className={styles.title__creative}>CREATIVE</h1>
          <div className={styles.title__item}>
            <h1>Developer</h1>
            <h1>&Designer</h1>
          </div>
        </div>

        {/* Location */}
        <div className={`${styles.grid} ${styles.location}`}>
          <div className={styles.location__icon}>
            <Image src="/images/icon_loction.svg" alt="location" fill />
          </div>
          <div className={styles.location__text}>
            <h4>Based in</h4>
            <h4>CANADA/EST</h4>
            <h4>{time}</h4>
          </div>
        </div>

        {/* Contact */}
        <div className={`${styles.grid} ${styles.contact}`}>
          <div className={styles.contact__iconGroup}>
            {[...Array(9)].map((_, index) => {
              const socialItem = socialItems[(index - 3) as number];
              return (
                <div key={index} className={styles.contact__gridItem}>
                  {index >= 3 && index < 6 && socialItem ? (
                    <a
                      className={styles.contact__social}
                      href={socialItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={`/images/${socialItem.src}`}
                        alt={socialItem.title}
                        fill
                      />
                    </a>
                  ) : (
                    <div className={styles.contact__shape} />
                  )}
                </div>
              );
            })}
          </div>
          <Link href="/contact" className={styles.contact__text}>
            <h3>Contact</h3>
          </Link>
        </div>

        {/* Menu */}
        {navItems.slice(1, -1).map((item, index) => {
          const menuClass = `menu__${item.title.toLowerCase()}`;
          const shapeClass = `menu__shape--${item.title.toLowerCase()}`;
          const ImageClass = `menu__icon__image`;

          return (
            <div
              key={item.title}
              className={`${styles.grid} ${styles.menu} ${styles[menuClass]}`}
            >
              <Link href={item.href} className={styles.menu__nav}>
                <div className={styles.menu__icon}>
                  <Image
                    className={styles[ImageClass]}
                    src={`/images/shape_${item.title.toLowerCase()}.svg`}
                    alt={item.title}
                    fill
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
        })}

        {/* Version */}
        <div className={`${styles.grid} ${styles.version}`}>
          <h4 className={styles.version__text}>© 2024</h4>
        </div>

        <div className={`${styles.grid} ${styles.halfCircle}`}>
          <div className={styles.halfCircle__inner} />
        </div>

        {/* Shape Images */}
        {[...Array(8)].map((_, index) => {
          const shapeIndex = [0, 2, 5, 7];
          const shapeName = `shape__${index}`;
          const shapeImage = `shape__${index}__image`;

          if (shapeIndex.includes(index)) {
            const imageIndex = shapeIndex.indexOf(index);
            const image = shapeImages[imageIndex];

            return (
              <div
                key={`shape_image_${index}`}
                className={`${styles.grid} ${styles.shape} ${styles[shapeName]}`}
              >
                <Image
                  className={styles[shapeImage]}
                  src={`/images/${image}`}
                  alt={`Shape ${imageIndex + 1}`}
                  fill
                />
              </div>
            );
          } else {
            return (
              <div
                key={`shape_empty_${index}`}
                className={`${styles.grid} ${styles.shape}`}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
