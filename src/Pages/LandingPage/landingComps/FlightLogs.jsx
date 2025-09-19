import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, Building, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, } from '../../../utils/animations';
import { Link } from 'react-router-dom';

const FlightLogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

 const testimonials = [
  {
    name: "Kamran Abbas",
    title: "CEO",
    company: "Bullseye Investment",
    image: "https://i.pravatar.cc/80?img=14",
    rating: 5,
    review: "ShiftDeploy completely revamped our investment platform. Their deep knowledge of React and cloud infrastructure increased our user engagement by over 300%. Communication and delivery were flawless.",
    project: "Investment Platform Revamp"
  },
  {
    name: "Sara Wells",
    title: "CTO",
    company: "Slacker IOT",
    image: "https://i.pravatar.cc/80?img=32",
    rating: 5,
    review: "The IoT integration project was seamless thanks to ShiftDeploy. From device connectivity to real-time data dashboards, everything was delivered on time and exceeded expectations.",
    project: "IoT Device & Dashboard Integration"
  },
  {
  name: "Ahmed Khan",
  title: "Founder",
  company: "K2 Traders",
  image: "https://i.pravatar.cc/80?img=12",
  rating: 5,
  review: "ShiftDeploy delivered a full-featured e-commerce solution for K2 Traders with **zero deployment costs** and **no ongoing maintenance fees**. The platform was ready to launch immediately and exceeded our expectations in usability and performance.",
  project: "One-Time Payment E-Commerce Solution"
},


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
            className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-4 sm:mb-6 leading-tight  "
          >
            Flight
            <span className="text-primaryOrange pl-4">
              Logs
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="sm:text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0"
          >
            Hear from our clients about their transformation journey and the results
            they've achieved with ShiftDeploy.
          </motion.p>

        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 sm:hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
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
          className="  rounded-xl sm:rounded-2xl  text-center sm:bg-white p-8 sm:p-12 sm:shadow-lg"
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

          <Link to={"/ContactUs"} className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm mx-auto mt-12 w-fit"
          >
            Join Our Trusted Clients
            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />

          </Link>
        </motion.div>


      </div>
    </section>
  );
};

export default FlightLogs;