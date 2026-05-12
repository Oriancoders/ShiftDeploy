'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Zap } from "lucide-react";
import CursorFollower from "../../../../utils/CursorFollower";
import Link from "next/link";

/* ========================================================
   Live Architecture Tree — NO circles, NO cards, just
   lines + nodes + text + flowing data.
   ======================================================== */

/* SVG viewBox dimensions */
const VB_W = 460;
const VB_H = 520;

/* Tree nodes — positioned as % of viewBox */
const NODES = {
  root: { id: "root", label: "Your Site", sublabel: "shiftdeploy.com", x: 50, y: 6, color: "#0f172a", level: 0 },

  perf: { id: "perf", label: "Performance", icon: "⚡", x: 16, y: 30, color: "#22c55e", level: 1 },
  seo:  { id: "seo",  label: "SEO",         icon: "◆", x: 50, y: 30, color: "#F76707", level: 1 },
  cro:  { id: "cro",  label: "CRO",         icon: "▲", x: 84, y: 30, color: "#a855f7", level: 1 },

  vitals:  { id: "vitals",  label: "Core Vitals",  x: 8,  y: 56, color: "#22c55e", level: 2 },
  speed:   { id: "speed",   label: "1.1s Load",    x: 26, y: 56, color: "#22c55e", level: 2 },
  schema:  { id: "schema",  label: "Schema.org",   x: 42, y: 56, color: "#F76707", level: 2 },
  meta:    { id: "meta",    label: "Meta Tags",    x: 58, y: 56, color: "#F76707", level: 2 },
  forms:   { id: "forms",   label: "Smart Forms",  x: 74, y: 56, color: "#a855f7", level: 2 },
  cta:     { id: "cta",     label: "Smart CTAs",   x: 92, y: 56, color: "#a855f7", level: 2 },

  deploy: { id: "deploy", label: "Production Ready", sublabel: "Built to scale", x: 50, y: 92, color: "#4361EE", level: 3 },
};

/* Edges: parent → child */
const EDGES = [
  ["root", "perf", "#22c55e", 0.4],
  ["root", "seo",  "#F76707", 0.5],
  ["root", "cro",  "#a855f7", 0.6],
  ["perf", "vitals", "#22c55e", 0.9],
  ["perf", "speed",  "#22c55e", 1.0],
  ["seo",  "schema", "#F76707", 1.1],
  ["seo",  "meta",   "#F76707", 1.2],
  ["cro",  "forms",  "#a855f7", 1.3],
  ["cro",  "cta",    "#a855f7", 1.4],
  ["vitals", "deploy", "#22c55e", 1.7],
  ["speed",  "deploy", "#22c55e", 1.75],
  ["schema", "deploy", "#F76707", 1.8],
  ["meta",   "deploy", "#F76707", 1.85],
  ["forms",  "deploy", "#a855f7", 1.9],
  ["cta",    "deploy", "#a855f7", 1.95],
];

/* Convert % to viewBox coords */
const px = (p) => (p / 100) * VB_W;
const py = (p) => (p / 100) * VB_H;

