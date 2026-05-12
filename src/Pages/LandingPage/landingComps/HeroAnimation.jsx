'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

/* -------- Business-focused pills (right column) -------- */
const PILLS = [
  {
    label: "Page Speed",
    value: "1.1s",
    sublabel: "from 4.2s",
    arrow: "down",
    color: "#4361EE",
    delay: 1.1,
  },
  {
    label: "Revenue",
    value: "+47%",
    sublabel: "monthly",
    arrow: "up",
    color: "#F76707",
    delay: 1.25,
  },
  {
    label: "Bookings",
    value: "+134%",
    sublabel: "YoY",
    arrow: "up",
    color: "#22c55e",
    delay: 1.4,
  },
];

function FloatingPill({ label, value, sublabel, arrow, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay, duration: 0.55, type: "spring", stiffness: 110, damping: 14 }}
      style={{
        background: "rgba(255,255,255,0.96)",
        border: `1px solid ${color}30`,
        borderRadius: 14,
        padding: "10px 12px",
        boxShadow: `0 6px 16px ${color}28, 0 2px 4px rgba(15,23,42,0.05)`,
        display: "flex",
        alignItems: "center",
        gap: 10,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 3px 8px ${color}50`,
          flexShrink: 0,
        }}
      >
        <span style={{ color: "white", fontSize: 15, fontWeight: 900, lineHeight: 1 }}>
          {arrow === "up" ? "↑" : "↓"}
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, minWidth: 0 }}>
        <span
          style={{
            fontSize: 9,
            color: "#64748b",
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: 15, color: "#0f172a", fontWeight: 900 }}>{value}</span>
          <span style={{ fontSize: 9, color: "#94a3b8", fontWeight: 600 }}>{sublabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* -------- Main hero animation -------- */
export default function HeroAnimation() {
  const [score, setScore] = useState(0);
  const [needleAngle, setNeedleAngle] = useState(-90);

  useEffect(() => {
    const SYNC_DELAY = 400;
    const SYNC_DURATION = 2200;
    const target = 98;
    const start = -90;
    const end = 88;

    let scoreBegin = null;
    let needleBegin = null;
    let scoreRaf;
    let needleRaf;

    const scoreTimer = setTimeout(() => {
      const step = (ts) => {
        if (!scoreBegin) scoreBegin = ts;
        const t = Math.min((ts - scoreBegin) / SYNC_DURATION, 1);
        setScore(Math.round(target * easeOutQuart(t)));
        if (t < 1) scoreRaf = requestAnimationFrame(step);
      };
      scoreRaf = requestAnimationFrame(step);
    }, SYNC_DELAY);

    const needleTimer = setTimeout(() => {
      const step = (ts) => {
        if (!needleBegin) needleBegin = ts;
        const t = Math.min((ts - needleBegin) / SYNC_DURATION, 1);
        setNeedleAngle(start + (end - start) * easeOutQuart(t));
        if (t < 1) needleRaf = requestAnimationFrame(step);
      };
      needleRaf = requestAnimationFrame(step);
    }, SYNC_DELAY);

    return () => {
      cancelAnimationFrame(scoreRaf);
      cancelAnimationFrame(needleRaf);
      clearTimeout(scoreTimer);
      clearTimeout(needleTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 580,
        display: "flex",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 0",
      }}
    >
      {/* Ambient bg glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(67,97,238,0.10) 0%, transparent 55%), radial-gradient(ellipse at 75% 60%, rgba(247,103,7,0.10) 0%, transparent 55%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ============ LEFT: Gauge column ============ */}
      <div style={{ flex: "1 1 auto", position: "relative", zIndex: 5, minWidth: 0 }}>
        <svg viewBox="0 0 480 420" style={{ width: "100%", display: "block", overflow: "visible" }}>
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="30%" stopColor="#f97316" />
              <stop offset="55%" stopColor="#facc15" />
              <stop offset="80%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>

            <linearGradient id="needleGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFB347" />
              <stop offset="35%" stopColor="#F76707" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>

            <radialGradient id="hubGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
            <radialGradient id="hubInner" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#F76707" />
              <stop offset="100%" stopColor="#c2410c" />
            </radialGradient>

            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="needleShadow" x="-100%" y="-100%" width="300%" height="300%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.30" />
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#F76707" floodOpacity="0.50" />
            </filter>
            <filter id="hubShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.30" />
            </filter>
          </defs>

          {/* Static ticks (no animation = no lag) */}
          {Array.from({ length: 13 }).map((_, i) => {
            const angle = -180 + (i * 180) / 12;
            const rad = (angle * Math.PI) / 180;
            const r1 = 152;
            const r2 = i % 3 === 0 ? 134 : 144;
            const x1 = 240 + r1 * Math.cos(rad);
            const y1 = 240 + r1 * Math.sin(rad);
            const x2 = 240 + r2 * Math.cos(rad);
            const y2 = 240 + r2 * Math.sin(rad);
            const p = i / 12;
            const tickColor =
              p < 0.3 ? "#ef4444" : p < 0.55 ? "#f97316" : p < 0.8 ? "#84cc16" : "#22c55e";
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={tickColor}
                strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
                strokeLinecap="round"
                opacity="0.85"
              />
            );
          })}

          {/* Arc track */}
          <path
            d="M 88 240 A 152 152 0 0 1 392 240"
            fill="none"
            stroke="#f1f5f9"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Arc filled — synced with needle */}
          <motion.path
            d="M 88 240 A 152 152 0 0 1 392 240"
            fill="none"
            stroke="url(#arcGrad)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* SLOW / FAST labels */}
          <text
            x="78"
            y="275"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="#94a3b8"
            letterSpacing="2.5"
          >
            SLOW
          </text>
          <text
            x="402"
            y="275"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="#22c55e"
            letterSpacing="2.5"
          >
            FAST
          </text>

          {/* CLEAN NEEDLE — direct SVG transform */}
          <g transform={`rotate(${needleAngle} 240 240)`}>
            <path
              d="M 235 240 L 240 92 L 245 240 Z"
              fill="url(#needleGrad)"
              filter="url(#needleShadow)"
              strokeLinejoin="round"
            />
            <path
              d="M 235 240 L 240 92 L 240 240 Z"
              fill="rgba(255,255,255,0.32)"
            />
            <circle cx="240" cy="92" r="7" fill="#FF8A2B" filter="url(#arcGlow)" />
            <circle cx="240" cy="92" r="3.5" fill="#FFF4E6" opacity="0.95" />
          </g>

          {/* CENTER HUB */}
          <circle cx="240" cy="240" r="26" fill="url(#hubGrad)" filter="url(#hubShadow)" />
          <circle cx="240" cy="240" r="26" fill="none" stroke="#F76707" strokeWidth="1.5" opacity="0.5" />
          <circle cx="240" cy="240" r="12" fill="url(#hubInner)" />
          <circle cx="236" cy="236" r="3.5" fill="white" opacity="0.7" />

          {/* Score display */}
          <text
            x="240"
            y="320"
            textAnchor="middle"
            fontSize="56"
            fontWeight="900"
            fill="#0f172a"
            style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "-0.04em" }}
          >
            {score}
          </text>
          <text
            x="300"
            y="320"
            fontSize="18"
            fontWeight="700"
            fill="#94a3b8"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            /100
          </text>
          <text
            x="240"
            y="343"
            textAnchor="middle"
            fontSize="10"
            fontWeight="800"
            fill="#0f172a"
            letterSpacing="4"
          >
            GROWTH SCORE
          </text>
          <text
            x="240"
            y="362"
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#22c55e"
            letterSpacing="2.5"
          >
            → DRIVES REAL REVENUE
          </text>
        </svg>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 4,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.06em",
          }}
        >
          <div style={{ position: "relative", width: 8, height: 8 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
              }}
            />
          </div>
          <span style={{ color: "#0f172a" }}>WE BOOST YOUR BUSINESS</span>
          <span style={{ color: "#cbd5e1" }}>|</span>
          <span style={{ color: "#F76707" }}>NOT JUST CODE ✓</span>
        </motion.div>
      </div>

      {/* ============ RIGHT: A+ + pills column ============ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: 170,
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* A+ badge */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 140, damping: 12 }}
          style={{
            alignSelf: "center",
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22c55e 0%, #16a34a 60%, #15803d 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 26,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            boxShadow: `
              0 4px 8px rgba(34,197,94,0.30),
              0 12px 28px rgba(34,197,94,0.35),
              inset 0 2px 4px rgba(255,255,255,0.30),
              inset 0 -2px 4px rgba(0,0,0,0.15)
            `,
            marginBottom: 4,
          }}
        >
          A+
        </motion.div>

        {/* Pills stacked */}
        {PILLS.map((p) => (
          <FloatingPill key={p.label} {...p} />
        ))}
      </div>
    </div>
  );
}
