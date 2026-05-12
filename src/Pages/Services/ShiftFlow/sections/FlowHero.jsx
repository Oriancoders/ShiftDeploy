'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";
import CursorFollower from "../../../../utils/CursorFollower";
import Link from "next/link";

/* =====================================================
   Live Health Monitor — EKG waveform + status feed
   No circles, no cards. Just live signals on transparent BG.
   ===================================================== */

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function useCounter(target, duration = 2000, delay = 400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf, begin = null;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!begin) begin = ts;
        const p = Math.min((ts - begin) / duration, 1);
        setValue(target * easeOutQuart(p));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [target, duration, delay]);
  return value;
}

/* ----------- EKG / Heartbeat waveform ----------- */
function EKGWaveform() {
  // One heartbeat cycle = 200 units wide
  // Pattern: flat → P wave → flat → QRS spike → flat → T wave → flat
  const beatSegment = (offset) => {
    const x = offset;
    return `
      L ${x + 30} 50
      L ${x + 45} 47
      L ${x + 55} 50
      L ${x + 70} 50
      L ${x + 78} 55
      L ${x + 88} 12
      L ${x + 96} 88
      L ${x + 105} 50
      L ${x + 125} 50
      L ${x + 140} 42
      L ${x + 155} 50
      L ${x + 200} 50
    `;
  };

  // Draw 6 beats to cover scrolling
  let path = "M -200 50";
  for (let i = 0; i < 6; i++) {
    path += " " + beatSegment(-200 + i * 200);
  }

  return (
    <div className="relative w-full" style={{ height: 90 }}>
      <svg viewBox="0 0 800 100" preserveAspectRatio="none" style={{ width: "100%", height: "100%", overflow: "visible" }}>
        <defs>
          <linearGradient id="ekgFade" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="12%" stopColor="#22c55e" stopOpacity="1" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
          </linearGradient>
          <filter id="ekgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint grid */}
        {[12, 30, 50, 70, 88].map((y, i) => (
          <line key={`h-${i}`} x1="0" y1={y} x2="800" y2={y} stroke="#22c55e" strokeOpacity="0.06" strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 100} y1="5" x2={i * 100} y2="95" stroke="#22c55e" strokeOpacity="0.05" strokeWidth="1" />
        ))}

        {/* Scrolling EKG group */}
        <motion.g
          animate={{ x: [0, -200] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
        >
          <path
            d={path}
            fill="none"
            stroke="url(#ekgFade)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ekgGlow)"
          />
        </motion.g>

        {/* Scan dot at leading edge */}
        <motion.circle
          cx="780"
          cy="50"
          r="4"
          fill="#22c55e"
          filter="url(#dotGlow)"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "780px 50px" }}
        />

        {/* Right edge bright fade */}
        <rect x="760" y="0" width="40" height="100" fill="url(#rightFade)" />
        <defs>
          <linearGradient id="rightFade" x1="0%" x2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="100%" stopColor="rgba(248,250,252,0.8)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ----------- Status row ----------- */
function StatusRow({ label, value, delay, status = "ok" }) {
  const dotColor = status === "ok" ? "#22c55e" : status === "warn" ? "#fbbf24" : "#ef4444";
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3 py-1.5"
    >
      <div className="relative w-2 h-2 flex-shrink-0">
        <motion.div
          animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: delay * 0.5, ease: "easeOut" }}
          className="absolute inset-0 rounded-full"
          style={{ background: dotColor }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: dotColor, boxShadow: `0 0 6px ${dotColor}` }}
        />
      </div>
      <span className="text-[11px] font-bold text-gray-700 flex-1 min-w-0 truncate">{label}</span>
      <span className="text-[11px] font-black text-gray-900 flex-shrink-0" style={{ fontVariantNumeric: "tabular-nums" }}>
        {value}
      </span>
    </motion.div>
  );
}

/* ----------- Floating accent pill ----------- */
function AccentPill({ icon: Icon, label, value, color, position, delay }) {
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
        transition={{ repeat: Infinity, duration: 4 + delay * 0.2, ease: "easeInOut" }}
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
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
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
          <div className="text-sm font-black text-gray-900">{value}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ----------- Live clock ----------- */
function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>{time}</span>
  );
}

