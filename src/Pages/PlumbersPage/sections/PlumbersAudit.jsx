'use client';
import React from 'react';
import { m as motion } from 'framer-motion';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';
import Search from 'lucide-react/dist/esm/icons/search';
import Phone from 'lucide-react/dist/esm/icons/phone';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button, Eyebrow } from '../ui';

const STEPS = [
  { Icon: ClipboardList, title: 'Fill the form', note: '2 minutes' },
  { Icon: Search, title: 'We audit everything', note: 'within 24 hours' },
  { Icon: Phone, title: 'You get a clear plan', note: 'free, no obligation' },
];

const PlumbersAudit = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Eyebrow className="mb-4">Free Audit</Eyebrow>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue mb-4">
        Find Out Exactly Why You&apos;re Not Getting Calls.
      </h2>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 sm:mb-12">
        We audit your entire online presence in 24 hours: Google ranking, site
        speed, local SEO, AI visibility. Free. No pitch. Honest feedback you can
        act on today.
      </p>

      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 sm:mb-12">
        {/* Connector sits behind the step icons and only exists on sm+, where
            the steps are actually side by side. */}
        <div
          className="hidden sm:block absolute top-7 left-[16.6%] right-[16.6%] border-t-2 border-dashed border-gray-300"
          aria-hidden="true"
        />
        {STEPS.map(({ Icon, title, note }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.12 }}
            className="relative flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full bg-white border-2 border-primaryOrange flex items-center justify-center mb-4 relative z-10">
              <Icon className="w-6 h-6 text-primaryOrange" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-primaryBlue mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{note}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center [&>*]:w-full sm:[&>*]:w-auto">
        <Button href="#booking" variant="primary">
          Get My Free Audit
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </section>
);

export default PlumbersAudit;
