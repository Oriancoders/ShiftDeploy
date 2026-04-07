import React, { useEffect, useState } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Wrench } from "lucide-react";
import CursorFollower from "../../../../utils/CursorFollower";
import { Link } from "react-router-dom";

const FlowHero = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({ score: 68 });
  const healthValue = useMotionValue(68);

  useEffect(() => {
    const controls = animate(healthValue, 99, {
      delay: 1,
      duration: 0.9,
      ease: "easeOut",
      onUpdate: (v) => setAnimatedNumbers({ score: Math.round(v) }),
    });
    return () => controls.stop && controls.stop();
  }, [healthValue]);

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden flex sm:items-center pt-36 sm:pt-40 text-textColor pb-20 sm:pb-12">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 sm:items-center">
          <div className="flex flex-col lg:items-start sm:items-center">
           

            <CursorFollower
              text={
                <p className="flex items-center justify-center gap-x-2 italic">
                  ShiftFlow <ArrowRight size={16} /> Proactive Support <ArrowRight size={16} /> Stable Growth
                </p>
              }
              className=" w-fit mb-4 sm:mb-6 md:mb-8 bg-primaryBlue  px-6 py-2 rounded-full text-white"
              textClassName="text-white font-semibold text-xs sm:text-sm lg:text-base "
              gradientFrom="#f76707"
              gradientTo="#0B1D30"
              circleSize={100}
            />


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight lg:text-left sm:text-center text-left"
            >
              <h1>
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  Keep Your Digital
                </span>
                <br />
                <span className="text-primaryOrange">Presence Healthy</span>
                <br />
                <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                  Every Month
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
            >
              ShiftFlow is proactive ongoing support and optimization.
              <span className="font-semibold text-[#0C1F3A]"> Monitoring, preventive fixes, security upkeep, and performance checks with monthly improvements.</span>
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-20 sm:mb-16 px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  to="/contactus"
                  className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
                >
                  Start ShiftFlow Support
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end px-4 sm:px-0"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-primaryBlue p-4 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-orange-50 p-6 relative overflow-hidden">
                    <div className="w-full h-full rounded-full bg-white shadow-inner flex items-center justify-center relative">
                      <div className="text-center z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.25, type: "spring" }}
                          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryOrange mb-2"
                        >
                          {animatedNumbers.score}
                        </motion.div>
                        <div className="text-lg font-semibold text-primaryBlue">Health Score</div>
                        <div className="text-sm text-primaryBlue/60">Website Stability Index</div>
                      </div>

                      <motion.div
                        className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 w-1 h-20 bg-gradient-to-t from-primaryOrange to-primaryOrange origin-bottom transform -translate-x-1/2 rounded-full shadow-lg"
                        style={{ rotate: healthValue }}
                      />

                      <div className="absolute -bottom-2 sm:bottom-2 md:bottom-6 left-1/2 w-4 h-4 bg-primaryBlue rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-semibold text-primaryOrange">AT RISK</div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xs sm:text-sm font-semibold text-primaryBlue">HEALTHY</div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute -top-3 -right-2 sm:-top-6 sm:-right-4 bg-gradient-to-r from-primaryBlue to-primaryBlue text-white px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div>
                    <div className="text-xs font-medium opacity-90">Monitoring</div>
                    <div className="text-sm sm:text-lg font-bold">24/7</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="absolute -bottom-3 -left-2 sm:-bottom-6 sm:-left-4 bg-gradient-to-r from-primaryOrange to-primaryOrange text-white px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <Wrench className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div>
                    <div className="text-xs font-medium opacity-90">Preventive Fixes</div>
                    <div className="text-sm sm:text-lg font-bold">Monthly</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="absolute top-1/2 -left-3 sm:-left-8 transform -translate-y-1/2 bg-gradient-to-r from-primaryBlue to-primaryBlue text-white px-2 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div>
                    <div className="text-xs font-medium opacity-90">Security Checks</div>
                    <div className="text-sm sm:text-lg font-bold">Active</div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/10 to-primaryBlue/10 rounded-full blur-3xl -z-10 scale-150" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowHero;
