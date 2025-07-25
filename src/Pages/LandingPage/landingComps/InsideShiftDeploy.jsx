import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Cloud, Settings, Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';

const InsideShiftDeploy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with cutting-edge technologies",
      features: ["React & Next.js", "TypeScript", "Mobile-First Design", "Performance Optimization"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure solutions for modern businesses",
      features: ["AWS & Google Cloud", "Auto-scaling", "Database Management", "Security First"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "DevOps Excellence",
      description: "Streamlined development workflows and automation",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure as Code"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Rocket,
      title: "Deployment Solutions",
      description: "Fast, reliable deployment strategies that minimize downtime",
      features: ["Zero-downtime Deployment", "Rollback Strategies", "Performance Monitoring", "Global CDN"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="inside-shiftdeploy" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Inside
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              ShiftDeploy
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-0"
          >
            We provide comprehensive technology solutions that help businesses scale,
            optimize performance, and achieve sustainable growth in today's digital landscape.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
              // whileHover="whileHover"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}

            >

              <CursorFollower
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-300 hover:shadow-md transition-all  group"
                gradientFrom='rgba(67, 97, 238, 0.2)'
                gradientTo='rgba(67, 97, 238, 0.1)'
                circleSize={100}

              >
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <motion.div
                    whileHover={{
                      y: -7,
                      rotateZ: -15,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className={`inline-block w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br ${solution.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform  shadow-lg mx-auto sm:mx-0`}>
                    <solution.icon className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
                  </motion.div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">{solution.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                          <CheckCircle className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CursorFollower>
            </motion.div>
          ))}
        </div>

        {/* Growth-focused messaging */}
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
            className="w-full bg-gradient-to-r from-blue-50 to-orange-50 border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-md"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              Ready to Accelerate Your Growth?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Join hundreds of successful businesses that have transformed their digital presence
              with ShiftDeploy's proven solutions and expert guidance.
            </p>


            <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            className=" bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-2.5 sm:py-3 lg:py-4 xl:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg mx-auto shadow-xl hover:shadow-2xl transition-all duration-100"
            >

              Start Your Transformation
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </motion.button>

          </CursorFollower>
        </div>
      </div>
    </section>
  );
};

export default InsideShiftDeploy;