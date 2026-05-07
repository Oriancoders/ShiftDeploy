'use client';
import React from "react";
import { motion } from "framer-motion";
import { Building2, RefreshCcw, TrendingUp } from "lucide-react";

const BuildAudience = () => {
  const audiences = [
    {
      icon: Building2,
      title: "New Businesses",
      description: "Launch with the right conversion-ready website foundation instead of rebuilding later.",
      benefits: ["SEO-ready architecture", "CRO-ready UX", "Fast, scalable structure"],
    },
    {
      icon: RefreshCcw,
      title: "Businesses Needing Redesign",
      description: "Replace outdated systems with modular architecture built for long-term flexibility.",
      benefits: ["Reduced technical debt", "Better maintainability", "Modern trust-first experience"],
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Businesses",
      description: "Scale content, services, and locations without full redesign cycles.",
      benefits: ["Lifecycle-driven website model", "Future optimization readiness", "Performance + conversion support"],
    },
  ];

  return (
    <section id="who-its-for" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlue mb-6">
            Built for <span className="text-primaryOrange">Conversion Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From launch to redesign to expansion, ShiftBuild adapts with your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primaryOrange mb-6">
                <audience.icon size={48} />
              </div>

              <h3 className="text-2xl font-bold text-primaryBlue mb-4">{audience.title}</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>

              <ul className="space-y-2">
                {audience.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primaryOrange rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildAudience;
