import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import CursorFollower from "../../../../utils/CursorFollower";

export const FlowComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const beforeMetrics = [
    { label: "Downtime Risk", value: "High", bad: true },
    { label: "Issue Response", value: "Reactive", bad: true },
    { label: "Performance Drift", value: "Uncontrolled", bad: true },
    { label: "Accountability", value: "Unclear", bad: true },
  ];

  const afterMetrics = [
    { label: "Downtime Risk", value: "Near Zero", bad: false },
    { label: "Issue Response", value: "Proactive", bad: false },
    { label: "Performance Drift", value: "Managed", bad: false },
    { label: "Accountability", value: "Defined", bad: false },
  ];

  const beforeIssues = [
    "Ticket-based, emergency-first maintenance",
    "Delayed plugin and security updates",
    "No routine performance validation",
    "No monthly optimization cadence",
  ];

  const afterOptimizations = [
    "Continuous monitoring and health checks",
    "Preventive fixes before major incidents",
    "Scheduled performance and security routines",
    "Monthly small improvements for steady growth",
  ];

  return (
    <section className="bg-slate" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            The <span className="text-primaryOrange">ShiftFlow</span> Difference
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Move from reactive maintenance to proactive operations that protect uptime,
            performance, and long-term ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-2xl border-2 border-primaryOrange p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primaryOrange to-primaryOrange" />

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primaryOrange text-white px-4 py-2 rounded-full mb-4">
                <TrendingDown className="w-4 h-4" />
                <span className="font-bold text-sm uppercase tracking-wide">Before</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primaryOrange">Reactive Maintenance</h3>
            </div>

            <div className="space-y-3 mb-6">
              {beforeMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex items-center justify-between py-2 border-b border-red-100 last:border-0"
                >
                  <span className="text-muted-foreground text-sm md:text-base">{metric.label}</span>
                  <span className="font-bold text-primaryOrange text-lg md:text-xl">{metric.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primaryOrange/5 rounded-xl p-4 border border-primaryOrange">
              <div className="text-primaryOrange font-bold mb-3 uppercase tracking-wide text-xl">Critical Issues:</div>
              <ul className="space-y-2">
                {beforeIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2 text-md text-primaryOrange">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-1 flex items-center justify-center py-4 lg:py-0"
          >
            <div className="bg-primaryOrange text-white p-4 rounded-full shadow-lg shadow-primaryOrange/30">
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 rotate-90 lg:rotate-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl border-2 border-primaryBlue p-6 md:p-8 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primaryBlue to-primaryBlue" />

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primaryBlue text-white px-4 py-2 rounded-full mb-4">
                <TrendingUp className="w-4 h-4" />
                <span className="font-bold text-sm uppercase tracking-wide">After</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primaryBlue">ShiftFlow Proactive Ops</h3>
            </div>

            <div className="space-y-3 mb-6">
              {afterMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between py-2 border-b border-green-100 last:border-0"
                >
                  <span className="text-muted-foreground text-sm md:text-base">{metric.label}</span>
                  <span className="font-bold text-primaryBlue text-lg md:text-xl">{metric.value}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primaryBlue/5 rounded-xl p-4 border border-primaryBlue">
              <div className="text-primaryBlue font-bold mb-3 text-xl uppercase tracking-wide">Optimizations Applied:</div>
              <ul className="space-y-2">
                {afterOptimizations.map((opt, index) => (
                  <li key={index} className="flex items-start gap-2 text-md text-primaryBlue">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl p-6 text-center"
        >
          <CursorFollower
            text="ShiftFlow protects your digital investment with proactive care, so growth stays stable and emergencies stay rare."
            className="max-w-2xl sm:mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName="text-white font-semibold text-sm lg:text-base"
            gradientFrom="#f76707"
            gradientTo="#0B1D30"
            circleSize={200}
          />

          <Link
            to="/contactus"
            className="bg-primaryOrange mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit"
          >
            Start ShiftFlow Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowComparison;
