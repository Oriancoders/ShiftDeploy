'use client';
import React, { useEffect, useRef, useState } from 'react';
import { m as motion, useInView, useReducedMotion } from 'framer-motion';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button, Eyebrow } from '../ui';
import SearchResultVisual from './SearchResultVisual';

const HEADLINE = ['Your', 'Competitors', 'Are', 'Stealing', 'Your', 'Calls.'];

const STATS = [
  { to: 40000, suffix: '+', label: 'UK Plumbers Have No Web Presence' },
  { to: 3.2, suffix: 'x', label: 'More Enquiries After 90 Days', decimals: 1 },
  { to: 30, suffix: '', label: 'Days to First Results or We Work Free' },
];

/**
 * Counts up only once, when it scrolls into view.
 *
 * rAF rather than setInterval: setInterval drifts under load and keeps firing
 * off-screen. `once: true` on useInView means this never re-runs on scroll-back,
 * and reduced-motion users get the final value immediately.
 */
function CountUp({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }

    const DURATION = 1600;
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / DURATION, 1);
      // easeOutExpo - fast start, soft landing
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(to * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, reduce]);

  const shown =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString('en-GB');

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

const PlumbersHero = () => {
  const reduce = useReducedMotion();

  // Stagger the headline word-by-word. Reduced motion collapses every delay to
  // zero so the text simply appears.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08 },
    },
  };
  const word = {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copy left, proof right. The visual is the argument made concrete,
            so it sits beside the headline rather than below the fold. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12 sm:mb-16">
        <motion.div initial="hidden" animate="show" variants={container}>
          <motion.div variants={word}>
            <Eyebrow className="mb-4 sm:mb-6">
              UK Plumbers Only &middot; Limited Spots This Month
            </Eyebrow>
          </motion.div>

          {/* aria-label carries the full sentence so screen readers do not hear
              six separately-animated fragments. */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-primaryBlue [text-wrap:balance]"
            aria-label="Your Competitors Are Stealing Your Calls."
          >
            <span aria-hidden="true">
              {HEADLINE.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  className="inline-block mr-[0.25em]"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.6 }}
            className="text-lg sm:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-xl leading-relaxed text-gray-700"
          >
            Every day you&apos;re invisible on Google, someone else gets the
            boiler jobs, bathroom fits and emergency callouts that should be
            yours. We fix that in 30 days.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button href="#booking" variant="primary">
              Get My Free Audit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button href="#packages" variant="secondary">
              Claim Free Website
            </Button>
          </motion.div>
        </motion.div>

          <SearchResultVisual />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-gray-200 pt-8 sm:pt-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold text-primaryOrange mb-1 sm:mb-2">
                <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="text-gray-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlumbersHero;
