import React, { useState } from 'react';
import PricingHeader from './Pricing/PricingHeader';
import EssentialPlanCard from './Pricing/EssentialPlanCard';
import GrowthPlanCard from './Pricing/GrowthPlanCard';
import EnterprisePlanCard from './Pricing/EnterprisePlanCard';

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-indigo-500 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const LightningIcon = () => (
  <svg className="w-8 h-8 text-amber-500 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function PricingSection({ onSelectPackage }) {
  const [isAnnual, setIsAnnual] = useState(true); // Default to annual for better conversion psychology

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white relative border-t border-gray-200/60 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-indigo-100/40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <PricingHeader isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span 
            className={`text-sm font-medium cursor-pointer transition-colors ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          
          <button
            type="button"
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${isAnnual ? 'bg-indigo-600' : 'bg-gray-300'}`}
            role="switch"
            aria-checked={isAnnual}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                isAnnual ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>

          <span 
            className={`text-sm font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}
            onClick={() => setIsAnnual(true)}
          >
            Annually
            <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              Save 20%
            </span>
          </span>
        </div>

        {/* Value Framing (Psychology: ROI Anchoring) */}
        <div className="text-center max-w-2xl mx-auto mb-12 bg-indigo-50/80 backdrop-blur-sm text-indigo-800 py-3 px-6 rounded-full text-sm md:text-base font-medium shadow-sm border border-indigo-100/50">
          💡 <span className="font-semibold">Value Perspective:</span> Get a 24/7 AI Sales Agent for less than the cost of your daily coffee.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch relative">
          <div className="flex flex-col h-full lg:mt-8">
            <EssentialPlanCard isAnnual={isAnnual} onSelectPackage={onSelectPackage} />
          </div>
          <div className="flex flex-col h-full relative z-10 transform lg:-translate-y-4 transition-all duration-500 hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.3)] rounded-2xl group">
            {/* Animated Hover Shimmer / Glare Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-20">
              <div className="absolute inset-0 w-[200%] h-full translate-x-[-100%] group-hover:translate-x-[50%] transition-transform duration-[1500ms] ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"></div>
            </div>

            <GrowthPlanCard isAnnual={isAnnual} onSelectPackage={onSelectPackage} />
          </div>
          <div className="flex flex-col h-full lg:mt-8">
            <EnterprisePlanCard isAnnual={isAnnual} onSelectPackage={onSelectPackage} />
          </div>
        </div>

        {/* Risk Reversal & Trust (Psychology: Friction Reduction) */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-gray-600 max-w-4xl mx-auto">
          <div className="flex items-center text-left">
            <ShieldIcon />
            <div>
              <p className="font-semibold text-gray-900">14-Day Money-Back Guarantee</p>
              <p className="text-sm mt-0.5">Not seeing results? Get a full refund, no questions asked.</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="flex items-center text-left">
            <LightningIcon />
            <div>
              <p className="font-semibold text-gray-900">Deploy in Minutes</p>
              <p className="text-sm mt-0.5">Train on your website data instantly. Zero coding required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
