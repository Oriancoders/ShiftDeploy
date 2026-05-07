'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader() {
  return (
    <div className="text-center mb-16 relative">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primaryOrange font-bold tracking-wider uppercase text-sm mb-3 block"
      >
        The ROI Equation
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl text-primaryBlue font-extrabold mb-6 leading-tight"
      >
        The True Cost of a <br className="hidden md:block" />{' '}
        <span className="relative inline-block">
          <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 -z-10 transform -rotate-1" />
          Traditional Setup
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Service businesses lose up to <strong className="text-red-500 font-bold">30% of their potential bookings</strong> simply because clients try to reach out outside of normal business hours.
      </motion.p>
    </div>
  );
}
