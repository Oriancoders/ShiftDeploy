import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import emailjs from "@emailjs/browser";
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate()

  // 🟢 Page load hone par scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: '',
    budget: '',
    timeline: ''
  });

  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };




  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("loading");

    emailjs
      .sendForm(
        "service_jrpagw4",   // ⚡ Step 2 → Service ID
        "template_scjrafd",  // ⚡ Step 2 → Template ID
        formRef.current,     // ref to the <form>
        "QvcGHkk74en4u55cN"    // ⚡ Step 2 → Public Key
      )
      .then(
        () => {
          setFormStatus("success");
          setTimeout(() => {
            navigate("/thankyou")
          }, 1000)
          console.log("form data yera ", formData)
          setFormData({ name: "", email: "", company: "", message: "", phone: "", budget: "", timeline: "" });
          setTimeout(() => setFormStatus(null), 15000);

        },
        (error) => {
          console.error("EmailJS Error:", error);
          setFormStatus("error");
        }
      );
  };

  const contactInfo = [
    {
      icon: <IoMail className="w-6 sm:w-7 h-6 sm:h-7" />,
      label: 'Email',
      value: 'hello@shiftdeploy.com',
      href: 'mailto:hello@shiftdeploy.com',
    },
    {
      icon: <FaLinkedin className="w-6 sm:w-7 h-6 sm:h-7" />,
      label: 'LinkedIn',
      value: 'www.linkedin.com/company/shiftdeploy',

      href: 'https://www.linkedin.com/company/shiftdeploy',
    },
    {
      icon: <FaXTwitter className="w-6 sm:w-7 h-6 sm:h-7" />,
      label: 'Twitter',
      value: 'x.com/ShiftDeploy',
      href: 'https://x.com/ShiftDeploy',
    }

  ];



  return (
    <>
      <Helmet>
        <title>Get a Free Website Performance Audit | ShiftDeploy</title>
        <meta
          name="description"
          content="Request a free performance audit to see how speed and usability affect real visitors—no changes to your site. Get clear findings and next steps."
        />
        <meta
          name="keywords"
          content="free website audit, performance audit, core web vitals audit, site speed audit, UX usability audit, ShiftDeploy"
        />

        <meta property="og:title" content="Get a Free Website Performance Audit | ShiftDeploy" />
        <meta
          property="og:description"
          content="Free performance audit showing how speed and usability affect real visitors—no site changes required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/contact" />
        <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get a Free Website Performance Audit | ShiftDeploy" />
        <meta
          name="twitter:description"
          content="Request a free audit to understand speed + usability impact on real visitors. No changes made during the audit."
        />
        <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
      </Helmet>

      <Navigation />
      <section id="contact-us" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-20 lg:py-24">
          {/* Header Section */}
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="text-center mb-6 sm:mb-16 lg:mb-20"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primaryBlue mb-4 sm:mb-6 lg:mb-8"
            >
              Get a Free Performance Audit
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              We’ll review your website’s speed, usability, and conversion friction and show how it affects real visitors.
              No changes are made to your site during the audit.
            </motion.p>

          </motion.div>

          {/* Main Content - Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8 sm:space-y-10 lg:space-y-12 sm:order-1 order-2"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue mb-6 sm:mb-8">
                What you’ll get
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                A short, structured performance visibility report that shows how your website performs for real users today.
                This is an informational health check only, no access required, no technical diagnosis, and no implementation guidance.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <p className="text-slate-900 font-semibold text-base sm:text-lg">Health check includes:</p>
                <ul className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-2 list-disc pl-5">
                  <li>Load speed and responsiveness overview</li>
                  <li>Core Web Vitals snapshot (LCP, INP, CLS)</li>
                  <li>Visual stability during page load</li>
                  <li>High-level indication of whether performance meets modern user expectations</li>
                </ul>
                <p className="text-slate-500 text-sm sm:text-base pt-2">
                  Typical turnaround: <span className="text-slate-700 font-medium">24–48 hours</span>
                </p>
              </div>



              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primaryBlue mb-6 sm:mb-8 leading-10">
                Contact Via Other Platforms
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
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-slate-900 font-semibold text-base sm:text-lg mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target='_blank'
                          className={`text-base sm:text-lg transition-colors duration-300 text-gray-600 hover:text-gray-800`}
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
              className="mt-8 lg:mt-0  sm:order-2 order-1 "
            >
              <div className="bg-white rounded-2xl sm:shadow-xl border border-slate-200 p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 ">
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
                      className="w-full px-4  py-2  border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500  focus:ring-2 focus:ring-primaryBlue transition-all duration-300 text-base sm:text-lg"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
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
                        className="w-full px-4  py-2 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-primaryBlue transition-all duration-300 text-base sm:text-lg"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-xl text-slate-900 
               placeholder-slate-500 focus:ring-2 focus:ring-primaryBlue transition-all duration-300 text-base sm:text-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>



                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                      Website / Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4  py-2 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-primaryBlue transition-all duration-300 text-base sm:text-lg"
                      placeholder="Your website URL or company name"
                    />
                  </div>



                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-slate-900 font-semibold text-base sm:text-lg mb-3">
                      What should we audit first? *

                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4  py-2  border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-primaryBlue transition-all duration-300 resize-vertical text-base sm:text-lg"
                      placeholder="tell us what matters (speed, bookings/leads, mobile UX, conversions)..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'loading'}

                    className="w-full bg-primaryOrange hover:bg-toOrange text-white font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 sm:w-6 h-5 sm:h-6" />
                        <span>Get Free Audit</span>
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
      <Footer />
    </>
  );
};

export default ContactUs;

