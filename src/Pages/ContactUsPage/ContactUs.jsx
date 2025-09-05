import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@shiftdeploy.com',
      href: 'mailto:hello@shiftdeploy.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'hello@shiftdeploy.com',

      href: '#',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: 'hello@shiftdeploy.com',
      href: '#',
    }

  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:bg-blue-600'
    },
    
  ];

  return (
    <>
    <Navigation/>
    <section id="contact-us" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Section */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primaryBlue mb-4 sm:mb-6 lg:mb-8"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            We'd love to hear about your project or questions. Fill out the form or reach us through the details below.
          </motion.p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 sm:space-y-10 lg:space-y-12"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                Ready to transform your digital presence? Our team of experts is here to help you navigate your next big project.
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primaryBlue mb-6 sm:mb-8 leading-10">
                Or Contact Via Other Platforms
              </h2>
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 sm:space-x-5"
                >
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primaryBlue text-white">
                    <info.icon className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-1">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-base sm:text-lg transition-colors duration-300 ${
                          info.primary 
                            ? 'text-blue-600 hover:text-blue-700 font-medium' 
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 text-base sm:text-lg">{info.value}</p>
                    )}
                    {info.subtitle && (
                      <p className="text-slate-500 text-sm mt-1">{info.subtitle}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 lg:mt-0"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 ">
              <form onSubmit={handleSubmit} className="space-y-6 ">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4  py-2  border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 text-base sm:text-lg"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4  py-2 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 text-base sm:text-lg"
                    placeholder="your.email@company.com"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                    Company/Website
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4  py-2 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 text-base sm:text-lg"
                    placeholder="Your company or website (optional)"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4  py-2  border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 resize-vertical text-base sm:text-lg"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 sm:w-6 h-5 sm:h-6" />
                      <span>Send Message</span>
{/* // https://ui.aceternity.com/components/stateful-button - > to be added here  */}

                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                {/* Reassurance Text */}
                <p className="text-slate-500 text-sm sm:text-base text-center">
                  We usually respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;

