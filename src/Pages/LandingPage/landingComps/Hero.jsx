import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Rocket, Play } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden flex sm:items-center py-16 sm:py-24">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 sm:items-center">

          <div
            className="text-left"
          >


            <CursorFollower

              text="Deploy -> Scale -> Succeed"
              className="bg-gradient-to-r from-secondaryBlue to-blue-700 px-3 lg:px-4 py-2 mb-6 rounded-full"
              textClassName='text-white font-semibold text-sm lg:text-base'
              gradientFrom="#0C1F3A"
              gradientTo="#0B1D30"
              circleSize={100}

            />


            <h1
              className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Launch Products
                {/* From Shift
                To Deploy
                Zero Stress */}

              </span>
              <br />
              <span className="bg-gradient-to-r from-secondaryBlue to-toSecBlue bg-clip-text text-transparent">
                That Perform

              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Under Pressure
              </span>
            </h1>

            <p
              variants={fadeInUp}
              className="text-xl    text-textColor mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl  lg:mx-0 leading-relaxed  sm:px-0"
            >
              Empowering businesses with web development, cloud solutions & DevOps to drive your digital growth.

            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12 xl:mb-16 px-4 sm:px-0"
            >

              <motion.button className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

              >
                Launch Your Project
                <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />

              </motion.button>

              <motion.button

                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  sm:hover:border-toBlue  shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
              >
                <Play className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                <span>View Demo</span>

              </motion.button>


            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 sm:text-center lg:text-left px-4 sm:px-0"
            >
              {[
                { icon: Zap, number: "500+", label: "Projects Deployed", },
                { icon: Shield, number: "99.9%", label: "Uptime Guarantee", },
                { icon: Rocket, number: "24/7", label: "Support Available", }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}

                  className="flex flex-col justify-center items-center"
                >
                  <CursorFollower
                    className='flex justify-center   mb-2 sm:mb-3 w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-secondaryBlue to-toSecBlue rounded-lg sm:rounded-xl  items-center shadow-lg'
                    gradientFrom="#0C1F3A"
                    gradientTo="#0B1D30"
                    circleSize={50}
                  >
                    <stat.icon className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                  </CursorFollower>
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className=" font-medium text-center">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content - Enhanced 3D Material Prototype */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0 px-4 sm:px-0"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm">
                    <div className="w-full h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-primaryBlue to-toBlue rounded-full mb-1.5 sm:mb-2 lg:mb-3" />
                    <div className="w-3/4 h-1.5 sm:h-2 lg:h-3 bg-gray-300 rounded-full" />
                  </div>
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm">
                    <div className="w-full h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-1.5 sm:mb-2 lg:mb-3" />
                    <div className="w-2/3 h-1.5 sm:h-2 lg:h-3 bg-gray-300 rounded-full" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-br from-primaryBlue to-toBlue rounded-full shadow-sm" />
                    <div className="flex-1 h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-sm" />
                    <div className="flex-1 h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="w-2 sm:w-3 lg:w-4 h-2 sm:h-3 lg:h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-sm" />
                    <div className="flex-1 h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 sm:-top-4 lg:-top-6 xl:-top-8 -right-3 sm:-right-4 lg:-right-6 xl:-right-8 w-8 sm:w-10 lg:w-14 xl:w-16 h-8 sm:h-10 lg:h-14 xl:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Zap className="w-4 sm:w-5 lg:w-7 xl:w-8 h-4 sm:h-5 lg:h-7 xl:h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 xl:-bottom-8 -left-3 sm:-left-4 lg:-left-6 xl:-left-8 w-8 sm:w-10 lg:w-14 xl:w-16 h-8 sm:h-10 lg:h-14 xl:h-16 bg-gradient-to-br from-primaryBlue to-toBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl"
              >
                <Shield className="w-4 sm:w-5 lg:w-7 xl:w-8 h-4 sm:h-5 lg:h-7 xl:h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;