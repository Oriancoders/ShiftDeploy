import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bot, ArrowRight, CheckCircle2, DollarSign, CalendarCheck, Bell, Clock } from 'lucide-react';
export default function HeroSection({ activeTab, setActiveTab }) {
  const [chatStep, setChatStep] = useState(0);
  useEffect(() => { const timer = setInterval(() => { setChatStep(prev => (prev < 3 ? prev + 1 : 0)); }, 3000); return () => clearInterval(timer); }, []);
  const chatMessages = [ { text: "Hi! Do you have any appointments available tomorrow evening?", sender: "user" }, { text: "Hello! Yes, we have openings at 5:30 PM and 6:15 PM. I can book one for you right now.", sender: "bot" }, { text: "5:30 PM works great. Can you book it?", sender: "user" }, { text: "All set! Your appointment is confirmed. A calendar invite has been sent. ??", sender: "bot" } ];
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const floatingAnimation1 = { animate: { y: [0, -20, 0], rotate: [-2, 2, -2], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } } };
  const floatingAnimation2 = { animate: { y: [0, 20, 0], rotate: [2, -2, 2], transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } } };
  const sparkleVariants = { initial: { scale: 0, opacity: 0, rotate: -45 }, animate: { scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [-45, 45, 90], transition: { duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" } } };
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#0C1F3A]">
        {/* Dynamic Background Glows */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#4361EE] rounded-full blur-[180px] mix-blend-screen"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#F76707] rounded-full blur-[180px] mix-blend-screen"
          />
          
          {/* subtle grid or pattern layer can go here */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F3A] to-transparent opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl relative">
            
            {/* Value prop pill with sweeping gradient */}
            <motion.div variants={fadeIn} className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4361EE_0%,#F76707_50%,#4361EE_100%)]" />
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0C1F3A] text-blue-200 text-sm font-semibold backdrop-blur-md relative z-10">
                <span className="relative flex h-3 w-3 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryOrange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primaryOrange"></span>
                </span>
                Recoup 30% of Lost Clients
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="relative">
               {/* Decorative Sparkle */}
               <motion.div 
                  variants={sparkleVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute -top-6 -left-6 z-0"
               >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" fill="#F76707" fillOpacity="0.5"/>
                  </svg>
               </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-extrabold leading-[1.05] mb-6 text-white drop-shadow-xl relative z-10 tracking-tight">
                Capture Bookings.<br />
                <span className="relative">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F76707] via-[#FF8C3A] to-[#F76707] animate-text-gradient bg-300%">Even While You</span>
                   <motion.div 
                      className="inline-block mx-2"
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                   >
                     😴
                   </motion.div>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F76707] via-[#FF8C3A] to-[#F76707] animate-text-gradient bg-300%">Sleep.</span>
                   {/* Animated underline */}
                   <motion.div 
                     initial={{ scaleX: 0 }}
                     animate={{ scaleX: 1 }}
                     transition={{ duration: 1, delay: 0.8 }}
                     className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#F76707] to-transparent origin-left rounded-full"
                   />
                </span>
              </h1>
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-xl leading-relaxed mix-blend-screen border-l-4 border-secondaryBlue pl-4">
              Your business doesn't have to stop when your doors close. Deploy an autonomous AI receptionist that engages, qualifies, and schedules leads 24/7.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5">
              <button className="relative group overflow-hidden bg-white text-[#0C1F3A] px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange to-[#FF8C3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                  Deploy Your AI Agent <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group bg-[#ffffff0a] hover:bg-[#ffffff15] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center border border-white/10 backdrop-blur-md hover:border-white/30">
                See Live Demo <Bot className="ml-2 w-5 h-5 text-secondaryBlue group-hover:rotate-12 transition-transform" />
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 justify-start">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                     <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0C1F3A] z-10" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  ))}
               </div>
               <div className="text-sm">
                  <div className="flex items-center text-[#F76707] font-bold">
                     ★★★★★ <span className="text-white ml-2">5.0</span>
                  </div>
                  <p className="text-gray-400">Trusted by 500+ Local Businesses</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Visual Content (3D Isometric Floating UI) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-[2000px] w-full max-w-xl mx-auto h-[600px] flex items-center justify-center"
          >
            {/* Central glowing orb behind the chat */}
            <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute w-64 h-64 bg-secondaryBlue rounded-full blur-[100px] z-0"
            />

            {/* The Main Chat Interface - Tilted in 3D */}
            <motion.div
               animate={{ 
                 rotateX: [10, 15, 10], 
                 rotateY: [-15, -10, -15],
                 y: [-10, 10, -10]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[28px] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-10 w-full relative preserve-3d"
               style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glass reflection layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[26px] pointer-events-none z-20"></div>

              <div className="bg-[#0b172a] rounded-[24px] overflow-hidden flex flex-col h-[480px] shadow-inner relative z-10">
                {/* Mac OS Style Header */}
                <div className="px-5 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="flex space-x-1.5 border-r border-white/10 pr-3 mr-1">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4361EE] to-[#1D4eD8] rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                        <Bot className="w-5 h-5 text-white transform -rotate-3" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-[15px]">Shift Receptionist</h3>
                      <p className="text-green-400/80 text-[11px] font-medium tracking-wide flex items-center">
                         <span className="relative flex h-2 w-2 mr-1">
                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                           <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                         </span>
                         Live & Active
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/70 border border-white/5">
                     v2.0 Beta
                  </div>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-5 scrollbar-hide">
                  <AnimatePresence>
                    {chatMessages.map((msg, index) => (
                      index <= chatStep && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -20 }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className={`max-w-[88%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-lg ${
                            msg.sender === 'user' 
                              ? 'bg-gradient-to-br from-[#2b3a55] to-[#1e293b] text-white rounded-br-sm self-end border border-white/5' 
                              : 'bg-gradient-to-br from-[#F76707] to-[#D83A21] text-white rounded-bl-sm self-start shadow-[0_10px_30px_rgba(247,103,7,0.3)]'
                          }`}
                        >
                          {msg.text}
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                  
                  {chatStep < 3 && (
                     <div className="self-start mt-2">
                       <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex space-x-1.5 py-3.5 px-5 bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm w-16 justify-center shadow-inner"
                       >
                         <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                         <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                         <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                       </motion.div>
                     </div>
                  )}
                </div>
                
                {/* Fake Input Area */}
                <div className="p-4 border-t border-white/10 bg-[#0B1D30]">
                   <div className="bg-white/5 border border-white/10 rounded-full py-3 px-5 flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Automating your growth...</span>
                      <div className="w-6 h-6 rounded-full bg-secondaryBlue flex items-center justify-center">
                         <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Float 1: The ROI indicator (popping out in 3D) */}
            <motion.div 
              variants={floatingAnimation1} 
              animate="animate" 
              className="absolute -left-16 top-32 bg-[#1a2b45]/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-green-500/30 flex items-center gap-4 z-30 w-64 ring-1 ring-white/10 hidden md:flex"
              style={{ transform: 'translateZ(60px)' }} // 3D pop out
            >
               <div className="bg-green-100 p-2.5 rounded-xl shadow-inner text-green-600"><CalendarCheck size={24}/></div>
               <div>
                  <p className="text-white font-bold text-[15px] leading-tight">Booking at 2:15 AM</p>
                  <p className="text-gray-400 text-xs mt-0.5 flex items-center"><DollarSign className="w-3 h-3 text-green-500 mr-0.5"/> <strong className="text-green-500 font-bold">+$150</strong> Value Secured</p>
               </div>
            </motion.div>

            {/* Floating Value Prop Card 2 - Notification */}
            <motion.div 
              variants={floatingAnimation2} 
              animate="animate" 
              className="absolute -right-12 bottom-20 bg-[#1a2b45]/90 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-orange-500/30 flex items-center gap-4 z-30 w-60 ring-1 ring-white/10 hidden md:flex"
              style={{ transform: 'translateZ(80px)' }} // 3D pop out
            >
               <div className="bg-orange-500/20 p-2.5 rounded-xl shadow-inner text-primaryOrange relative border border-orange-500/30">
                  <Bell size={24}/>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1a2b45] animate-pulse"></span>
               </div>
               <div>
                  <p className="text-white font-bold text-[15px] leading-tight drop-shadow-md">New Client Saved</p>
                  <p className="text-gray-400 text-xs mt-0.5">They almost bounced.</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem vs Solution Section */}
    </>
  );
}