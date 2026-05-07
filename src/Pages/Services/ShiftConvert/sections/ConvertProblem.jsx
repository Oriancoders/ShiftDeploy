'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  DollarSign,
  Smartphone,
  ShieldAlert,
  MousePointerClick,
} from "lucide-react";

const ConvertProblem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Message Confusion",
      description:
        "Visitors land on your page but cannot quickly tell what you do, who it is for, or why they should trust you.",
      stat: "Unclear value kills intent",
    },
    {
      icon: Smartphone,
      title: "Mobile Journey Breaks",
      description:
        "Most buyers discover you on mobile. If layout hierarchy, copy, or forms feel heavy, they abandon before taking action.",
      stat: "Mobile drop-offs rise",
    },
    {
      icon: TrendingDown,
      title: "Funnel Friction",
      description:
        "Users face too many decisions, weak transitions, or buried CTAs. Even interested traffic leaks across each step.",
      stat: "Lower completion rates",
    },
    {
      icon: DollarSign,
      title: "Paid Traffic Leakage",
      description:
        "Ads may bring qualified traffic, but poor page structure and weak persuasion waste budget before conversion happens.",
      stat: "Spend without outcomes",
    },
    {
      icon: ShieldAlert,
      title: "Trust Signal Gaps",
      description:
        "Missing proof, weak testimonials, and unclear risk reversal make buyers hesitate, especially for high-ticket services.",
      stat: "Authority gets questioned",
    },
    {
      icon: MousePointerClick,
      title: "CTA Performance Loss",
      description:
        "Buttons are present but not persuasive. Without clear intent and context, users click less and convert less.",
      stat: "Fewer qualified leads",
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
            The Real Cost of <span className="text-primaryOrange">Low Conversion Clarity</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conversion problems do not always look dramatic. They show up as slow growth,
            inconsistent lead quality, and wasted acquisition spend.
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

export default ConvertProblem;
