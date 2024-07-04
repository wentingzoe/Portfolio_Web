export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
export const bgFade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 0.4,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

export const navLinkSlide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const navLinkScale = {
  enter: { scale: 1.5, transition: { duration: 0.2 } },
  hover: { scale: 1, transition: { duration: 0.2 } },
  exit: { scale: 0, transition: { duration: 0.4 } },
};

export const modalScale = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
