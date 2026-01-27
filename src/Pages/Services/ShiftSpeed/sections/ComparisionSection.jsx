import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, AlertCircle, Sparkles } from "lucide-react";

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const amateurPoints = [
    "Installing WP Rocket and hoping for the best",
    "Smushing images without format optimization",
    "Adding more plugins to fix plugin issues",
    "Temporary speed boosts that fade in weeks",
    "Broken layouts after every plugin update",
    "No understanding of actual bottlenecks",
  ];

  const shiftSpeedPoints = [
    "Full code re-architecture at the server level",
    "Defer heavy JavaScript from main thread",
    "Implement intelligent server-side caching",
    "Optimize critical rendering paths first",
    "Clean database bloat and query inefficiencies",
    "Permanent performance gains with monitoring",
  ];

  return (
    <section className="py-20 bg-primaryBlue" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryOrange/20 text-primaryOrange rounded-full mb-6">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">The Uncomfortable Truth</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Your Caching Plugin{" "}
            <span className="text-primaryOrange">Isn't Enough</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Most businesses throw plugins at performance problems. That's like putting 
            a bandage on a broken bone. Real speed requires engineering, not patches.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Amateur Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="absolute -top-4 left-6 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
              The Amateur Way
            </div>
            
            <div className="mt-4 mb-6">
              <h3 className="text-xl font-bold text-white/90 mb-2">
                Plugin-Based "Optimization"
              </h3>
              <p className="text-white/50 text-sm">
                Result: Broken layouts and temporary speed boosts
              </p>
            </div>

            <ul className="space-y-4">
              {amateurPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-white/70">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
              <p className="text-red-300 text-sm">
                <strong>Warning:</strong> This approach creates technical debt that compounds 
                over time, making future optimization exponentially harder.
              </p>
            </div>
          </motion.div>

          {/* ShiftSpeed Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-primaryOrange/20 to-primaryOrange/5 backdrop-blur-sm rounded-2xl p-8 border border-primaryOrange/30"
          >
            <div className="absolute -top-4 left-6 bg-primaryOrange text-white text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              The ShiftSpeed Way
            </div>
            
            <div className="mt-4 mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Code-Level Engineering
              </h3>
              <p className="text-white/50 text-sm">
                Result: Permanent speed gains backed by data
              </p>
            </div>

            <ul className="space-y-4">
              {shiftSpeedPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-white">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
              <p className="text-green-300 text-sm">
                <strong>This is engineering, not a patch.</strong> We diagnose the actual 
                bottlenecks and fix them at the source.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default ComparisonSection;