'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import HeroLeftContent from './Hero/HeroLeftContent';
import HeroRightVisual from './Hero/HeroRightVisual';

export default function HeroSection({ onPrimaryAction, onDemoAction }) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-20% 0px -20% 0px' });
  const animateEnabled = !reduceMotion && isInView;

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-primaryBlue">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={animateEnabled ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : { opacity: 0.3 }}
          transition={animateEnabled ? { duration: 8, repeat: Infinity, ease: 'easeInOut' } : undefined}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-secondaryBlue rounded-full blur-[140px] md:blur-[180px] mix-blend-normal md:mix-blend-screen transform-gpu [will-change:transform,opacity]"
        />
        <motion.div
          animate={animateEnabled ? { scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] } : { opacity: 0.2 }}
          transition={animateEnabled ? { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 } : undefined}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-primaryOrange rounded-full blur-[140px] md:blur-[180px] mix-blend-normal md:mix-blend-screen transform-gpu [will-change:transform,opacity]"
        />
        
        {/* Modern CSS Grid Pattern instead of external image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-30" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-20">
          <HeroLeftContent animateEnabled={animateEnabled} onPrimaryAction={onPrimaryAction} onDemoAction={onDemoAction} />
        </div>
        <div className="relative z-10 pointer-events-none">
          <HeroRightVisual reduceMotion={reduceMotion} animateEnabled={animateEnabled} />
        </div>
      </div>
    </section>
  );
}
