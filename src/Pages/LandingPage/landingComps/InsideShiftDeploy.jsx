import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../utils/animations';
import { Link } from 'react-router-dom';

const InsideShiftDeploy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "ShiftSpeed™ — Make Your Website Faster",
      description:
        "If your site feels slow, people leave. ShiftSpeed focuses on fixing what slows your website down so users stay, pages load quickly, and performance stops hurting your business.",
      features: [
        "Find what’s slowing your site down",
        "Fix speed issues that affect real users",
        "Improve mobile loading experience",
        "See clear before and after results",
      ],
    },
    {
      title: "ShiftConvert™ — Turn Visitors into Customers",
      description:
        "Getting traffic is only half the job. ShiftConvert focuses on helping visitors understand your offer, trust your site, and take action.",
      features: [
        "Review key pages and user flow",
        "Improve clarity and calls to action",
        "Fix friction in booking or checkout",
        "Increase leads without more traffic",
      ],
    },
    {
      title: "ShiftBuild™ — Build a Website That Can Grow",
      description:
        "Some websites look fine but are hard to change or improve. ShiftBuild creates websites that are easy to update, improve, and grow with your business.",
      features: [
        "Clean, modern website builds",
        "Designed to be fast and flexible",
        "Ready for future improvements",
        "Built with growth in mind",
      ],
    },
    {
      title: "ShiftFlow™ — Keep Everything Running Smoothly",
      description:
        "Websites don’t stay perfect on their own. ShiftFlow keeps things running smoothly so small issues don’t turn into big problems.",
      features: [
        "Regular checkups and fixes",
        "Prevent slowdowns over time",
        "Ongoing improvements and care",
        "One team responsible for your site",
      ],
    },
  ];


  return (
    <section
      id="inside-shiftdeploy"
      className="pt-8 sm:pt-12 text-textColor bg-gradient-to-b from-gray-50 to-gray-50"
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
            <span className="text-primaryOrange ">ShiftDeploy Offers</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 leading-relaxed px-4 sm:px-0 text-gray-600"
          >
            A global performance optimization and web development agency helping businesses load faster, rank higher, and convert better.

          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white border sm:border-gray-200 rounded-xl md:rounded-2xl p-6 sm:hover:shadow-md transition-all duration-300 group col-span-1 h-full relative"
            >
              <div className="flex flex-col items-start space-y-4">
                <h1 className="text-xl lg:text-2xl font-bold text-primaryBlue">
                  {solution.title}
                </h1>

                <p className="sm:text-lg leading-relaxed text-gray-600">
                  {solution.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-start space-x-2 sm:space-x-3"
                    >
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange flex-shrink-0" />
                      <span className="text-gray-700 font-medium text-xs sm:text-lg">
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
              Want Faster Load Times and Higher Conversions?
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto  px-4 sm:px-0">
              Start with a performance audit and get a clear roadmap to improve Core Web Vitals,
              rankings, and conversion rate, with measurable results.
            </p>

            <Link
              to={"/ContactUs"}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold hover:bg-toOrange text-md"
            >
              Get a Performance Audit
            </Link>

            <p className="mt-4 text-xs sm:text-sm text-white/80">
              Global delivery • Performance-first engineering • Measurable results

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideShiftDeploy;
