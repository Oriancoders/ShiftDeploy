import React from 'react';
import { motion } from 'framer-motion';
import { Bot, CalendarCheck, TrendingUp, MessageSquare, Users } from 'lucide-react';
export default function FeaturesSection() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  return (
    <>
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondaryBlue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primaryOrange/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="text-center font-bold mb-20">
            <h2 className="text-[#0C1F3A] text-4xl md:text-5xl tracking-tight">Features that drive real growth</h2>
            <p className="text-gray-500 mt-4 text-lg">Beyond simple chat. A complete sales and scheduling engine.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: CalendarCheck, title: "Automated Scheduling", desc: "Integrates with your existing calendar to find open slots and book appointments seamlessly." },
              { icon: MessageSquare, title: "Smart Service Explanations", desc: "Answers FAQs about pricing, procedures, and policies accurately like your best employee." },
              { icon: Users, title: "Reduce Labor Costs", desc: "Free up your front desk staff from non-stop phone calls to focus on in-person client experience." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} 
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(43,97,238,0.08)] transition-all duration-300 overflow-hidden"
               >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondaryBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-16 h-16 bg-blue-50 text-[#4361EE] group-hover:bg-gradient-to-br group-hover:from-[#4361EE] group-hover:to-blue-400 group-hover:text-white group-hover:shadow-lg transition-all duration-300 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-xl font-extrabold mb-3 text-[#0C1F3A] leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0C1F3A] group-hover:to-[#4361EE] transition-all duration-300">{feature.title}</h3>
                <p className="relative z-10 text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Pricing / Packages Section using Anchoring & Decoy Effects (Cognitive Biases)*/}
    </>
  );
}