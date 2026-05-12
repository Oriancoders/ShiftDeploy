'use client';

import React, { useEffect, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronRight,
  ClipboardCheck,
  ExternalLink,
  Gauge,
  Loader2,
  Mail,
  Menu,
  MessageSquare,
  MousePointerClick,
  Phone,
  SearchCheck,
  ShieldCheck,
  Signal,
  SlidersHorizontal,
  Star,
  Target,
  X,
} from 'lucide-react';
import VideoTestimonial from '../LandingPage/landingComps/VideoTestimonial';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const auditAreas = [
  {
    icon: Gauge,
    title: 'Website Experience',
    text: 'Speed, clarity, mobile flow, and page friction.',
  },
  {
    icon: MousePointerClick,
    title: 'Landing Pages',
    text: 'Message match, CTA hierarchy, and conversion focus.',
  },
  {
    icon: Signal,
    title: 'Campaign Flow',
    text: 'How ads, pages, offers, and intent connect.',
  },
  {
    icon: MessageSquare,
    title: 'Enquiry Journey',
    text: 'Forms, calls, booking steps, and response paths.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Signals',
    text: 'Proof, credibility, positioning, and risk reduction.',
  },
  {
    icon: BarChart3,
    title: 'Tracking',
    text: 'Visibility across traffic, leads, and lost steps.',
  },
];

const packages = [
  {
    name: 'Growth Activation System',
    description: 'For businesses that need campaigns and conversion flow improved together.',
    features: [
      'Meta campaign management',
      'Landing page optimisation',
      'Enquiry flow improvement',
      'Conversion tracking',
      'Performance optimisation',
    ],
  },
  {
    name: 'Managed Digital Growth Partner',
    description: 'For businesses that want wider visibility, positioning, and growth oversight.',
    features: [
      'Full digital growth oversight',
      'Website and conversion management',
      'Campaign and content coordination',
      'Visibility and trust improvement',
      'Ongoing growth strategy',
    ],
    highlighted: true,
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

const primaryButtonClass =
  'bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md sm:w-fit w-full';

const EMAILJS_SERVICE_ID = 'service_kl93ix7';
const EMAILJS_TEMPLATE_ID = 'template_fqpwrcg';
const EMAILJS_PUBLIC_KEY = 'cDFV4myTzYdyZu09M';

const INITIAL_AUDIT_FORM = {
  name: '',
  email: '',
  country_code: '+44',
  phone: '',
  website: '',
  service_type: '',
  message: '',
};

const countryCodes = [
  { label: 'UK', value: '+44' },
  { label: 'US', value: '+1' },
  { label: 'PK', value: '+92' },
  { label: 'AE', value: '+971' },
  { label: 'AU', value: '+61' },
  { label: 'SA', value: '+966' },
  { label: 'QA', value: '+974' },
];

const serviceOptions = [
  'Home services',
  'Food and restaurants',
  'Fitness and wellness',
  'Real estate',
  'Clinics and healthcare',
  'Beauty and personal care',
  'Education and training',
  'Legal and professional services',
  'Financial services',
  'Events and hospitality',
  'Other service business',
];

const navItems = [
  { label: 'Proof', target: 'proof' },
  { label: 'Problem', target: 'problem' },
  { label: 'Calculator', target: 'calculator' },
  { label: 'What We Check', target: 'audit-areas' },
  { label: 'Process', target: 'process' },
  { label: 'Packages', target: 'packages' },
];

const problemLeaks = [
  {
    title: 'Weak landing pages',
    icon: MousePointerClick,
    text: 'Visitors arrive, but the next step is not obvious enough.',
  },
  {
    title: 'Unclear trust',
    icon: ShieldCheck,
    text: 'People hesitate because proof, positioning, or risk reduction is thin.',
  },
  {
    title: 'Poor booking flow',
    icon: MessageSquare,
    text: 'A ready prospect has to work too hard to contact, book, or ask a question.',
  },
  {
    title: 'Missed follow up',
    icon: Signal,
    text: 'Enquiries exist, but response timing or next-step handling creates drop-off.',
  },
  {
    title: 'Enquiry leakage',
    icon: Target,
    text: 'Attention is present, but parts of the journey quietly lose commercial intent.',
  },
];

const ServiceGrowthAuditNav = ({ onAuditClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="2xl:max-w-60 sm:max-w-48 max-w-36"
            aria-label="Go to service growth audit hero"
          >
            <img
              src="https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145802/coloredV_zxupgq.png"
              alt="ShiftDeploy Logo"
            />
          </button>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="cursor-pointer font-medium relative group text-sm xl:text-base text-gray-700 hover:text-primaryBlue"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 bg-primaryOrange transition-all duration-300 w-0 group-hover:w-full" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                onAuditClick?.();
                setIsOpen(false);
              }}
              className="bg-primaryOrange hover:bg-toOrange text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold shadow-lg text-sm xl:text-base"
            >
              Get Free Audit
            </button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="text-primaryBlue hover:text-primaryBlue transition-colors duration-300 p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 flex flex-col justify-between h-[90dvh]">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={() => scrollToSection(item.target)}
                  className="block w-full py-2 sm:py-3 font-medium text-base sm:text-lg text-left text-gray-700 hover:text-primaryBlue"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                onAuditClick?.();
                setIsOpen(false);
              }}
              className="w-full text-center bg-primaryOrange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg mt-4 sm:mt-6 text-base sm:text-lg"
            >
              Get Free Audit
            </button>
          </div>
        </motion.div>
      ) : null}
    </motion.nav>
  );
};

