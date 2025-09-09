import React, { useRef } from 'react';
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
    Activity,
    FileText
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';

const BullsEyesCase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            ]
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
            ]
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
            ]
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
            <Navigation isDarkBg={true} />
            <div className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-screen bg-gradient-to-br from-primaryBlue to-toBlue overflow-hidden flex items-center">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-96 h-96 bg-primaryOrange rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondaryBlue rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-40">
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
                                <span className="text-white font-semibold text-lg">Detailed Case Study - Bullseye Investments</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
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
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-xl sm:text-2xl  text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                            >
                                A comprehensive corporate website designed and developed for{" "}
                                <span className="text-primaryOrange font-semibold">Bullseye Investments Pvt. Ltd.</span>{" "},
                                enhancing credibility, onboarding efficiency, and investor engagement.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>


                {/* Project Overview */}
                <section className="pt-20  bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 60 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                                Project Overview
                            </h2>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                                    ShiftDeploy partnered with{" "}
                                    <span className="text-primaryOrange font-semibold">Bullseye Investments Pvt. Ltd.</span>{" "}
                                    — a licensed member of PMEX and applicant for PSX Trading Rights — to design and develop a modern,
                                    responsive corporate website. The project aimed to establish digital credibility, simplify
                                    client onboarding, and showcase the company’s diversified financial services across Investments,
                                    Realtors, and Insurance verticals.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-16  mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-primaryBlue mb-6">Project Scope</h3>
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

                                <div className="grid grid-cols-4 gap-6 mt-6 ">
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
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className=""
                            >
                                <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Statistics</h3>
                                <div className="image-placeholder w-full h-64 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500">
                                    Overview Graphic
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
                            <h2 className="text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                                Technical Architecture Deep Dive
                            </h2>
                            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                                Bullseye Investments leverages advanced financial APIs, AI-driven analytics, and
                                modern cloud infrastructure to deliver a real-time, intelligent investing experience.
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
                                    className="bg-white rounded-2xl p-8 shadow-lg"
                                >
                                    {/* Icon + Title */}
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="w-16 h-16 bg-primaryBlue rounded-xl flex items-center justify-center">
                                            <category.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primaryBlue">{category.category}</h3>
                                    </div>

                                    {/* Placeholder for diagrams */}
                                    <div className="image-placeholder w-full h-56 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-500">
                                        {category.category} Diagram
                                    </div>

                                    {/* Technology List */}
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
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                                Feature Deep Dive
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                                    className="bg-white shadow-md rounded-2xl p-8"
                                >
                                    <div className="flex items-start space-x-6">

                                        <div className="w-16 h-16 bg-primaryBlue rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-primaryBlue mb-4">{feature.title}</h3>
                                            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

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
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                                Implementation Timeline
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Our structured approach ensured timely delivery while maintaining high quality
                                standards throughout the development process.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {implementationPhases.map((phase, index) => (
                                <>
                                    {index == 5 ? (
                                        <div className='bg-primaryBlue rounded-2xl p-8 shadow-lg text-white'>
                                            <h1 className='text-4xl font-bold'>Now thats on maintenence</h1>

                                        </div>
                                    ) : (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                            className="bg-white rounded-2xl p-8 shadow-lg"
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
                                                    <p className="text-xl text-gray-600 mb-6">{phase.description}</p>

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
                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-primaryBlue mb-8">
                                Challenges & Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                                    className="bg-white rounded-2xl p-8 shadow-md"
                                >
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <AlertTriangle className="w-6 h-6 text-primaryOrange" />
                                                <h3 className="text-xl font-bold text-primaryBlue">Challenge</h3>
                                            </div>
                                            <p className="text-gray-700 text-lg leading-relaxed">{item.challenge}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <CheckCircle className="w-6 h-6 text-primaryBlue" />
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
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                                Results & Impact
                            </h2>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                                    <h4 className="text-xl font-semibold text-white mb-4">For Bullseye Investments</h4>
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
                                    <h4 className="text-xl font-semibold text-white mb-4">For Investors</h4>
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
                            transition={{ duration: 0.8 }}
                            className="p-12 text-center"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-8">
                                Ready to Elevate Your Financial Platform?
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Let ShiftDeploy help you create secure, transparent, and high-performance
                                investment platforms. From seamless client onboarding to real-time market data
                                integration, we build solutions that empower financial organizations and their investors.
                            </p>
                            <Link
                                to={"/ContactUs"}
                                className="bg-primaryOrange hover:bg-toOrange text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 text-lg mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 w-fit"
                            >
                                <span>Start Your Project</span>
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

export default BullsEyesCase;