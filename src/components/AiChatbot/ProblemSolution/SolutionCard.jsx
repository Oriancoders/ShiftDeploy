import React from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp } from 'lucide-react';
import { solutionItems } from './constants';

export default function SolutionCard() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 50 }}
      viewport={{ once: true }}
      className="bg-toBlue text-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(67,97,238,0.2)] flex flex-col relative overflow-hidden transform md:scale-105 z-10 border border-blue-800/50"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondaryBlue to-primaryOrange blur-[80px] rounded-full opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="w-14 h-14 bg-gradient-to-br from-primaryOrange to-orange-600 rounded-2xl flex items-center justify-center mb-8 border border-orange-400 shadow-lg relative z-10">
        <TrendingUp className="w-7 h-7 text-white" />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight flex items-center">
          With Digital Receptionist 
          <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 uppercase tracking-widest font-black">
            Clinic-specific
          </span>
        </h3>
        <div className="h-1 w-12 bg-primaryOrange rounded-full mb-6" />
      </div>

      <ul className="space-y-5 mb-10 flex-grow z-10 relative">
        {solutionItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-start text-blue-50 font-medium leading-relaxed"
          >
            <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
              <Check className="w-3.5 h-3.5 text-green-400" />
            </div>
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="bg-white/10 p-4 sm:p-5 rounded-2xl mt-auto border border-white/20 backdrop-blur-sm z-10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6 relative z-10">
          <div>
            <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">Better Experience</p>
            <p className="text-white font-extrabold text-xl sm:text-2xl leading-tight flex items-center flex-wrap gap-x-1">
              <span className="text-green-400 mr-1">+</span>Faster replies<span className="text-blue-200 text-sm sm:text-base font-semibold"> 24/7</span>
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">Team Impact</p>
            <p className="text-green-400 font-extrabold text-xl sm:text-2xl leading-tight">More booked consults</p>
            <p className="text-blue-200 text-sm font-semibold mt-1">Less manual follow-up</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
