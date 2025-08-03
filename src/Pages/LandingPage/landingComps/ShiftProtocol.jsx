import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, BarChart3, Lightbulb, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';

const ShiftProtocol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      title: "Problem Understanding",
      description: "Deep dive into your business challenges and technical requirements",
      details: ["Stakeholder interviews", "Technical audit", "Requirement gathering", "Goal definition"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Analysis & Planning",
      description: "Comprehensive analysis of your current state and future needs",
      details: ["Architecture review", "Performance analysis", "Resource planning", "Risk assessment"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Solution Design",
      description: "Custom solution preferences tailored to your specific needs",
      details: ["Technology selection", "System architecture", "UI/UX design", "Integration planning"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Issue Resolution",
      description: "Systematic implementation and resolution of identified issues",
      details: ["Development sprints", "Testing protocols", "Quality assurance", "Performance optimization"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Rocket,
      title: "Final Delivery",
      description: "Deployment and launch with ongoing support and monitoring",
      details: ["Production deployment", "Performance monitoring", "User training", "Ongoing support"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="the-shift-protocol" className="py-4 sm:py-12  text-textColor bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto flex flex-col justify-center items-center ">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 "
          >
            <span className="text-primaryBlue">
              The
            </span>{" "}
            <span className="text-secondaryBlue">
              Shift Protocol
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0"
          >
            Our proven 5-step methodology ensures successful project delivery from
            concept to deployment and beyond.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Process visualization */}
        <div className="relative mb-6  lg:mb-10">


          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl ">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative md:col-span-1 lg:col-span-1"
              >
                {/* Step number */}
                {/* <div className="absolute -top-3 sm:-top-4  left-1/2 transform -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg z-10 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-4 xl:mb-6 shadow-lg">
                  {index + 1}
                </div> */}

                <motion.div
                  variants={scaleOnHover}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-300  transition-all duration-200 group h-full pt-6 sm:pt-8 lg:pt-8"
                >
                  <div className={`w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 bg-secondaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className="w-5 sm:w-6 lg:w-7 xl:w-8 h-5 sm:h-6 lg:h-7 xl:h-8 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-primaryBlue mb-2 sm:mb-3 lg:mb-4 text-center">{index + 1}: {step.title}</h3>
                  <p className=" mb-3 sm:mb-4 lg:mb-6 text-center leading-relaxed text-xs sm:text-sm lg:text-base">{step.description}</p>

                  <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-secondaryBlue rounded-full flex-shrink-0" />
                        <span className=" text-xs sm:text-sm font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}


        <div className='w-full flex justify-center items-center'>
          <CursorFollower
            framerAtts={{
              initial: { opacity: 0, y: 60 },
              animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
              transition: { duration: 0.8, delay: 0.6 }

            }}
            gradientFrom='rgba(67, 97, 238, 0.2)'
            gradientTo='rgba(67, 97, 238, 0.1)'
            circleSize={150}
            className="w-full bg-gradient-to-br from-primaryBlue to-toBlue text-white p-6 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-sm flex flex-col justify-center items-center"
          >
            <h3 className="text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold  mb-4 sm:mb-6 lg:mb-8">
             Our 5-step protocol is designed to eliminate cloud chaos. Full control. Zero vendor lock.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Let's start your transformation journey. Our proven methodology ensures
            your project's success from day one.
            </p>


            <button

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm "
            >

              Let’s Walk You Through It
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </button>

          </CursorFollower>
        </div>
      </div>
    </section>
  );
};

export default ShiftProtocol;