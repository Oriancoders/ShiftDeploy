import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Smartphone,
  CreditCard,
  Bell,
  Server,
  Monitor,
  BarChart3,
  Cpu,
  Activity
} from 'lucide-react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

const K2TradersCase = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ✅ Hide loader when scrollY === 0
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY === 0) {
        setShowLoader(false);
        window.removeEventListener('scroll', checkScroll);
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // ✅ Rewritten in business outcome language (structure unchanged)
  // ✅ Also aligned with the card copy:
  // description: "Built a new e-commerce website from scratch with a cleaner shopping flow, faster pages, and a setup that’s easy to maintain."
  // results:
  // - "Faster page loads across key pages"
  // - "Mobile-first shopping and checkout flow"
  // - "Improved conversion tracking and reporting"
  const techDetails = [
    {
      category: "Storefront Experience",
      icon: Monitor,
      technologies: [
        {
          name: "Modern, Fast Frontend",
          description:
            "We built the storefront to feel quick and simple, so customers can browse products without lag or clutter."
        },
        {
          name: "Consistent Design Across Devices",
          description:
            "Layouts were designed mobile-first, so the shopping experience stays clean and readable on phones and desktops."
        },
        {
          name: "Cleaner Shopping Flow",
          description:
            "We reduced friction across product → cart → checkout so customers can complete purchases with fewer drop-offs."
        }
      ],
      // TODO: Replace with real K2 pages (home / category / product) to avoid generic architecture imagery
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979341/frontend_ga5dm7.png'
    },
    {
      category: "Orders, Inventory, and Admin Workflow",
      icon: Server,
      technologies: [
        {
          name: "Simple Order Recording",
          description:
            "Orders and customer details are captured reliably and stored in one place so the team can fulfill quickly."
        },
        {
          name: "Low Maintenance Setup",
          description:
            "The system avoids heavy backend complexity, which keeps maintenance light and reduces the risk of breakage."
        },
        {
          name: "Easy Business Visibility",
          description:
            "The setup supports day-to-day operations without needing extra tools, so tracking and reporting stay simple."
        }
      ],
      // TODO: Replace with an admin/order workflow screenshot (blur sensitive data)
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979310/backend_ebvrtp.png'
    },
    {
      category: "Launch and Performance",
      icon: Cpu,
      technologies: [
        {
          name: "Fast Delivery",
          description:
            "The site is deployed in a way that keeps key pages fast and stable, especially on mobile networks."
        },
        {
          name: "Smooth Browsing Everywhere",
          description:
            "Pages are delivered efficiently so customers see products quickly, which helps keep intent high."
        },
        {
          name: "Built for Iteration",
          description:
            "The structure supports ongoing improvements (new sections, better tracking, UX tweaks) without a rebuild."
        }
      ],
      // TODO: Replace with real lighthouse/core web vitals screenshots or product list page load visuals
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979318/deployment_etllcf.png'
    },
    {
      category: "Trust and Safety Basics",
      icon: CreditCard,
      technologies: [
        {
          name: "Secure Browsing",
          description:
            "Customers browse and submit details over secure connections to protect trust and reduce risk."
        },
        {
          name: "Cleaner Data Input",
          description:
            "We added validation so orders are captured cleanly and the business avoids messy records or junk entries."
        },
        {
          name: "Full Ownership",
          description:
            "The store belongs to K2 Traders, so the business isn’t locked into a platform that limits growth later."
        }
      ],
      // TODO: Replace with a trust/checkout UI screenshot from the actual store experience
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979308/security_zhevwq.png'
    }
  ];

  const detailedFeatures = [
    {
      icon: Activity,
      title: "Fast, Clean Storefront",
      description:
        "A new e-commerce website built from scratch with faster pages and a cleaner layout that keeps shoppers focused.",
      details: [
        "Faster loads across key pages",
        "Cleaner product browsing experience",
        "SEO-ready page structure",
        "Optimized assets for smoother scrolling",
        "Built to stay fast as catalog grows",
        "No heavy plugin dependency",
        "Designed for ongoing iteration"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile-first Shopping and Checkout",
      description:
        "A mobile-first flow from product to checkout, designed to reduce friction and support quick purchases.",
      details: [
        "Mobile-first product pages",
        "Clear cart and checkout steps",
        "Reduced form friction where possible",
        "Checkout designed for clarity",
        "Less drop-off on smaller screens",
        "Consistent layout across devices",
        "A smoother path to purchase"
      ]
    },
    {
      icon: Shield,
      title: "Easy to Maintain",
      description:
        "A setup that’s easy to maintain so the business isn’t constantly paying for fixes, updates, or platform headaches.",
      details: [
        "Low maintenance day-to-day operation",
        "Fewer moving parts to break",
        "Cleaner internal workflow for orders",
        "Less time spent troubleshooting",
        "A foundation that supports growth",
        "Avoids heavy platform lock-in",
        "Built for simple updates over time"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment-ready Checkout",
      description:
        "Checkout built to support the current flow today and future payment integrations when needed.",
      details: [
        "Checkout structured for payment upgrades",
        "Supports multiple payment directions",
        "Clear confirmation after order placement",
        "Reduced confusion at the final step",
        "Designed for trust and clarity",
        "Easy to extend without redesign",
        "Built with customer confidence in mind"
      ]
    },
    {
      icon: Bell,
      title: "Order Confirmations and Tracking",
      description:
        "A smoother post-order experience so customers feel confident, and the business has clear records to fulfill quickly.",
      details: [
        "Clear order confirmations",
        "Orders logged consistently",
        "Better visibility for fulfilment",
        "Reduced customer follow-ups",
        "Cleaner internal order records",
        "Easy tracking for the team",
        "Built for simple future upgrades"
      ]
    },
    {
      icon: BarChart3,
      title: "Conversion Tracking and Reporting",
      description:
        "Improved conversion tracking so K2 Traders can understand what’s working and where customers drop off.",
      details: [
        "Clearer reporting on key actions",
        "Better visibility into conversions",
        "Simple performance monitoring",
        "Support for funnel improvements",
        "Data that helps marketing decisions",
        "Easy-to-share reporting views",
        "Built to improve over time"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Requirement Analysis",
      duration: "1 week",
      description:
        "We clarified the product catalog needs, the desired shopping flow, and what success looks like for sales and usability.",
      deliverables: [
        "Requirements and priorities",
        "Store structure and page plan",
        "Tracking needs and baseline setup"
      ]
    },
    {
      phase: "Phase 2: Frontend Development",
      duration: "2 weeks",
      description:
        "We built the storefront with a clean shopping experience and focused on page speed and mobile usability from day one.",
      deliverables: [
        "Product listing pages",
        "Product detail pages and cart flow",
        "Mobile-first checkout layout"
      ]
    },
    {
      phase: "Phase 3: Order and Inventory Workflow",
      duration: "1 week",
      description:
        "We implemented a lightweight workflow to capture orders cleanly and keep the business operations simple.",
      deliverables: [
        "Order capture setup",
        "Inventory/stock workflow support",
        "Admin visibility for daily operations"
      ]
    },
    {
      phase: "Phase 4: Checkout and Confirmation",
      duration: "1 week",
      description:
        "We refined the checkout journey and added a clearer confirmation experience to improve trust and reduce confusion.",
      deliverables: [
        "Checkout flow refinement",
        "Order confirmation experience",
        "Invoice/bill option where applicable"
      ]
    },
    {
      phase: "Phase 5: Testing & Optimization",
      duration: "1 week",
      description:
        "We tested across devices and improved performance and clarity in the places shoppers typically drop off.",
      deliverables: [
        "Cross-device testing",
        "Performance improvements on key pages",
        "UX refinements based on flow review"
      ]
    },
    {
      phase: "Phase 6: Deployment & Handover",
      duration: "1 week",
      description:
        "We launched the store and ensured the team could handle day-to-day use confidently without needing constant support.",
      deliverables: [
        "Production deployment",
        "Admin guidance for order handling",
        "Project handover notes"
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Keeping orders organised without heavy complexity",
      solution:
        "We set up a simple workflow that captures orders cleanly and keeps records consistent for fulfilment and reporting."
    },
    {
      challenge: "Making checkout easier on mobile",
      solution:
        "We designed a mobile-first checkout experience with clearer steps to reduce confusion and drop-offs."
    },
    {
      challenge: "Understanding what’s working and what isn’t",
      solution:
        "We improved tracking and reporting so the business can see performance on key actions and iterate confidently."
    }
  ];

  return (
    <>
      <Helmet>
        {/* ✅ Basic SEO Meta */}
        <title>K2 Traders Case Study | E-Commerce Website Built from Scratch</title>
        <meta
          name="description"
          content="See how ShiftDeploy built K2 Traders a new e-commerce website from scratch with faster pages, a mobile-first checkout flow, and improved conversion tracking."
        />
        <meta
          name="keywords"
          content="K2 Traders case study, e-commerce website, mobile-first checkout, website speed, conversion tracking, ShiftDeploy"
        />

        {/* ✅ Open Graph / Social Preview */}
        <meta property="og:title" content="K2 Traders Case Study | E-Commerce Website Built from Scratch" />
        <meta
          property="og:description"
          content="See how ShiftDeploy built K2 Traders a new e-commerce website from scratch with faster pages, a mobile-first checkout flow, and improved conversion tracking."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.shiftdeploy.com/CaseStudies/K2TradersCase" />
        <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="K2 Traders Case Study | E-Commerce Website Built from Scratch" />
        <meta
          name="twitter:description"
          content="See how ShiftDeploy built K2 Traders a new e-commerce website from scratch with faster pages, a mobile-first checkout flow, and improved conversion tracking."
        />
        <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
      </Helmet>

      <Navigation isDarkBg={true} />

      {showLoader ? (
        <ShiftDeployLoader />
      ) : (
        <div className="bg-gray-50 min-h-screen">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primaryBlue to-toBlue overflow-hidden flex items-center py-20 sm:py-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)`,
                  backgroundSize: "100px 100px",
                }}
              ></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-20 pt-28 sm:pt-32 md:pt-32">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-primaryOrange backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                >
                  <span className="text-white font-semibold text-xs sm:text-lg">
                    Detailed Case Study - K2 Traders
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                >
                  A new e-commerce site{" "}
                  <span className="text-primaryOrange">built from scratch</span>
                  <br />
                  with speed and clarity
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                  ShiftDeploy built{" "}
                  <span className="text-primaryOrange font-semibold">K2 Traders</span>{" "}
                  a fresh storefront with faster pages, a mobile-first checkout flow,
                  and better conversion tracking that supports smarter decisions.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="pt-10 sm:pt-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
                  Project Overview
                </h2>
                <p className="sm:text-xl text-gray-700 leading-relaxed p-2">
                  ShiftDeploy partnered with{" "}
                  <span className="font-semibold text-primaryOrange">K2 Traders</span> to build
                  a new e-commerce website from scratch. The focus was simple: faster pages,
                  a cleaner shopping journey on mobile, and tracking that helps the business
                  understand what’s driving sales.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-8 sm:mb-16 p-2">
                {/* Project Scope */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">
                    Project Scope
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Built a new e-commerce website from scratch
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Cleaner shopping flow from product to checkout
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Faster page loads on key pages
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Mobile-first shopping and checkout experience
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Improved conversion tracking and reporting
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        3 weeks
                      </div>
                      <div className="text-gray-600">Build Window</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        4 phases
                      </div>
                      <div className="text-gray-600">Milestones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        Focus
                      </div>
                      <div className="text-gray-600">Speed + UX</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        Built
                      </div>
                      <div className="text-gray-600">to Iterate</div>
                    </div>
                  </div>
                </div>

                {/* Key Statistics Graphic Placeholder */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">
                    Key Statistics
                  </h3>
                  <div
                    style={{
                      backgroundImage: `url('https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979448/keystatic_ccac5h.png')`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'left',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className="image-placeholder w-full h-52 sm:h-64 mb-6 flex items-center justify-center text-gray-500"
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-8">
                  Behind the Build
                </h2>
                <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  The setup was chosen to keep the site fast and easy to maintain. The priority
                  wasn’t complexity. It was a smoother shopping flow, quicker pages, and tracking
                  that helps K2 Traders make better decisions.
                </p>
              </motion.div>

              <div className="space-y-16">
                {techDetails.map((category, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-8">
                      <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-primaryBlue rounded-xl flex items-center justify-center">
                        <category.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue">
                        {category.category}
                      </h3>
                    </div>

                    <div
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: `${category.size || 'cover'}`,
                        backgroundPosition: 'center',
                      }}
                      className="image-placeholder w-full h-32 sm:h-60 md:h-80 rounded-xl mb-6 flex items-center justify-center text-gray-500"
                    ></div>

                    <div className="space-y-6">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="border-l-4 border-orange-500 pl-6">
                          <h4 className="sm:text-xl font-semibold text-primaryBlue mb-3">
                            {tech.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Features */}
          <section className="py-10 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-8">
                  Feature Deep Dive
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Here’s what was improved to support better shopping, smoother checkout,
                  and clearer performance reporting.
                </p>
              </motion.div>

              <div className="space-y-10 sm:space-y-16">
                {detailedFeatures.map((feature, index) => (
                  <div key={index} className="bg-white shadow-md rounded-2xl p-6 sm:p-8">
                    <div className="flex items-start sm:space-x-6">
                      <div className="w-10 sm:w-12 md:w-16 h-10 md:h-16 sm:h-12 bg-primaryBlue rounded-2xl sm:flex items-center justify-center flex-shrink-0 hidden">
                        <feature.icon className="w-5 sm:w-8 h-5 sm:h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue mb-4">
                          {feature.title}
                        </h3>
                        <p className="sm:text-xl text-gray-600 mb-6 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          {feature.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                              <p className="text-sm sm:text-md text-gray-700">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="py-10 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-8">
                  Implementation Timeline
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A simple delivery process that kept speed, UX, and tracking aligned through every step.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {implementationPhases.map((phase, index) => (
                  <>
                    {index == 5 ? (
                      <div className="bg-primaryBlue rounded-2xl p-6 sm:p-10 shadow-xl text-left text-white space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                          Ongoing Improvements (Optional)
                        </h2>
                        <p className="md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                          After launch, we can continue improving speed, UX, and tracking as real usage data
                          comes in, so the store gets better month by month.
                        </p>
                        <Link
                          to="/ContactUs"
                          className="inline-flex items-center px-4 sm:px-8 py-4 rounded-xl font-semibold bg-primaryOrange hover:bg-toOrange text-white sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          <span>Talk About Improvements</span>
                          <ArrowRight className="w-6 h-6 ml-2" />
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-6 bg-white rounded-2xl p-6 sm:p-8 shadow-md sm:hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-center">
                          <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primaryOrange rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <span className="text-primaryOrange font-semibold text-lg">{phase.duration}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue">
                              {phase.phase}
                            </h3>
                          </div>
                          <p className="sm:text-xl text-gray-600 mb-6">{phase.description}</p>

                          <div className="space-y-2">
                            <h4 className="text-lg font-semibold text-primaryBlue mb-3">Key Deliverables:</h4>
                            {phase.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mt-0.5 flex-shrink-0" />
                                <p className="text-sm sm:text-md text-gray-700">{deliverable}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="py-10 sm:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
                  Challenges & Solutions
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  The goal was practical: reduce friction in shopping, keep the store easy to run, and
                  improve visibility into what’s driving conversions.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {challenges.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-md"
                  >
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <AlertTriangle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange" />
                          <h3 className="text-lg sm:text-xl font-bold text-primaryBlue">Challenge</h3>
                        </div>
                        <p className="text-gray-700 sm:text-lg leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryBlue" />
                          <h3 className="text-lg sm:text-xl font-bold text-primaryBlue">Solution</h3>
                        </div>
                        <p className="text-gray-700 sm:text-lg leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="py-20 bg-primaryBlue">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                  Results & Impact
                </h2>
                <p className="sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  The result was a new store that’s faster where it matters, simpler on mobile, and
                  easier to track and improve over time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { metric: "Faster", label: "page loads on key pages", icon: Zap },
                  { metric: "Mobile-first", label: "shopping and checkout flow", icon: Smartphone },
                  { metric: "Clearer", label: "shopping journey and navigation", icon: TrendingUp },
                  { metric: "Better", label: "conversion tracking and reporting", icon: BarChart3 }
                ].map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center bg-slate-700/50 rounded-2xl p-6"
                  >
                    <div className="w-16 h-16 bg-primaryOrange rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <result.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{result.metric}</div>
                    <div className="text-gray-300">{result.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-slate-700/50 rounded-2xl p-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Business Impact</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For K2 Traders</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          A fresh website foundation that’s easy to maintain and improve
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Better visibility into conversion performance and customer drop-offs
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          A store that can evolve without needing a full rebuild
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Customers</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Faster browsing on key pages, especially on mobile
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Cleaner shopping flow from product to checkout
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          A checkout experience that feels simpler and easier to complete
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-10 sm:py-20 bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="sm:p-12 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                Want a store that’s faster and easier to grow?
              </h2>
              <p className="sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                If your current store feels slow, confusing on mobile, or hard to maintain, we can help.
                We build clean foundations and improve the shopping flow so your website becomes a real
                growth tool, not a constant headache.
              </p>

              <div className="flex justify-center items-center sm:flex-row flex-col gap-6 w-full">
                <Link
                  to={"/ContactUs"}
                  className="bg-primaryOrange hover:bg-toOrange text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg sm:shadow-lg transition-all duration-300 w-fit"
                >
                  <span>Request a Quick Audit</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  to={"/missions"}
                  className="bg-white sm:hover:bg-primaryBlue text-primaryBlue sm:hover:text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg sm:shadow-lg transition-all duration-300 w-fit border border-primaryBlue"
                >
                  <span>View More Projects</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
};

export default K2TradersCase;
