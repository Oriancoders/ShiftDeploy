import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function BlobCursor() {
  const [visible, setVisible] = useState(false);
  const springX = useSpring(-100, { stiffness: 180, damping: 22, mass: 0.6 });
  const springY = useSpring(-100, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    const onMove = (event) => {
      springX.set(event.clientX);
      springY.set(event.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
    };
  }, [springX, springY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 hidden lg:block" aria-hidden="true">
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ opacity: visible ? 0.24 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute -ml-20 -mt-20 h-40 w-40 rounded-full bg-secondaryBlue/30 blur-3xl"
      />
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{ opacity: visible ? 0.18 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute -ml-12 -mt-12 h-24 w-24 rounded-full bg-primaryOrange/30 blur-2xl"
      />
    </div>
  );
}