'use client';
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Stethoscope,
  Landmark,
  Rocket,
  MapPin,
  ArrowRight,
  Calendar,
  Shield,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    id: "healthcare",
    icon: Stethoscope,
    label: "Healthcare Practices",
    title: "Turn More Consultations into Appointments",
    description:
      "Patients compare multiple providers quickly. Clear messaging, trust cues, and streamlined forms decide who gets contacted first.",
    benefits: [
      "Clear treatment value propositions",
      "Low-friction enquiry and booking flows",
      "Trust-focused testimonial placement",
      "Mobile-first lead capture optimization",
    ],
    stat: "2.1x",
    statLabel: "More appointment requests",
  },
  {
    id: "fintech",
    icon: Landmark,
    label: "FinTech & Financial Platforms",
    title: "Reduce Drop-Off Across High-Stakes Journeys",
    description:
      "Financial users need confidence at every step. Better UX structure and proof-driven copy can improve signups without increasing traffic.",
    benefits: [
      "Stronger risk-reversal messaging",
      "Optimized multi-step onboarding flows",
      "Improved CTA sequence and hierarchy",
      "Higher form completion quality",
    ],
    stat: "47%",
    statLabel: "Lower onboarding abandonment",
  },
  {
    id: "saas",
    icon: Rocket,
    label: "SaaS & B2B Platforms",
    title: "Convert More Trials from Existing Traffic",
    description:
      "Most SaaS pages over-explain features and under-sell outcomes. We tighten positioning and drive users to decisive actions.",
    benefits: [
      "Sharper hero and pricing narratives",
      "Cleaner trial signup architecture",
      "Use-case led CTA strategy",
      "Fewer leaks between landing and trial",
    ],
    stat: "34%",
    statLabel: "Higher trial-to-demo lift",
  },
  {
    id: "local-services",
    icon: MapPin,
    label: "High-Intent Local Services",
    title: "Win More Calls from the Same Search Demand",
    description:
      "Local buyers decide fast. Better trust framing, offer clarity, and CTA placement can increase inbound leads quickly.",
    benefits: [
      "Trust-first service page structure",
      "Offer and guarantee clarity upgrades",
      "High-visibility mobile CTAs",
      "Lead-form simplification for faster action",
    ],
    stat: "41%",
    statLabel: "More qualified inbound leads",
  },
];

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("healthcare");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });

  const activeIndustry = industries.find((i) => i.id === activeTab);

  return (
    <section id="industries" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Built for <span className="text-primaryOrange">Decision-Critical Funnels</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We work where buyer hesitation is expensive and every small UX improvement
            creates measurable business impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === industry.id
                  ? "bg-primaryOrange text-white shadow-glow"
                  : "bg-primaryBlue/10 text-primaryBlue/70 hover:bg-primaryBlue/15 hover:text-primaryBlue"
              }`}
            >
              <industry.icon className="w-5 h-5" />
              {industry.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:hidden mb-12 relative w-full"
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-primaryOrange text-white rounded-xl font-semibold transition-all duration-300 hover:bg-toOrange"
          >
            <div className="flex items-center gap-2">
              <activeIndustry.icon className="w-5 h-5" />
              <span className="text-left">{activeIndustry.label}</span>
            </div>
            <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-primaryOrange rounded-xl shadow-lg z-50 overflow-hidden"
              >
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => {
                      setActiveTab(industry.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 font-semibold transition-all duration-300 border-b last:border-b-0 ${
                      activeTab === industry.id
                        ? "bg-primaryOrange/10 text-primaryOrange"
                        : "text-primaryBlue/70 hover:bg-primaryBlue/5 hover:text-primaryBlue"
                    }`}
                  >
                    <industry.icon className="w-5 h-5" />
                    <span>{industry.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryOrange/20 text-primaryOrange rounded-full mb-6">
              <activeIndustry.icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{activeIndustry.label}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-primaryBlue mb-4">{activeIndustry.title}</h3>

            <p className="text-primaryBlue/70 leading-relaxed mb-8">{activeIndustry.description}</p>

            <ul className="space-y-4 mb-8">
              {activeIndustry.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primaryBlue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primaryBlue" />
                  </div>
                  <span className="text-primaryBlue">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contactus"
              className="bg-primaryOrange mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit group text-center"
            >
              Optimize My Funnel
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-primaryBlue rounded-3xl p-8 border border-primaryBlue/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <activeIndustry.icon className="w-8 h-8 text-primaryOrange" />
                    <span className="text-white font-semibold">Conversion Dashboard</span>
                  </div>
                  <span className="px-3 py-1 bg-primaryBlue/20 text-primaryBlue text-sm font-semibold rounded-full">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white">
                    <div className="text-4xl font-semibold">{activeIndustry.stat}</div>
                    <div className="text-sm mt-1">{activeIndustry.statLabel}</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-white">
                    <div className="text-4xl font-semibold">+38%</div>
                    <div className="text-sm mt-1">Avg. Conversion Lift</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl p-4 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-md">Lead Completion Rate</span>
                    <span className="text-sm font-semibold">+124%</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[22, 28, 33, 39, 44, 49, 57, 64, 69, 75, 82, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-toOrange to-primaryOrange rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-primaryBlue rounded-xl p-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                <div>
                  <div className="font-bold">+64</div>
                  <div className="text-xs">New Leads</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-primaryBlue rounded-xl p-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" />
                <div>
                  <div className="font-bold">A+ Clarity</div>
                  <div className="text-xs">Trust Score</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
