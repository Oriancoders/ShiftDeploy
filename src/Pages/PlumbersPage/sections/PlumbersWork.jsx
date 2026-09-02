'use client';
import React from 'react';
import { m as motion } from 'framer-motion';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import { Button, Eyebrow, Section } from '../ui';

/* The live site we built for this client. */
const CASE_STUDY_URL = 'https://fluidplumbing.netlify.app/';

const STATS = [
  { value: '0 → Live', label: 'Full site in under 2 weeks' },
  { value: 'Hull + East Riding', label: 'Now visible on Google Maps' },
  { value: 'Zero → Found', label: 'Customers discovering online' },
];

const DETAILS = [
  ['Client', 'Fluid Plumbing Solutions'],
  ['Owner', 'Zack Gibson'],
  ['Location', 'Hull & East Riding of Yorkshire'],
  [
    'Services',
    'Emergency callouts, bathroom fitting, leak detection, maintenance & repairs',
  ],
  ['Live site', 'fluidplumbing.netlify.app'],
  [
    'What we did',
    'Built complete presence from zero (no website, no logo, no branding) to a fast, professional, locally-optimised live site.',
  ],
];

const PlumbersWork = () => (
  <Section className="bg-white">
    <div className="mb-12">
      <Eyebrow className="mb-4">Our Work</Eyebrow>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue">
        Real Plumbers. Real Results.
      </h2>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl border border-gray-200 border-l-4 border-l-primaryOrange shadow-md p-5 sm:p-8 lg:p-10 mb-8"
    >
      <Eyebrow className="mb-6 !text-xs">Case Study · Hull, UK</Eyebrow>

      {/* Explicit width/height so the browser reserves layout space and the
          card does not shift as the image decodes (globals.css caps the
          rendered width, so the attributes only do their CLS job). */}
      <a
        href={CASE_STUDY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block mb-8 rounded-xl overflow-hidden border border-gray-200 hover:border-primaryOrange transition-colors"
      >
        <img
          src="/fluid-plumbing-hull.webp"
          alt="Homepage of the Fluid Plumbing Solutions website we built, showing the headline “Plumbing in Hull, done properly.” with WhatsApp and 24/7 call buttons."
          width={1200}
          height={672}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block"
        />
        <span className="flex items-center justify-center gap-x-2 py-3 text-sm font-bold text-primaryOrange group-hover:text-toOrange transition-colors">
          View the live site
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </span>
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <dl className="space-y-4">
          {DETAILS.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400 mb-1">
                {k}
              </dt>
              <dd className="text-gray-800 leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="space-y-4">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="bg-gray-50 rounded-xl p-5 border border-gray-100"
            >
              <div className="text-lg sm:text-xl font-bold text-primaryOrange mb-1 break-words">
                {s.value}
              </div>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <blockquote className="mt-8 sm:mt-10 border-l-4 border-primaryOrange pl-4 sm:pl-6">
        <p className="text-base sm:text-lg text-gray-800 leading-relaxed italic">
          <span className="text-primaryOrange text-3xl leading-none align-[-0.2em] mr-1">
            &ldquo;
          </span>
          Before ShiftDeploy I had nothing online. Now customers find me on
          Google. Best thing I&apos;ve done for the business.
          <span className="text-primaryOrange text-3xl leading-none align-[-0.2em] ml-1">
            &rdquo;
          </span>
        </p>
        <footer className="mt-3 text-sm text-gray-600 font-medium">
          Zack G. · Fluid Plumbing Solutions · Hull
        </footer>
      </blockquote>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {['Your Business Here', 'Your Business Here'].map((t, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-2xl border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center min-h-[220px]"
        >
          <h3 className="text-lg font-bold text-gray-500 mb-2">{t}</h3>
          <p className="text-gray-500 text-sm mb-5">
            The next case study on this page could be yours.
          </p>
          <Button href="#booking" variant="ghost">
            Get Started
          </Button>
        </div>
      ))}
    </div>
  </Section>
);

export default PlumbersWork;
