import React from 'react';
import { motion } from 'framer-motion';
import { Clock, X } from 'lucide-react';
import { problemItems } from './constants';

export default function ProblemCard() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col relative overflow-hidden group hover:border-red-100 transition-colors"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-10 -mt-10 z-0 transition-transform group-hover:scale-110 duration-500" />

      <div className="w-14 h-14 bg-red-50/80 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-red-100">
        <Clock className="w-7 h-7 text-red-500" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 relative z-10 tracking-tight">What clinics deal with today</h3>

      <ul className="space-y-5 mb-10 flex-grow relative z-10">
        {problemItems.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-start text-gray-600 font-medium leading-relaxed"
          >
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
              <X className="w-3.5 h-3.5 text-red-500" />
            </div>
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="bg-gradient-to-r from-red-50 to-white p-4 sm:p-5 rounded-2xl mt-auto border border-red-100/50 relative z-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6">
          <div>
            <p className="text-red-800/60 text-xs font-bold uppercase tracking-wider mb-1">Hidden Cost</p>
            <p className="text-red-600 font-extrabold text-xl sm:text-2xl leading-tight">
              Missed leads<span className="text-red-400 text-sm sm:text-base font-semibold"> daily</span>
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-red-800/60 text-xs font-bold uppercase tracking-wider mb-1">Operational Drag</p>
            <p className="text-red-600 font-extrabold text-xl sm:text-2xl leading-tight">
              Front desk overload<span className="text-red-400 text-sm sm:text-base font-semibold"> weekly</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
