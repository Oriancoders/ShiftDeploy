import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader() {
  return (
    <div className="text-center mb-16 relative">
      <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primaryOrange font-bold tracking-wider uppercase text-sm mb-3 block">
        Why this converts better
      </motion.span>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl text-primaryBlue font-extrabold mb-6 leading-tight">
        The gap between <br className="hidden md:block" />{' '}
        <span className="relative inline-block">
          <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 -z-10 transform -rotate-1" />
          traffic and booked patients
        </span>
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Clinics can get the website visits, paid traffic, and word-of-mouth attention they want, then still lose patients if nobody handles questions and booking intent in the moment.
      </motion.p>
    </div>
  );
}
