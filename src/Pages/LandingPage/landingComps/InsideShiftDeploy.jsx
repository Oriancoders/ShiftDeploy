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
      icon: Rocket,
      title: "Deployment Solutions",
      description: "Fast, reliable deployment strategies that minimize downtime",
      features: ["Zero-downtime Deployment", "Rollback Strategies", "Performance Monitoring", "Global CDN"],
      gradient: "from-orange-500 to-red-600"
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
      icon: Code,
      title: "Web Development",
      description: "Custom websites and applications built with cutting-edge technologies",
      features: ["React & Next.js", "TypeScript", "Mobile-First Design", "Performance Optimization"],
      gradient: "from-blue-500 to-indigo-600"
    },
  ];

  return (
    <section id="inside-shiftdeploy" className="pt-4 sm:pt-12  text-textColor bg-gradient-to-b from-white to-gray-50">
      <div className=" mx-auto flex flex-col justify-center items-center ">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-8 "
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl xl:text-4xl font-bold mb-6 "
          >
            <span className="text-primaryBlue">
              Inside
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              ShiftDeploy
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 leading-relaxed px-4 sm:px-0  text-gray-600"
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white border sm:border-gray-200 rounded-xl md:rounded-2xl p-6 sm:hover:border-blue-300  border-toSecBlue sm:hover:shadow-md transition-all  group col-span-1 h-full"            // whileHover="whileHover"
            >
              <div className="flex flex-col  sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-6">
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
                  className={` w-12 sm:w-16 lg:w-14 h-12 sm:h-16 lg:h-14 bg-secondaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0   mx-0`}>
                  <solution.icon className="w-6 sm:w-8  h-6 sm:h-8  text-white" />
                </motion.div>
                <div className="flex-1 text-left space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold   text-primaryBlue">{solution.title}</h3>
                  <p className="  text-lg leading-relaxed text-gray-600">{solution.description}</p>
                  <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-start space-x-2 sm:space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
{/* 
              <div className='w-full text-right translate-y-3 translate-x-3 cursor-pointer group-hover:opacity-100 opacity-0 text-primaryBlue font-bold'>Know More -{">"} </div> */}

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
            className="w-full bg-gradient-to-br from-primaryBlue to-toBlue text-white p-6 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-sm flex flex-col justify-center items-center"
          >
            <h3 className="text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold  mb-4 sm:mb-6 lg:mb-8">
              Ready to Accelerate Your Growth?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Join hundreds of successful businesses that have transformed their digital presence
              with ShiftDeploy's proven solutions and expert guidance.
            </p>


            <button

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm "
            >

              Why We’re Different
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </button>

          </CursorFollower>
        </div>
      </div>
    </section>
  );
};

export default InsideShiftDeploy;