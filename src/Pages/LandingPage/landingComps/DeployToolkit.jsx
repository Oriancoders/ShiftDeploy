import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Zap, Shield, Globe, Server, Database, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';

const DeployToolkit = () => {
   const [activeIndex , setActiveIndex] = useState(0)
    const [mouseOverIndex , setMouseOverIndex] = useState(null)

    const handleIndex = (index) =>{
        setActiveIndex(index)
    }
    const handleMouseOver = (index) => {
        setMouseOverIndex(index != activeIndex ? index : null)
    }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    {
      icon: Globe,
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide with 99.9% uptime guarantee",
      problem: "Slow loading times",
      solution: "Global edge locations",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Server,
      title: "Auto-Scaling Infrastructure",
      description: "Dynamically adjust resources based on demand to optimize performance",
      problem: "Traffic spikes",
      solution: "Intelligent scaling",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "High-performance database solutions with automated backups",
      problem: "Data bottlenecks",
      solution: "Optimized queries",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Enterprise-grade security measures to protect your applications",
      problem: "Security vulnerabilities",
      solution: "Multi-layer protection",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Performance Monitoring",
      description: "Real-time monitoring and alerting for optimal application health",
      problem: "Performance issues",
      solution: "Proactive monitoring",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Wrench,
      title: "DevOps Automation",
      description: "Streamlined workflows with CI/CD pipelines and automated testing",
      problem: "Manual processes",
      solution: "Full automation",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const builtToScale = [
    { heading: "CommerceAI", icon: <Globe sx={{ fontSize: 30 }} />, para: "Know what your customers want before they do. CommerceAI tracks shopping trends, predicts demand, and helps you stock the right products at the right time. It also personalizes recommendations, increasing sales without extra effort. Less guesswork, fewer dead stocks, and more revenue—automated.",},

    { heading: "ScaleCloud", icon: <Globe sx={{ fontSize: 30 }} />, para: "Forget scattered systems. ScaleCloud automates tasks across your entire business, from handling leads and sending follow-ups to managing orders and customer support. You get a single, connected platform that removes bottlenecks, saves time, and lets your business grow without adding extra work.", },

    { heading: "LaunchPad", icon: <Globe sx={{ fontSize: 30 }} />, para: "Your website isn’t just a page—it’s your best salesperson. LaunchPad builds sites that load fast, look great, and turn visitors into paying customers. It also connects to AI-powered ads that target the right people at the right time, so you get higher conversions and lower ad costs.", },

    { heading: "EliteScale", icon: <Globe sx={{ fontSize: 30 }} />, para: "Big businesses win by running everything at scale—now you can too. EliteScale gives you enterprise-grade automation, AI-driven marketing, and multi-channel advertising in one package. Instead of juggling agencies and tools, you get a fully optimized system that grows your business across every platform.",  },
  ]

  return (
    <section id="deploy-toolkit" className="py-4 sm:py-12  text-textColor bg-gradient-to-b from-white to-gray-50">
      <div className=" mx-auto flex flex-col justify-center items-center ">
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
              What We
            </span>{" "}
            <span className="text-secondaryBlue">
              Launch
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0"
          >
            Our comprehensive Deploy Toolkit includes everything you need to build,
            deploy, and scale modern applications with confidence.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          </motion.div>
        </motion.div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl ">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
            >
              <div
                className="bg-white border sm:border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:hover:border-blue-300  border-toSecBlue sm:hover:shadow-md  transition-all duration-300 group "

              >
                <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-secondaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6  shadow-lg `}>
                  <tool.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold  mb-2 sm:mb-3 lg:mb-4 ">{tool.title}</h3>
                <p className=" mb-3 sm:mb-4 lg:mb-6 leading-relaxed  text-sm sm:text-base">{tool.description}</p>

                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  <div className="flex items-center  space-x-2 sm:space-x-3">
                    <div className="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-red-600 rounded-full flex-shrink-0" />
                    <span className="text-xs sm:text-sm ">
                      <span className="text-red-600 font-semibold">Problem:</span> {tool.problem}
                    </span>
                  </div>
                  <div className="flex items-center  space-x-2 sm:space-x-3">
                    <div className="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-green-600 rounded-full flex-shrink-0" />
                    <span className="text-xs sm:text-sm ">
                      <span className="text-green-600 font-semibold">Solution:</span> {tool.solution}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* starting for big screen  */}
        <div className='w-full flex gap-20 justify-between items-center  sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl '>
          <div className='min-w-[30%] flex flex-col gap-8'>
            {builtToScale.map((item, idx) => (
              <span
                onMouseEnter={() => handleMouseOver(idx)}
                onMouseLeave={() => handleMouseOver(null)}
                onClick={() => handleIndex(idx)} key={idx}

                style={{

                  color: activeIndex == idx ? '#0c1f3a' : '',
                  boxShadow: activeIndex == idx && "0px 0px 5px rgba(0, 0, 0, 0.2)",
                }} className={`py-4 px-8 text-2xl rounded-xl items-center transition-all flex gap-x-4 cursor-pointer bg-primaryBlue text-white ${idx == mouseOverIndex && 'hover:bg-primaryBlue text-white'}`}>
                <span>{item.icon}</span>
                <h1 className=' font-semibold'>{item.heading}</h1>

              </span>
            ))}
          </div>

          <div className='flex-1 p-6 rounded-xl bg-darkBlue text-left relative'>
            <h1 className='font-bold text-4xl '>{builtToScale[0].heading}</h1>

            <p className='font-bold absolute bottom-5 left-5 inline text-left  text-lg py-2 cursor-pointer  bg-greenButton px-4 rounded'>
              Know More
            </p>


          </div>
        </div>

        {/* Problem-solving CTA */}

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
            className="w-full bg-gradient-to-br from-primaryBlue to-toBlue text-white py-8 px-6 sm:px-0 sm:p-8 lg:p-12 xl:p-16 text-center drop-shadow-sm flex flex-col justify-center items-center"
          >
            <h3 className="text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold  mb-4 sm:mb-6 lg:mb-8">
              Whether it's containers, CI/CD, or observability <br /> we’ve done it for teams like yours.
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Our Deploy Toolkit is designed to solve the most common problems businesses face
              when building and scaling digital products. Let us help you overcome technical barriers.
            </p>


            <button

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm "
            >

              Build Your Stack With Us
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </button>

          </CursorFollower>
        </div>
      </div>
    </section>
  );
};

export default DeployToolkit;