import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrench, Zap, Shield, Globe, Server, Database, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

const DeployToolkit = () => {
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

  return (
    <section id="deploy-toolkit" className="py-16 sm:py-20 lg:py-24 bg-white">
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
              What We
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Launch
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-0"
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
              whileHover="whileHover"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br ${tool.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto sm:mx-0`}>
                <tool.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 text-center sm:text-left">{tool.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center sm:text-left text-sm sm:text-base">{tool.description}</p>
              
              <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <div className="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-red-400 rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600">
                    <span className="text-red-500 font-semibold">Problem:</span> {tool.problem}
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                  <div className="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-600">
                    <span className="text-green-500 font-semibold">Solution:</span> {tool.solution}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem-solving CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-orange-50 to-blue-50 border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 text-center shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            Facing Technical Challenges?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our Deploy Toolkit is designed to solve the most common problems businesses face 
            when building and scaling digital products. Let us help you overcome technical barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-blue-200 text-blue-600 px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeployToolkit;