import React, { useContext, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Rocket, Shield } from "lucide-react"; // or replace with custom futuristic illustration
import { fadeInUp, staggerContainer } from "../../utils/animations";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { ContextAPI } from "../../GlobalProvider/ContextAPI";


const ThankYouPage = () => {
    // 🟢 Page load hone par scroll top
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { scrwidth } = useContext(ContextAPI)


  const moveX = useTransform(x, [0, window.innerWidth], [-50, 50]);
  const moveY = useTransform(y, [0, window.innerHeight], [-50, 50]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };
  return (

    <>
      <Navigation isDarkBg={true}/>
      <div 
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage : `url("https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145825/thankBG_wrvqxj.png")`,
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center'
      }}
       className="min-h-screen bg-primaryBlue overflow-hidden flex items-center justify-center pt-32 pb-10 relative">
        <div className="absolute w-full h-full inset-0 bg-primaryBlue/80 z-10">

        </div>

        <div className="relative  max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8 sm:space-y-12"
          >
            {/* Success Icon */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="w-24 sm:w-32  h-24 sm:h-32  bg-primaryOrange rounded-full flex items-center justify-center shadow-lg">
                  <Handshake className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-6xl  font-bold text-white mb-4 sm:mb-8"
            >
              Thank You For Choosing 
              <img src="https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145802/whiteV_vzhhvi.png" alt="ShiftDeploy" className=" w-60 sm:w-72 lg:w-96 mx-auto mt-4 sm:mt-5 lg:mt-6" />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl  text-slate-200 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto leading-relaxed"
            >
              We've received your request and our team will get back to you shortly.
            </motion.p>

            {/* Professional Partnership Visual */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 sm:mb-16 lg:mb-20"
            >
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-12  max-w-2xl mx-auto drop-shadow-lg">

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryBlue mb-4">
                  Mission Initiated
                </h3>
                <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Your project has been added to our mission control system.
                  Our specialists are now analyzing your requirements and preparing
                  a strategic deployment plan.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center mb-12 sm:mb-16"
            >
              <Link to={"/"}
                className="bg-primaryOrange text-white px-8 sm:px-10  py-4 sm:py-5  rounded-xl sm:rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg   transition-all duration-200 group"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 sm:group-hover:ml-6 transition-all duration-200 " />
              </Link>

              <Link to={"/missions"}
                className="bg-white border-2 border-slate-300 text-slate-700 px-8 sm:px-10  py-4 sm:py-5  rounded-xl sm:rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 text-lg "
              >
                Explore Our Work
              </Link>
            </motion.div>

            {/* What Happens Next */}
            <motion.div
              variants={fadeInUp}
              className="bg-white drop-shadow-md border border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto "
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 sm:mb-8">
                What Happens Next?
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primaryBlue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-xl">1</span>
                  </div>
                  <h4 className="text-slate-800 font-semibold mb-2 text-base sm:text-lg">Analysis</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Our team reviews your requirements within 2 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primaryOrange rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-xl">2</span>
                  </div>
                  <h4 className="text-slate-800 font-semibold mb-2 text-base sm:text-lg">Strategy</h4>
                  <p className="text-slate-600 text-sm sm:text-base">We prepare a custom deployment strategy for your project</p>
                </div>
                <div className="text-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primaryBlue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg sm:text-xl">3</span>
                  </div>
                  <h4 className="text-slate-800 font-semibold mb-2 text-base sm:text-lg">Contact</h4>
                  <p className="text-slate-600 text-sm sm:text-base">We'll reach out within 24 hours to discuss next steps</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
