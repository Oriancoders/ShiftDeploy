import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Building2,
  RefreshCcw,
  TrendingUp,
  Layers,
  ArrowRight,
  Calendar,
  Shield,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "new-businesses",
    icon: Building2,
    label: "New Businesses",
    title: "Launch on a Growth-Ready Foundation",
    description:
      "Start with architecture that supports performance, lead generation, and future feature expansion instead of patchwork rebuilds.",
    benefits: [
      "Performance-first launch structure",
      "SEO-ready page architecture",
      "CRO-ready user journey planning",
      "Flexible content model for growth",
    ],
    stat: "2-4 Weeks",
    statLabel: "Typical implementation timeline",
  },
  {
    id: "redesign",
    icon: RefreshCcw,
    label: "Businesses Needing Redesign",
    title: "Replace Fragile Sites with Scalable Systems",
    description:
      "Move from outdated pages and plugin debt to a clean, modular structure that is easier to maintain and improve.",
    benefits: [
      "Modernized UX and UI system",
      "Modular, reusable page sections",
      "Migration path with minimal disruption",
      "Foundation for ShiftSpeed and ShiftConvert",
    ],
    stat: "96",
    statLabel: "Average build readiness score",
  },
  {
    id: "growth-planning",
    icon: TrendingUp,
    label: "Businesses Planning Growth",
    title: "Build for Multi-Year Adaptability",
    description:
      "If your business is scaling, your website should scale with it. ShiftBuild reduces future rebuild risk and supports ongoing optimization.",
    benefits: [
      "Growth-driven design decisions",
      "Future expansion without full rebuild",
      "Improved trust and first impressions",
      "Scalable conversion-focused architecture",
    ],
    stat: "+42%",
    statLabel: "Stronger first impression impact",
  },
  {
    id: "multi-location",
    icon: Layers,
    label: "Multi-Service / Multi-Location Businesses",
    title: "Structure Complex Offers with Clarity",
    description:
      "We design information architecture that keeps service lines clear, user flow simple, and expansion manageable.",
    benefits: [
      "Clear hierarchy for services and locations",
      "Reusable templates for scale",
      "Consistent brand and UX patterns",
      "Simpler maintenance across teams",
    ],
    stat: "100%",
    statLabel: "Modular architecture coverage",
  },
];

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("new-businesses");
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
            Designed for <span className="text-primaryOrange">Business Growth Stages</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            ShiftBuild supports new launches, redesigns, and scale phases with conversion-ready architecture that stays adaptable.
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
              to="/contactus"
              className="bg-primaryOrange mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit group text-center"
            >
              Plan My ShiftBuild Website
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="bg-primaryBlue rounded-3xl p-8 border border-primaryBlue/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <activeIndustry.icon className="w-8 h-8 text-primaryOrange" />
                    <span className="text-white font-semibold">Build Dashboard</span>
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
                    <div className="text-4xl font-semibold">+58%</div>
                    <div className="text-sm mt-1">Scalability Gain</div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm text-white rounded-xl p-4 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-md">Lifecycle Readiness</span>
                    <span className="text-sm font-semibold">+124%</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[18, 24, 31, 39, 46, 52, 59, 67, 74, 82, 89, 96].map((h, i) => (
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
                  <div className="font-bold">2-4 Weeks</div>
                  <div className="text-xs">Delivery Window</div>
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
                  <div className="font-bold">SEO + CRO Ready</div>
                  <div className="text-xs">Foundation Grade</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
