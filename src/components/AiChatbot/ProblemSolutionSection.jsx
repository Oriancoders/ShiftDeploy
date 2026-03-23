import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CalendarCheck, Clock, TrendingUp, Users, CheckCircle2, X, Check } from 'lucide-react';
export default function ProblemSolutionSection({ activeTab, setActiveTab }) {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  return (
    <>
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16 relative">
             <motion.span 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primaryOrange font-bold tracking-wider uppercase text-sm mb-3 block"
             >
               The ROI Equation
             </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="text-3xl md:text-5xl text-primaryBlue font-extrabold mb-6 leading-tight"
            >
               The True Cost of a <br className="hidden md:block"/> <span className="relative inline-block"><span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 -z-10 transform -rotate-1"></span>Traditional Setup</span>
            </motion.h2>
            <motion.p 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
               Service businesses lose up to <strong className="text-red-500 font-bold">30% of their potential bookings</strong> simply because clients try to reach out outside of normal business hours.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch relative">
            
            {/* VS Badge in the middle */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl z-20 items-center justify-center font-black text-xl text-gray-400 border-4 border-gray-50">
               VS
            </div>

            {/* The Problem */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col relative overflow-hidden group hover:border-red-100 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-10 -mt-10 z-0 transition-transform group-hover:scale-110 duration-500"></div>
              
              <div className="w-14 h-14 bg-red-50/80 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-red-100">
                <Clock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 relative z-10 tracking-tight">Without AI Agent</h3>
              
              <ul className="space-y-5 mb-10 flex-grow relative z-10">
                {[
                  "Missed calls from evening & weekend visitors",
                  "Staff spending 10+ hours/week on tedious scheduling",
                  "High bounce rate: impatient clients moving to competitors",
                  "Vague voicemails that require manual follow-ups"
                ].map((item, i) => (
                  <motion.li 
                     key={i}
                     initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 + (i*0.1) }}
                     className="flex items-start text-gray-600 font-medium leading-relaxed"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                       <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-red-50 to-white p-5 rounded-2xl mt-auto border border-red-100/50 relative z-10">
                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-red-800/60 text-xs font-bold uppercase tracking-wider mb-1">Estimated Loss</p>
                       <p className="text-red-600 font-extrabold text-2xl">~$2,400<span className="text-red-400 text-base font-semibold">/mo</span></p>
                    </div>
                    <div className="text-right">
                       <p className="text-red-800/60 text-xs font-bold uppercase tracking-wider mb-1">Lost Clients</p>
                       <p className="text-red-600 font-extrabold text-2xl">12+<span className="text-red-400 text-base font-semibold">/mo</span></p>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              className="bg-toBlue text-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(67,97,238,0.2)] flex flex-col relative overflow-hidden transform md:scale-105 z-10 border border-blue-800/50"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondaryBlue to-primaryOrange blur-[80px] rounded-full opacity-30 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-primaryOrange to-orange-600 rounded-2xl flex items-center justify-center mb-8 border border-orange-400 shadow-lg relative z-10">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              
              <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white tracking-tight flex items-center">
                    With Shift AI <span className="ml-3 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 uppercase tracking-widest font-black">Winning</span>
                 </h3>
                 <div className="h-1 w-12 bg-primaryOrange rounded-full mb-6"></div>
              </div>

              <ul className="space-y-5 mb-10 flex-grow z-10 relative">
                {[
                  "Instant responses & 24/7 self-serve booking",
                  "Automated calendar syncs = Zero manual data entry",
                  "Staff focused purely on in-person client experience",
                  "Capture competitors' leads while they are closed"
                ].map((item, i) => (
                  <motion.li 
                     key={i}
                     initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ delay: 0.4 + (i*0.1) }}
                     className="flex items-start text-blue-50 font-medium leading-relaxed"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                       <Check className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="bg-white/10 p-5 rounded-2xl mt-auto border border-white/20 backdrop-blur-sm z-10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                 <div className="flex justify-between items-end relative z-10">
                    <div>
                       <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">New Revenue</p>
                       <p className="text-white font-extrabold text-2xl flex items-center"><span className="text-green-400 mr-1">+</span>$2,400<span className="text-blue-200 text-base font-semibold">/mo</span></p>
                    </div>
                    <div className="text-right">
                       <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">ROI</p>
                       <p className="text-green-400 font-extrabold text-2xl">450%<span className="text-blue-200 text-base font-semibold">↑</span></p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Features / ROI Section */}
    </>
  );
}