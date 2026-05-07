'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  PlugZap,
  ShieldAlert,
  Gauge,
  AlertTriangle,
  UserX,
  Siren,
} from "lucide-react";

const FlowProblem = () => {
  const problems = [
    {
      icon: PlugZap,
      title: "Plugin & Dependency Breaks",
      description:
        "After launch, updates stack up. Unmanaged plugins and dependencies eventually break critical site functionality.",
      stat: "Unexpected failures",
    },
    {
      icon: ShieldAlert,
      title: "Rising Security Risk",
      description:
        "Outdated software, weak patch hygiene, and delayed checks expose your digital presence to avoidable security issues.",
      stat: "Higher attack surface",
    },
    {
      icon: Gauge,
      title: "Performance Degradation",
      description:
        "Without ongoing tuning, websites gradually slow down as content, scripts, and integrations accumulate.",
      stat: "Lower user confidence",
    },
    {
      icon: UserX,
      title: "No Clear Accountability",
      description:
        "Most teams discover problems only when users report them. No owner means slow response and recurring issues.",
      stat: "Operational blind spots",
    },
    {
      icon: Siren,
      title: "Emergency-Only Maintenance",
      description:
        "Reactive ticket-based support solves incidents after damage occurs instead of preventing disruption upfront.",
      stat: "Firefighting cycle",
    },
    {
      icon: AlertTriangle,
      title: "Investment Erosion",
      description:
        "Without proactive support, previous build, speed, and conversion investments lose value over time.",
      stat: "ROI leakage",
    },
  ];

  return (
    <section className="pb-20 bg-gray-50">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Why Websites <span className="text-primaryOrange">Decay After Launch</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Launch is the beginning, not the finish. Without proactive operations,
            stability, security, and performance steadily decline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-primaryOrange mb-6">
                  <problem.icon size={44} />
                </div>

                <h3 className="text-2xl font-bold text-primaryBlue mb-4">{problem.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
              </div>

              <div className="bg-primaryOrange/5 border border-primaryOrange rounded-lg p-4">
                <div className="text-primaryOrange font-semibold text-md">{problem.stat}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowProblem;
