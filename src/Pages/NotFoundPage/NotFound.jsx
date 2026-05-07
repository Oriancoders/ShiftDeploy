import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Subtle mouse movement effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <>
      <Navigation isDarkBg={true} />

      <div
        onMouseMove={handleMouseMove}
        className="min-h-screen bg-white overflow-hidden flex items-center justify-center pt-24 pb-10 relative"
      >
        {/* Dark background graphic texture (Optional) */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] -mr-48 -mt-48 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/200 200" className="w-full h-full text-textCyan/10 fill-current">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.8C87.4,-34.5,90,-20.1,89.3,-6.2C88.6,7.8,84.7,21.3,77.7,33.1C70.6,44.9,60.5,55.1,48.7,63.1C36.9,71.1,23.4,76.9,9.4,79.5C-4.6,82.1,-19,81.4,-31.9,76.5C-44.8,71.6,-56.3,62.5,-66.1,51.4C-75.9,40.4,-84.1,27.5,-86.6,13.4C-89.1,-0.7,-85.9,-15.9,-78.9,-28.9C-71.9,-41.8,-61,-52.4,-48.3,-60.1C-35.5,-67.7,-21,-72.4,-6,-71C9.1,-69.6,28.2,-62,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-6 sm:space-y-8"
          >
            {/* 404 Heading */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <h1 className="text-8xl sm:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-toBlue">
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Mission Aborted.
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have drifted into deep space. It might have been moved, renamed, or never existed.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                to="/"
                className="group relative flex items-center justify-center gap-3 bg-textCyan text-primaryBlue px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 w-full sm:w-auto"
              >
                <Home className="w-5 h-5" />
                <span>Return to Base</span>
                <div className="absolute inset-0 rounded-full border border-textCyan group-hover:scale-105 group-hover:opacity-0 transition-all duration-500" />
              </Link>
              
              <Link
                to="/ContactUs"
                className="group flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:border-textCyan hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
              >
                <span>Report an Issue</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;