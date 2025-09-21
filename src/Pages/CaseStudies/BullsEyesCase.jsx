import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight,
    AlertTriangle,
    CheckCircle,
    TrendingUp,
    Zap,
    Shield,
    CreditCard,
    Bell,
    Server,
    Monitor,
    Users,
    BarChart3,
    Cpu,
    Activity,
    FileText
} from 'lucide-react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
// importing images here 
import frontend from '../../Assets/Images/casestudies/bullseyes/frontend.png'
import backend from '../../Assets/Images/casestudies/bullseyes/backend.png'
import apis from '../../Assets/Images/casestudies/bullseyes/apis.png'
import keystatic from '../../Assets/Images/casestudies/bullseyes/keystatic.png'
import { Helmet } from 'react-helmet-async';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

const BullsEyesCase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [showLoader, setShowLoader] = useState(true)


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    // ✅ Hide loader when scrollY === 0
    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY === 0) {
                setShowLoader(false)
                window.removeEventListener('scroll', checkScroll)
            }
        }
        window.addEventListener('scroll', checkScroll)
        checkScroll()
        return () => window.removeEventListener('scroll', checkScroll)
    }, [])

    const techDetails = [
        {
            category: "Market Data & APIs",
            icon: Cpu,
            technologies: [
                {
                    name: "Stock Market APIs",
                    description: "Live price feeds and historical data integration using providers like Alpha Vantage and Yahoo Finance."
                },
                {
                    name: "Crypto APIs",
                    description: "Real-time cryptocurrency market tracking through CoinMarketCap and Binance APIs."
                },
                {
                    name: "Custom Watchlists",
                    description: "Users can create watchlists powered by live API updates, ensuring accurate portfolio monitoring."
                }
            ],
            image: apis

        },
        {
            category: "Backend & Data Storage",
            icon: Server,
            technologies: [
                {
                    name: "Google Sheets Integration",
                    description: "All form submissions (contact, inquiries, newsletter) are stored directly into Google Sheets, eliminating the need for a traditional backend."
                },
                {
                    name: "API Layer",
                    description: "Custom connectors handle secure push-pull of structured data between the React frontend and Google Sheets backend."
                }
            ],
            image: backend
        },
        {
            category: "Frontend & User Experience",
            icon: Monitor,
            technologies: [
                {
                    name: "React.js Framework",
                    description: "SPA architecture delivering a smooth, responsive experience across all sections of the site."
                },
                {
                    name: "Tailwind CSS",
                    description: "Modern, utility-first CSS framework ensuring a clean, responsive, and mobile-first design."
                },
                {
                    name: "Interactive Dashboards",
                    description: "Dynamic stock charts, real-time updates, and portfolio visualizations built using charting libraries integrated with live APIs."
                }
            ],
            image: frontend
        }
    ];


    const detailedFeatures = [
        {
            icon: BarChart3,
            title: "Market Data Integration",
            description:
                "Live stock and commodity prices integrated directly into the website, ensuring investors always have the latest information at their fingertips.",
            details: [
                "Real-time PSX & PMEX data integration (via APIs)",
                "Market highlights with top gainers/losers",
                "Dedicated commodity and equity data views",
                "Scalable API integration for future assets",
            ],
        },
        {
            icon: Monitor,
            title: "Responsive Corporate Website",
            description:
                "A modern, mobile-friendly corporate site designed to communicate professionalism, trust, and regulatory compliance.",
            details: [
                "Clean, professional UI/UX for all device sizes",
                "Interactive animations for engagement",
                "Clear navigation across multiple business arms",
                "Optimized performance for fast load speeds",
            ],
        },
        {
            icon: Activity,
            title: "Simplified Onboarding Workflow",
            description:
                "Clear pathways for prospective clients to open an account seamlessly via Bullseye’s brokerage portal.",
            details: [
                "Step-by-step account opening guide",
                "Direct portal integration via ‘Open Account’ CTA",
                "Pre-loaded compliance & KYC forms",
                "Reduced manual onboarding time",
            ],
        },
        {
            icon: FileText,
            title: "Compliance & Resource Hub",
            description:
                "Centralized resource library to showcase regulatory documents, risk disclosures, and investor education content.",
            details: [
                "Upload & hosting of compliance PDFs via Cloudinary",
                "Risk Disclosure, Investor Guides, and FAQs",
                "Easy accessibility across devices",
                "Scalable resource library for future material",
            ],
        },
        {
            icon: Users,
            title: "Multi-Domain Brand Showcase",
            description:
                "Presentation of Bullseye Investments, Realtors, and Insurance under one digital identity while maintaining distinct branding.",
            details: [
                "Dedicated sections for each business entity",
                "Consistent corporate branding across pages",
                "Clear service breakdown for investors & clients",
                "Expandable framework for future group companies",
            ],
        },
        {
            icon: Bell,
            title: "Investor Engagement Features",
            description:
                "Call-to-action components and communication features designed to connect with prospective investors instantly.",
            details: [
                "Quick action buttons: ‘Open Account’ & ‘Call Now’",
                "Newsletter subscription powered by Google Sheets",
                "Contact form with automated Google Sheets storage",
                "Scalable structure for future client portal integration",
            ],
        },
    ];


    const implementationPhases = [
        {
            phase: "Phase 1: Discovery & Planning",
            duration: "1 week",
            description:
                "Requirement gathering, competitor analysis, and defining the digital presence strategy for Bullseye Investments.",
            deliverables: [
                "Requirement documentation",
                "Competitor benchmarking",
                "Information architecture & site map",
            ],
        },
        {
            phase: "Phase 2: UI/UX Design",
            duration: "2 weeks",
            description:
                "Designing a clean, professional, and responsive interface reflecting trust, compliance, and corporate identity.",
            deliverables: [
                "High-fidelity Figma designs",
                "Responsive layouts for desktop & mobile",
                "Design approval with branding alignment",
            ],
        },
        {
            phase: "Phase 3: Frontend Development",
            duration: "3 weeks",
            description:
                "Implementation of the React-based corporate website with Tailwind CSS and smooth animations.",
            deliverables: [
                "Responsive React components",
                "Framer Motion animations & interactions",
                "SEO-optimized frontend deployment",
            ],
        },
        {
            phase: "Phase 4: Backend & Integrations",
            duration: "2 weeks",
            description:
                "Setup of integrations for forms, Google Sheets, and live stock/market APIs.",
            deliverables: [
                "Google Sheets integration for forms",
                "Cloudinary setup for document hosting",
                "Market data APIs integration (PSX/PMEX highlights)",
            ],
        },
        {
            phase: "Phase 5: Testing & Optimization",
            duration: "1 week",
            description:
                "End-to-end testing, performance tuning, and ensuring regulatory compliance visibility.",
            deliverables: [
                "Cross-browser & device testing",
                "Performance optimization (Core Web Vitals)",
                "Compliance & risk disclosure validation",
            ],
        },
        {
            phase: "Phase 6: Deployment & Handover",
            duration: "1 week",
            description:
                "Final deployment on Vercel and training Bullseye Investments’ team for content updates.",
            deliverables: [
                "Production deployment on Vercel",
                "Team training & documentation",
                "Ongoing support plan",
            ],
        },
    ];


    const challenges = [
        {
            challenge: "Establishing Digital Credibility",
            solution:
                "Designed a professional, trust-driven UI/UX that reflects regulatory compliance and positions Bullseye Investments as a reliable financial institution.",
        },
        {
            challenge: "Presenting Complex Financial Services Simply",
            solution:
                "Structured content architecture to clearly showcase PMEX, PSX, Insurance, Real Estate, and Investment services in a user-friendly manner.",
        },
        {
            challenge: "Client Onboarding & Account Opening",
            solution:
                "Implemented a seamless workflow redirecting users to Bullseye’s official brokerage portal with step-by-step onboarding guidance.",
        },
        {
            challenge: "Regulatory Compliance & Documentation",
            solution:
                "Centralized hosting of compliance documents (Risk Disclosures, Investor Guides) via Cloudinary for easy, secure access across devices.",
        },
        {
            challenge: "Real-time Market Data Integration",
            solution:
                "Integrated PSX & PMEX market highlights API to display live market updates, top gainers/losers, and commodities data.",
        },
    ];


    return (
        <>
            <Helmet>
                {/* ✅ Basic SEO Meta */}
                <title>Bullseyes Investments Case Study | Brokerage Platform by ShiftDeploy</title>
                <meta
                    name="description"
                    content="Learn how ShiftDeploy built a fast, reliable, and secure brokerage platform for Bullseyes Investments, a leading PSX stockbroker."
                />
                <meta
                    name="keywords"
                    content="Bullseyes Investments, PSX broker, brokerage website, stock trading platform, ShiftDeploy case study"
                />

                {/* ✅ Open Graph / Social Preview */}
                <meta property="og:title" content="Bullseyes Investments Case Study | Brokerage Platform by ShiftDeploy" />
                <meta
                    property="og:description"
                    content="Learn how ShiftDeploy built a fast, reliable, and secure brokerage platform for Bullseyes Investments, a leading PSX stockbroker."
                />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.shiftdeploy.com/CaseStudies/BullseyesInvestmentsCase" />
                <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />

                {/* ✅ Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bullseyes Investments Case Study | Brokerage Platform by ShiftDeploy" />
                <meta
                    name="twitter:description"
                    content="Discover how ShiftDeploy created a modern, secure brokerage platform for Bullseyes Investments to serve PSX traders efficiently."
                />
                <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
            </Helmet>
            <Navigation isDarkBg={true} />
            {showLoader ? <ShiftDeployLoader /> : (
                <div className="bg-gray-50 min-h-screen">

                    {/* Hero Section  */}
                    <section className="relative  bg-gradient-to-br from-primaryBlue to-toBlue overflow-hidden flex items-center py-20 sm:py-10">
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
     

                        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-20 pt-28 sm:pt-32  md:pt-32">
                            <div
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="inline-flex items-center space-x-2 bg-primaryOrange backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                                >
                                    <span className="text-white font-semibold text-xs sm:text-lg">Detailed Case Study - Bullseye Investments</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                                >
                                    Building a{" "}
                                    <span className="text-primaryOrange">
                                        Modern Investment
                                    </span>
                                    <br />
                                    Platform for Digital Trust
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                    className="text-lg sm:text-2xl  text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                                >
                                    A comprehensive corporate website designed and developed for{" "}
                                    <span className="text-primaryOrange font-semibold">Bullseye Investments Pvt. Ltd.</span>{" "},
                                    enhancing credibility, onboarding efficiency, and investor engagement.
                                </motion.p>
                            </div>
                        </div>
                    </section>

                    {/* Project Overview */}
                    <section className="pt-20  bg-gray-50">
                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div
                                className="text-center mb-16"
                            >
                                <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
                                    Project Overview
                                </h2>
                                <p className="sm:text-xl text-gray-700 leading-relaxed p-2">
                                    ShiftDeploy partnered with{" "}
                                    <span className="text-primaryOrange font-semibold">Bullseye Investments Pvt. Ltd.</span>{" "}
                                    A licensed member of PMEX and applicant for PSX Trading Rights to design and develop a modern,
                                    responsive corporate website. The project aimed to establish digital credibility, simplify
                                    client onboarding, and showcase the company’s diversified financial services across Investments,
                                    Realtors, and Insurance verticals.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-16 mb-8 sm:mb-16 p-2">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">Project Scope</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">Corporate website design & development with professional branding</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">Investor onboarding workflow with account opening guides</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">Dedicated sections for Investments, Realtors, and Insurance</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">Resource library with compliance documents and investor guides</p>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                                            <p className="text-gray-700">Future-ready architecture for live PSX/PMEX integration</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">6 weeks</div>
                                            <div className="text-gray-600">Development Time</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">4 phases</div>
                                            <div className="text-gray-600">Implementation</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">SEO+</div>
                                            <div className="text-gray-600">Optimized Delivery</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">100%</div>
                                            <div className="text-gray-600">Responsive Design</div>
                                        </div>
                                    </div>
                                </div>

                                <div

                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">Key Statistics</h3>
                                    <div style={{
                                        backgroundImage: `url(${keystatic})`,
                                        backgroundSize: '110%',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }} className="image-placeholder w-full h-52 sm:h-64 mb-6 flex items-center justify-center text-gray-500">

                                    </div>
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
                                    Technical Architecture Deep Dive
                                </h2>
                                <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                                    Bullseye Investments leverages advanced financial APIs, AI-driven analytics, and
                                    modern cloud infrastructure to deliver a real-time, intelligent investing experience.
                                </p>
                            </motion.div>

                            <div className="space-y-16">
                                {techDetails.map((category, index) => (
                                    <div
                                        key={index}
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
                                    Each feature was carefully designed and implemented to provide maximum value
                                    and reliability for both end-users and system administrators.
                                </p>
                            </motion.div>

                            <div className="space-y-10 sm:space-y-16">
                                {detailedFeatures.map((feature, index) => (
                                    <div
                                        key={index}
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Implementation Timeline */}
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
                                {/* Image Placeholder for Results Graphic */}
                                {/* <div className="image-placeholder w-full h-64 bg-gray-200/30 rounded-xl mb-10 flex items-center justify-center text-white">
                                    Results Infographic
                                </div> */}
                                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                                    Results & Impact
                                </h2>
                                <p className="sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    The new Bullseye Investments website strengthened digital trust,
                                    simplified client onboarding, and provided investors with transparent,
                                    real-time access to financial markets.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                                {[
                                    { metric: "200%+", label: "Increase in Online Leads", icon: TrendingUp },
                                    { metric: "99.9%", label: "Platform Availability", icon: Zap },
                                    { metric: "2x", label: "Faster Client Onboarding", icon: CreditCard },
                                    { metric: "24/7", label: "Live Market Data Access", icon: Shield },
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
                                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Bullseye Investments</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Enhanced digital credibility and client trust</p>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Improved lead generation with modern web presence</p>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Streamlined account opening via integrated workflows</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Investors</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Transparent access to PSX & PMEX market data</p>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Simplified access to services like insurance, real estate, and investments</p>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                                <p className="text-gray-300">Faster onboarding and improved digital experience</p>
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
                                    Ready to Elevate Your Financial Platform?
                                </h2>
                                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                    Let ShiftDeploy help you create secure, transparent, and high-performance
                                    investment platforms. From seamless client onboarding to real-time market data
                                    integration, we build solutions that empower financial organizations and their investors.
                                </p>
                                <div className='flex justify-center items-center sm:flex-row flex-col gap-6 w-full'>
                                    <Link
                                        to={"/ContactUs"}
                                        className="bg-primaryOrange hover:bg-toOrange text-white px-4 sm:px-12 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg sm:shadow-lg transition-all duration-300 w-fit"
                                    >
                                        <span>Lets deploy your problem</span>
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

                </div>
            )}
            <Footer />
        </>
    );
};

export default BullsEyesCase;