const RangeInput = ({ label, value, min, max, step = 1, suffix = '', prefix = '', onChange }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm sm:text-base font-bold text-textColor">{label}</label>
        <span className="min-w-[72px] text-center rounded-full bg-orange-50 px-3 py-1.5 text-sm font-extrabold text-primaryOrange">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="audit-range"
        style={{
          background: `linear-gradient(to right, #F76707 0%, #F76707 ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
        }}
      />
      <div className="flex justify-between text-xs sm:text-sm text-gray-400">
        <span>
          {prefix}
          {min.toLocaleString()}
          {suffix}
        </span>
        <span>
          {prefix}
          {max.toLocaleString()}
          {suffix}
        </span>
      </div>
    </div>
  );
};

const SectionHeader = ({ eyebrow, title, text, align = 'center' }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl mb-12 md:mb-16`}
  >
    {eyebrow ? (
      <span className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-secondaryBlue">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primaryBlue">
      {title}
    </h2>
    {text ? <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">{text}</p> : null}
  </motion.div>
);

const validateAuditForm = (form) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[()\d\s-]{7,}$/;
  const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!emailPattern.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!phonePattern.test(form.phone.trim())) errors.phone = 'Enter a valid phone number.';
  if (form.website.trim() && !websitePattern.test(form.website.trim())) {
    errors.website = 'Enter a valid website URL.';
  }
  if (!form.service_type) errors.service_type = 'Select your service business type.';

  return errors;
};

const ServiceGrowthAuditFooter = ({ onAuditClick }) => {
  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-primaryBlue text-white">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="max-w-40 sm:max-w-52"
              aria-label="Go to service growth audit hero"
            >
              <img
                src="https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145802/whiteV_vzhhvi.png"
                alt="ShiftDeploy"
              />
            </button>
            <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-gray-300">
              Audit-first growth systems for service businesses losing enquiries through weak digital flow.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Page Sections</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  className="text-left text-sm font-medium text-gray-300 transition-colors hover:text-primaryOrange"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-white">Start With The Audit</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <a href="mailto:contact@shiftdeploy.com" className="flex items-center gap-3 transition-colors hover:text-primaryOrange">
                <Mail className="h-4 w-4 text-primaryOrange" />
                contact@shiftdeploy.com
              </a>
              <a href="tel:+447311126710" className="flex items-center gap-3 transition-colors hover:text-primaryOrange">
                <Phone className="h-4 w-4 text-primaryOrange" />
                +44 7311 126710
              </a>
            </div>
            <div className="mt-5 flex justify-start">
              <button type="button" onClick={onAuditClick} className={primaryButtonClass}>
                <span>Get Free Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          Copyright {new Date().getFullYear()} ShiftDeploy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function ServiceGrowthAudit() {
  const reduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [auditForm, setAuditForm] = useState(INITIAL_AUDIT_FORM);
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState('idle');
  const [formMessage, setFormMessage] = useState('');
  const [calculator, setCalculator] = useState({
    visitors: 2500,
    enquiryRate: 3,
    customerValue: 850,
  });

  const results = useMemo(() => {
    const expectedEnquiries = Math.round(calculator.visitors * (calculator.enquiryRate / 100));
    const leakageRate = calculator.enquiryRate < 3 ? 0.32 : calculator.enquiryRate < 7 ? 0.22 : 0.14;
    const leakageCount = Math.max(1, Math.round(expectedEnquiries * leakageRate));
    const leakageValue = leakageCount * calculator.customerValue;
    const possibleOpportunity = Math.round(leakageValue + expectedEnquiries * calculator.customerValue * 0.05);

    let recommendation = 'Start with a focused audit of landing pages, booking flow, and trust signals.';
    if (possibleOpportunity > 25000) {
      recommendation = 'Prioritise a full growth system review across campaigns, tracking, pages, and follow-up.';
    } else if (calculator.enquiryRate < 3) {
      recommendation = 'Review landing page clarity, trust signals, and enquiry friction before adding more traffic.';
    }

    return {
      estimatedLeakage: Math.round(leakageValue),
      possibleOpportunity: Math.round(possibleOpportunity),
      expectedEnquiries,
      recommendation,
    };
  }, [calculator]);

  const updateCalculator = (key, value) => {
    setCalculator((current) => ({ ...current, [key]: value }));
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setAuditForm((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => ({ ...current, [name]: undefined }));
    if (formStatus === 'error') {
      setFormStatus('idle');
      setFormMessage('');
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-primaryOrange focus:ring-4 focus:ring-orange-100 ${
      formErrors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200'
    }`;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const errors = validateAuditForm(auditForm);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormStatus('error');
      setFormMessage('Please fix the highlighted fields before submitting.');
      return;
    }

    setFormStatus('loading');
    setFormMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: auditForm.name.trim(),
          email: auditForm.email.trim(),
          phone: `${auditForm.country_code} ${auditForm.phone.trim()}`,
          website: auditForm.website.trim() || 'Not provided',
          service_type: auditForm.service_type,
          message: auditForm.message.trim() || 'Not provided',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setFormStatus('success');
      setFormMessage('Audit request sent successfully.');
      setSubmitted(true);
      setAuditForm(INITIAL_AUDIT_FORM);
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Something went wrong while sending. Please try again.');
    }
  };

  const resetAuditForm = () => {
    setSubmitted(false);
    setFormStatus('idle');
    setFormMessage('');
    setFormErrors({});
    setAuditForm(INITIAL_AUDIT_FORM);
  };

  const scrollToForm = () => {
    const form = document.getElementById('audit-request-form');
    if (!form) return;

    const navOffset = 110;
    const formTop = form.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: Math.max(formTop - navOffset, 0), behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-textColor">
      <style>{`
        .audit-range {
          width: 100%;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          appearance: none;
          cursor: pointer;
        }
        .audit-range::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #F76707;
          border: 3px solid #fff;
          box-shadow: 0 8px 18px rgba(247, 103, 7, 0.32);
        }
        .audit-range::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #F76707;
          border: 3px solid #fff;
          box-shadow: 0 8px 18px rgba(247, 103, 7, 0.32);
        }
      `}</style>
      <ServiceGrowthAuditNav onAuditClick={scrollToForm} />

      <main>
        <section id="hero" className="relative scroll-mt-24 overflow-hidden bg-primaryBlue pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={reduceMotion ? { opacity: 0.26 } : { scale: [1, 1.16, 1], opacity: [0.24, 0.42, 0.24] }}
              transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-28 -top-28 h-[420px] w-[420px] rounded-full bg-secondaryBlue blur-[150px]"
            />
            <motion.div
              animate={reduceMotion ? { opacity: 0.22 } : { scale: [1, 1.2, 1], opacity: [0.18, 0.36, 0.18] }}
              transition={reduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              className="absolute -bottom-32 -right-28 h-[460px] w-[460px] rounded-full bg-primaryOrange blur-[160px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_80%_75%_at_50%_45%,#000_35%,transparent_100%)] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue via-primaryBlue/50 to-transparent" />
          </div>
 
          <div className="container relative z-10 mx-auto grid max-w-7xl 2xl:max-w-[80%] sm:px-6 lg:px-8 items-center gap-12 px-4 md:grid-cols-[1fr_0.82fr] md:px-8">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primaryOrange opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primaryOrange" />
                </span>
                Service growth audit
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your Digital Partner,
                <br />
                For Visibility
                <br />
                <span className="text-primaryOrange">And Growth</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-7 max-w-2xl border-l-4 border-secondaryBlue pl-5 text-lg leading-relaxed text-blue-100/85 md:text-xl">
                We audit your website, campaigns, landing pages and enquiry flow to identify where attention is being lost before it becomes a customer enquiry.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 ">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className={ "bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6  py-2.5 sm:py-4 "+ primaryButtonClass  }
                >
                  <span>Request Your Service Growth Audit</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3 text-sm font-semibold text-blue-100/80">
                  <CheckCircle className="h-5 w-5 text-primaryOrange" />
                  Audit first. Recommendation after.
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
              id="audit-request-form"
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondaryBlue/20 to-primaryOrange/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white p-5 shadow-[0_26px_80px_rgba(0,0,0,0.28)] sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primaryOrange">Primary CTA</p>
                    <h2 className="mt-2 text-2xl font-extrabold text-primaryBlue">Request Your Growth Audit</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">We audit first, then recommend the right system.</p>
                  </div>
                  <div className="hidden rounded-2xl bg-blue-50 p-3 text-secondaryBlue sm:block">
                    <ClipboardCheck className="h-7 w-7" />
                  </div>
                </div>

                {!submitted ? (
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <input
                          name="name"
                          value={auditForm.name}
                          onChange={handleFormChange}
                          aria-invalid={Boolean(formErrors.name)}
                          placeholder="Full name*"
                          className={inputClass('name')}
                        />
                        {formErrors.name ? <p className="mt-1 text-xs font-semibold text-red-600">{formErrors.name}</p> : null}
                      </div>
                      <div>
                        <input
                          name="email"
                          type="email"
                          value={auditForm.email}
                          onChange={handleFormChange}
                          aria-invalid={Boolean(formErrors.email)}
                          placeholder="Email*"
                          className={inputClass('email')}
                        />
                        {formErrors.email ? <p className="mt-1 text-xs font-semibold text-red-600">{formErrors.email}</p> : null}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <div className={`flex overflow-hidden rounded-xl border transition focus-within:border-primaryOrange focus-within:ring-4 focus-within:ring-orange-100 ${
                          formErrors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'
                        }`}>
                          <select
                            name="country_code"
                            value={auditForm.country_code}
                            onChange={handleFormChange}
                            aria-label="Country code"
                            className="w-[92px] border-r border-gray-200 bg-gray-50 px-3 py-3 text-sm font-bold text-primaryBlue outline-none"
                          >
                            {countryCodes.map((country) => (
                              <option key={`${country.label}-${country.value}`} value={country.value}>
                                {country.label} {country.value}
                              </option>
                            ))}
                          </select>
                          <input
                            name="phone"
                            value={auditForm.phone}
                            onChange={handleFormChange}
                            aria-invalid={Boolean(formErrors.phone)}
                            placeholder="Phone*"
                            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
                          />
                        </div>
                        {formErrors.phone ? <p className="mt-1 text-xs font-semibold text-red-600">{formErrors.phone}</p> : null}
                      </div>
                      <div>
                        <input
                          name="website"
                          value={auditForm.website}
                          onChange={handleFormChange}
                          aria-invalid={Boolean(formErrors.website)}
                          placeholder="Website"
                          className={inputClass('website')}
                        />
                        {formErrors.website ? <p className="mt-1 text-xs font-semibold text-red-600">{formErrors.website}</p> : null}
                      </div>
                    </div>
                    <div>
                      <select
                        name="service_type"
                        value={auditForm.service_type}
                        onChange={handleFormChange}
                        aria-invalid={Boolean(formErrors.service_type)}
                        className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-600 outline-none transition focus:border-primaryOrange focus:ring-4 focus:ring-orange-100 ${
                          formErrors.service_type ? 'border-red-400 bg-red-50' : 'border-gray-200'
                        }`}
                      >
                        <option value="" disabled>Service business type</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {formErrors.service_type ? <p className="mt-1 text-xs font-semibold text-red-600">{formErrors.service_type}</p> : null}
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      value={auditForm.message}
                      onChange={handleFormChange}
                      placeholder="Where do you think enquiries are being lost?"
                      className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-primaryOrange focus:ring-4 focus:ring-orange-100"
                    />
                    {formMessage ? (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                          formStatus === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                        }`}
                      >
                        {formMessage}
                      </motion.p>
                    ) : null}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className={`${primaryButtonClass} disabled:cursor-not-allowed disabled:opacity-80`}
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                              Sending request...
                            </motion.span>
                          </>
                        ) : (
                          <>
                            <span>{formStatus === 'error' ? 'Try Again' : 'Request Your Growth Audit'}</span>
                            <ChevronRight className="h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="rounded-2xl bg-green-50 p-6 text-center">
                    <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" />
                    <h3 className="text-xl font-extrabold text-primaryBlue">Audit request received.</h3>
                    <p className="mt-2 text-sm text-gray-600">We will review your details and come back with the next step.</p>
                    <button
                      type="button"
                      onClick={resetAuditForm}
                      className="mx-auto mt-6 flex items-center justify-center rounded-xl border-2 border-primaryOrange px-5 py-3 text-sm font-extrabold text-primaryOrange transition hover:bg-primaryOrange hover:text-white"
                    >
                      Submit another request
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="proof" className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28">
          <div className="absolute left-[-12%] top-10 h-72 w-72 rounded-full bg-secondaryBlue/5 blur-[110px]" />
          <div className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-primaryOrange/10 blur-[120px]" />
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Proof before promise"
              title="Trusted by businesses that care about execution."
              text="Before we ask you to think through systems, we show the pattern: clear work, reliable delivery, and support after launch."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mx-auto max-w-5xl rounded-2xl bg-primaryBlue px-6 py-10 shadow-[0_24px_80px_rgba(12,31,58,0.16)] sm:px-10 md:px-12"
            >
              <motion.div variants={fadeUp} className="flex justify-center gap-1.5 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-6 w-6 fill-current" />
                ))}
              </motion.div>

              <motion.blockquote
                variants={fadeUp}
                className="mx-auto mt-7 max-w-4xl text-center text-xl font-bold italic leading-relaxed text-white md:text-2xl"
              >
                "ShiftDeploy is highly recommended .... they have consistently met deadlines, and their after sales service is outstanding!"
              </motion.blockquote>

              <motion.div variants={fadeUp} className="my-10 h-px w-full bg-white/15" />

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-lg font-extrabold text-white">Kamran Abbas</p>
                  <p className="mt-1 font-semibold text-blue-100/75">Chief Strategist at Bullseye Investment Private Limited</p>
                </div>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primaryOrange px-6 py-3.5 font-extrabold text-white transition hover:bg-toOrange sm:w-fit"
                >
                  Visit Source
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <VideoTestimonial />

        <section id="problem" className="relative scroll-mt-24 overflow-hidden bg-gray-50 py-20 md:py-28">
          <div className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-secondaryBlue/5 blur-[120px]" />
          <div className="absolute bottom-10 right-[-12%] h-80 w-80 rounded-full bg-primaryOrange/5 blur-[120px]" />
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader
              eyebrow="The real constraint"
              title="More traffic is not always the problem."
              text="People may already visit. Ads may already get clicks. Attention may already exist. The problem is often what happens after that attention arrives."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10"
            >
              <motion.div variants={fadeUp} className="rounded-3xl border border-gray-100 sm:bg-white p-4 shadow-[0_18px_60px_rgba(12,31,58,0.06)] md:p-5">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {problemLeaks.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        variants={fadeUp}
                        whileHover={reduceMotion ? undefined : { y: -6 }}
                        className="group rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all duration-300 hover:border-primaryOrange/40 hover:shadow-[0_16px_36px_rgba(12,31,58,0.08)]"
                      >
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-primaryOrange transition-colors duration-300 group-hover:bg-primaryOrange group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-extrabold text-primaryBlue">{item.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-5xl rounded-3xl bg-primaryBlue p-6 text-white shadow-[0_18px_60px_rgba(12,31,58,0.16)] md:p-8">
                <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100/60">Audit lens</p>
                    <h3 className="mt-2 text-2xl font-extrabold">We map the gap between attention and enquiry.</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-4">
                    {['Attention', 'Trust', 'Action', 'Follow up'].map((step, index) => (
                      <motion.div
                        key={step}
                        variants={fadeUp}
                        className="relative rounded-2xl border border-white/10 bg-white/7 p-4"
                      >
                        <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primaryOrange text-sm font-extrabold text-white">
                          {index + 1}
                        </span>
                        <p className="font-bold text-white">{step}</p>
                        <div className="mt-3 h-1 rounded-full bg-white/15">
                          <motion.div
                            initial={reduceMotion ? { width: '100%' } : { width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                            className="h-full rounded-full bg-primaryOrange"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="calculator" className="scroll-mt-24 bg-white py-20 md:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Enquiry Leakage Calculator"
              title="Estimate where opportunity may be slipping."
              text="Adjust the three core inputs. We estimate possible leakage from traffic, current enquiry rate, and average customer value."
            />
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr]">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="space-y-9 rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_16px_50px_rgba(12,31,58,0.08)] md:p-8"
              >
                <motion.div variants={fadeUp}>
                  <RangeInput label="visitors" min={250} max={20000} step={250} value={calculator.visitors} onChange={(value) => updateCalculator('visitors', value)} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <RangeInput label="enquiry rate" min={1} max={15} suffix="%" value={calculator.enquiryRate} onChange={(value) => updateCalculator('enquiryRate', value)} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <RangeInput label="customer value" min={100} max={10000} step={100} prefix="$" value={calculator.customerValue} onChange={(value) => updateCalculator('customerValue', value)} />
                </motion.div>
                <motion.p variants={fadeUp} className="rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-relaxed text-primaryBlue">
                  This calculator uses conservative assumptions to guide the audit conversation, not to promise a guaranteed return.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className="space-y-5"
              >
                <motion.div variants={fadeUp} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_16px_50px_rgba(12,31,58,0.08)]">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-primaryBlue">Estimated audit snapshot</h3>
                    <SlidersHorizontal className="h-6 w-6 text-primaryOrange" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-3xl font-extrabold text-secondaryBlue">{results.expectedEnquiries}</p>
                      <p className="mt-1 text-sm text-gray-500">estimated enquiries/mo</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-primaryOrange">{formatCurrency(results.estimatedLeakage)}</p>
                      <p className="mt-1 text-sm text-gray-500">estimated leakage</p>
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-primaryBlue">{formatCurrency(results.possibleOpportunity)}</p>
                      <p className="mt-1 text-sm text-gray-500">possible lost opportunity</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-7 shadow-[0_20px_60px_rgba(247,103,7,0.12)]">
                  <span className="inline-flex rounded-full bg-primaryOrange px-3 py-1 text-xs font-extrabold text-white">Audit recommendation</span>
                  <p className="mt-5 text-xl font-extrabold leading-relaxed text-primaryBlue">{results.recommendation}</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600">The audit confirms what is actually happening before any plan is recommended.</p>
                </motion.div>

                <motion.div variants={fadeUp} className="flex justify-start">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className={primaryButtonClass}
                  >
                    <span>Request Your Service Growth Audit</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="audit-areas" className="scroll-mt-24 bg-gray-50 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader eyebrow="What We Check" title="What We Check" text="A focused review of the places where attention usually fails to become an enquiry." />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {auditAreas.map((area) => (
                <motion.div key={area.title} variants={fadeUp} whileHover={{ y: -6 }} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-secondaryBlue transition group-hover:bg-primaryBlue group-hover:text-white">
                    <area.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-primaryBlue">{area.title}</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">{area.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="process" className="scroll-mt-24 bg-white py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader
              eyebrow="After the audit"
              title="What happens after the audit"
              text="Every plan is customized after the audit. We only recommend the system your current situation actually needs."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-5 md:grid-cols-4"
            >
              {[
                'We review your current system',
                'We identify where enquiries leak',
                'We recommend the right plan',
                'We build or manage the growth system',
              ].map((step, index) => (
                <motion.div key={step} variants={fadeUp} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-primaryOrange text-lg font-extrabold text-white">{index + 1}</div>
                  <p className="font-extrabold leading-snug text-primaryBlue">{step}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="packages" className="scroll-mt-24 bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <SectionHeader
              eyebrow="Packages"
              title="Systems recommended after the audit"
              text="These are starting points. The audit determines what is useful, what can wait, and what should not be built at all."
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {packages.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-3xl border p-8 shadow-[0_18px_60px_rgba(12,31,58,0.08)] ${
                    plan.highlighted ? 'border-orange-200 bg-orange-50/40' : 'border-gray-100 bg-white'
                  }`}
                >
                  {plan.highlighted ? <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primaryOrange/10 blur-3xl" /> : null}
                  <div className="relative">
                    <h3 className="text-2xl font-extrabold text-primaryBlue">{plan.name}</h3>
                    <p className="mt-4 leading-relaxed text-gray-600">{plan.description}</p>
                    <div className="mt-8 space-y-4">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primaryOrange" />
                          <span className="font-semibold text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-9 flex justify-start">
                      <button type="button" onClick={scrollToForm} className={primaryButtonClass}>
                        <span>Request audit first</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="final-cta" className="relative scroll-mt-24 overflow-hidden bg-primaryBlue py-20 text-white md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
          <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primaryOrange/25 blur-[110px]" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="container relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8"
          >
            <motion.div variants={fadeUp} className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primaryOrange ring-1 ring-white/15">
              <SearchCheck className="h-8 w-8" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Before spending more on marketing,
              <br className="hidden sm:block" /> find what is leaking first.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">
              Every business receives a custom recommendation after the audit.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex justify-center">
              <button type="button" onClick={scrollToForm} className={primaryButtonClass}>
                <span>Request Your Service Growth Audit</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <ServiceGrowthAuditFooter onAuditClick={scrollToForm} />
    </div>
  );
}
