import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Inside ShiftDeploy', href: '#inside-shiftdeploy' },
      { name: 'Deploy Toolkit', href: '#deploy-toolkit' },
      { name: 'The Shift Protocol', href: '#the-shift-protocol' },
      { name: 'Missions Completed', href: '#missions-completed' },
      { name: 'Flight Logs', href: '#flight-logs' }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Cloud Services', href: '#' },
      { name: 'DevOps Solutions', href: '#' },
      { name: 'Deployment Services', href: '#' },
      { name: 'Consulting', href: '#' }
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'System Status', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-toBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6 sm:py-8 lg:py-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12"
        >
          {/* Company info */}
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="max-w-60"
            >

              <img src="https://res.cloudinary.com/dycwtnjbi/image/upload/v1753335542/white-v_gjd0eu.png" alt="" />
            </motion.div>
            <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-xs sm:text-sm lg:text-base">
              Transforming digital visions into reality through cutting-edge web development,
              cloud solutions, and deployment excellence.
            </p>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">hello@shiftdeploy.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <MapPin className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div variants={fadeInUp} className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services links */}
          <motion.div variants={fadeInUp} className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">Support</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16  border-t border-gray-700 flex flex-col md:flex-row justify-between items-center  space-y-3 sm:space-y-4 lg:space-y-6 md:space-y-0"
        >
          <div className="flex flex-col sm:flex-row  items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 xl:space-x-8 text-center sm:text-left">
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
              © {currentYear} ShiftDeploy. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4 lg:space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label={social.label}
              >
                <social.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;