/* Curved bezier path between two points (smooth tree curves) */
function bezierPath(x1, y1, x2, y2) {
  const dy = y2 - y1;
  const c1x = x1;
  const c1y = y1 + dy * 0.5;
  const c2x = x2;
  const c2y = y2 - dy * 0.5;
  return `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;
}

/* ----------- Architecture Tree SVG ----------- */
function ArchitectureTree() {
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <defs>
        <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ============= EDGES (drawn first, behind nodes) ============= */}
      {EDGES.map(([fromId, toId, color, delay], i) => {
        const from = NODES[fromId];
        const to = NODES[toId];
        const x1 = px(from.x);
        const y1 = py(from.y);
        const x2 = px(to.x);
        const y2 = py(to.y);
        const d = bezierPath(x1, y1, x2, y2);
        const pathId = `path-${fromId}-${toId}`;

        return (
          <g key={`edge-${i}`}>
            {/* Static thin line */}
            <motion.path
              id={pathId}
              d={d}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeOpacity="0.45"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.45 }}
              transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Flowing data dot along the path */}
            <motion.circle
              r="2.5"
              fill={color}
              filter="url(#nodeGlow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.5,
                delay: delay + 1.2,
                repeat: Infinity,
                repeatDelay: 1 + Math.random() * 2,
                times: [0, 0.1, 0.9, 1],
              }}
            >
              <animateMotion
                dur="2.5s"
                begin={`${delay + 1.2}s`}
                repeatCount="indefinite"
                path={d}
              />
            </motion.circle>
          </g>
        );
      })}

      {/* ============= NODES ============= */}
      {Object.values(NODES).map((node) => {
        const x = px(node.x);
        const y = py(node.y);
        const nodeDelay = node.level * 0.4 + 0.2;
        const radius = node.level === 0 ? 7 : node.level === 3 ? 8 : node.level === 1 ? 5 : 3.5;

        return (
          <g key={node.id}>
            {/* Pulsing ring (only on root and deploy) */}
            {(node.level === 0 || node.level === 3) && (
              <motion.circle
                cx={x}
                cy={y}
                r={radius}
                fill="none"
                stroke={node.color}
                strokeWidth="1.5"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: [1, 2.5, 1], opacity: [0.7, 0, 0.7] }}
                transition={{
                  delay: nodeDelay + 0.5,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: `${x}px ${y}px` }}
              />
            )}

            {/* Node dot */}
            <motion.circle
              cx={x}
              cy={y}
              r={radius}
              fill={node.color}
              filter={node.level === 0 || node.level === 3 ? "url(#strongGlow)" : "url(#nodeGlow)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: nodeDelay,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              style={{ transformOrigin: `${x}px ${y}px` }}
            />

            {/* Inner white core (3D dot effect) */}
            <motion.circle
              cx={x - radius * 0.3}
              cy={y - radius * 0.3}
              r={radius * 0.3}
              fill="white"
              opacity="0.55"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ delay: nodeDelay + 0.2 }}
            />

            {/* Label */}
            <motion.g
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: nodeDelay + 0.25, duration: 0.5 }}
            >
              {/* Big text for level 0 + 3 */}
              {(node.level === 0 || node.level === 3) ? (
                <>
                  <text
                    x={x}
                    y={y + radius + 18}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="900"
                    fill="#0f172a"
                    letterSpacing="0.5"
                  >
                    {node.label}
                  </text>
                  {node.sublabel && (
                    <text
                      x={x}
                      y={y + radius + 32}
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="700"
                      fill="#94a3b8"
                      letterSpacing="1.5"
                      style={{ textTransform: "uppercase" }}
                    >
                      {node.sublabel}
                    </text>
                  )}
                </>
              ) : node.level === 1 ? (
                <>
                  <text
                    x={x}
                    y={y + radius + 14}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="900"
                    fill={node.color}
                    letterSpacing="0.5"
                  >
                    {node.label}
                  </text>
                </>
              ) : (
                <text
                  x={x}
                  y={y + radius + 12}
                  textAnchor="middle"
                  fontSize="9"
                  fontWeight="700"
                  fill="#475569"
                  letterSpacing="0.3"
                >
                  {node.label}
                </text>
              )}
            </motion.g>
          </g>
        );
      })}
    </svg>
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

/* ========== MAIN HERO ========== */
const BuildHero = () => {
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
          {/* ===== LEFT TEXT ===== */}
          <div className="flex flex-col lg:items-start sm:items-center">
            <CursorFollower
              text={
                <p className="flex items-center justify-center gap-x-2 italic">
                  ShiftBuild <ArrowRight size={16} /> Scalable Structure{" "}
                  <ArrowRight size={16} /> Growth Ready
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
                  Websites Built to
                </span>
                <br />
                <span className="text-primaryOrange">Grow, Not Just Exist</span>
                <br />
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  for Growing Businesses
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
            >
              ShiftBuild designs and develops scalable, conversion-ready business websites with performance, CRO,
              and SEO architecture built in from day one.
              <span className="font-semibold text-[#0C1F3A]">
                {" "}
                No fragile rebuild cycle. No technical debt trap.
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
                  Start My Build Plan
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ===== RIGHT: Live Architecture Tree (transparent) ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: 520 }}
          >
            <div className="relative w-full" style={{ maxWidth: 460, height: 540 }}>
              {/* Ambient gradient orbs (transparent bg) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "5%",
                  left: "25%",
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
                  top: "40%",
                  right: "5%",
                  width: 200,
                  height: 200,
                  background:
                    "radial-gradient(circle, rgba(34,197,94,0.16), transparent 70%)",
                  filter: "blur(45px)",
                }}
              />
              <div
                className="absolute pointer-events-none"
                style={{
                  bottom: "5%",
                  left: "0%",
                  width: 220,
                  height: 220,
                  background:
                    "radial-gradient(circle, rgba(247,103,7,0.14), transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Header label */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 left-0 right-0 flex items-center gap-2 z-20 px-2"
              >
                <div className="relative w-2 h-2">
                  <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-blue-500"
                  />
                  <div
                    className="absolute inset-0 rounded-full bg-blue-500"
                    style={{ boxShadow: "0 0 6px #4361EE" }}
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-700">
                  Live Architecture
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  v1.0
                </span>
              </motion.div>

              {/* The actual tree */}
              <div className="absolute inset-0 pt-6">
                <ArchitectureTree />
              </div>

              {/* Floating accent pills */}
              <AccentPill
                icon={Layers}
                label="Modular Pages"
                value="100%"
                color="#4361EE"
                position={{ top: "32%", right: "-8%" }}
                delay={2.3}
              />
              <AccentPill
                icon={ShieldCheck}
                label="Tech Debt"
                value="Zero"
                color="#F76707"
                position={{ top: "60%", left: "-10%" }}
                delay={2.5}
              />
              <AccentPill
                icon={Zap}
                label="Future-Proof"
                value="Yes"
                color="#22c55e"
                position={{ bottom: "-2%", right: "-5%" }}
                delay={2.7}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildHero;
