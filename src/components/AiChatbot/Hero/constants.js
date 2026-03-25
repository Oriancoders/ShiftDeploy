export const CHAT_MESSAGES = [
  { text: 'Hi! Do you have any appointments available tomorrow evening?', sender: 'user' },
  { text: 'Hello! Yes, we have openings at 5:30 PM and 6:15 PM. I can book one for you right now.', sender: 'bot' },
  { text: '5:30 PM works great. Can you book it?', sender: 'user' },
  { text: 'All set! Your appointment is confirmed. A calendar invite has been sent. ✅', sender: 'bot' },
];

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const floatingAnimation1 = {
  animate: {
    y: [0, -20, 0],
    rotate: [-2, 2, -2],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const floatingAnimation2 = {
  animate: {
    y: [0, 20, 0],
    rotate: [2, -2, 2],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
  },
};

export const sparkleVariants = {
  initial: { scale: 0, opacity: 0, rotate: -45 },
  animate: {
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    rotate: [-45, 45, 90],
    transition: { duration: 2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' },
  },
};
