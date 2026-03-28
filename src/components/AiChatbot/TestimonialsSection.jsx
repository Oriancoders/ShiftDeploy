import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'We needed something that understood our clinic, not another generic widget. Shift Deploy trained it around our treatments and booking flow, and it immediately felt more useful.',
    name: 'Dr. Nadia Khan',
    role: 'Owner, Restore Aesthetics Clinic',
  },
  {
    quote:
      'ShiftDeploy is highly recommended …. they have consistently met deadlines, and their after sales service is outstanding!',
    name: 'Kamran Abbas',
    role: 'Director at Bullseye Investments',
  },
  {
    quote:
      'What stood out was the hands-on service. Their team handled the setup, refined the answers, and made sure the digital receptionist matched how our front desk actually speaks.',
    name: 'Sarah Malik',
    role: 'Operations Lead, WellSpring Skin Clinic',
  },
];

export default function TestimonialsSection({ onPrimaryAction }) {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primaryOrange font-bold uppercase tracking-[0.2em] text-sm mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primaryBlue mb-5">Proof that feels human matters.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">These sample testimonials reinforce the core offer: tailored setup, smoother patient conversations, and a team that stays involved after launch.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article key={testimonial.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.08, duration: 0.45 }} className="rounded-3xl bg-white border border-gray-100 shadow-[0_18px_50px_rgba(12,31,58,0.06)] p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-primaryOrange">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <Quote className="w-8 h-8 text-secondaryBlue/30" />
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 flex-grow">"{testimonial.quote}"</p>
              <div className="pt-5 border-t border-gray-100">
                <div className="font-bold text-primaryBlue">{testimonial.name}</div>
                <div className="text-gray-500 text-sm mt-1">{testimonial.role}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button type="button" onClick={() => onPrimaryAction('for Digital Receptionist Consultation')} className="inline-flex items-center justify-center rounded-2xl bg-primaryBlue px-7 py-4 text-white font-bold hover:bg-toBlue transition-colors">
            See If This Fits Your Clinic <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
