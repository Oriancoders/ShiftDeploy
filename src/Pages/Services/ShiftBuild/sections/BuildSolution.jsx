import React from "react";
import { motion } from "framer-motion";
import { Search, Hammer, Layers, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const BuildSolution = () => {
  const steps = [
    {
      icon: Search,
      title: "Audit",
      description: "Map current constraints and growth goals",
      detail:
        "We assess your current website (or launch requirements), identify structural limitations, and align the build model to business priorities.",
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Develop with performance and CRO in mind",
      detail:
        "The website is built with clean architecture, fast loading standards, and conversion-aware UX patterns from the start.",
    },
    {
      icon: Layers,
      title: "Structure",
      description: "Create modular, scalable foundations",
      detail:
        "Reusable sections, maintainable code, and adaptable content systems make future updates faster and safer.",
    },
    {
      icon: Shield,
      title: "Future-Proof",
      description: "Prepare for speed and conversion optimization",
      detail:
        "ShiftBuild ensures your site is ready for ShiftSpeed and ShiftConvert so growth initiatives can compound over time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            A Proven <span className="text-primaryOrange">Build & Improve Protocol</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            ShiftBuild is lifecycle-driven, not launch-and-leave.
            Every build decision supports long-term performance and conversion growth.
          </p>
        </motion.div>

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
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primaryOrange to-transparent translate-x-4 z-0" />
              )}

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-primaryOrange transition-colors relative z-10 h-full">
                <div className="text-primaryOrange mb-4">
                  <step.icon size={38} />
                </div>

                <div className="text-xs tracking-wider text-primaryOrange font-semibold mb-2">STEP {index + 1}</div>

                <h3 className="text-xl font-bold text-primaryBlue mb-3">{step.title}</h3>

                <p className="text-gray-700 mb-4 font-medium">{step.description}</p>

                <p className="text-sm text-gray-500 leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/contactus"
          className="bg-primaryOrange mt-14 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl lg:rounded-2xl mx-auto font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md w-fit"
        >
          Start My ShiftBuild Project
        </Link>
      </div>
    </section>
  );
};

export default BuildSolution;
