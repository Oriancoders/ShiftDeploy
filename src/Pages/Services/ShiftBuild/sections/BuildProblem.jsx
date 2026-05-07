'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Wrench,
  TrendingDown,
  DollarSign,
  Layers,
  RefreshCcw,
} from "lucide-react";

const BuildProblem = () => {
  const problems = [
    {
      icon: Wrench,
      title: "Outdated Website Systems",
      description:
        "Many business websites were built years ago and patched repeatedly. The result is an outdated experience that weakens first impressions.",
      stat: "Trust loss at first visit",
    },
    {
      icon: RefreshCcw,
      title: "Build Once, Forget Forever",
      description:
        "Most sites are launched and never improved. As goals change, the structure cannot adapt without expensive rework.",
      stat: "No lifecycle strategy",
    },
    {
      icon: Layers,
      title: "Rigid, Non-Modular Architecture",
      description:
        "Pages are tightly coupled, hard to edit, and difficult to scale. Every update takes longer and introduces more risk.",
      stat: "Change becomes expensive",
    },
    {
      icon: Clock,
      title: "Redesign Cycle Every 3-5 Years",
      description:
        "Because foundations are weak, businesses repeat full redesigns every few years instead of evolving a stable platform.",
      stat: "Repeated rebuild costs",
    },
    {
      icon: DollarSign,
      title: "Budget Waste & Technical Debt",
      description:
        "Money goes into short-term fixes and fragmented plugins that accumulate debt and block strategic growth.",
      stat: "Cost rises over time",
    },
    {
      icon: TrendingDown,
      title: "No Base for Conversion Growth",
      description:
        "If the build foundation is weak, performance and conversion work cannot scale. Growth gets capped before it starts.",
      stat: "Optimization stalls",
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
            Why Most Websites <span className="text-primaryOrange">Fail to Convert</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            The issue is not just design quality. It is the underlying build model.
            Weak architecture creates repeated redesigns, wasted spend, and technical debt.
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

export default BuildProblem;
