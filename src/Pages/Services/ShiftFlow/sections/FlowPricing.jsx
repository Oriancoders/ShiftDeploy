import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const FlowPricing = () => {
  const plans = [
    {
      name: "Flow Starter",
      price: "$497/mo",
      description: "Core Monitoring & Maintenance",
      features: [
        "Health and uptime monitoring",
        "Routine plugin and dependency updates",
        "Monthly security checks",
        "Basic performance verification",
      ],
      cta: "Start Starter Plan",
      popular: false,
    },
    {
      name: "Flow Pro",
      price: "$1,197/mo",
      description: "Proactive Support & Optimization",
      features: [
        "Everything in Flow Starter",
        "Preventive fixes and hardening",
        "Monthly optimization improvements",
        "Priority incident response",
        "Performance trend reporting",
        "Dedicated monthly review",
      ],
      cta: "Start Flow Pro",
      popular: true,
    },
    {
      name: "Flow Critical",
      price: "$2,497/mo",
      description: "High-Reliability Ops Program",
      features: [
        "Everything in Flow Pro",
        "Expanded monitoring coverage",
        "Advanced operational support",
        "Risk and resilience planning",
        "Custom optimization roadmap",
        "Executive reporting cadence",
      ],
      cta: "Activate Critical Ops",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F3A] mb-6">
            Ongoing, <span className="text-[#EF4923]">Proactive</span> Support Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Structured monthly care that protects uptime, performance, and long-term growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl shadow-lg p-8 ${
                plan.popular ? "border-4 border-blue-500 transform scale-105" : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0C1F3A] mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-[#EF4923] mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                  plan.popular ? "bg-[#EF4923] text-white hover:bg-[#d63f1e]" : "bg-[#0C1F3A] text-white hover:bg-[#1a3456]"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">
              <strong>Onboarding:</strong> Initial setup typically completes within one week.
            </p>
            <p className="text-sm text-gray-500">After onboarding, ShiftFlow runs on consistent monthly support and optimization cycles.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowPricing;
