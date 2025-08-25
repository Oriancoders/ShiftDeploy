import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Zap, Shield, Globe, Server, Database, ArrowRight, MoveLeft } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
import CursorFollower from '../../../utils/CursorFollower';
const DeployToolkit = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [mouseOverIndex, setMouseOverIndex] = useState(null)


  const handleIndex = (index) => {
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
      problem: "Slow loading times due to centralized servers and long-distance data travel. This frustrates users and hurts SEO rankings.",
      solution: "Distributing content across multiple global edge locations drastically reduces latency, ensures faster load times, and improves SEO performance.",
      result: "40% faster loads"
    },
    {
      icon: Server,
      title: "Auto-Scaling Infrastructure",
      description: "Dynamically adjust resources based on demand to optimize performance",
      problem: "Traffic spikes can overwhelm fixed servers, causing downtime and slow response.",
      solution: "Our system automatically adjusts capacity in real time, ensuring smooth scaling during peak loads.",
      result: "99.9% uptime"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "High-performance database solutions with automated backups",
      problem: "Unoptimized queries and slow retrieval bottleneck applications.",
      solution: "We apply indexing, caching, and optimized queries for faster data access.",
      result: "2x faster queries"
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "Enterprise-grade security measures to protect your applications",
      problem: "Apps face risks like SQL injection, DDoS, and data leaks.",
      solution: "We deploy multi-layered firewalls, encryption, and audits for strong protection.",
      result: "70% fewer risks"
    },
    {
      icon: Zap,
      title: "Performance Monitoring",
      description: "Real-time monitoring and alerting for optimal application health",
      problem: "Issues stay hidden until customers complain.",
      solution: "We use dashboards + instant alerts for proactive fixes.",
      result: "90% faster fixes"
    },
    {
      icon: Wrench,
      title: "DevOps Automation",
      description: "Streamlined workflows with CI/CD pipelines and automated testing",
      problem: "Manual deployment is slow and error-prone.",
      solution: "Automated pipelines & testing enable fast and reliable delivery.",
      result: "60% faster deploys"
    }
  ];



  const builtToScale = [
    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },

    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },

    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },

    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },

    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },

    {
      heading: "DevOps Automation", icon: <Globe sx={{ fontSize: 30 }} />, description: "Streamlined workflows with CI/CD pipelines and automated testing", problem: "Manual processes",
      solution: "Full automation",
    },
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
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0 text-gray-600"
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
              onMouseEnter={() => handleMouseOver(index)}
              key={index}
              variants={scaleOnHover}
            >
              <div
                className="bg-white min-h-[350px] sm:min-h-[280px] lg:min-h-[300px] border sm:border-gray-200 rounded-3xl p-6 pb-12 sm:hover:border-blue-300  border-toSecBlue sm:hover:shadow-md  transition-all duration-300 group relative overflow-hidden"

              >
                {/* <motion.div
                  whileHover={{
                    y: -7,
                    rotateZ: -15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={` w-12 sm:w-16 lg:w-14 h-12 sm:h-16 lg:h-14 bg-secondaryBlue rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0  mx-0 mb-4`}>
                  <tool.icon className="w-6 sm:w-8  h-6 sm:h-8  text-white" />
                </motion.div> */}
                <h3 className="text-2xl font-bold  mb-2 sm:mb-3 lg:mb-4 text-gray-900">{tool.title}</h3>
                <p className=" mb-3 sm:mb-4 lg:mb-6 leading-relaxed   text-base text-gray-600">{tool.description}</p>

                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  <div className="flex items-center  space-x-2 sm:space-x-3 ">
                    <div className="w-3 h-3 bg-red-600 rounded-full flex-shrink-0" />
                    <span className="text-md ">
                      <span className="text-red-600 font-semibold">Problem:</span>
                    </span>
                  </div>
                  <span className='text-gray-600 text-base'>

                    {tool.problem}
                  </span>

                </div>
                {/* this one card animation  */}
                <div className={`w-full   absolute sm:-bottom-20 sm:left-20 bottom-0 left-0 group-hover:left-0 group-hover:bottom-0 text-white text-right ${activeIndex == index && '-bottom-20 left-20'}  transition-all duration-500`} style={{
                }}>
                  <span className={` font-bold bg-green-600 sm:px-2 px-4 py-2 inline-block rounded-tl-2xl cursor-pointer ${activeIndex == index && 'translate-y-16 translate-x-1/2'}transition-all duration-500`} onClick={() => handleIndex(index)}>Reveal Solution </span>
                </div>
                {/* explanation card  */}
                <div className={`w-full h-full bg-green-600  absolute  px-6 py-4 text-white rounded-2xl  ${activeIndex == index ? 'top-0 left-0' : '-top-96 -left-96'} transition-all duration-500 flex flex-col justify-between`} style={{
                }}>
                  <div className='flex flex-col gap-y-2'>
                    <h1 className={` font-bold   inline-block  cursor-pointer`} onClick={() => handleIndex(null)}> <MoveLeft /></h1>

                    <span className=" font-bold text-xl">Solution</span>
                    {tool.solution}

                  </div>

                  <div className='w-full text-right text-xl font-bold '>{tool.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



        {/* Problem-solving CTA */}

        <div className='w-full  bg-gradient-to-br from-primaryBlue to-toBlue text-white '>
          <div

            className="w-full  py-8 px-6 sm:px-0 sm:p-8 lg:p-12 xl:p-16  drop-shadow-sm flex md:flex-row flex-col   max-w-7xl mx-auto gap-6"
          >
            <div className='flex-1 '>
              <h3 className="text-3xl xl:text-4xl max-w-xl lg:max-w-4xl xl:max-w-5xl font-bold  mb-4 sm:mb-6 lg:mb-8">
                Whether it's containers, CI/CD, or observability <br /> we’ve done it for teams like yours.
              </h3>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12  mx-auto leading-relaxed"
              >
                Our Deploy Toolkit is designed to solve the most common problems businesses face
                when building and scaling digital products. Let us help you overcome technical barriers.
              </p>


              
            </div>

            <div className='flex-1 space-y-8'>
              <img src="https://seranking.com/blog/wp-content/uploads/2022/12/Open-Website-Audit-Settings.png" alt="" className='w-full h-[300px]' />

              <div className='flex justify-between items-center bg-white  rounded-2xl w-full'>
                <input type="text" placeholder='Enter your website' className='px-4 outline-none border-none text-textColor h-full' />
                <button

                  className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-r-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm "
                >

                  Send me free audit
                  <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployToolkit;