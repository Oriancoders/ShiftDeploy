export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const scaleOnHover = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  transition: { duration: 0.01 }
};

export const buttonHover = {
  initial: { scale: 1, backgroundColor: "#FF4500" },
  whileHover: { 
    scale: 1.05, 
    backgroundColor: "#e63e00",
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.95 }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const rotateOnHover = {
  initial: { rotate: 0 },
  whileHover: { rotate: 5 },
  transition: { duration: 0.3 }
};