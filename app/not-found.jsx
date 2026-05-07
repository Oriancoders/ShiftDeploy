'use client';
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from 'next/link';
import { Home } from "lucide-react";
import { fadeInUp, staggerContainer } from "../src/utils/animations";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  // Smooth mouse follower values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleMouseMove = (e) => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      // Calculate offset from center (-50 to 50 for parallax)
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-white overflow-hidden flex items-center justify-center pt-24 pb-10 relative"
    >
      {/* Interactive Parallax Background Shapes */}
      {isMounted && (
        <>
          <motion.div
            style={{ x: smoothX, y: smoothY }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[100px] pointer-events-none"
          />
          <motion.div
            style={{ x: smoothX, y: smoothY, translateX: -20, translateY: -20 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/10 rounded-full blur-[100px] pointer-events-none"
          />
        </>
      )}

      {/* Subtle techy grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6 sm:space-y-8"
        >
          {/* Huge 404 Heading with Techy Shadow/Glow */}
          <motion.div variants={fadeInUp} className="flex justify-center relative">
            <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-primaryBlue leading-none tracking-tight relative z-10 drop-shadow-sm">
              404
            </h1>
            {/* Outline highlight effect */}
            <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-transparent leading-none tracking-tight absolute top-2 -left-2 z-0" style={{ WebkitTextStroke: '2px rgba(255, 102, 0, 0.1)' }}>
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Mission <span className="text-primaryOrange">Aborted.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We couldn't locate the coordinates you requested. It might have been moved, renamed, or never existed in our system.
            </p>
          </motion.div>

          {/* simple CTA Button */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/"
              className="group flex items-center justify-center gap-3 bg-primaryBlue text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryOrange transition-colors duration-300 w-full sm:w-auto shadow-xl hover:shadow-primaryOrange/25 hover:-translate-y-1"
            >
              <Home className="w-5 h-5" />
              <span>Go to Homepage</span>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
}
