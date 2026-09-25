'use client';
import React from 'react';
import { m as motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import { fadeIn, sparkleVariants, staggerContainer } from './constants';

export default function HeroLeftContent({ animateEnabled, onPrimaryAction, onDemoAction }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl relative">
      <motion.div variants={fadeIn} className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.secondaryBlue)_0%,theme(colors.primaryOrange)_50%,theme(colors.secondaryBlue)_100%)]" />
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-primaryBlue text-blue-200 text-sm font-semibold backdrop-blur-md relative z-10">
          <span className="relative flex size-3 mr-3">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-primaryOrange opacity-75" />
            <span className="relative inline-flex rounded-full size-3 bg-primaryOrange" />
          </span>
          Enquiry and Booking Support
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="relative">
        <motion.div variants={sparkleVariants} initial="initial" animate="animate" className="absolute -top-6 -left-6 z-0">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="currentColor" fillOpacity="0.5" />
          </svg>
        </motion.div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-white relative z-10">
          AI Receptionist<br />
          <span className="text-primaryOrange">for UK Businesses</span>
        </h1>
      </motion.div>

      <motion.p variants={fadeIn} className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed mix-blend-screen border-l-4 border-secondaryBlue pl-4">
        Help visitors ask questions and request appointments outside office hours. We configure your receptionist around your UK business, booking tools and team handover.
      </motion.p>

      <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
        <button
          type="button"
          onClick={() => onPrimaryAction?.()}
          className="relative group overflow-hidden bg-white text-primaryBlue px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange to-toOrange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
            Deploy Your AI Agent <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        <button
          type="button"
          onClick={() => onDemoAction?.()}
          className="group bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center border border-white/10 backdrop-blur-md hover:border-white/30"
        >
          See Live Demo <Bot className="ml-2 size-5 text-secondaryBlue group-hover:rotate-12 transition-transform" />
        </button>
      </motion.div>


    </motion.div>
  );
}
