'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import Link from 'next/link';

const InsideShiftDeploy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "When Your Website Feels Slow",
      offer: "ShiftSpeed™",
      description:
        "Slow load times quietly kill trust, traffic, and conversions. We fix the performance issues that make visitors bounce before they ever take action.",
      features: [
        "Pinpoint what is slowing pages down",
        "Improve real-world speed on mobile and desktop",
        "Reduce bounce caused by poor performance",
        "Create measurable before-and-after gains",
      ],
    },
    {
      title: "When Visitors Don’t Convert",
      offer: "ShiftConvert™",
      description:
        "If people visit but don’t enquire, book, or buy, the issue is usually clarity, friction, or weak flow. We remove the blockers that stop action.",
      features: [
        "Clarify your offer and calls to action",
        "Fix friction in forms, booking, or checkout",
        "Improve trust across key decision pages",
        "Get more leads from existing traffic",
      ],
    },
    {
      title: "When Your Website Can’t Keep Up",
      offer: "ShiftBuild™",
      description:
        "Some sites look acceptable but become painful every time you need to update, launch, or scale. We build foundations that support growth instead of slowing it down.",
      features: [
        "Build a site that is fast, clear, and scalable",
        "Make future updates easier and safer",
        "Set up structure for long-term growth",
        "Replace patchwork fixes with solid foundations",
      ],
    },
    {
      title: "When Problems Keep Coming Back",
      offer: "ShiftFlow™",
      description:
        "If your site keeps slipping, breaking, or underperforming, you need ongoing ownership. We keep things stable, improving, and moving forward.",
      features: [
        "Catch issues before they become expensive",
        "Maintain speed, stability, and usability",
        "Keep improving instead of reacting",
        "Have one accountable team behind the site",
      ],
    },
  ];


  return (
    <section
      id="inside-shiftdeploy"
      className=" text-textColor bg-gradient-to-b from-gray-50 to-gray-50"
    >
      <div className="mx-auto flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6 leading-tight "
          >
            What <br/>
            <span className="text-primaryOrange ">ShiftDeploy Solves</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 leading-relaxed px-4 sm:px-0 text-gray-600"
          >
            We solve the issues that hold websites back, from slow performance and weak conversion to fragile builds and ongoing technical drag.

          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[80%]">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group col-span-1 h-full relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primaryOrange to-primaryBlue" />

              <div className="flex flex-col items-start space-y-4">
             

                <div className="space-y-2">
                  <h1 className="text-xl lg:text-2xl font-bold text-primaryBlue leading-snug">
                    {solution.title}
                  </h1>
                  <div className="flex items-center gap-2 text-primaryOrange">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold tracking-wide">
                      {solution.offer}
                    </span>
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  {solution.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 lg:space-y-4 pt-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start justify-start space-x-2 sm:space-x-3 rounded-lg bg-gray-50 px-3 py-3"
                    >
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 text-primaryOrange flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full bg-gradient-to-br from-primaryBlue to-toBlue text-white p-6 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-sm flex flex-col justify-center items-center">
            <h1 className="text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold mb-4 sm:mb-6 lg:mb-8">
              Need the Right Solution for Your Business?
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto  px-4 sm:px-0">
              We’ll identify where your site is losing speed, trust, or conversions, then show you the clearest path to fix it.
            </p>

            <Link
              href={"/ContactUs"}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold hover:bg-toOrange text-md"
            >
              Discuss Your Solution
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-white/80">
              Clear diagnosis • Practical fixes • Measurable outcomes

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideShiftDeploy;
