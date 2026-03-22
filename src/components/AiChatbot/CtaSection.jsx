import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
export default function CtaSection() {
  return (
    <>
    {/* /// 5. Final CTA Section with Anchoring & Decoy Effects (Cognitive Biases) */}
      <section className="py-20 md:py-32 bg-primaryBlue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Stop missing out on paying clients.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Implement our AI booking agent today and start seeing an immediate increase in your after-hours bookings and revenue.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="bg-primaryOrange hover:bg-toOrange text-white px-10 py-5 rounded-lg font-bold text-lg transition-colors flex items-center justify-center shadow-lg shadow-primaryOrange/30">
              Start Your Free Trial <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <p className="mt-4 text-sm text-gray-400 sm:hidden">No credit card required. Cancel anytime.</p>
          </motion.div>
          <p className="mt-8 text-sm text-gray-400 hidden sm:block">No credit card required. Zero implementation fees. Setup in minutes.</p>
        </div>
      </section>
    </>
  );
}