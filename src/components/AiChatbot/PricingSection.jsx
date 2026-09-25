'use client';
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const plans = [
  { name: 'Essential', description: 'For a single business starting with automated enquiries.', features: ['Website chat and FAQs', 'Booking requirements review', 'Setup and email support'] },
  { name: 'Growth', description: 'For teams connecting enquiries to their booking workflow.', features: ['Calendar integration scoping', 'Reception and follow-up flows', 'Setup and ongoing support'] },
  { name: 'Enterprise', description: 'For multiple locations or custom integrations.', features: ['Multi-location requirements', 'Custom API integration scoping', 'Account and support planning'] },
];

export default function PricingSection({ onSelectPackage }) {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-primaryBlue text-center mb-4">A tailored quote for your business</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">Tell us about your enquiry volume, locations and booking tools. We agree setup, usage, integrations and ongoing support before work starts.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-primaryBlue mb-3">{plan.name}</h3>
              <p className="text-gray-600 mb-5">{plan.description}</p>
              <p className="text-xl font-semibold text-primaryBlue mb-5">Tailored quote</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => <li key={feature} className="flex gap-2 text-gray-700"><Check className="size-5 shrink-0 text-primaryOrange" aria-hidden="true" />{feature}</li>)}
              </ul>
              <button type="button" onClick={() => onSelectPackage?.(plan.name + ' - tailored quote')} className="bg-primaryOrange text-white rounded-lg px-4 py-3 font-semibold inline-flex items-center justify-center gap-2">Request a quote <ArrowRight className="size-4" aria-hidden="true" /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
