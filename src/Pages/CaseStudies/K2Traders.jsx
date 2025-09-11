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
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';

const K2TradersCase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);

    const techDetails = [
        {
            category: "Frontend & User Experience",
            icon: Monitor,
            technologies: [
                {
                    name: "React.js Framework",
                    description:
                        "Lightweight, component-based JavaScript library used to build a fast and modern eCommerce storefront optimized for user experience."
                },
                {
                    name: "Tailwind CSS",
                    description:
                        "Utility-first CSS framework enabling rapid UI development with responsive layouts and consistent design across devices."
                },
                {
                    name: "Optimized Checkout Flow",
                    description:
                        "Streamlined cart and checkout process to reduce friction, ensuring a smooth purchase experience for customers."
                }
            ]
        },
        {
            category: "Backend & Data Management",
            icon: Server,
            technologies: [
                {
                    name: "Google Sheets Integration",
                    description:
                        "Custom API integration with Google Sheets serving as a lightweight backend to store orders and inventory without additional hosting costs."
                },
                {
                    name: "Serverless Functions",
                    description:
                        "Utilized Vercel’s serverless functions to handle form submissions and order workflows securely and efficiently."
                },
                {
                    name: "Zero Maintenance Architecture",
                    description:
                        "No traditional backend servers required, minimizing upkeep and ensuring stability over time."
                }
            ]
        },
        {
            category: "Deployment & Hosting",
            icon: Cpu,
            technologies: [
                {
                    name: "Vercel Deployment",
                    description:
                        "Deployed on Vercel for lightning-fast performance, automatic scaling, and zero-dollar hosting costs."
                },
                {
                    name: "Global CDN",
                    description:
                        "Ensures optimized page loads worldwide with minimal latency, improving customer retention and conversions."
                },
                {
                    name: "One-time Payment Model",
                    description:
                        "Cost-efficient solution with no recurring monthly fees, unlike Shopify or WordPress hosting."
                }
            ]
        },
        {
            category: "Security & Reliability",
            icon: CreditCard,
            technologies: [
                {
                    name: "HTTPS & SSL Security",
                    description:
                        "All data and transactions are secured with SSL encryption to ensure safe communication between users and the platform."
                },
                {
                    name: "Form Validation & Sanitization",
                    description:
                        "Every order and customer detail is validated to prevent errors, spam, or malicious entries in Google Sheets."
                },
                {
                    name: "Ownership Guarantee",
                    description:
                        "K2 Traders holds 100% ownership of the platform, eliminating reliance on third-party SaaS vendors."
                }
            ]
        }
    ];


    const detailedFeatures = [
        {
            icon: Activity,
            title: "Lightweight & Fast Architecture",
            description: "Optimized React.js frontend deployed on Vercel for lightning-fast performance and zero infrastructure overhead.",
            details: [
                "Blazing fast page loads with React.js",
                "SEO-friendly structure for organic growth",
                "Optimized code for minimal bundle size",
                "Scales automatically with traffic surges",
                "No dedicated server required",
                "Free Vercel hosting for production",
                "Zero recurring infrastructure fees"
            ]
        },
        {
            icon: Smartphone,
            title: "Smart Cart & Checkout",
            description: "A smooth shopping flow with cart, checkout, and order management integrated directly into Google Sheets.",
            details: [
                "Add-to-cart and product management features",
                "One-click checkout for faster conversions",
                "Orders automatically synced with Google Sheets",
                "Real-time stock & order tracking",
                "No database or backend maintenance",
                "Lightweight system suitable for startups",
                "Easily expandable for future needs"
            ]
        },
        {
            icon: Shield,
            title: "Cost-Efficient & Maintenance-Free",
            description: "A one-time payment solution that eliminates recurring platform costs like Shopify, Wix, or WordPress.",
            details: [
                "Zero monthly hosting fees",
                "No plugin/update management needed",
                "Google Sheets as a reliable backend",
                "Secure by default with minimal attack surface",
                "No dependency on third-party platforms",
                "Future-proof architecture for growth",
                "One-time setup, long-term savings"
            ]
        },
        {
            icon: CreditCard,
            title: "Flexible Payments Integration",
            description: "Checkout designed for multiple payment methods ensuring smooth transactions for customers.",
            details: [
                "Supports digital wallets & bank transfers",
                "Stripe or local gateway integration ready",
                "Instant order confirmation in sheets",
                "Automated invoice generation",
                "Payment logs stored securely",
                "Low transaction costs compared to SaaS platforms",
                "Easily adaptable for new methods"
            ]
        },
        {
            icon: Bell,
            title: "Order Tracking & Notifications",
            description: "Seamless customer experience with instant order confirmations and tracking via integrated systems.",
            details: [
                "Instant order confirmation messages",
                "Automated order logging in Google Sheets",
                "Real-time stock updates",
                "Optional email/SMS confirmations",
                "Error-free order record keeping",
                "Scalable notification setup",
                "Reduced support load through automation"
            ]
        },
        {
            icon: BarChart3,
            title: "Sales & Performance Insights",
            description: "Google Sheets doubles as a reporting dashboard for quick business insights and sales tracking.",
            details: [
                "Daily, weekly, monthly order tracking",
                "Total revenue calculation in real-time",
                "Top-selling product insights",
                "Customer trends & repeat orders",
                "Easily shareable with stakeholders",
                "No external BI tools required",
                "Data export & visualization ready"
            ]
        }
    ];


    const implementationPhases = [
        {
            phase: "Phase 1: Requirement Analysis",
            duration: "1 week",
            description: "Understanding K2 Traders’ product catalog, pricing model, and target customer journey.",
            deliverables: [
                "Detailed requirement documentation",
                "UI/UX wireframes",
                "Tech stack confirmation (React + Vercel + Google Sheets)"
            ]
        },
        {
            phase: "Phase 2: Frontend Development",
            duration: "2 weeks",
            description: "Building a modern, responsive React.js frontend optimized for speed and SEO.",
            deliverables: [
                "Responsive product listing pages",
                "Product detail and cart functionality",
                "Optimized checkout flow"
            ]
        },
        {
            phase: "Phase 3: Smart Backend via Google Sheets",
            duration: "1 week",
            description: "Integrating Google Sheets as a lightweight, cost-efficient backend for order management.",
            deliverables: [
                "Order storage in Google Sheets",
                "Inventory & stock updates",
                "Admin access for real-time order tracking"
            ]
        },
        {
            phase: "Phase 4: Smart Checkout System",
            duration: "1 week",
            description: "Implementation of a checkout system with order confirmation and bill download functionality.",
            deliverables: [
                "User-friendly checkout flow",
                "Automatic order logging in Google Sheets",
                "Downloadable bill/invoice option for customers"
            ]
        },

        {
            phase: "Phase 5: Testing & Optimization",
            duration: "1 week",
            description: "Rigorous testing to ensure flawless checkout, zero downtime, and fast performance.",
            deliverables: [
                "Cross-browser and device testing",
                "Performance optimization",
                "Bug fixing and UX refinements"
            ]
        },
        {
            phase: "Phase 6: Deployment & Handover",
            duration: "1 week",
            description: "Deploying the solution on Vercel with one-time cost optimization setup.",
            deliverables: [
                "Vercel production deployment",
                "Admin training on order management",
                "Project documentation & handover"
            ]
        }
    ];


    const challenges = [
        {
            challenge: "Real-time Data Synchronization",
            solution: "Implemented automated syncing between inventory and order logs using Google Sheets to maintain accurate records."
        },
        {
            challenge: "Security & Compliance",
            solution: "Ensured secure handling of customer order details with restricted access and proper data management practices."
        },
        {
            challenge: "Checkout & Invoice Management",
            solution: "Developed a smooth checkout system with automatic order confirmation and downloadable bill/invoice generation."
        }
    ];


    return (
        <>
            <Navigation isDarkBg={true} />
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-screen bg-gradient-to-br from-primaryBlue to-toBlue overflow-hidden flex items-center">
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
                                <span className="text-white font-semibold text-lg">Detailed Case Study - K2 Traders</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                            >
                                Smart eCommerce{" "}
                                <span className="text-primaryOrange">
                                    Platform
                                </span>
                                <br />
                                Optimized for Cost & Performance
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl sm:text-2xl  text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                            >
                                A cutting-edge eCommerce platform built for{" "}
                                <span className="text-primaryOrange font-semibold">K2 Traders</span>{" "}
                                by ShiftDeploy, delivering zero deployment costs, effortless maintenance,
                                and a seamless shopping experience powered by React and Google Sheets.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>


                {/* Project Overview */}
                <section className=" pt-10 sm:pt-20 bg-gray-50 ">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-8 sm:mb-16"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
                                Project Overview
                            </h2>
                            <div className="max-w-4xl mx-auto">
                                <p className="sm:text-xl text-gray-700 leading-relaxed mb-12">
                                    ShiftDeploy partnered with{" "}
                                    <span className="font-semibold text-primaryOrange">K2 Traders</span> to
                                    build a lightweight, fully optimized{" "}
                                    <span className="font-semibold">eCommerce platform</span>.
                                    The solution includes a modern ReactJS frontend deployed on Vercel,
                                    a seamless cart & checkout flow, and Google Sheets integration for
                                    order management — eliminating hosting costs and heavy maintenance.
                                    This project was designed to give startups an affordable,
                                    scalable alternative to Shopify or WordPress.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-16 mb-8 sm:mb-16">
                            {/* Project Scope */}
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-primaryBlue mb-6">Project Scope</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-700">Custom ReactJS storefront with optimized performance</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-700">Google Sheets backend for order and inventory management</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-700">Zero-cost deployment using Vercel serverless hosting</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-700">Responsive design for smooth shopping across devices</p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                        <p className="text-gray-700">One-time payment model with no recurring SaaS costs</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">3 weeks</div>
                                        <div className="text-gray-600">Development Time</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">4 phases</div>
                                        <div className="text-gray-600">Implementation</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">0$</div>
                                        <div className="text-gray-600">Hosting Cost</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">100%</div>
                                        <div className="text-gray-600">Ownership</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Key Statistics Graphic Placeholder */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Statistics</h3>
                                <div className="image-placeholder w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500">
                                    eCommerce Overview Graphic
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
                            <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-8">
                                Technical Architecture Deep Dive
                            </h2>
                            <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                                Our solution for K2 Traders focuses on delivering a smart, cost-efficient
                                eCommerce platform. By combining React.js, Google Sheets integration, and
                                Vercel hosting, we eliminated recurring infrastructure costs while ensuring
                                a smooth shopping experience. The architecture is lightweight, scalable,
                                and requires zero ongoing maintenance.
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
                                        <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue">{category.category}</h3>
                                    </div>

                                    <div className="image-placeholder w-full h-56 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500">
                                        {category.category} Diagram
                                    </div>

                                    <div className="space-y-6">
                                        {category.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="border-l-4 border-orange-500 pl-6">
                                                <h4 className="text-xl font-semibold text-primaryBlue mb-3">{tech.name}</h4>
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
                <section className="py-10 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-8">
                                Feature Deep Dive
                            </h2>
                            <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Each feature was carefully designed and implemented to provide maximum value
                                and reliability for both end-users and system administrators.
                            </p>
                        </motion.div>

                        <div className="space-y-16">
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
                                            <h3 className="text-2xl font-bold text-primaryBlue mb-4">{feature.title}</h3>
                                            <p className="sm:text-xl text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                {feature.details.map((detail, detailIndex) => (
                                                    <div key={detailIndex} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                                        <p className="text-gray-700">{detail}</p>
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
                <section className="py-10 sm:py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-8">
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
                                            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
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
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md sm:hover:shadow-xl transition-all duration-300"
                                        >
                                            <div className="space-y-6">
                                                <div className='flex justify-between items-center'>
                                                    <div className="w-12 h-12 bg-primaryOrange rounded-xl flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                                    </div>
                                                    <span className="text-primaryOrange font-semibold text-lg">{phase.duration}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                        <h3 className="text-2xl font-bold text-primaryBlue">{phase.phase}</h3>
                                                    </div>
                                                    <p className="sm:text-xl text-gray-600 mb-6">{phase.description}</p>

                                                    <div className="space-y-2">
                                                        <h4 className="text-lg font-semibold text-primaryBlue mb-3">Key Deliverables:</h4>
                                                        {phase.deliverables.map((deliverable, deliverableIndex) => (
                                                            <div key={deliverableIndex} className="flex items-start space-x-3">
                                                                <CheckCircle className="w-5 h-5 text-primaryOrange mt-0.5 flex-shrink-0" />
                                                                <p className="text-gray-700">{deliverable}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
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
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
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
                                                <AlertTriangle className="w-5 h-5 text-primaryOrange" />
                                                <h3 className="text-xl font-bold text-primaryBlue">Challenge</h3>
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed">{item.challenge}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <CheckCircle className="w-5 h-5 text-primaryBlue" />
                                                <h3 className="text-xl font-bold text-primaryBlue">Solution</h3>
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed">{item.solution}</p>
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
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                                Results & Impact
                            </h2>
                            <p className="sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                The delivered solution helped K2 Traders launch their eCommerce platform
                                with zero recurring costs, offering a streamlined shopping experience
                                for customers and long-term savings for the business.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[
                                { metric: "0$", label: "Hosting Cost", icon: TrendingUp },
                                { metric: "100%", label: "Order Accuracy", icon: Zap },
                                { metric: "1-Click", label: "Checkout Flow", icon: CreditCard },
                                { metric: "24/7", label: "Availability", icon: Shield }
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
                            <h3 className="text-2xl font-bold text-white mb-6">Business Impact</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">For K2 Traders</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">Eliminated recurring hosting and maintenance costs</p>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">Fast and smooth launch with React + Vercel stack</p>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">Scalable solution ready for future payment integration</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-4">For Customers</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">Simple cart and checkout flow with instant confirmation</p>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">Downloadable invoices for complete transparency</p>
                                        </li>
                                        <li className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-300">24/7 access to browse and place orders anytime</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>


                {/* Call to Action */}
                <section className="py-10 sm:py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sm:p-12 text-center"
                        >
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8">
                                Ready to Launch Your Smart eCommerce Store?
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                ShiftDeploy helps businesses like K2 Traders save thousands by building
                                optimized, one-time-pay eCommerce solutions. No monthly fees, no heavy
                                maintenance. Just a fast, scalable, and cost-efficient online store
                                that grows with you.
                            </p>
                            <Link
                                to={"/ContactUs"}
                                className="bg-primaryOrange hover:bg-toOrange text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg mx-auto shadow-lg transition-all duration-300 w-fit"
                            >
                                <span>Start Your eCommerce Project</span>
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default K2TradersCase;