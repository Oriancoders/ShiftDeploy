import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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
  Wifi,
  Server,
  Monitor,
  BarChart3,
  Cpu,
  Activity
} from 'lucide-react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
// importing images here

import { Helmet } from 'react-helmet-async';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

const SlackerIOT = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  // ✅ Rewritten to business outcome language (structure unchanged)
  // ✅ Aligned with card copy:
  // description: "Built an end-to-end EV charging platform from scratch, including the customer dashboard, admin controls, and billing flows."
  // results:
  // - "Live device status and session tracking"
  // - "Automated billing and payment capture"
  // - "Admin dashboard for monitoring and control"
  const techDetails = [
    {
      category: "Charging Hardware",
      icon: Cpu,
      technologies: [
        {
          name: "Charger Control Unit",
          description:
            "We enabled the charger to report status reliably so the business can see what’s happening on-site without manual checks."
        },
        {
          name: "Safety & Measurement Sensors",
          description:
            "Built-in monitoring helps keep sessions stable and supports accurate session reporting for billing and support."
        },
        {
          name: "Operational Health Monitoring",
          description:
            "Key conditions are tracked so issues can be spotted early and chargers can stay available more consistently."
        }
      ],
      // TODO: Consider replacing with a real charger/field photo or an actual product UI screenshot for authenticity
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979458/bannertry1_vyytu5.png'
    },
    {
      category: "Real-time Communication",
      icon: Wifi,
      technologies: [
        {
          name: "Live Device Updates",
          description:
            "Stations send live status updates so operators and customers can track sessions without delays."
        },
        {
          name: "Reliable Message Delivery",
          description:
            "We used a robust messaging layer to keep device communication consistent—even when networks fluctuate."
        },
        {
          name: "Instant Dashboard Refresh",
          description:
            "Dashboards update in real time so teams can act quickly when devices start, stop, or report issues."
        }
      ],
      // TODO: Replace with real “device status live” UI screenshots (blur device IDs if needed)
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979310/esp32_nkvzfi.png'
    },
    {
      category: "Platform Backend",
      icon: Server,
      technologies: [
        {
          name: "Session & User Management",
          description:
            "We built the logic to manage customers, sessions, and charger activity so the platform works end-to-end."
        },
        {
          name: "Billing & Transaction Records",
          description:
            "Charging activity and payment records are stored cleanly so support and reporting stay reliable."
        },
        {
          name: "APIs for Dashboard + Admin",
          description:
            "The backend powers both the customer experience and admin controls from a single source of truth."
        }
      ],
      // TODO: Replace with a real admin overview screenshot (blur sensitive values)
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979379/backend_q5d5v9.png'
    },
    {
      category: "Customer + Admin Dashboards",
      icon: Monitor,
      technologies: [
        {
          name: "Customer Dashboard",
          description:
            "Customers can view live device status, session progress, and charging history in one simple place."
        },
        {
          name: "Admin Controls",
          description:
            "Admins can monitor chargers, review sessions, and take action quickly without digging through logs."
        },
        {
          name: "Real-time Views",
          description:
            "Live updates reduce support load and help teams respond faster when a device needs attention."
        }
      ],
      // TODO: Replace with actual dashboard screenshots (this will feel more real than generic UI images)
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979388/frontend_bwsf2d.png',
      size: '90%'
    },
    {
      category: "Billing & Access Control",
      icon: CreditCard,
      technologies: [
        {
          name: "Automated Billing",
          description:
            "Charging sessions trigger billing automatically so payments are captured consistently and on time."
        },
        {
          name: "Secure Customer Access",
          description:
            "Users sign in securely so personal data and session history are protected."
        },
        {
          name: "Admin Roles & Permissions",
          description:
            "The platform supports different admin roles so teams can operate safely with the right access levels."
        }
      ],
      // TODO: Replace with a checkout/payment confirmation UI screenshot or billing history screen
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979517/payment_oasj8l.png'
    }
  ];

  const detailedFeatures = [
    {
      icon: Activity,
      title: "Live Device Status & Session Tracking",
      description:
        "Operators and customers can see charger status and active sessions in real time—no guessing, no waiting.",
      details: [
        "Live session status updates",
        "Start/stop session visibility",
        "Charging progress tracking",
        "Session history for reference",
        "Basic health signals for reliability",
        "Reduced manual checks for operators",
        "More clarity for customer support"
      ]
    },
    {
      icon: Smartphone,
      title: "Customer Dashboard Experience",
      description:
        "A clear customer dashboard that makes it easy to understand charging sessions, status, and past activity.",
      details: [
        "Mobile-friendly dashboard design",
        "Session overview and history",
        "Clear status indicators",
        "Simple navigation and layout",
        "Designed to reduce confusion",
        "Built for everyday use",
        "Ready for future feature upgrades"
      ]
    },
    {
      icon: Shield,
      title: "Platform Safety & Reliability",
      description:
        "Designed to keep chargers stable and reduce downtime by tracking key operational signals.",
      details: [
        "Operational monitoring signals",
        "Safer session handling",
        "Reduced risk of inconsistent states",
        "Clearer visibility for troubleshooting",
        "Better uptime through monitoring",
        "More reliable session records",
        "Built with scalability in mind"
      ]
    },
    {
      icon: CreditCard,
      title: "Automated Billing & Payment Capture",
      description:
        "Billing and payment capture flows integrated directly into the platform to reduce manual work and missed payments.",
      details: [
        "Automated billing based on sessions",
        "Payment capture workflow",
        "Clear transaction history",
        "Reduced manual invoicing effort",
        "Cleaner records for reconciliation",
        "Supports refunds/disputes later if needed",
        "Built for expansion to new pricing models"
      ]
    },
    {
      icon: Bell,
      title: "Operational Alerts & Visibility",
      description:
        "Notifications and visibility features that help teams respond quickly when chargers need attention.",
      details: [
        "Session event visibility",
        "Issue signals surfaced to admins",
        "Reduced support response time",
        "Clearer operator awareness",
        "Helps prevent small issues escalating",
        "Built to expand notification channels",
        "Improves day-to-day operations"
      ]
    },
    {
      icon: BarChart3,
      title: "Admin Monitoring & Control",
      description:
        "An admin dashboard built for monitoring and control—so operators can manage chargers confidently.",
      details: [
        "Admin overview of charger activity",
        "Session monitoring and review",
        "Faster operational decision-making",
        "Cleaner device visibility by location/station",
        "Supports operational reporting",
        "Reduces reliance on manual logs",
        "Built for scalable fleet management"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Device + Platform Foundations",
      duration: "2 weeks",
      description:
        "Set up the device communication basics and established the platform foundation for tracking sessions reliably.",
      deliverables: [
        "Device communication baseline",
        "Initial session tracking flow",
        "Operational safety handling"
      ]
    },
    {
      phase: "Phase 2: Core Platform Backend",
      duration: "3 weeks",
      description:
        "Built the backend that supports customer accounts, session logging, and platform operations.",
      deliverables: [
        "Backend APIs for sessions and users",
        "Reliable session record storage",
        "Secure access foundation"
      ]
    },
    {
      phase: "Phase 3: Customer + Admin Dashboards",
      duration: "2 weeks",
      description:
        "Built dashboards for customers and admins with live session visibility and operational controls.",
      deliverables: [
        "Customer dashboard",
        "Admin dashboard",
        "Real-time session views"
      ]
    },
    {
      phase: "Phase 4: Billing & Payments",
      duration: "1 week",
      description:
        "Implemented billing workflows and payment capture so sessions can be monetized without manual work.",
      deliverables: [
        "Billing logic integration",
        "Payment capture flow",
        "Transaction history view"
      ]
    },
    {
      phase: "Phase 5: Testing & Launch",
      duration: "1 week",
      description:
        "Tested end-to-end flows and stabilized performance for real-world usage.",
      deliverables: [
        "End-to-end testing",
        "Stability and performance checks",
        "Launch readiness"
      ]
    },
    {
      phase: "Phase 6: Post-Launch Improvements",
      duration: "Ongoing",
      description:
        "After launch, we can improve monitoring, reporting, and operational controls based on real usage patterns.",
      deliverables: [
        "Continuous improvements",
        "New dashboard enhancements",
        "Operational and reporting upgrades"
      ]
    }
  ];

  const challenges = [
    {
      challenge: "Keeping device updates reliable in real time",
      solution:
        "We implemented a real-time communication layer so device status and session updates stay consistent, even with unstable networks."
    },
    {
      challenge: "Turning charging activity into clean billing",
      solution:
        "We designed session logging and billing flows together so payments can be captured automatically with reliable records."
    },
    {
      challenge: "Giving operators a clear admin view",
      solution:
        "We built an admin dashboard focused on monitoring and control, reducing reliance on manual device checks and scattered logs."
    },
    {
      challenge: "Protecting platform access and sensitive data",
      solution:
        "We added secure access and role-based permissions so customers and admins only see what they’re supposed to."
    }
  ];

  return (
    <>
      <Helmet>
        {/* ✅ Basic SEO Meta */}
        <title>Slacker IoT Case Study | EV Charging Platform Built End-to-End</title>
        <meta
          name="description"
          content="See how ShiftDeploy built an end-to-end EV charging platform for Slacker IoT, including the customer dashboard, admin controls, and automated billing flows."
        />
        <meta
          name="keywords"
          content="Slacker IoT, EV charging platform, charging dashboard, admin monitoring, automated billing, ShiftDeploy case study"
        />

        {/* ✅ Open Graph / Social Preview */}
        <meta
          property="og:title"
          content="Slacker IoT Case Study | EV Charging Platform Built End-to-End"
        />
        <meta
          property="og:description"
          content="See how ShiftDeploy built an end-to-end EV charging platform for Slacker IoT, including the customer dashboard, admin controls, and automated billing flows."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.shiftdeploy.com/CaseStudies/SlackerIOT" />
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Slacker IoT Case Study | EV Charging Platform Built End-to-End"
        />
        <meta
          name="twitter:description"
          content="See how ShiftDeploy built an end-to-end EV charging platform with live device tracking, automated billing, and admin monitoring."
        />
        {/* <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>

      {showLoader ? (
        <ShiftDeployLoader />
      ) : (
        <div className='bg-gray-50 w-full'>
          <Navigation isDarkBg={true} />

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
                    Detailed Case Study - Slacker IoT
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                >
                  An end-to-end{" "}
                  <span className="text-primaryOrange">EV charging platform</span>
                  <br />
                  built from scratch
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                  ShiftDeploy built Slacker IoT a complete EV charging platform,covering
                  the customer dashboard, admin monitoring and control, and automated billing flows.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="pt-10 sm:pt-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                  Project Overview
                </h2>
                <p className="sm:text-xl text-gray-700 leading-relaxed p-2">
                  ShiftDeploy partnered with Slacker IoT to build an end-to-end EV charging platform from scratch.
                  The focus was practical: live device status and session tracking, automated billing and payment capture,
                  and a clear admin dashboard for monitoring and control.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-20 p-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">
                    Project Scope
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Built an end-to-end platform from device to dashboard
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Live device status and session tracking
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Admin dashboard for monitoring and control
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Automated billing and payment capture
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Customer dashboard for session visibility and history
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        9 weeks
                      </div>
                      <div className="text-gray-600">Delivery Window</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        5 phases
                      </div>
                      <div className="text-gray-600">Milestones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        Live
                      </div>
                      <div className="text-gray-600">Tracking</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        Built
                      </div>
                      <div className="text-gray-600">to Scale</div>
                    </div>
                  </div>
                </div>

                <div className="h-fit">
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">
                    Key Statistics
                  </h3>
                  <div
                    style={{
                      backgroundImage: `url('https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979478/key_stats_u8ych3.png')`,
                      backgroundSize: 'cover',
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                  Behind the Platform
                </h2>
                <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  The platform was designed to keep charger status visible in real time, simplify operations for admins,
                  and automate billing so the business can scale with less manual work.
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
                          <h4 className="sm:text-xl font-semibold text-primaryBlue mb-3">{tech.name}</h4>
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
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                  Feature Deep Dive
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Each feature was built to make operations smoother for admins and the experience clearer for customers.
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
                        <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue mb-4">{feature.title}</h3>
                        <p className="sm:text-xl text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

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
          <section className="py-20 bg-gray-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                Implementation Timeline
              </h2>
              <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A structured delivery approach to ship a full platform—from devices to dashboards and billing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {implementationPhases.map((phase, index) => (
                <>
                  {index == 5 ? (
                    <div className="bg-primaryBlue rounded-2xl p-6 sm:p-10 shadow-xl text-left text-white space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Ongoing Platform Improvements (Optional)
                      </h2>
                      <p className="md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        After launch, we can improve reporting, monitoring, and admin controls based on real usage and support needs.
                      </p>
                      <Link
                        to="/ContactUs"
                        className="inline-flex items-center px-4 sm:px-8 py-4 rounded-xl font-semibold bg-primaryOrange hover:bg-toOrange text-white sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <span>Talk About Next Steps</span>
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
                          <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue">{phase.phase}</h3>
                        </div>
                        <p className="sm:text-xl text-gray-600 mb-6">{phase.description}</p>

                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold text-primaryBlue mb-3">Key Deliverables:</h4>
                          {phase.deliverables?.map((deliverable, deliverableIndex) => (
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
          </section>

          {/* Challenges & Solutions */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                  Challenges & Solutions
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Real-time platforms need clarity, reliability, and simple operations—here’s how we made that happen.
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
                    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-md ${index === 0 || index === 3 ? 'lg:col-span-2' : ''}`}
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
                  Results & Impact
                </h2>
                <p className="sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Slacker IoT launched with a full platform that keeps device activity visible, billing automated,
                  and operations manageable through an admin dashboard.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { metric: "Live", label: "device status + session tracking", icon: Activity },
                  { metric: "Automated", label: "billing + payment capture", icon: CreditCard },
                  { metric: "Admin", label: "monitoring and control dashboard", icon: Monitor },
                  { metric: "Always-on", label: "operational visibility", icon: Shield }
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
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Slacker IoT</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Centralized admin dashboard for monitoring and control
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Automated billing and payment capture to reduce manual effort
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Live visibility into sessions for faster support and operations
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">For End Users</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Live session tracking and clear charging status
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          Transparent billing experience through automated payment flows
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-md text-gray-300">
                          A smoother dashboard experience for checking session history
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="sm:p-12 text-center"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                  Building an EV or IoT Platform?
                </h2>
                <p className="sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  If you need real-time device tracking, admin control, and automated billing flows, we can help you ship a platform that’s built to scale.
                </p>
                <div className='flex justify-center items-center sm:flex-row flex-col gap-6 w-full'>
                  <Link
                    to={"/ContactUs"}
                    className="bg-primaryOrange hover:bg-toOrange text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg sm:shadow-lg transition-all duration-300 w-fit"
                  >
                    <span>Plan Your Platform</span>
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
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default SlackerIOT;
