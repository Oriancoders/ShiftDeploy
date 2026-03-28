import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, MessageSquare, ShieldCheck, Workflow } from 'lucide-react';

export default function FeaturesSection() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  const features = [
    {
      icon: MessageSquare,
      title: 'Clinic-trained answers',
      desc: 'We shape your digital receptionist around your treatments, FAQs, pre-visit instructions, and policy language.',
    },
    {
      icon: CalendarCheck,
      title: 'Booking-first guidance',
      desc: 'Patients are guided toward the right booking path, consultation flow, or next step instead of hitting a dead end.',
    },
    {
      icon: Workflow,
      title: 'Website integration done for you',
      desc: 'We work with your current website and embed the experience so your team does not have to rebuild everything.',
    },
    {
      icon: ShieldCheck,
      title: 'Ongoing optimization',
      desc: 'We review conversations after launch and keep refining weak answers so your digital receptionist improves over time.',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondaryBlue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primaryOrange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center font-bold mb-20">
          <h2 className="text-[#0C1F3A] text-4xl md:text-5xl tracking-tight">What your clinic actually gets</h2>
          <p className="text-gray-500 mt-4 text-lg">Service-led implementation focused on patient trust, booking flow, and front-desk relief.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={fadeIn} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="relative group bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(43,97,238,0.08)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondaryBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
  );
}
