'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Zap, Award } from "lucide-react";
import CursorFollower from "../../../../utils/CursorFollower";
import Link from "next/link";

/* ------------- helpers ------------- */
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

/* ------------- Floating Lightning Bolt ------------- */
function LightningBolt() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.3, duration: 0.7, type: "spring", stiffness: 120 }}
      className="absolute z-30"
      style={{ top: "5%", left: "12%" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #fbbf24 0%, #F76707 100%)",
            boxShadow: `
              0 4px 8px rgba(247,103,7,0.25),
              0 12px 32px rgba(251,191,36,0.45),
              inset 0 2px 4px rgba(255,255,255,0.4),
              inset 0 -2px 4px rgba(0,0,0,0.15)
            `,
          }}
        >
          <Zap className="w-7 h-7 text-white" fill="white" strokeWidth={1.5} />
          {/* Inner glow halo */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-2xl"
            style={{ border: "2px solid #fbbf24" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------- Central Performance Core (no container card) ------------- */
function PerformanceCore() {
  const score = useCounter(98, 2200, 500);
  const intScore = Math.round(score);

  const radius = 92;
  const stroke = 11;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (intScore / 100) * circ;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 75 }}
      className="absolute z-20"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-45%, -50%)",
        width: 230,
        height: 230,
      }}
    >
      {/* Soft pulsing outer halo */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0, 0.55] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: "0 0 60px 30px rgba(34,197,94,0.20)" }}
      />

      {/* Score ring */}
      <svg width="230" height="230" className="absolute inset-0" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="speedRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <filter id="ringGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint background track */}
        <circle
          cx="115"
          cy="115"
          r={radius}
          fill="none"
          stroke="rgba(34,197,94,0.10)"
          strokeWidth={stroke}
        />

        {/* Animated arc */}
        <motion.circle
          cx="115"
          cy="115"
          r={radius}
          fill="none"
          stroke="url(#speedRingGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          filter="url(#ringGlow)"
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transform: "rotate(-90deg)", transformOrigin: "115px 115px" }}
        />

        {/* Inner tick marks */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2 - Math.PI / 2;
          const r1 = radius - 18;
          const r2 = radius - 26;
          const x1 = 115 + r1 * Math.cos(angle);
          const y1 = 115 + r1 * Math.sin(angle);
          const x2 = 115 + r2 * Math.cos(angle);
          const y2 = 115 + r2 * Math.sin(angle);
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#22c55e"
              strokeWidth={i % 6 === 0 ? 1.8 : 1}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 0.6 + i * 0.025 }}
            />
          );
        })}

        {/* Shimmer dot traveling along arc */}
        <motion.circle
          r="5"
          fill="#22c55e"
          filter="url(#ringGlow)"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "98%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.2, delay: 0.5, times: [0, 0.1, 0.9, 1] }}
          style={{
            offsetPath: `circle(${radius}px at 115px 115px)`,
            offsetRotate: "0deg",
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div
          className="text-[68px] font-black leading-none tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {intScore}
        </div>
        <div className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] mt-1">
          Performance
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, type: "spring", stiffness: 200 }}
          className="mt-2 flex items-center gap-1 px-2 py-0.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(132,204,22,0.15))",
            border: "1px solid rgba(34,197,94,0.25)",
          }}
        >
          <Award className="w-2.5 h-2.5 text-green-700" strokeWidth={3} />
          <span className="text-[8px] font-black text-green-700 tracking-widest">
            LIGHTHOUSE
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------- Glass Metric Chip (floating) ------------- */
function MetricChip({ position, value, label, color, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.65, type: "spring", stiffness: 110, damping: 14 }}
      className="absolute z-30"
      style={position}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 + delay * 0.2, ease: "easeInOut" }}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${color}25`,
          boxShadow: `
            0 1px 2px rgba(15,23,42,0.04),
            0 6px 16px ${color}28,
            0 24px 50px rgba(15,23,42,0.08),
            inset 0 1px 0 rgba(255,255,255,0.9)
          `,
        }}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
            boxShadow: `0 4px 12px ${color}55, inset 0 1px 0 rgba(255,255,255,0.3)`,
          }}
        >
          <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <div className="leading-tight">
          <div
            className="text-[9px] font-black text-gray-500 uppercase tracking-[0.12em]"
            style={{ whiteSpace: "nowrap" }}
          >
            {label}
          </div>
          <div className="text-lg font-black text-gray-900 leading-tight tracking-tight">
            {value}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------- Vital Row (left stack) ------------- */
function VitalRow({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 100 }}
      className="flex items-center justify-between px-3 py-2 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(34,197,94,0.18)",
        boxShadow: "0 4px 14px rgba(34,197,94,0.10), 0 1px 2px rgba(15,23,42,0.03)",
      }}
    >
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: delay * 0.1 }}
          className="w-1.5 h-1.5 rounded-full bg-green-500"
          style={{ boxShadow: "0 0 8px #22c55e" }}
        />
        <span className="text-[10px] font-black text-gray-700 uppercase tracking-wider">
          {label}
        </span>
      </div>
      <span
        className="text-xs font-black text-gray-900"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {value}
      </span>
    </motion.div>
  );
}

/* ------------- Sparkle particle ------------- */
function Sparkle({ x, y, delay, size = 8, color = "#22c55e" }) {
  return (
    <motion.div
      className="absolute z-10 pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0], rotate: [0, 180] }}
      transition={{
        repeat: Infinity,
        duration: 2.2,
        delay,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 10 10">
        <path
          d="M5 0 L5.8 4 L10 5 L5.8 6 L5 10 L4.2 6 L0 5 L4.2 4 Z"
          fill={color}
          style={{ filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
    </motion.div>
  );
}

/* ============== MAIN HERO ============== */
const SpeedHero = () => {
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
          {/* ===== LEFT: Text ===== */}
          <div className="flex flex-col lg:items-start sm:items-center">
            <CursorFollower
              text={
                <p className="flex items-center justify-center gap-x-2 italic">
                  ShiftSpeed <ArrowRight size={16} /> Faster Sites{" "}
                  <ArrowRight size={16} /> More Clients
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
                <span className="text-primaryOrange">High-Value Clients</span>
                <br />
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  to Slow Website
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
            >
              We re-engineer service business websites to load in under 2.5 seconds.
              <span className="font-semibold text-[#0C1F3A]">
                {" "}
                Better Google Rankings, Higher Conversions, Zero Frustration.
              </span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-20 sm:mb-16 px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href={"/contactus"}
                  className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
                >
                  Get Free Audit
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ===== RIGHT: Scattered Performance Stack (transparent bg) ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: 480 }}
          >
            <div className="relative w-full h-[500px]">
              {/* Ambient color orbs (transparent overall — just glow) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "12%",
                  left: "25%",
                  width: 220,
                  height: 220,
                  background: "radial-gradient(circle, rgba(67,97,238,0.18), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "10%",
                  right: "10%",
                  width: 260,
                  height: 260,
                  background: "radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)",
                  filter: "blur(55px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "55%",
                  left: "0%",
                  width: 180,
                  height: 180,
                  background: "radial-gradient(circle, rgba(247,103,7,0.14), transparent 70%)",
                  filter: "blur(45px)",
                }}
              />

              {/* Lightning bolt — top-left of visual */}
              <LightningBolt />

              {/* CENTER: Performance Score Core (no card wrapping) */}
              <PerformanceCore />

              {/* TOP-RIGHT: Load Time chip */}
              <MetricChip
                position={{ top: "4%", right: "2%" }}
                icon={Clock}
                label="Load Time"
                value="0.8s"
                color="#4361EE"
                delay={1.2}
              />

              {/* MID-LEFT: Core Vitals stack */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute z-25"
                style={{ left: "0%", top: "35%", width: 130 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="flex flex-col gap-1.5"
                >
                  <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.18em] mb-0.5 pl-2">
                    Core Vitals
                  </div>
                  <VitalRow label="LCP" value="1.1s" delay={1.55} />
                  <VitalRow label="CLS" value="0.03" delay={1.7} />
                  <VitalRow label="INP" value="72ms" delay={1.85} />
                </motion.div>
              </motion.div>

              {/* BOTTOM-RIGHT: Conversion chip */}
              <MetricChip
                position={{ bottom: "6%", right: "-2%" }}
                icon={TrendingUp}
                label="Conversion"
                value="+425%"
                color="#F76707"
                delay={1.7}
              />

              {/* Scattered sparkles */}
              <Sparkle x="12%" y="55%" delay={2.6} color="#22c55e" />
              <Sparkle x="75%" y="45%" delay={2.9} color="#4361EE" size={10} />
              <Sparkle x="40%" y="92%" delay={3.2} color="#F76707" />
              <Sparkle x="85%" y="22%" delay={3.5} color="#22c55e" size={6} />
              <Sparkle x="20%" y="22%" delay={3.8} color="#fbbf24" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeedHero;
