import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, CheckCircle2 } from 'lucide-react';
export default function PricingSection() {
  return (
    <>
      <section className="py-20 md:py-32 bg-gray-50 relative border-t border-gray-200/60">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
           <div className="text-center mb-16 relative">
             <motion.span 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-primaryOrange font-bold tracking-wider uppercase text-sm mb-3 block"
             >
               Transparent Pricing
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl text-textColor font-extrabold mb-6 tracking-tight"
             >
               An investment that pays for <br className="hidden md:block"/> itself in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-orange-400">the first week.</span>
             </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
             {/* 1. Decoy / Starter Plan */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }}
               className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col h-[90%]"
             >
                <div className="mb-6">
                   <h3 className="text-xl font-bold text-gray-800">Essential</h3>
                   <p className="text-gray-500 text-sm mt-2">For solo practitioners</p>
                </div>
                <div className="mb-8">
                   <span className="text-4xl font-extrabold text-[#0C1F3A]">$149</span>
                   <span className="text-gray-500 font-medium">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {['Up to 50 bookings/mo', 'Basic FAQS logic', 'Standard 24/7 Chat', 'Email Support'].map((feature, i) =>(
                      <li key={i} className="flex font-medium text-gray-600 text-sm"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> {feature}</li>
                   ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-bold text-[#0C1F3A] bg-gray-100 hover:bg-gray-200 transition-colors">Start Free Trial</button>
             </motion.div>

             {/* 2. Anchor / Recommended Plan (Center Focus) */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }}
               className="relative p-[1px] rounded-3xl z-10 transform scale-105"
             >
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange via-pink-500 to-primaryOrange rounded-3xl animate-gradient-xy opacity-75 blur-[2px]"></div>
                
                {/* Inner Card (Glassmorphism) */}
                <div className="bg-[#0C1F3A]/95 backdrop-blur-2xl p-10 rounded-[23px] flex flex-col h-full relative z-10">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primaryOrange to-orange-500 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(247,103,7,0.5)] border border-white/10">
                     Most Popular
                  </div>
                  <div className="mb-6 mt-2">
                     <h3 className="text-2xl font-bold text-white relative inline-block">
                        Growth
                        <span className="absolute -right-6 -top-2">✨</span>
                     </h3>
                     <p className="text-blue-200 text-sm mt-2">For established clinics & salons</p>
                  </div>
                  <div className="mb-8">
                     <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">$299</span>
                     <span className="text-blue-300 font-medium">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                     {['Unlimited Bookings', 'Advanced Conversational AI', 'Automated Calendar Syncs', 'SMS Reminders & Follow-ups', 'Priority Setup & Support'].map((feature, i) =>(
                        <li key={i} className="flex font-medium text-blue-50 text-[15px]">
                           <div className="bg-primaryOrange/20 p-1 rounded-full mr-3 flex-shrink-0">
                               <CheckCircle2 className="w-4 h-4 text-primaryOrange" />
                           </div>
                           {feature}
                        </li>
                     ))}
                  </ul>
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primaryOrange to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-[0_10px_30px_rgba(247,103,7,0.4)] transition-all duration-300 mt-auto border border-white/10"
                  >
                     Scale My Business
                  </motion.button>
                </div>
             </motion.div>

             {/* 3. Enterprise / Premium Plan */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay:0.4}}
               className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col h-[90%]"
             >
                <div className="mb-6">
                   <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
                   <p className="text-gray-500 text-sm mt-2">For multi-location brands</p>
                </div>
                <div className="mb-8">
                   <span className="text-4xl font-extrabold text-[#0C1F3A]">Custom</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {['Multiple locations mapping', 'Custom API integrations', 'Dedicated account manager', 'White-labeled interface'].map((feature, i) =>(
                      <li key={i} className="flex font-medium text-gray-600 text-sm"><Check className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" /> {feature}</li>
                   ))}
                </ul>
                <button className="w-full py-3.5 rounded-xl font-bold text-[#0C1F3A] border-2 border-gray-200 hover:border-gray-300 transition-colors">Contact Sales</button>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
    </>
  );
}