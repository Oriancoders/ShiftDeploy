import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Building, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';

const FlightLogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechGear Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "ShiftDeploy transformed our entire e-commerce infrastructure. The team's expertise in React and AWS helped us achieve a 340% increase in conversions. Their attention to detail and proactive communication made the entire process seamless.",
      project: "E-commerce Platform Transformation"
    },
    {
      name: "Michael Chen",
      title: "CEO",
      company: "FinanceFlow Corp",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "The cloud migration project exceeded all expectations. We went from constant downtime issues to 99.9% uptime, and our infrastructure costs dropped by 60%. The team's DevOps expertise is unmatched.",
      project: "Cloud Infrastructure Migration"
    },
    {
      name: "Emily Rodriguez",
      title: "Product Manager",
      company: "InnovateHub",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "ShiftDeploy's CI/CD implementation revolutionized our development process. Deployment time went from hours to minutes, and we haven't had a single failed release since going live. Absolutely incredible work!",
      project: "DevOps Pipeline Automation"
    },
    {
      name: "David Park",
      title: "Founder",
      company: "StartupVision",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "As a startup, we needed a partner who understood our constraints and growth ambitions. ShiftDeploy delivered a scalable solution that grew with us. Their strategic guidance was invaluable.",
      project: "Scalable Web Application"
    },
    {
      name: "Lisa Thompson",
      title: "IT Director",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "The security hardening and performance optimization ShiftDeploy provided gave us peace of mind and improved user experience. Our page load times improved by 70%, and we've had zero security incidents.",
      project: "Security & Performance Optimization"
    },
    {
      name: "Robert Kim",
      title: "VP of Technology",
      company: "DataDriven Inc",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      review: "ShiftDeploy's expertise in database optimization and cloud architecture helped us handle 10x traffic growth without any performance issues. Their monitoring setup gives us complete visibility into our systems.",
      project: "Database & Infrastructure Scaling"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 sm:w-5 h-4 sm:h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="flight-logs" className="py-4 sm:py-12  text-textColor bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 "
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8"
          >
            <h1>Flight <span className='text-secondaryBlue'>Logs</span></h1>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0"
          >
            Hear from our clients about their transformation journey and the results
            they've achieved with ShiftDeploy.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-300 hover:shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-bold text-sm sm:text-base lg:text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">{testimonial.title}</p>
                    <div className="flex items-center space-x-1.5 sm:space-x-2 text-blue-600 font-medium text-xs sm:text-sm lg:text-base">
                      <Building className="w-2.5 sm:w-3 lg:w-4 h-2.5 sm:h-3 lg:h-4" />
                      <span className="truncate">{testimonial.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-0.5 sm:space-x-1 mb-2 sm:mb-3 lg:mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <div className="relative mb-3 sm:mb-4 lg:mb-6">
                  <Quote className="absolute -top-0.5 sm:-top-1 lg:-top-2 -left-0.5 sm:-left-1 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 text-blue-200" />
                  <p className="text-gray-700 leading-relaxed pl-4 sm:pl-6 lg:pl-8 text-sm">
                    {testimonial.review}
                  </p>
                </div>
              </div>

              <div className="pt-2 sm:pt-3 lg:pt-4 border-t border-gray-200">
                <p className="text-orange-600 font-semibold text-sm">
                  Project: {testimonial.project}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating display */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-50 to-blue-50 border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-xl"
        >
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 lg:space-x-3 mb-3 sm:mb-4 lg:mb-6">
            {renderStars(5)}
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 ml-2 sm:ml-4 lg:ml-6">4.9/5</span>
          </div>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0">
            Average client satisfaction rating based on 500+ completed projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">98%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Projects delivered on time</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">95%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Clients recommend us</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">250%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Average performance improvement</div>
            </div>
          </div>

          <motion.button className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm mx-auto mt-12"

          >
            Join Our Trusted Clients
            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />

          </motion.button>
        </motion.div>


      </div>
    </section>
  );
};

export default FlightLogs;