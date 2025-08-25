import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, MapPin, Flag } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../../utils/animations';
const GroundControlTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Sami Akbar",
      position: "Co-Founder / Cloud Strategist",
      description: "Leading deployments and scaling with cloud-native precision.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Maham Khan",
      position: "Co-Founder / Full Stack Dev",
      description: "Engineering seamless frontend-to-backend solutions.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      name: "Rayan Malik",
      position: "DevOps Engineer",
      description: "Building pipelines and managing infra as code.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Zara Yousaf",
      position: "Client Success Manager",
      description: "Ensuring smooth communication and mission success.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="ground-control-team" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <motion.h2
          
            className="text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-white"
          >
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Mission Specialists
            </span>{" "}
            Behind ShiftDeploy
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0 text-white"
          >
            Each launch is guided by a crew of problem-solvers, engineers, and cloud tacticians—dedicated 
            to scaling what matters most: your success.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center space-x-2 sm:space-x-3 lg:space-x-4 mb-6 sm:mb-8 "
          >
            <Flag className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-green-400" />
            <span className="text-gray-300 font-medium text-xs sm:text-sm lg:text-base">
              🇵🇰 Based in Karachi — Operating globally 🇬🇧 🇨🇦
            </span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 sm:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={scaleOnHover}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group text-center"
            >
              {/* Profile Image */}
              <div className="relative mb-4 sm:mb-6 lg:mb-8">
                <div className={`w-20 sm:w-24 lg:w-28 xl:w-32 h-20 sm:h-24 lg:h-28 xl:h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r ${member.gradient} p-1 group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Glowing border effect */}
                <div className={`absolute inset-0 w-20 sm:w-24 lg:w-28 xl:w-32 h-20 sm:h-24 lg:h-28 xl:h-32 mx-auto rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              </div>

              {/* Member Info */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold italic text-sm sm:text-base lg:text-lg">
                  {member.position}
                </p>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base px-2 sm:px-0">
                  {member.description}
                </p>
              </div>

              {/* LinkedIn Link */}
              <motion.div
                className="mt-4 sm:mt-6 lg:mt-8 flex justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={member.linkedin}
                  className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-slate-700 hover:bg-blue-600 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-blue-500/20"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4 mb-3 sm:mb-4 lg:mb-6">
              <MapPin className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 text-blue-400" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                Global Reach, Local Expertise
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              Our team operates from Lahore, Pakistan, serving clients worldwide with 
              24/7 support and deep understanding of both local and international markets.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GroundControlTeam;