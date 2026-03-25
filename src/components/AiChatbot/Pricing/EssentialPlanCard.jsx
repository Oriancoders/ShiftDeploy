import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { essentialFeatures } from './constants';

export default function EssentialPlanCard({ isAnnual, onSelectPackage }) {
  const monthlyPrice = 149;
  const annualMonthlyEquivalent = 119;
  const displayPrice = isAnnual ? annualMonthlyEquivalent : monthlyPrice;
  const annualTotal = annualMonthlyEquivalent * 12;
  const annualSavings = (monthlyPrice - annualMonthlyEquivalent) * 12;
  const packageName = `Essential (${isAnnual ? 'Annual' : 'Monthly'})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full min-h-[520px]"
      aria-label="Essential Plan"
    >
      <div className="mb-6">
        <span className="inline-flex px-3 py-1 rounded-full bg-gray-100 text-xs font-bold text-gray-600 uppercase tracking-wide mb-4">Starter</span>
        <h3 className="text-xl font-bold text-gray-800">Essential</h3>
        <p className="text-gray-500 text-sm mt-2">For solo practitioners</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-extrabold text-[#0C1F3A]">${displayPrice}</span>
        <span className="text-gray-500 font-medium">/mo</span>
        <p className="text-xs text-gray-500 mt-2">
          {isAnnual ? `Billed yearly ($${annualTotal}/yr) • Save $${annualSavings}/yr` : 'Billed monthly'}
        </p>
      </div>
      <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
        <p className="text-xs uppercase tracking-wider font-bold text-blue-700 mb-1">Value Focus</p>
        <p className="text-sm font-semibold text-blue-900">Great for getting your first consistent after-hours bookings.</p>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {essentialFeatures.map((feature, i) => (
          <li key={i} className="flex font-medium text-gray-600 text-sm">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" /> {feature}
          </li>
        ))}
      </ul>
      <div className="mb-4 rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-700">
        Ideal for teams validating demand before they scale.
      </div>
      <button
        type="button"
        onClick={() => onSelectPackage?.(packageName)}
        className="w-full py-3.5 rounded-xl font-bold text-[#0C1F3A] bg-gray-100 hover:bg-gray-200 active:scale-[0.99] transition-all shadow-sm hover:shadow"
      >
        Start Free Trial
      </button>
    </motion.div>
  );
}
