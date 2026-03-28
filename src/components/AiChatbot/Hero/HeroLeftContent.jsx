import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import { fadeIn, sparkleVariants, staggerContainer } from './constants';
import { ContextAPI } from '../../../GlobalProvider/ContextAPI';

export default function HeroLeftContent({ animateEnabled, onDemoAction }) {
    const { isLeadModel , setIsLeadModel} = React.useContext(ContextAPI)
  
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl relative">
      <motion.div variants={fadeIn} className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.secondaryBlue)_0%,theme(colors.primaryOrange)_50%,theme(colors.secondaryBlue)_100%)]" />
        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-primaryBlue text-blue-200 text-sm font-semibold backdrop-blur-md relative z-10">
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryOrange opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primaryOrange" />
          </span>
          Recoup 30% of Lost Patients
        </div>
      </motion.div>

      <motion.div variants={fadeIn} className="relative">
        <motion.div variants={sparkleVariants} initial="initial" animate="animate" className="absolute -top-6 -left-6 z-0">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="currentColor" fillOpacity="0.5" />
          </svg>
        </motion.div>

        <h1 className="text-5xl md:text-6xl  font-extrabold leading-[1.05] mb-6 text-white drop-shadow-xl relative z-10 tracking-tight">
          Capture Bookings.
          <br />
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange via-primaryOrange to-primaryOrange animate-text-gradient bg-300%">Even While Your</span>
          <br />
            Whole team is away
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-primaryOrange to-transparent origin-left rounded-full "
            />
          </span>
        </h1>
      </motion.div>

      <motion.p variants={fadeIn} className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed mix-blend-screen border-l-4 border-secondaryBlue pl-4">
        Your business doesn't have to stop when your doors close. Deploy a digital receptionist that engages, qualifies, and schedules leads 24/7.
      </motion.p>

      <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
        <div
          onClick={() => setIsLeadModel(true)}
          className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md sm:w-fit w-full cursor-pointer"
        >
          
          <span className="relative z-10 flex items-center ">
            Get your Digital Receptionist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
        <button
          type="button"
          onClick={onDemoAction}
          className="group bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center border border-white/10 backdrop-blur-md hover:border-white/30"
        >
          Request a Demo <Bot className="ml-2 w-5 h-5 text-secondaryBlue group-hover:rotate-12 transition-transform" />
        </button>
      </motion.div>

      <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 justify-start">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <img key={i} className="w-10 h-10 rounded-full border-2 border-primaryBlue z-10" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" loading="lazy" decoding="async" />
          ))}
        </div>
        <div className="text-sm">
          <div className="flex items-center text-primaryOrange font-bold">
            ★★★★★ <span className="text-white ml-2">5.0</span>
          </div>
          <p className="text-gray-400">Valuable for a vast category of businesses</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
