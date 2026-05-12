'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Code2, Workflow, ArrowRight, Search } from "lucide-react";

/* ------- HCI-friendly: 4 services as scannable cards ------- */
const SERVICES = [
  {
    name: "ShiftSpeed™",
    tagline: "Lightning-fast load",
    icon: Zap,
    color: "#4361EE",
    href: "/services/shiftspeed",
  },
  {
    name: "ShiftConvert™",
    tagline: "Turn visitors into leads",
    icon: TrendingUp,
    color: "#22c55e",
    href: "/services/shiftconvert",
  },
  {
    name: "ShiftBuild™",
    tagline: "Stable launches",
    icon: Code2,
    color: "#F76707",
    href: "/services/shiftbuild",
  },
  {
    name: "ShiftFlow™",
    tagline: "Smart ops automation",
    icon: Workflow,
    color: "#a855f7",
    href: "/services/shiftflow",
  },
];

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px), radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px), radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Soft ambient glows */}
      <div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4361EE, transparent)" }}
      />
      <div
        className="absolute bottom-10 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F76707, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ===== Top: badge + headline + CTA ===== */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-primaryBlue/20 rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <Search size={13} className="text-primaryOrange" />
            <span className="text-xs font-bold text-primaryBlue uppercase tracking-wider">
              Performance Audit Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]"
          >
            <span className="text-primaryBlue">Fix what's slowing</span>
            <br />
            <span className="text-primaryOrange">your growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-7 max-w-xl mx-auto"
          >
            Pick the model. We diagnose, fix, and ship — end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              href="/ContactUs"
              className="group bg-primaryOrange text-white px-7 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:bg-toOrange transition-colors shadow-lg shadow-primaryOrange/25"
            >
              Get Free Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#problem-solving"
              className="text-primaryBlue font-semibold hover:underline px-4 py-2 text-sm sm:text-base"
            >
              See how it works ↓
            </a>
          </motion.div>
        </div>

        {/* ===== Center: 4 animated service cards ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5, type: "spring", stiffness: 90 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                <Link
                  href={service.href}
                  className="group block bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full"
                >
                  {/* Animated accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: service.color }}
                  />

                  {/* Glow on hover */}
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 20px 50px -20px ${service.color}80` }}
                  />

                  {/* Icon with pulsing ring */}
                  <div className="relative mb-3 inline-block">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-xl"
                      style={{ background: service.color }}
                    />
                    <div
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ background: `${service.color}15`, color: service.color }}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                  </div>

                  <h3 className="font-bold text-primaryBlue text-sm sm:text-base mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                    {service.tagline}
                  </p>

                  <div
                    className="mt-3 text-xs font-bold flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ color: service.color }}
                  >
                    Learn more
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===== Trust strip ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-2 mt-10 text-xs sm:text-sm text-gray-500 font-semibold"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            No redesigns
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            No downtime
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            End-to-end execution
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
