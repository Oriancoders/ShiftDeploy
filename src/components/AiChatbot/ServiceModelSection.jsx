import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Link2, ShieldCheck, Stethoscope } from 'lucide-react';

const steps = [
  {
    icon: Stethoscope,
    title: 'We learn your clinic',
    description:
      'We map your services, patient FAQs, intake flow, insurance notes, and scheduling rules before anything goes live.',
  },
  {
    icon: BrainCircuit,
    title: 'We train a dedicated model',
    description:
      'Every clinic gets its own trained digital receptionist so responses feel accurate, on-brand, and tailored to your team.',
  },
  {
    icon: Link2,
    title: 'We embed it into your website',
    description:
      'No platform migration required. We integrate your digital receptionist into your current site and connect the right booking path.',
  },
  {
    icon: ShieldCheck,
    title: 'We monitor and improve',
    description:
      'We review conversations, tighten answers, and keep refining the experience as your clinic adds services or locations.',
  },
];

export default function ServiceModelSection({ onPrimaryAction }) {
  return (
    <section className="py-20 md:py-28 bg-primaryBlue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,97,238,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,119,0,0.18),transparent_30%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="max-w-3xl mb-14">
          <p className="text-primaryOrange font-bold uppercase tracking-[0.2em] text-sm mb-4">Productized Service</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">This is not generic digital receptionist software.</h2>
          <p className="text-blue-100/80 text-lg md:text-xl leading-relaxed">
            We handle strategy, model training, website integration, and iteration for you, so your clinic gets a digital receptionist that is actually trained on how you operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08, duration: 0.45 }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-primaryOrange" />
              </div>
              <div className="text-sm font-bold text-blue-200 mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-100/75 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl bg-white text-primaryBlue p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-2xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryOrange mb-3">Best Fit</p>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">For clinics that already get traffic but lose conversations.</h3>
            <p className="text-gray-600 max-w-2xl leading-relaxed">Ideal if patients are visiting your site after hours, asking repetitive front-desk questions, or dropping off before booking.</p>
          </div>
          <button type="button" onClick={() => onPrimaryAction('for Clinic Digital Receptionist Setup')} className="inline-flex items-center justify-center rounded-2xl bg-primaryOrange px-7 py-4 text-white font-bold whitespace-nowrap hover:bg-toOrange transition-colors">
            Book Strategy Call <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
