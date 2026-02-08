import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  TrendingDown,
  DollarSign,
  Smartphone,
  ShieldAlert,
  MousePointerClick,
} from "lucide-react";

const SpeedProblem = () => {
  const problems = [
    {
      icon: Clock,
      title: "User Abandonment",
      description:
        "Users don’t wait. When pages take too long to load, they leave before seeing your offer. No scroll, no interaction, no second chance.",
      stat: "3s+ load = high exits",
    },
    {
      icon: Smartphone,
      title: "Mobile Experience Breakdown",
      description:
        "Most traffic is mobile. Slow load times hit mobile users harder, especially on weaker networks and mid-range devices.",
      stat: "Mobile-first damage",
    },
    {
      icon: TrendingDown,
      title: "Search Visibility Suppression",
      description:
        "Google uses Core Web Vitals as a ranking signal. Slow sites don’t disappear — they just get pushed below faster competitors.",
      stat: "Lower SERP priority",
    },
    {
      icon: DollarSign,
      title: "Paid Traffic Waste",
      description:
        "You pay for every click. If the page lags, users bounce before it loads — burning ad budget with zero return.",
      stat: "Clicks without ROI",
    },
    {
      icon: ShieldAlert,
      title: "Trust & Brand Perception Loss",
      description:
        "Speed signals quality. Slow sites feel outdated, unreliable, and unprofessional — even if the product is solid.",
      stat: "Credibility erosion",
    },
    {
      icon: MousePointerClick,
      title: "Conversion Friction",
      description:
        "Forms, CTAs, and interactions feel heavy on slow pages. Even small delays reduce completed actions and inquiries.",
      stat: "Fewer conversions",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            The Real Cost of <span className="text-primaryOrange">Slow Performance</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Speed issues don’t just hurt metrics, they quietly drain revenue,
            visibility, and trust across your entire funnel.
          </p>
        </motion.div>

        {/* Grid */}
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

                <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                  {problem.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <div className="bg-primaryOrange/5 border border-primaryOrange rounded-lg p-4">
                <div className="text-primaryOrange font-semibold text-md">
                  {problem.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedProblem;
