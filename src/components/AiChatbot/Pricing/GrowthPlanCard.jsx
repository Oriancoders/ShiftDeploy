import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { growthFeatures } from './constants';

export default function GrowthPlanCard({ isAnnual, onSelectPackage }) {
  const monthlyPrice = 299;
  const annualMonthlyEquivalent = 239;
  const displayPrice = isAnnual ? annualMonthlyEquivalent : monthlyPrice;
  const annualTotal = annualMonthlyEquivalent * 12;
  const annualSavings = (monthlyPrice - annualMonthlyEquivalent) * 12;
  const packageName = `Growth (${isAnnual ? 'Annual' : 'Monthly'})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative p-[2px] rounded-3xl z-20 transform scale-105 shadow-2xl lg:scale-110 lg:shadow-[0_8px_48px_rgba(247,103,7,0.18)]"
      aria-label="Growth Plan - Best Value"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange via-pink-500 to-primaryOrange rounded-3xl animate-gradient-xy opacity-80 blur-[2px]" />
      <div className="bg-primaryBlue/95 backdrop-blur-2xl p-10 rounded-[23px] flex flex-col h-full relative z-10 min-h-[520px]">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primaryOrange to-orange-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(247,103,7,0.5)] border border-white/10 scale-110">
          <span className="inline-flex items-center gap-2">
            Best Value <span className="text-lg">🔥</span>
          </span>
        </div>
        <div className="mb-6 mt-4">
          <h3 className="text-2xl font-bold text-white relative inline-block">
            Growth
            <span className="absolute -right-6 -top-2">✨</span>
          </h3>
          <p className="text-blue-200 text-sm mt-2">For growing businesses</p>
        </div>
        <div className="mb-8">
          <p className="text-blue-300/80 text-sm line-through mb-1">$399/mo typical staffing alternative</p>
          <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">${displayPrice}</span>
          <span className="text-blue-300 font-medium">/mo</span>
          <p className="text-xs text-blue-300/80 mt-2">
            {isAnnual ? `Billed yearly ($${annualTotal}/yr) • Save $${annualSavings}/yr` : 'Billed monthly'}
          </p>
        </div>
        <div className="mb-6 rounded-2xl border border-green-400/20 bg-white/5 p-4">
          <p className="text-[11px] uppercase tracking-wider font-black text-green-300 mb-1">Most Chosen</p>
          <p className="text-sm font-semibold text-white">Built for teams that want faster response times and predictable booking growth.</p>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          {growthFeatures.map((feature, i) => (
            <li key={i} className="flex items-start font-medium text-blue-50 text-[15px]">
              <div className="bg-primaryOrange/20 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5 self-start">
                <CheckCircle2 className="w-4 h-4 text-primaryOrange" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mb-5 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm text-blue-100">
          Cancel anytime. No long-term lock-in.
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectPackage?.(packageName)}
          className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primaryOrange to-orange-500 hover:from-orange-500 hover:to-orange-400 shadow-[0_10px_30px_rgba(247,103,7,0.4)] transition-all duration-300 mt-auto border border-white/10 text-lg"
          aria-label="Scale My Business - Growth Plan"
        >
          Scale My Business
        </motion.button>
      </div>
    </motion.div>
  );
}
