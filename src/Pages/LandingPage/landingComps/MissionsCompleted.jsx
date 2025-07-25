import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Download, Star, Calendar, Users, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';

const MissionsCompleted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-commerce Platform Transformation",
      client: "TechGear Solutions",
      category: "Web Development",
      description: "Complete redesign and optimization of e-commerce platform resulting in 340% increase in conversions",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["340% conversion increase", "50% faster loading", "Mobile-first design"],
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Cloud Infrastructure Migration",
      client: "FinanceFlow Corp",
      category: "Cloud Services",
      description: "Migrated legacy systems to cloud infrastructure with 99.9% uptime guarantee",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["99.9% uptime", "60% cost reduction", "Auto-scaling enabled"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "DevOps Pipeline Automation",
      client: "InnovateHub",
      category: "DevOps",
      description: "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["95% faster deployments", "Zero-downtime releases", "Automated testing"],
      technologies: ["Jenkins", "GitLab CI", "Docker", "Monitoring"],
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Successful Projects", gradient: "from-blue-500 to-indigo-600" },
    { icon: TrendingUp, value: "250%", label: "Avg. Performance Boost", gradient: "from-green-500 to-emerald-600" },
    { icon: Calendar, value: "5 Years", label: "Industry Experience", gradient: "from-purple-500 to-indigo-600" },
    { icon: Star, value: "4.9/5", label: "Client Satisfaction", gradient: "from-yellow-500 to-orange-600" }
  ];

  return (
    <section id="missions-completed" className="py-16 sm:py-20 lg:py-24 bg-white">
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
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Missions
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Completed
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-0"
          >
            Explore our portfolio of successful projects and see how we've helped
            businesses transform their digital presence.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
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
                className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br ${stat.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg`}>
                <stat.icon className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white" />
              </motion.div>
              <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects showcase */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
              whileHover="whileHover"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-64 lg:h-full order-2 lg:order-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 bg-gradient-to-r ${project.gradient} text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full font-semibold shadow-lg text-xs sm:text-sm lg:text-base`}>
                    {project.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 order-1 lg:order-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">{project.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">{project.client}</p>
                  <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">{project.description}</p>

                  <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                    <div>
                      <h4 className="text-gray-900 font-bold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Key Results:</h4>
                      <ul className="grid grid-cols-1 gap-1.5 sm:gap-2 lg:gap-3">
                        {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 sm:space-x-3">
                            <Star className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-orange-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-gray-900 font-bold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">Technologies:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 text-blue-700 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full font-medium text-xs sm:text-sm lg:text-base"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 lg:px-5 xl:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm lg:text-base"
                    >
                      <ExternalLink className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                      <span>View Project</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-2 border-blue-200 text-blue-600 px-3 sm:px-4 lg:px-5 xl:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-1.5 sm:space-x-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm lg:text-base"
                    >
                      <Download className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                      <span>Case Study</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionsCompleted;