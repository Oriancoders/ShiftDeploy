import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import CursorFollower from '../utils/CursorFollower';
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
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="2xl:max-w-60 max-w-48"
          >


            <Link to="/">
              <img src="https://res.cloudinary.com/dycwtnjbi/image/upload/v1753335541/colored-v_y7jkzd.png" alt="" />
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



            <CursorFollower
              text="Get Started"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm xl:text-base"
              gradientFrom="#0C1F3A"
              gradientTo="#0B1D30"
              circleSize={100}
              framerAtts={{
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
              }}

            />
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
              {navItems.map(({ label, path } , index) => (
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

              <CursorFollower

                text="Get Started"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg mt-4 sm:mt-6 text-base sm:text-lg"
                gradientFrom="#0C1F3A"
                gradientTo="#0B1D30"
                circleSize={100}
                framerAtts={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: navItems.length * 0.1 }
                }}

              />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;