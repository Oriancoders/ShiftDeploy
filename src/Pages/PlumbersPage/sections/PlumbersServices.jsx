'use client';
import React from 'react';
import { m as motion } from 'framer-motion';
import Wrench from 'lucide-react/dist/esm/icons/wrench';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import RefreshCw from 'lucide-react/dist/esm/icons/refresh-cw';
import { Eyebrow, Section } from '../ui';

const SERVICES = [
  {
    Icon: Wrench,
    kicker: 'ShiftBuild',
    title: 'Website That Actually Works',
    body: 'Fast, mobile-first site built specifically for UK plumbers. Not a template. A real site that converts visitors into calls.',
  },
  {
    Icon: MapPin,
    kicker: 'Local SEO',
    title: 'Own Your City on Google',
    body: 'We rank you for “plumber in [your city]” on Google Search and Maps. When locals search, you show up first.',
  },
  {
    Icon: Sparkles,
    kicker: 'AI SEO / GEO',
    title: 'Found on ChatGPT & Gemini Too',
    body: 'When someone asks AI “best plumber in Manchester”, your business comes up. Nobody else offers this to plumbers. We do.',
    badge: 'New · Exclusive',
  },
  {
    Icon: RefreshCw,
    kicker: 'ShiftFlow',
    title: 'Growth on Autopilot',
    body: 'We maintain and grow your online presence monthly. You focus on jobs. We handle everything digital.',
  },
];

const PlumbersServices = () => (
  <Section className="bg-white">
    <div className="mb-12">
      <Eyebrow className="mb-4">What We Do</Eyebrow>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue">
        We Don&apos;t Build Websites. We Build Lead Machines.
      </h2>
    </div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {SERVICES.map(({ Icon, kicker, title, body, badge }) => (
        <motion.div
          key={title}
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          {badge && (
            <span className="absolute top-5 right-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primaryOrange">
              {badge}
            </span>
          )}
          <div className="w-12 h-12 rounded-xl bg-primaryBlue flex items-center justify-center mb-5">
            <Icon className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-2">
            {kicker}
          </p>
          <h3 className="text-xl font-bold text-primaryBlue mb-3">{title}</h3>
          <p className="text-gray-700 leading-relaxed">{body}</p>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default PlumbersServices;
