import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronRight } from 'lucide-react';

export default function CtaSection({ onPrimaryAction, onDemoAction }) {
  return (
    <section className="py-20 md:py-32 bg-primaryBlue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0" />
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">
          Make your clinic easier to book, even after hours.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          We will train your digital receptionist around your clinic, install it into your current site, and help you turn more website visitors into booked conversations.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-4">
          <button type="button" onClick={() => onPrimaryAction('for the Clinic Digital Receptionist Setup')} className="bg-primaryOrange hover:bg-toOrange text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center shadow-lg shadow-primaryOrange/30">
            Book Your Strategy Call <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button type="button" onClick={onDemoAction} className="bg-white/10 hover:bg-white/15 border border-white/15 text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center">
            View Demo <Bot className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
        <p className="mt-8 text-sm text-gray-400">No generic template bot. No forced replatform. Tailored setup for your clinic and workflow.</p>
      </div>
    </section>
  );
}
