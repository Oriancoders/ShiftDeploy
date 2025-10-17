import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Slack, Twitter, } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import whiteV from '../Assets/Images/whiteV.png'
import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Inside ShiftDeploy', href: '/insideShiftDeploy' },
      { name: 'Deploy Toolkit', href: '/deploy-toolkit' },
      { name: 'The Shift Protocol', href: '/shift-protocol' },
      { name: 'Missions Completed', href: '/missions' },
      { name: 'Flight Logs', href: '/flight-logs' }
    ],
    services: [
      { name: 'Cloud Services', href: '/deploy-toolkit' },
      { name: 'DevOps Solutions', href: '/deploy-toolkit' },
      { name: 'Web Development', href: '/deploy-toolkit' },
      { name: 'Deployment Services', href: '/deploy-toolkit' },
      { name: 'Consulting', href: '/deploy-toolkit' }
    ],

    caseStudies: [
      { name: 'Slacker IOT', href: '/CaseStudies/SlackerIOT' },
      { name: 'K2 Traders', href: '/CaseStudies/K2TradersCase' },
      { name: 'BullsEyes Investments', href: '/CaseStudies/BullseyesCase' },

    ]
  };


  return (
    <footer className="bg-primaryBlue text-white">
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
              className="lg:max-w-60 sm:max-w-48 max-w-36"
            >

              <img src={whiteV} alt="" />
            </motion.div>
            <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-xs sm:text-sm lg:text-base">
              Transforming digital visions into reality through cutting-edge web development,
              cloud solutions, and deployment excellence.
            </p>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <a href='mailto:contact@shiftdeploy.com' target='_blank' className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">contact@shiftdeploy.com</span>
              </a>
              <a href='https://x.com/shiftdeploy' target='_blank' className="flex items-center space-x-2 sm:space-x-3">
                <FaXTwitter className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Join us on twitter</span>
              </a>
              
              <a href='https://join.slack.com/t/shiftdeployworkspace/shared_invite/zt-3gan3ow0g-OW0s3OJIJKIzQwQ0tB1V6A1' target='_blank' className="flex items-center space-x-2 sm:space-x-3">
                <Slack  className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Join us on slack</span>
              </a>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div variants={fadeInUp} className="sm:col-span-1 lg:col-span-1 ">
            <h4 className="text-white font-bold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">Explore ShiftDeploy</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support links */}
          <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-bold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">Case Studies</h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.caseStudies.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
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
          className="mt-8 sm:mt-12 lg:mt-16  border-t border-gray-700 flex flex-col md:flex-row justify-center pt-6 items-center  space-y-3 sm:space-y-4 lg:space-y-6 md:space-y-0"
        >
          <div className="flex flex-col sm:flex-row  items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 xl:space-x-8 text-center sm:text-left">
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
              © {currentYear} ShiftDeploy. All rights reserved.
            </p>
            <div className="flex space-x-3 sm:space-x-4 lg:space-x-6">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base">
                Privacy Policy
              </Link>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
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
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;