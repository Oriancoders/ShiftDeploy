import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CalendarCheck, Bell } from 'lucide-react';
import ChatInterface from './ChatInterface';
import { floatingAnimation1, floatingAnimation2 } from './constants';

export default function HeroRightVisual({ reduceMotion, animateEnabled }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative perspective-[2000px] w-full max-w-xl mx-auto h-[600px] flex items-center justify-center">
      <motion.div
        animate={animateEnabled ? { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] } : { opacity: 0.5 }}
        transition={animateEnabled ? { duration: 4, repeat: Infinity } : undefined}
        className="absolute w-64 h-64 bg-secondaryBlue rounded-full blur-[100px] z-0 transform-gpu [will-change:transform,opacity]"
      />

      <ChatInterface reduceMotion={reduceMotion} animateEnabled={animateEnabled} />

      <motion.div
        variants={floatingAnimation1}
        animate={animateEnabled ? 'animate' : undefined}
        className="absolute -left-16 top-32 bg-[#1a2b45]/90 backdrop-blur-lg md:backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-green-500/30 flex items-center gap-4 z-30 w-64 ring-1 ring-white/10 hidden md:flex transform-gpu [will-change:transform]"
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className="bg-green-100 p-2.5 rounded-xl shadow-inner text-green-600">
          <CalendarCheck size={24} />
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight">Booking at 2:15 AM</p>
          <p className="text-gray-400 text-xs mt-0.5 flex items-center">
            <DollarSign className="w-3 h-3 text-green-500 mr-0.5" /> <strong className="text-green-500 font-bold">+$150</strong> Value Secured
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={floatingAnimation2}
        animate={animateEnabled ? 'animate' : undefined}
        className="absolute -right-12 bottom-20 bg-[#1a2b45]/90 backdrop-blur-lg md:backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-orange-500/30 flex items-center gap-4 z-30 w-60 ring-1 ring-white/10 hidden md:flex transform-gpu [will-change:transform]"
        style={{ transform: 'translateZ(80px)' }}
      >
        <div className="bg-orange-500/20 p-2.5 rounded-xl shadow-inner text-primaryOrange relative border border-orange-500/30">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1a2b45] animate-pulse" />
        </div>
        <div>
          <p className="text-white font-bold text-[15px] leading-tight drop-shadow-md">New Client Saved</p>
          <p className="text-gray-400 text-xs mt-0.5">They almost bounced.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
