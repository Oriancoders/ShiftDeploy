import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, BarChart3, Lightbulb, CheckCircle, Rocket, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { Link } from 'react-router-dom';

const ShiftProtocol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

  const steps = [
    {
      icon: Search,
      title: "Understand the Problem",
      description:
        "We start by putting ourselves in your shoes. Before suggesting solutions, we understand your business goals, users, and constraints.",
      details: [
        "What you’re trying to achieve",
        "Where things feel stuck or unclear",
        "What success looks like for you",
        "What’s urgent vs what can wait",
      ],
    },
    {
      icon: BarChart3,
      title: "Diagnose What Matters",
      description:
        "Next, we assess the situation objectively. Not everything needs fixing, we focus only on what actually moves the needle.",
      details: [
        "Review current setup and flows",
        "Identify bottlenecks or friction points",
        "Separate symptoms from root causes",
        "Highlight risks and missed opportunities",
      ],
    },
    {
      icon: Lightbulb,
      title: "Set Clear Priorities",
      description:
        "You get a clear plan. What to fix first, what can wait, and why. No overwhelm, no vague advice.",
      details: [
        "Clear recommendations",
        "Trade-offs explained in plain language",
        "Short-term vs long-term actions",
        "Alignment on scope and expectations",
      ],
    },
    {
      icon: CheckCircle,
      title: "Execute With Focus",
      description:
        "Once aligned, we move fast and deliberately. Every action has a reason, and every deliverable serves a purpose.",
      details: [
        "Clean, focused execution",
        "Regular updates and visibility",
        "No unnecessary complexity",
        "Progress you can actually see",
      ],
    },
    {
      icon: Rocket,
      title: "Measure & Improve",
      description:
        "We don’t just ship and disappear. We validate outcomes and refine where needed so results compound over time.",
      details: [
        "Check results against goals",
        "Validate improvements",
        "Refine based on real feedback",
        "Plan next steps if needed",
      ],
    },
    {
      title: "Problem Solved",
    },
  ];



  return (
    <section id="the-shift-protocol" className="pt-12  bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto flex flex-col justify-center items-center ">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6 leading-tight  "
          >
            How
            <span className="text-primaryOrange px-4">
              We Turn Problems Into
            </span>
            Outcomes
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  text-gray-700 leading-relaxed px-4 sm:px-0"
          >
            We don’t start with tools or assumptions. We start by understanding the problem,
            setting clear priorities, and delivering focused execution that actually moves the business forward.


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
              <div key={index}>
                {index == 5 ? (
                  <div
                    key={index}
                    className="relative md:col-span-1 lg:col-span-1 bg-primaryBlue border rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md sm:hover:shadow-lg transition-all duration-200 group h-full pt-6 text-white flex flex-col text-left"
                  >
                    {/* Heading */}
                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight ">
                      That’s How We Fix <span className='text-primaryOrange'>Speed</span>, <br /> That’s How You Win<br />
                      <span className='text-primaryOrange'>Customers</span>
                    </h2>

                    {/* Description */}
                    <p className=" sm:text-lg text-gray-200 mb-6 max-w-md">
                      Most websites do not fail because they look bad.
                      They fail because they are slow, unclear, and hard to improve.
                      We fix that with a proven system.

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
                    className="relative md:col-span-1 lg:col-span-1 bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-md sm:hover:shadow-lg  transition-all duration-200 group h-full pt-6 sm:pt-8 lg:pt-8 sm:space-y-6 space-y-4 sm:min-h-[500px] "
                  >


                    <motion.div
                      className={` w-12 sm:w-16 lg:w-14 h-12 sm:h-16 lg:h-14 mx-auto bg-primaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0   mb-4`}>
                      <step.icon className="w-6 sm:w-8  h-6 sm:h-8  text-white" />
                    </motion.div>

                    <h1 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900  text-center">{index + 1}: {step.title}</h1>
                    <p className="  text-center sm:leading-relaxed sm:text-lg text-gray-600">{step.description}</p>

                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3  grid grid-cols-1 ">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 sm:space-x-3 ">
                          <div className="w-2 h-2 bg-primaryOrange rounded-full flex-shrink-0" />
                          <span className="text-gray-700  sm:text-md ">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}


        <div

          className="w-full bg-gradient-to-br from-primaryBlue to-toBlue text-white p-6 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-sm flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl sm:text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold  mb-4 sm:mb-6 lg:mb-8">
            Start with clarity, not guesswork

          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            We’ll review your situation, identify what truly matters, and outline a clear path forward.
            No noise. No overengineering. Just practical steps and accountable delivery.


          </p>


          <Link to={"/shift-protocol"}

            className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm "
          >

            Let’s Get Clarity

            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
          </Link >

        </div>

      </div>
    </section>
  );
};

export default ShiftProtocol;