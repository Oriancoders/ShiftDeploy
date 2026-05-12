'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  BadgeCheck,
  Phone,
  Award,
  Calendar,
  MousePointerClick,
} from "lucide-react";
import CursorFollower from "../../../../utils/CursorFollower";
import Link from "next/link";

/* ----------- LIVE CONVERSION STREAM data ----------- */
const STREAM_EVENTS = [
  {
    icon: BadgeCheck,
    name: "Sarah K.",
    location: "London",
    action: "Booked service",
    value: "£450",
    color: "#22c55e",
  },
  {
    icon: Phone,
    name: "Mike R.",
    location: "Manchester",
    action: "Submitted inquiry",
    value: "Premium",
    color: "#4361EE",
  },
  {
    icon: Award,
    name: "Emma T.",
    location: "Bristol",
    action: "Got quote",
    value: "£890",
    color: "#F76707",
  },
  {
    icon: Calendar,
    name: "James L.",
    location: "Leeds",
    action: "Booked call",
    value: "30 min",
    color: "#a855f7",
  },
  {
    icon: BadgeCheck,
    name: "Olivia W.",
    location: "Edinburgh",
    action: "Signed up",
    value: "Pro plan",
    color: "#22c55e",
  },
  {
    icon: TrendingUp,
    name: "Tom B.",
    location: "Glasgow",
    action: "Filled form",
    value: "Hot lead",
    color: "#4361EE",
  },
];

/* ----------- helpers ----------- */
function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function useCounter(target, duration = 2200, delay = 600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    let begin = null;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!begin) begin = ts;
        const p = Math.min((ts - begin) / duration, 1);
        setValue(target * easeOutQuart(p));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);
  return value;
}

/* ----------- Conversion notification card ----------- */
function ConversionCard({ event, age, isTop }) {
  const Icon = event.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -30, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.92, height: 0, marginBottom: 0 }}
      transition={{ type: "spring", stiffness: 110, damping: 18 }}
      className="relative"
    >
      <div
        className="relative flex items-center gap-3 px-3.5 py-3 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${event.color}25`,
          boxShadow: `
            0 1px 2px rgba(15,23,42,0.04),
            0 6px 16px ${event.color}22,
            0 20px 40px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95)
          `,
        }}
      >
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative"
          style={{
            background: `linear-gradient(135deg, ${event.color}, ${event.color}cc)`,
            boxShadow: `0 4px 12px ${event.color}55, inset 0 1px 0 rgba(255,255,255,0.3)`,
          }}
        >
          <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
          {isTop && (
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="absolute inset-0 rounded-xl"
              style={{ border: `2px solid ${event.color}` }}
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 leading-tight min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-black text-gray-900 truncate">
              {event.name}
            </span>
            <span className="text-[10px] text-gray-400">·</span>
            <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
              <MapPin size={9} strokeWidth={2.5} />
              {event.location}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[11px] text-gray-600 truncate">{event.action}</span>
            <span
              className="text-[11px] font-black"
              style={{ color: event.color }}
            >
              {event.value}
            </span>
          </div>
        </div>

        {/* Right: time */}
        <div className="flex-shrink-0 text-right">
          {isTop ? (
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded"
              style={{
                background: `${event.color}15`,
                color: event.color,
              }}
            >
              NEW
            </motion.span>
          ) : (
            <span className="text-[10px] text-gray-400 font-bold">{age}</span>
          )}
        </div>
      </div>

      {/* Sparkle on new card */}
      {isTop && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], y: [0, -15] }}
            transition={{ delay: 0.5, duration: 1.8, ease: "easeOut" }}
            className="absolute -top-1 -right-2 text-base"
          >
            ✨
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], y: [0, -10] }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            className="absolute top-2 -left-1 text-sm"
          >
            ✨
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

/* ----------- Floating accent chip ----------- */
function AccentChip({ icon: Icon, label, value, color, position, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 110 }}
      className="absolute z-30"
      style={position}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 + delay, ease: "easeInOut" }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${color}25`,
          boxShadow: `
            0 1px 2px rgba(15,23,42,0.04),
            0 6px 16px ${color}30,
            inset 0 1px 0 rgba(255,255,255,0.9)
          `,
        }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
            boxShadow: `0 3px 8px ${color}55`,
          }}
        >
          <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <div className="text-[9px] font-black text-gray-500 uppercase tracking-wider">
            {label}
          </div>
          <div className="text-sm font-black" style={{ color: "#0f172a" }}>
            {value}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ----------- MAIN HERO ----------- */
const ConvertHero = () => {
  // Live counter
  const conversionsToday = useCounter(127, 2500, 800);
  const convRate = useCounter(5.4, 2200, 800);
  const [tickCount, setTickCount] = useState(0);

  // Continuous "live" feel: increment counter every 6-8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTickCount((c) => c + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Cycle 4 events visible, with newest sliding in
  const [streamIdx, setStreamIdx] = useState(0);
  useEffect(() => {
    const cycler = setInterval(() => {
      setStreamIdx((i) => (i + 1) % STREAM_EVENTS.length);
    }, 4500);
    return () => clearInterval(cycler);
  }, []);

  // Build visible stack (3 cards, top is fresh)
  const visible = [
    STREAM_EVENTS[streamIdx % STREAM_EVENTS.length],
    STREAM_EVENTS[(streamIdx + 1) % STREAM_EVENTS.length],
    STREAM_EVENTS[(streamIdx + 2) % STREAM_EVENTS.length],
  ];
  const ages = ["now", "32s", "1m"];

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden flex sm:items-center pt-16 sm:pt-24 text-textColor pb-20 sm:pb-12">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px), radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 sm:items-center">
          {/* ===== LEFT: Text Content ===== */}
          <div className="flex flex-col lg:items-start sm:items-center">
            <CursorFollower
              text={
                <p className="flex items-center justify-center gap-x-2 italic">
                  ShiftConvert <ArrowRight size={16} /> Better UX{" "}
                  <ArrowRight size={16} /> More Revenue
                </p>
              }
              className="w-fit mb-4 sm:mb-6 md:mb-8 bg-primaryBlue px-6 py-2 rounded-full text-white"
              textClassName="text-white font-semibold text-xs sm:text-sm lg:text-base"
              gradientFrom="#f76707"
              gradientTo="#0B1D30"
              circleSize={100}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight lg:text-left sm:text-center text-left"
            >
              <h1>
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  Stop Losing
                </span>
                <br />
                <span className="text-primaryOrange">Ready-To-Buy Visitors</span>
                <br />
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  to Confusing Pages
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
            >
              We optimize messaging, page flow, and CTAs so more visitors take action.
              <span className="font-semibold text-[#0C1F3A]">
                {" "}
                Clearer journeys, stronger trust signals, and measurable conversion gains.
              </span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-20 sm:mb-16 px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="/contactus"
                  className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
                >
                  Get Free Conversion Audit
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ===== RIGHT: Live Conversion Stream (transparent BG) ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex items-start justify-center"
            style={{ minHeight: 520 }}
          >
            <div className="relative w-full" style={{ maxWidth: 420 }}>
              {/* Ambient color orbs */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "10%",
                  left: "20%",
                  width: 220,
                  height: 220,
                  background:
                    "radial-gradient(circle, rgba(67,97,238,0.16), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "5%",
                  right: "10%",
                  width: 260,
                  height: 260,
                  background:
                    "radial-gradient(circle, rgba(247,103,7,0.16), transparent 70%)",
                  filter: "blur(55px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "50%",
                  left: "-5%",
                  width: 180,
                  height: 180,
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.14), transparent 70%)",
                  filter: "blur(45px)",
                }}
              />

              {/* ===== LIVE banner header ===== */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mb-3 relative z-20"
              >
                <div className="relative w-2.5 h-2.5">
                  <motion.div
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeOut" }}
                    className="absolute inset-0 bg-red-500 rounded-full"
                  />
                  <div
                    className="absolute inset-0 bg-red-500 rounded-full"
                    style={{ boxShadow: "0 0 8px #ef4444" }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-700">
                  Live · Last 5 minutes
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              </motion.div>

              {/* ===== Big stats panel (transparent, no card border) ===== */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative z-20 mb-5"
              >
                <div className="flex items-end gap-4">
                  <div>
                    <div
                      className="text-5xl font-black leading-none tracking-tighter"
                      style={{
                        background:
                          "linear-gradient(135deg, #4361EE 0%, #F76707 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {Math.round(conversionsToday) + tickCount}
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-500 mt-1">
                      Conversions today
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-3xl font-black leading-none"
                        style={{
                          color: "#22c55e",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {convRate.toFixed(1)}%
                      </span>
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8 }}
                        className="text-base font-black text-green-500"
                      >
                        ↗
                      </motion.span>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.15em] text-gray-500 mt-1">
                      Conversion rate
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ===== Stream of conversion cards ===== */}
              <div className="relative z-20 space-y-2.5">
                <AnimatePresence mode="popLayout" initial={false}>
                  {visible.map((event, idx) => (
                    <ConversionCard
                      key={`${event.name}-${streamIdx}-${idx}`}
                      event={event}
                      age={ages[idx]}
                      isTop={idx === 0}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* ===== Floating accent chips ===== */}
              <AccentChip
                icon={MousePointerClick}
                label="CTA Clicks"
                value="+128%"
                color="#4361EE"
                position={{ top: "1%", right: "-8%" }}
                delay={1.4}
              />
              <AccentChip
                icon={TrendingUp}
                label="Bookings"
                value="+42%"
                color="#F76707"
                position={{ bottom: "-2%", left: "-8%" }}
                delay={1.6}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConvertHero;
