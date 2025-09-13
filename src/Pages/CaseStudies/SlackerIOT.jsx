import React, { useEffect, useRef } from 'react';
import { m, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  AlertTriangle,
  Target,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Smartphone,
  CreditCard,
  Bell,
  Wifi,
  Server,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Monitor,
  Settings,
  Users,
  BarChart3,
  Lock,
  Globe,
  Cpu,
  Activity
} from 'lucide-react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
// importing images here 
import bannertry1 from '../../Assets/Images/casestudies/evImage/bannertry1.png'
import key_stats from '../../Assets/Images/casestudies/evImage/key_stats.png'
import backend from '../../Assets/Images/casestudies/evImage/backend.png'
import frontend from '../../Assets/Images/casestudies/evImage/frontend.png'
import payment from '../../Assets/Images/casestudies/evImage/payment.png'
import esp32 from '../../Assets/Images/casestudies/evImage/esp32.png'



const SlackerIOT = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // useEffect(() => {
  //       window.scrollTo({ top: 0, behavior: 'smooth' });
  //     }, []);
  const techDetails = [
    {
      category: "Hardware & IoT",
      icon: Cpu,
      technologies: [
        {
          name: "ESP32 Microcontroller",
          description: "32-bit dual-core processor with built-in Wi-Fi and Bluetooth capabilities, perfect for IoT applications requiring real-time data processing and wireless connectivity."
        },
        {
          name: "Current & Voltage Sensors",
          description: "High-precision sensors for monitoring electrical parameters in real-time, ensuring safe charging operations and accurate billing calculations."
        },
        {
          name: "Temperature Monitoring",
          description: "Thermal sensors integrated throughout the charging system to prevent overheating and ensure optimal performance under various environmental conditions."
        }
      ],
      image: bannertry1,

    },
    {
      category: "Communication Protocol",
      icon: Wifi,
      technologies: [
        {
          name: "MQTT Protocol",
          description: "Lightweight messaging protocol ideal for IoT devices, enabling efficient real-time communication between charging stations and the cloud backend with minimal bandwidth usage."
        },
        {
          name: "HiveMQ Cloud",
          description: "Enterprise-grade MQTT broker providing reliable message delivery, scalability, and security features essential for mission-critical IoT applications."
        },
        {
          name: "WebSocket Integration",
          description: "Real-time bidirectional communication enabling instant updates between the web dashboard and charging stations without polling delays."
        }
      ],
      image: esp32

    },
    {
      category: "Backend Infrastructure",
      icon: Server,
      technologies: [
        {
          name: "Spring Boot Framework",
          description: "Robust Java-based framework providing enterprise-level security, scalability, and maintainability for handling complex business logic and API management."
        },
        {
          name: "MongoDB Database",
          description: "NoSQL database optimized for handling large volumes of time-series data from IoT devices, user management, and transaction records with high performance."
        },
        {
          name: "RESTful API Design",
          description: "Well-structured API endpoints following REST principles, enabling seamless integration with frontend applications and third-party services."
        }
      ],
      image: backend

    },
    {
      category: "Frontend & User Interface",
      icon: Monitor,
      technologies: [
        {
          name: "React.js Framework",
          description: "Modern JavaScript library for building responsive, interactive user interfaces with component-based architecture for better maintainability and reusability."
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework enabling rapid UI development with consistent design patterns and responsive layouts across all device types."
        },
        {
          name: "Real-time Dashboard",
          description: "Live monitoring interface displaying charging status, energy consumption, user activity, and system health metrics with automatic updates."
        }
      ],
      image: frontend,
      size: '90%'


    },
    {
      category: "Payment & Security",
      icon: CreditCard,
      technologies: [
        {
          name: "Stripe Payment Gateway",
          description: "Industry-leading payment processor handling secure transactions, automated billing, invoice generation, and compliance with financial regulations."
        },
        {
          name: "JWT Authentication",
          description: "Secure token-based authentication system ensuring user data protection and authorized access to charging stations and administrative functions."
        },
        {
          name: "Role-based Access Control",
          description: "Granular permission system allowing different access levels for administrators, operators, and end-users with comprehensive audit trails."
        }
      ],
      image: payment,

    }
  ];

  const detailedFeatures = [
    {
      icon: Activity,
      title: "Real-Time Telemetry System",
      description: "Our advanced telemetry system continuously monitors and transmits critical charging parameters in real-time.",
      details: [
        "Voltage monitoring with 0.1V precision accuracy",
        "Current measurement up to 32A with safety cutoffs",
        "Temperature tracking across multiple sensor points",
        "Power consumption calculations and energy efficiency metrics",
        "Automatic data logging every 5 seconds",
        "Historical data analysis and trend reporting",
        "Predictive maintenance alerts based on usage patterns"
      ]
    },
    {
      icon: Smartphone,
      title: "Remote Control & Management",
      description: "Complete remote control capabilities allowing users and administrators to manage charging sessions from anywhere.",
      details: [
        "Start/stop charging sessions remotely via web dashboard",
        "Schedule charging sessions for optimal energy rates",
        "Set charging limits and time restrictions",
        "Emergency stop functionality with instant response",
        "User authentication and session management",
        "Multi-device support across web and mobile platforms",
        "Offline mode with automatic sync when reconnected"
      ]
    },
    {
      icon: Shield,
      title: "Advanced Security Framework",
      description: "Enterprise-grade security measures protecting both the IoT devices and user data throughout the entire system.",
      details: [
        "End-to-end encryption for all data transmission",
        "Secure device authentication and certificate management",
        "Regular security audits and vulnerability assessments",
        "GDPR compliant data handling and storage",
        "Multi-factor authentication for administrative access",
        "Intrusion detection and automated threat response",
        "Secure firmware updates with rollback capabilities"
      ]
    },
    {
      icon: CreditCard,
      title: "Integrated Payment Processing",
      description: "Seamless payment integration handling all aspects of charging session billing and financial transactions.",
      details: [
        "Automatic billing based on energy consumption",
        "Multiple payment methods including cards and digital wallets",
        "Real-time payment processing with instant confirmation",
        "Automated invoice generation and email delivery",
        "Subscription management for regular users",
        "Detailed transaction history and reporting",
        "Refund processing and dispute management"
      ]
    },
    {
      icon: Bell,
      title: "Intelligent Notification System",
      description: "Smart alert system keeping users and administrators informed about charging status and system health.",
      details: [
        "Real-time charging status notifications",
        "Abnormal condition alerts (overheating, power fluctuations)",
        "Maintenance reminders and service notifications",
        "Low battery warnings and charging completion alerts",
        "System downtime notifications with estimated resolution time",
        "Custom notification preferences and delivery methods",
        "Integration with email, SMS, and push notification services"
      ]
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics Dashboard",
      description: "Powerful analytics platform providing insights into usage patterns, performance metrics, and business intelligence.",
      details: [
        "Real-time usage statistics and performance metrics",
        "Energy consumption analysis and cost optimization",
        "User behavior patterns and peak usage identification",
        "Revenue tracking and financial reporting",
        "Predictive analytics for capacity planning",
        "Custom report generation with data export capabilities",
        "Integration with business intelligence tools"
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Hardware Integration",
      duration: "2 weeks",
      description: "ESP32 firmware development and sensor integration",
      deliverables: ["Custom firmware with MQTT communication", "Sensor calibration and testing", "Hardware safety protocols"]
    },
    {
      phase: "Phase 2: Backend Development",
      duration: "3 weeks",
      description: "Spring Boot API and database architecture",
      deliverables: ["RESTful API endpoints", "MongoDB schema design", "Authentication system"]
    },
    {
      phase: "Phase 3: Frontend Dashboard",
      duration: "2 weeks",
      description: "React-based user interface and admin panel",
      deliverables: ["Responsive web dashboard", "Real-time data visualization", "User management interface"]
    },
    {
      phase: "Phase 4: Payment Integration",
      duration: "1 week",
      description: "Stripe payment processing and billing system",
      deliverables: ["Payment gateway integration", "Automated billing system", "Invoice generation"]
    },
    {
      phase: "Phase 5: Testing & Deployment",
      duration: "1 week",
      description: "System testing and production deployment",
      deliverables: ["End-to-end testing", "Performance optimization", "Production deployment"]
    },
    {
      phase: "phase 6"
    }
  ];

  const challenges = [
    {
      challenge: "Real-time Data Synchronization",
      solution: "Implemented MQTT protocol with HiveMQ Cloud for reliable, low-latency communication between IoT devices and backend systems."
    },
    {
      challenge: "Scalable Architecture Design",
      solution: "Designed microservices architecture using Spring Boot with MongoDB for horizontal scaling and high availability."
    },
    {
      challenge: "Security & Compliance",
      solution: "Implemented end-to-end encryption, JWT authentication, and GDPR-compliant data handling practices."
    },
    {
      challenge: "Payment Processing Integration",
      solution: "Integrated Stripe payment gateway with automated billing, invoice generation, and secure transaction processing."
    }
  ];

  return (
    <div className='bg-gray-50 w-full'>
      <Navigation isDarkBg={true} />


      {/* Hero Section */}
      <section className="relative  bg-gradient-to-br from-primaryBlue to-toBlue overflow-hidden flex items-center">
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primaryOrange rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondaryBlue rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-20 pt-28 sm:pt-32  md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primaryOrange backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <span className="text-white font-semibold text-xs sm:text-lg">Detailed Case Study - Slacker IOT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Smart EV Charger{" "}
              <span className="text-primaryOrange">
                IoT Platform
              </span>
              <br />
              Deep Dive Analysis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-2xl  text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              A comprehensive technical breakdown of the full-stack IoT solution developed for{" "}
              <span className="text-primaryOrange font-semibold">Slacker IoT</span>{" "}
              by ShiftDeploy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="pb-20 pt-20  bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
              Project Overview
            </h2>
            <p className="sm:text-xl text-gray-700 leading-relaxed p-2">
              ShiftDeploy was tasked with developing a comprehensive IoT platform for Slacker IoT,
              enabling smart EV charging with real-time monitoring, remote control capabilities,
              and integrated payment processing. This project required expertise across embedded
              systems, cloud infrastructure, web development, and payment integration.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16  mb-20 p-2">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">Project Scope</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Full-stack IoT platform development from hardware to user interface</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Real-time telemetry system with MQTT communication protocol</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Secure cloud backend with scalable database architecture</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Payment processing integration with automated billing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">Responsive web dashboard with real-time monitoring</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">9 weeks</div>
                  <div className="text-gray-600">Development Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">5 phases</div>
                  <div className="text-gray-600">Implementation</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">99.9%</div>
                  <div className="text-gray-600">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">24/7</div>
                  <div className="text-gray-600">Monitoring</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-fit "
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">Key Statistics</h3>


              <div style={{
                backgroundImage: `url(${key_stats})`,
                backgroundSize: 'contain',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
              }} className="image-placeholder w-full h-52 sm:h-64 mb-6 flex items-center justify-center text-gray-500">

              </div>

            </motion.div>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
              Technical Architecture Deep Dive
            </h2>
            <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our solution leverages cutting-edge technologies across the entire stack,
              from embedded hardware to cloud infrastructure and user interfaces.
            </p>
          </motion.div>

          <div className="space-y-16">
            {techDetails.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg"
              >
                {/* Image Placeholder */}

                <div className="flex items-center space-x-4 mb-4 sm:mb-8">
                  <div className="w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-primaryBlue rounded-xl flex items-center justify-center">
                    <category.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-primaryBlue">{category.category}</h3>
                </div>

                <div style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: `${category.size || 'cover'}`,
                  backgroundPosition: 'center',
                }} className="image-placeholder w-full h-32 sm:h-60 md:h-80  rounded-xl mb-6 flex items-center justify-center text-gray-500">

                </div>

                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border-l-4 border-orange-500 pl-6">
                      <h4 className="sm:text-xl font-semibold text-primaryBlue mb-3">{tech.name}</h4>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              Feature Deep Dive
            </h2>
            <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Each feature was carefully designed and implemented to provide maximum value
              and reliability for both end-users and system administrators.
            </p>
          </motion.div>

          <div className="space-y-10 sm:space-y-16">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white shadow-md rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start sm:space-x-6">

                  <div className="w-10 sm:w-12 md:w-16 h-10 md:h-16 sm:h-12 bg-primaryBlue rounded-2xl sm:flex items-center justify-center flex-shrink-0  hidden">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50 max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
            Implementation Timeline
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our structured approach ensured timely delivery while maintaining high quality
            standards throughout the development process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {implementationPhases.map((phase, index) => (
            <>
              {index == 5 ? (
                <div className="bg-primaryBlue rounded-2xl p-6 sm:p-10 shadow-xl text-left text-white space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Ongoing Store Maintenance & Support
                  </h2>
                  <p className=" md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    Keep your eCommerce platform fast, secure, and up to date with continuous
                    monitoring, bug fixes, and feature enhancements. Focus on growth while
                    we handle the maintenance.
                  </p>
                  <Link
                    to="/ContactUs"
                    className="inline-flex items-center px-4 sm:px-8 py-4 rounded-xl font-semibold bg-primaryOrange hover:bg-toOrange text-white sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <span>Let’s Maintain Your Store</span>
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Link>
                </div>

              ) : (

                <div className="space-y-6 bg-white rounded-2xl p-6 sm:p-8 shadow-md sm:hover:shadow-xl transition-all duration-300">
                  <div className='flex justify-between items-center'>
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


      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
              Challenges & Solutions
            </h2>
            <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every complex project presents unique challenges. Here's how we overcame
              the key technical and business obstacles during development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
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
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Image Placeholder for Results Graphic */}
            <div className="image-placeholder w-full h-64 bg-gray-200/30 rounded-xl mb-10 flex items-center justify-center text-white">
              Results Infographic
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Results & Impact
            </h2>
            <p className="sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The delivered solution exceeded expectations, providing Slacker IoT with a
              robust, scalable platform that supports their business growth and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { metric: "99.9%", label: "System Uptime", icon: TrendingUp },
              { metric: "< 100ms", label: "Response Time", icon: Zap },
              { metric: "100%", label: "Payment Success", icon: CreditCard },
              { metric: "24/7", label: "Monitoring", icon: Shield }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-700/50 rounded-2xl p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Business Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Slacker IoT</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Reduced operational costs by 40% through automation</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Increased customer satisfaction with real-time monitoring</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Scalable platform supporting business growth</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">For End Users</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Seamless charging experience with mobile control</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Transparent billing and automated payments</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm sm:text-md text-gray-300">Real-time charging status and notifications</p>
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
            transition={{ duration: 0.8 }}
            className=" sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
              Ready to Build Your IoT Platform?
            </h2>
            <p className="sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let ShiftDeploy transform your IoT vision into reality. Our team of experts
              specializes in building scalable, secure, and innovative IoT solutions that
              drive business growth and customer satisfaction.
            </p>
            <div className='flex justify-center items-center sm:flex-row flex-col gap-6 w-full'>
              <Link
                to={"/ContactUs"}
                className="bg-primaryOrange hover:bg-toOrange text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg sm:shadow-lg transition-all duration-300 w-fit"
              >
                <span>Lets Start Your Project</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to={"/missions"}
                className="bg-white sm:hover:bg-primaryBlue text-primaryBlue sm:hover:text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg  sm:shadow-lg transition-all duration-300 w-fit border border-primaryBlue"
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
  );
};

export default SlackerIOT;