import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorFollower from '../utils/CursorFollower';

import coloredV from '../Assets/Images/coloredV.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Deploy Toolkit', path: '/deploy-toolkit' },
    { label: 'Inside ShiftDeploy', path: '/insideShiftDeploy' },
    { label: 'The Shift Protocol', path: '/shift-protocol' },
    { label: 'Missions Completed', path: '/missions' },
    { label: 'Flight Logs', path: '/flight-logs' },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="2xl:max-w-60 sm:max-w-48  max-w-36"
          >


            <Link to="/">
              <img src={coloredV} alt="" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map(({ label, path }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="text-gray-700 cursor-pointer hover:text-primaryBlue transition-colors duration-300 font-medium relative group text-sm xl:text-base"
              >
                <Link to={path}>
                  {label}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            ))}



            <Link to="/ContactUs"
            
              className="bg-primaryOrange hover:bg-toOrange text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold shadow-lg  text-sm xl:text-base"
            >Get Started</Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 flex flex-col justify-between h-full ">
              <div className=' space-y-3'>
                {navItems.map(({ label, path }, index) => (
                  <motion.div
                    key={index}
                    // href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 sm:py-3 font-medium text-base sm:text-lg"
                  >
                    <Link to={path}>
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <button className='w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg mt-4 sm:mt-6 text-base sm:text-lg '>
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;