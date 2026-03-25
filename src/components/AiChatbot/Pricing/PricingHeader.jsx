import React from 'react';
import { motion } from 'framer-motion';

export default function PricingHeader() {
  return (
    <div className="text-center mb-16 relative">
      <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primaryOrange font-bold tracking-wider uppercase text-sm mb-3 block">
        Transparent Pricing
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl text-primaryBlue font-extrabold mb-6 tracking-tight"
      >
        An investment that pays for <br className="hidden md:block" /> itself in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-orange-400">the first week.</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-lg max-w-3xl mx-auto"
      >
        Pick the plan that fits your current stage. Every plan is built to capture more leads, reduce missed bookings, and improve front-desk efficiency.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.28 }}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700">No setup fee</span>
        <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700">Cancel anytime</span>
        <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700">Fast onboarding</span>
      </motion.div>
    </div>
  );
}
