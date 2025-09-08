import React, { useContext, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Download, Star, Calendar, Users, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../../utils/animations";
import { ContextAPI } from "../../../GlobalProvider/ContextAPI";

const MissionsCompleted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrwidth } = useContext(ContextAPI);

  // 🔹 Animated stats state
  const [animatedNumbers, setAnimatedNumbers] = useState({});

  // Helper function to split number + suffix
  const splitValue = (value) => {
    const match = value.match(/(\d+\.?\d*)(.*)/); // e.g. "200%" => ["200%", "200", "%"]
    return match ? { number: parseFloat(match[1]), suffix: match[2] } : { number: 0, suffix: "" };
  };

  const stats = [
    { icon: Users, value: "10+", label: "Successful Projects", gradient: "from-blue-500 to-indigo-600" },
    { icon: TrendingUp, value: "200%", label: "Avg. Performance Boost", gradient: "from-green-500 to-emerald-600" },
    { icon: Calendar, value: "3", suffix: " Years +", label: "Industry Experience", gradient: "from-purple-500 to-indigo-600" },
    { icon: Star, value: "4.9", suffix: "/5", label: "Client Satisfaction", gradient: "from-yellow-500 to-orange-600" },
  ];

  // 🔹 Animate number function
  const animateNumber = (index, targetValue) => {
    let currentValue = 0;
    const increment = targetValue / 50; // 50 steps
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      setAnimatedNumbers((prev) => ({
        ...prev,
        [index]: Math.round(currentValue * 10) / 10, // one decimal place
      }));
    }, 30);
  };

  // 🔹 Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const { number } = splitValue(stat.value + (stat.suffix || ""));
        setTimeout(() => animateNumber(index, number), index * 200); // delay between each
      });
    }
  }, [isInView]);

  const projects = [
    {
      title: "E-commerce Platform Transformation",
      client: "K2 Traders",
      category: "Web Development",
      description: "Complete redesign and optimization of e-commerce platform resulting in 340% increase in conversions",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["340% conversion increase", "50% faster loading", "Mobile-first design"],
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Cloud Infrastructure Migration",
      client: "Bullseyes Investments",
      category: "Cloud Services",
      description: "Migrated legacy systems to cloud infrastructure with 99.9% uptime guarantee",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["99.9% uptime", "60% cost reduction", "Auto-scaling enabled"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "DevOps Pipeline Automation",
      client: "InnovateHub",
      category: "DevOps",
      description: "Implemented CI/CD pipelines reducing deployment time from hours to minutes",
      image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: ["95% faster deployments", "Zero-downtime releases", "Automated testing"],
      technologies: ["Jenkins", "GitLab CI", "Docker", "Monitoring"],
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section id="missions-completed" className="py-12 bg-white text-primaryBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center mb-8 ">
          <motion.div ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className=" mb-12 sm:mb-16 sm:flex-1 border-r border-gray-400">
            <motion.h2
              variants={fadeInUp}
              className="text-5xl font-bold text-primaryBlue mb-6 leading-tight  "
            >
              Missions We've <br/>
              <span className="text-primaryOrange ">
                Completed
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-0 text-left"
            >
              Explore our portfolio of successful projects and see how we've helped
              businesses transform their digital presence.
            </motion.p>

          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 sm:flex-1"
          >
            {stats.map((stat, index) => {
              const { number, suffix } = splitValue(stat.value + (stat.suffix || ""));
              return (
                <motion.div key={index} className="text-center">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
                    {animatedNumbers[index] || 0}
                    {suffix}
                  </div>
                  <div className=" font-medium text-center">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
        {/* Projects showcase (same as before) */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border border-gray-300 rounded-3xl overflow-hidden  transition-all duration-100 group grid lg:grid-cols-2 gap-0"
            >
              {/* Left: Image */}
              <div
                className={`relative h-48 sm:h-64 lg:h-full ${scrwidth > 768 && index % 2 === 0 ? "order-2" : "order-1"
                  } ${scrwidth < 768 && "order-2"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover sm:rounded-none"
                />

              </div>

              {/* Right: Content */}
              <div
                className={`p-4 sm:p-6 lg:p-8 xl:p-10 ${scrwidth > 768 && index % 2 === 0 ? "order-1" : "order-2"
                  } ${scrwidth < 768 && "order-1"}`}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  {project.title}
                </h3>
                <p className="text-primaryOrange font-semibold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
                  {project.client}
                </p>
                <p className=" mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                  <div>
                    <h4 className=" font-bold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg">
                      Key Results:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5 sm:gap-2 lg:gap-3">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center space-x-2 sm:space-x-3"
                        >
                          <Star className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm lg:text-base">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                  <motion.button className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm ">
                    <ExternalLink className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                    <span>View Project</span>
                  </motion.button>
                  <motion.button className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  hover:border-toBlue  shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg">
                    <Download className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                    <span>Case Study</span>
                  </motion.button>
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
