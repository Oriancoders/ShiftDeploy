import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Magnet({ children, className = '', strength = 18 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const rotateX = useTransform(springY, [-strength, strength], [3, -3]);
  const rotateY = useTransform(springX, [-strength, strength], [-3, 3]);

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nextX = ((event.clientX - rect.left) / rect.width - 0.5) * strength * 2;
    const nextY = ((event.clientY - rect.top) / rect.height - 0.5) * strength * 2;
    x.set(nextX);
    y.set(nextY);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}