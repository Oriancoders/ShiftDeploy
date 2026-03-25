import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { enterpriseFeatures } from './constants';

export default function EnterprisePlanCard({ isAnnual, onSelectPackage }) {
  const packageName = `Enterprise (${isAnnual ? 'Annual' : 'Monthly'})`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full min-h-[520px]"
      aria-label="Enterprise Plan"
    >
      <div className="mb-6">
        <span className="inline-flex px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-700 uppercase tracking-wide mb-4">Scale Plan</span>
        <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
        <p className="text-gray-500 text-sm mt-2">For multi-location brands</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-extrabold text-[#0C1F3A]">Custom</span>
        <p className="text-xs text-gray-500 mt-2">{isAnnual ? 'Annual partnership pricing available' : 'Monthly or annual contracts available'}</p>
      </div>
      <div className="mb-6 rounded-2xl border border-purple-100 bg-purple-50/60 p-4">
        <p className="text-xs uppercase tracking-wider font-bold text-purple-700 mb-1">Value Focus</p>
        <p className="text-sm font-semibold text-purple-900">Built for advanced workflows, integrations, and multi-branch coordination.</p>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {enterpriseFeatures.map((feature, i) => (
          <li key={i} className="flex font-medium text-gray-600 text-sm">
            <Check className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" /> {feature}
          </li>
        ))}
      </ul>
      <div className="mb-4 rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-700">
        Includes solution scoping with our implementation team.
      </div>
      <button
        type="button"
        onClick={() => onSelectPackage?.(packageName)}
        className="w-full py-3.5 rounded-xl font-bold text-[#0C1F3A] border-2 border-gray-200 bg-white hover:border-primaryBlue/40 hover:bg-gray-50 active:scale-[0.99] transition-all shadow-sm hover:shadow"
      >
        Contact Sales
      </button>
    </motion.div>
  );
}
