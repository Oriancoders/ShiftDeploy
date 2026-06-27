'use client';
import React, { useRef } from 'react';
import { LazyMotion, domAnimation, m as motion, useInView } from 'framer-motion';
import {
  QrCode, Star, SplitSquareVertical, BellRing, ShieldCheck, BarChart3, ArrowUpRight,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ReviewYourDoctor from './LandingPage/landingComps/ReviewYourDoctor';
import { fadeInUp, staggerContainer } from '../utils/animations';

const LIVE_URL = 'https://reviewyourdoctor.shiftdeploy.com';

const steps = [
  { icon: QrCode, title: 'Patient scans the QR', desc: 'A branded poster at reception, no app to download.' },
  { icon: Star, title: 'They rate the visit', desc: 'One tap, under eight seconds, on their own phone.' },
  { icon: SplitSquareVertical, title: 'Smart, compliant routing', desc: 'Happy patients go to Google, others share privately.' },
  { icon: BellRing, title: 'Manager gets alerted', desc: 'Negative feedback triggers an instant email to staff.' },
];

const features = [
  { icon: Star, title: 'Public review growth', desc: 'More genuine 5-star Google reviews, automatically.' },
  { icon: ShieldCheck, title: 'Compliance-first', desc: 'UK GDPR, a published DPA, consent at signup, and an equal review choice for every patient (no gating).' },
  { icon: BarChart3, title: 'Live dashboard', desc: 'Ratings, trends and private feedback update in real time.' },
  { icon: BellRing, title: 'Never miss a complaint', desc: 'Catch unhappy patients before they post in public.' },
];

function Section({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ReviewYourDoctorLanding = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Navigation isDarkBg />

      {/* HERO */}
      <section className="relative overflow-hidden bg-primaryBlue pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="pointer-events-none absolute -right-32 -top-24 size-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-80 rounded-full bg-primaryOrange/20 blur-3xl" />
        <Section className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 ring-1 ring-white/15"
          >
            <Star className="size-4 fill-emerald-300 text-emerald-300" />
            A ShiftDeploy product
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Review Your Doctor
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300"
          >
            The QR-powered patient feedback platform that helps UK private clinics earn more
            5-star Google reviews, while privately catching unhappy patients, fully GDPR compliant.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`${LIVE_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primaryOrange px-8 py-4 font-bold text-white transition-colors hover:bg-toOrange"
            >
              Start free trial
            </a>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-primaryBlue"
            >
              Visit the live site <ArrowUpRight className="size-5" />
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-4 text-sm text-gray-400">
            30-day free trial, then £49/month.
          </motion.p>
        </Section>
      </section>

      {/* Reuse the rich product section */}
      <ReviewYourDoctor />

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold text-primaryBlue sm:text-4xl">
            How it works
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            From scan to review in under a minute, no hardware and no staff training.
          </motion.p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-5 top-5 text-5xl font-black text-gray-300">{i + 1}</span>
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                  <s.icon className="size-6" />
                </div>
                <p className="mt-4 font-bold text-gray-900">{s.title}</p>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* WHY CLINICS LOVE IT */}
      <section className="bg-white py-20 sm:py-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold text-primaryBlue sm:text-4xl">
            Why clinics choose it
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <div className="grid size-12 flex-shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <f.icon className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{f.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* CTA */}
      <section className="bg-primaryBlue py-20 sm:py-24">
        <Section className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white sm:text-4xl">
            Grow your clinic&apos;s reputation, the compliant way
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-xl text-gray-300">
            Launch in minutes with one branded QR poster. Start your free 30-day trial today.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`${LIVE_URL}/signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primaryOrange px-8 py-4 font-bold text-white transition-colors hover:bg-toOrange"
            >
              Start free trial
            </a>
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-bold text-white transition-colors hover:bg-white hover:text-primaryBlue"
            >
              reviewyourdoctor.shiftdeploy.com <ArrowUpRight className="size-5" />
            </a>
          </motion.div>
        </Section>
      </section>

      <Footer />
    </LazyMotion>
  );
};

export default ReviewYourDoctorLanding;