/* ========== MAIN HERO ========== */
const FlowHero = () => {
  const health = useCounter(99, 2200, 500);
  const bpm = useCounter(72, 1800, 700);
  const [bpmJitter, setBpmJitter] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setBpmJitter(Math.floor(Math.random() * 3) - 1);
    }, 2500);
    return () => clearInterval(i);
  }, []);

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
          {/* ===== LEFT: text content (unchanged) ===== */}
          <div className="flex flex-col lg:items-start sm:items-center">
            <CursorFollower
              text={
                <p className="flex items-center justify-center gap-x-2 italic">
                  ShiftFlow <ArrowRight size={16} /> Proactive Support <ArrowRight size={16} /> Stable Growth
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
                  Keep Your Digital
                </span>
                <br />
                <span className="text-primaryOrange">Presence Healthy</span>
                <br />
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  Every Month
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
            >
              ShiftFlow is proactive ongoing support and optimization.
              <span className="font-semibold text-[#0C1F3A]"> Monitoring, preventive fixes, security upkeep, and performance checks with monthly improvements.</span>
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
                  Start ShiftFlow Support
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ===== RIGHT: Live Health Monitor (transparent) ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: 500 }}
          >
            <div className="relative w-full" style={{ maxWidth: 460 }}>
              {/* Ambient gradient orbs */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "5%",
                  left: "10%",
                  width: 220,
                  height: 220,
                  background: "radial-gradient(circle, rgba(34,197,94,0.18), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "5%",
                  right: "5%",
                  width: 240,
                  height: 240,
                  background: "radial-gradient(circle, rgba(67,97,238,0.16), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "45%",
                  right: "20%",
                  width: 180,
                  height: 180,
                  background: "radial-gradient(circle, rgba(247,103,7,0.12), transparent 70%)",
                  filter: "blur(45px)",
                }}
              />

              {/* ===== Top bar: LIVE indicator + clock ===== */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 mb-4 relative z-20"
              >
                <div className="relative w-2.5 h-2.5">
                  <motion.div
                    animate={{ scale: [1, 2.4], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-green-500 rounded-full"
                  />
                  <div
                    className="absolute inset-0 bg-green-500 rounded-full"
                    style={{ boxShadow: "0 0 8px #22c55e" }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-700">
                  Live · Monitoring
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                <span className="text-[10px] font-bold text-gray-500" style={{ fontVariantNumeric: "tabular-nums" }}>
                  <LiveClock /> UTC
                </span>
              </motion.div>

              {/* ===== Big Health Score row ===== */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-end justify-between mb-2 relative z-20"
              >
                <div>
                  <div
                    className="text-[72px] font-black leading-none tracking-tighter"
                    style={{
                      background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {Math.round(health)}
                  </div>
                  <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1">
                    Health Score
                  </div>
                </div>
                <div className="text-right pb-2">
                  <div className="flex items-baseline gap-1 justify-end">
                    <span
                      className="text-2xl font-black text-gray-900"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {Math.max(1, Math.round(bpm) + bpmJitter)}
                    </span>
                    <span className="text-[10px] font-black text-gray-500">BPM</span>
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.15em] text-green-600 mt-0.5">
                    ● Stable
                  </div>
                </div>
              </motion.div>

              {/* ===== EKG Waveform ===== */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative z-20 mb-1"
              >
                <EKGWaveform />
                <div className="flex justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest -mt-1">
                  <span>Vitals · Last 60s</span>
                  <span className="text-green-600">All normal</span>
                </div>
              </motion.div>

              {/* ===== System status feed ===== */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="relative z-20 mt-5 pt-4 border-t border-gray-200/60"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                    System Checks
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-black text-green-600 uppercase tracking-widest">
                    <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                    All Operational
                  </span>
                </div>
                <StatusRow label="SSL Certificate" value="Valid · 4 mo" delay={1.3} />
                <StatusRow label="Server Uptime" value="99.99%" delay={1.4} />
                <StatusRow label="Security Scan" value="Clean · 12h" delay={1.5} />
                <StatusRow label="Performance Check" value="98/100" delay={1.6} />
                <StatusRow label="Auto-fixes Applied" value="12 this month" delay={1.7} />
              </motion.div>

              {/* ===== Floating accent pills ===== */}
              <AccentPill
                icon={Activity}
                label="Monitoring"
                value="24/7"
                color="#4361EE"
                position={{ top: "-2%", right: "-10%" }}
                delay={1.9}
              />
              <AccentPill
                icon={Wrench}
                label="Preventive Fixes"
                value="Monthly"
                color="#F76707"
                position={{ bottom: "5%", left: "-12%" }}
                delay={2.1}
              />
              <AccentPill
                icon={ShieldCheck}
                label="Security"
                value="Active"
                color="#22c55e"
                position={{ top: "35%", right: "-8%" }}
                delay={2.3}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowHero;
