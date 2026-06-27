'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { LazyMotion, domAnimation, m as motion, useInView } from 'framer-motion';
import { Bot, Stethoscope, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Real product data - sourced from the actual product pages these link to.
const products = [
  {
    name: 'Digital Receptionist',
    href: '/digital-receptionist',
    icon: Bot,
    tagline: 'Capture bookings, even while you sleep.',
    description:
      'An autonomous AI receptionist that engages, qualifies, and schedules leads 24/7 - so your business never stops capturing customers when your doors close.',
    points: [
      'Answers questions instantly, around the clock',
      'Captures and qualifies leads automatically',
      'Books appointments straight into your calendar',
    ],
  },
  {
    name: 'Review Your Doctor',
    href: '/review-your-doctor',
    icon: Stethoscope,
    tagline: 'More 5-star reviews, fully GDPR compliant.',
    description:
      'A QR-powered patient feedback platform that helps UK private clinics earn more 5-star Google reviews, while privately catching unhappy patients before they post in public.',
    points: [
      'One-tap rating in under eight seconds',
      'Smart routing: happy patients to Google, others private',
      'UK GDPR compliant with a live feedback dashboard',
    ],
  },
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

const ProductLanding = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
            Our Products
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Products that run the work for you
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300"
          >
            Purpose-built ShiftDeploy products that capture leads, book appointments, and grow
            your reputation - working around the clock so you don&apos;t have to.
          </motion.p>
        </Section>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <Section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={fadeInUp}
                className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                  <p.icon className="size-7" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-primaryBlue">{p.name}</h2>
                <p className="mt-1 font-semibold text-primaryOrange">{p.tagline}</p>
                <p className="mt-4 text-gray-600">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primaryOrange px-6 py-3 font-bold text-white transition-colors hover:bg-toOrange"
                >
                  Explore {p.name} <ArrowUpRight className="size-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      <Footer />
    </LazyMotion>
  );
};

export default ProductLanding;
