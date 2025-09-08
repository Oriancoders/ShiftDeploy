import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, BarChart3, Lightbulb, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';
import { Link } from 'react-router-dom';

const ShiftProtocol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      title: "Discovery & Alignment",
      description: "We start by understanding your vision, challenges, and priorities to set a clear direction.",
      details: ["Business deep-dive", "Stakeholder alignment", "Technical assessment", "Success criteria"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: BarChart3,
      title: "Strategic Planning",
      description: "Every project needs a strong foundation. We map out risks, resources, and the best path forward.",
      details: ["Architecture planning", "Scalability review", "Resource mapping", "Risk management"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Lightbulb,
      title: "Design & Blueprint",
      description: "We design tailored solutions that balance innovation, security, and long-term sustainability.",
      details: ["Technology stack selection", "System architecture", "UX-driven design", "Integration plan"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Build & Validate",
      description: "With agile sprints, we deliver secure, tested, and reliable solutions—step by step.",
      details: ["Development cycles", "Automated testing", "Quality validation", "Performance tuning"],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Rocket,
      title: "Deployment & Beyond",
      description: "We launch with confidence and continue to monitor, support, and scale as your needs grow.",
      details: ["Seamless deployment", "Live monitoring", "User onboarding", "Ongoing support"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Problem Solved",

    }
  ];


  return (
    <section id="the-shift-protocol" className="pt-4 sm:pt-12  bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            className="text-5xl font-bold text-primaryBlue mb-6 leading-tight  "
          >
            The
            <span className="text-primaryOrange pl-4">
              Shift Protocol
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  text-gray-700 leading-relaxed px-4 sm:px-0"
          >
            Our proven 5-step methodology ensures successful project delivery from
            concept to deployment and beyond.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
          </motion.div>
        </motion.div>

        {/* Process visualization */}
        <div className="relative mb-6  lg:mb-10">


          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl ">
            {steps.map((step, index) => (
              <>
                {index == 5 ? (
                  <div
                    key={index}
                    className="relative md:col-span-1 lg:col-span-1 bg-primaryBlue border rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-200 group h-full pt-6 text-white flex flex-col text-left"
                  >
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug ">
                      That’s How We <span className='text-primaryOrange'>Build</span>, <br/> That’s How You <br/> 
                      <span className='text-primaryOrange'>Succeed</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-200 mb-6 max-w-md">
                      Let’s build, launch, and scale your vision into reality.
                      Our team is ready to deliver results—step into the future with confidence.
                    </p>

                    {/* CTA Button */}
                    <Link to={"/ContactUs"}
                      href="#contact"
                      className="px-6 py-3 rounded-xl bg-primaryOrange hover:bg-toOrange text-white font-semibold shadow-md transition-transform transform  text-center"
                    >
                      Start Your Journey
                    </Link>
                  </div>

                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 0.6, delay: index * 0.2, once: false }}
                    className="relative md:col-span-1 lg:col-span-1 bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg  transition-all duration-200 group h-full pt-6 sm:pt-8 lg:pt-8 sm:space-y-6 space-y-4"
                  >


                    <motion.div
                      className={` w-12 sm:w-16 lg:w-14 h-12 sm:h-16 lg:h-14 mx-auto bg-primaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0   mb-4`}>
                      <step.icon className="w-6 sm:w-8  h-6 sm:h-8  text-white" />
                    </motion.div>

                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900  text-center">{index + 1}: {step.title}</h3>
                    <p className="  text-center sm:leading-relaxed text-lg text-gray-600">{step.description}</p>

                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3  grid sm:grid-cols-1 grid-cols-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 sm:space-x-3 ">
                          <div className="w-2 h-2 bg-primaryOrange rounded-full flex-shrink-0" />
                          <span className="text-gray-700 text-md font-medium">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* CTA */}


        <div className='w-full flex justify-center items-center'>
          <div
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
              The Shift Protocol gives you clarity, control, and confidence without compromise.
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftProtocol;