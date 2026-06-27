'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { m as motion, useInView } from 'framer-motion';
import { Star, QrCode, ShieldCheck, BellRing, ArrowUpRight } from 'lucide-react';
import { fadeInUp, fadeInRight, staggerContainer } from '../../../utils/animations';

const LIVE_URL = 'https://reviewyourdoctor.shiftdeploy.com';

const benefits = [
  {
    title: 'More 5-star Google reviews',
    desc: 'Happy patients are guided to leave a public review in two taps.',
  },
  {
    title: 'Catch unhappy patients privately',
    desc: 'Low ratings open a private feedback form, the manager is alerted instantly.',
  },
  {
    title: 'GDPR & Google-policy compliant',
    desc: 'Every patient gets the same review choice, no gating, DPA + consent built in.',
  },
  {
    title: 'Live in minutes, zero hardware',
    desc: 'Print one branded QR poster for reception. No app, no staff training.',
  },
];

// A self-contained, animated "phone" mock of the patient flow (no external asset).
function FlowMock({ inView }) {
  return (
    <motion.div
      variants={fadeInRight}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-400/20 via-green-500/10 to-transparent blur-2xl" />

      <div className="relative rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl shadow-emerald-900/10">
        {/* clinic header */}
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
            <Star className="size-5 fill-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-primaryBlue">Smile Dental Care</p>
            <p className="text-xs text-gray-500">How was your visit?</p>
          </div>
        </div>

        {/* animated stars */}
        <div className="mb-5 flex justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 260, damping: 14 }}
            >
              <Star className="size-8 fill-amber-400 text-amber-400 drop-shadow-sm" />
            </motion.span>
          ))}
        </div>

        {/* split into two compliant choices */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.35 }}
            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center"
          >
            <p className="text-[13px] font-bold text-emerald-700">Leave a Google review</p>
            <p className="mt-0.5 text-[11px] text-emerald-600/80">Public, in two taps</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center"
          >
            <p className="text-[13px] font-bold text-primaryBlue">Share privately</p>
            <p className="mt-0.5 text-[11px] text-gray-500">Manager alerted</p>
          </motion.div>
        </div>

        {/* QR + alert chips */}
        <div className="mt-5 flex items-center justify-between rounded-xl bg-primaryBlue px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <QrCode className="size-5 text-emerald-300" />
            <span className="text-xs font-medium">Scan at reception</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <BellRing className="size-4" />
            <span className="text-xs font-semibold">Real-time alert</span>
          </div>
        </div>
      </div>

      {/* floating compliance badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1.7, type: 'spring' }}
        className="absolute -right-3 -top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-lg ring-1 ring-emerald-100"
      >
        <ShieldCheck className="size-4" />
        UK GDPR ready
      </motion.div>
    </motion.div>
  );
}

const ReviewYourDoctor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* LEFT: copy + value */}
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100"
            >
              <Star className="size-4 fill-emerald-500 text-emerald-500" />
              SaaS product for healthcare
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-3xl font-bold leading-tight text-primaryBlue sm:text-5xl"
            >
              Review Your Doctor
              <br />
              <span className="text-primaryOrange">turn happy patients into 5-star reviews</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600"
            >
              A QR-powered patient feedback platform for UK private clinics. Patients scan,
              rate, and are guided, compliantly, to a public Google review or private feedback,
              so reputations grow and problems get fixed before they go public.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="mt-1 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{b.title}</p>
                    <p className="text-sm text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${LIVE_URL}/signup`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primaryOrange px-8 py-4 font-bold text-white transition-colors hover:bg-toOrange sm:w-fit"
              >
                Start free trial
              </a>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primaryBlue bg-white px-8 py-4 font-bold text-primaryBlue transition-colors hover:bg-primaryBlue hover:text-white sm:w-fit"
              >
                Visit the live site
                <ArrowUpRight className="size-5" />
              </a>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-4 text-sm text-gray-500">
              30-day free trial, then £49/month. No card required to start.
            </motion.p>
          </div>

          {/* RIGHT: animated flow mock */}
          <FlowMock inView={isInView} />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewYourDoctor;
