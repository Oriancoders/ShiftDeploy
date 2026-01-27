import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SpeedSolution = () => {
  const steps = [
    {
      icon: Search,
      title: "Diagnose",
      description: "Understand exactly what’s slowing your site",
      detail:
        "We identify the specific issues hurting load time, usability, and search performance — no guessing, no generic advice.",
    },
    {
      icon: Zap,
      title: "Fix",
      description: "Remove the biggest speed blockers first",
      detail:
        "We prioritize changes that deliver immediate, measurable improvements where users and conversions are most affected.",
    },
    {
      icon: Rocket,
      title: "Scale",
      description: "Build speed into the system",
      detail:
        "For growing sites, we harden performance so it stays fast as traffic, pages, and features increase.",
    },
    {
      icon: Shield,
      title: "Protect",
      description: "Prevent future slowdowns",
      detail:
        "Ongoing checks and safeguards ensure updates, content changes, or traffic spikes don’t undo the gains.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlue mb-6">
            A Proven <span className="text-primaryOrange">Performance Protocol</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every engagement follows the same core system.  
            The difference is how deep we go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primaryOrange to-transparent translate-x-4 z-0" />
              )}

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primaryOrange transition-colors relative z-10 h-full">
                <div className="text-primaryOrange mb-4">
                  <step.icon size={38} />
                </div>

                <div className="text-xs tracking-wider text-primaryOrange font-semibold mb-2">
                  STEP {index + 1}
                </div>

                <h3 className="text-xl font-bold text-primaryBlue mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-700 mb-4 font-medium">
                  {step.description}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={"/ContactUs"}
          className="bg-primaryOrange mt-14 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl lg:rounded-2xl mx-auto font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md w-fit"
        >
          Start Shifting Speed Today
        </Link>
      </div>
    </section>
  );
};

export default SpeedSolution;
