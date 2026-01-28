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
import { Helmet } from 'react-helmet-async';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

const BullsEyesCase = () => {
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

  // ✅ Content re-written for business outcomes (structure unchanged)
  const techDetails = [
    {
      category: "Real-time Information (Investor View)",
      icon: Cpu,
      technologies: [
        {
          name: "Market Data Updates",
          description:
            "Key market updates were made easier to access so visitors could quickly understand what’s happening without digging through multiple sources."
        },
        {
          name: "Coverage Across Assets",
          description:
            "The site supports views for different instruments so information feels organised and easy to explore for new and returning visitors."
        },
        {
          name: "Watchlists and Tracking",
          description:
            "Visitors can keep an eye on what matters to them, improving repeat visits and reducing the time it takes to find relevant information."
        }
      ],
      // TODO: Replace with a real dashboard / market screen from the project (avoid generic "APIs" graphic)
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979374/apis_vbzb3u.png'
    },
    {
      category: "Operations and Lead Handling",
      icon: Server,
      technologies: [
        {
          name: "Lead Capture and Management",
          description:
            "Enquiries, newsletter sign-ups, and form submissions were streamlined so the team can respond faster and keep records organised."
        },
        {
          name: "Simple, Maintainable Setup",
          description:
            "We kept the setup lightweight so Bullseye can manage updates without heavy operational overhead."
        }
      ],
      // TODO: Replace with a CRM / lead flow style graphic or a real admin screenshot
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979462/backend_zy8vp9.png'
    },
    {
      category: "Website Experience and Clarity",
      icon: Monitor,
      technologies: [
        {
          name: "Clear Navigation",
          description:
            "We simplified how services are presented so visitors can quickly find what Bullseye offers and where to go next."
        },
        {
          name: "Mobile-first Experience",
          description:
            "Pages were designed to work well on mobile so prospective clients can browse, understand, and take action without friction."
        },
        {
          name: "Investor-friendly Pages",
          description:
            "Information was organised into clear sections so the website feels professional, trustworthy, and easy to use."
        }
      ],
      // TODO: Replace with real UI screenshots (homepage + services page), not a generic 'frontend' graphic
      image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979388/frontend_repbfv.png'
    }
  ];

  const detailedFeatures = [
    {
      icon: BarChart3,
      title: "Clear Market Snapshot",
      description:
        "Investors can quickly understand market movement through a clean, easy-to-scan market overview.",
      details: [
        "Market highlights presented in a simple layout",
        "Top movers and key snapshots in one place",
        "Separate views for different asset types",
        "Designed for easy expansion over time",
      ],
    },
    {
      icon: Monitor,
      title: "Trust-first Corporate Website",
      description:
        "A modern, mobile-friendly website built to look credible and make the business easy to understand.",
      details: [
        "Professional look across all devices",
        "Clear service pages and navigation",
        "Fast, smooth browsing experience",
        "Structure designed for future updates",
      ],
    },
    {
      icon: Activity,
      title: "Simpler Client Onboarding",
      description:
        "A clearer path for new clients to understand the steps and move toward opening an account.",
      details: [
        "Step-by-step guidance for account opening",
        "Clear calls to action to reduce confusion",
        "Supporting content for first-time visitors",
        "Less back-and-forth for the team",
      ],
    },
    {
      icon: FileText,
      title: "Compliance and Resources Hub",
      description:
        "A central place for key documents so people can quickly find what they need and trust what they’re reading.",
      details: [
        "All key documents accessible from one place",
        "Better visibility for disclosures and guides",
        "Easy reading across mobile and desktop",
        "Expandable library for future content",
      ],
    },
    {
      icon: Users,
      title: "Group Services in One Clear Story",
      description:
        "A single online presence that explains multiple business areas without feeling messy or confusing.",
      details: [
        "Dedicated sections for each vertical",
        "Consistent branding across the website",
        "Clear breakdown of what each service does",
        "Room to grow into more offerings",
      ],
    },
    {
      icon: Bell,
      title: "Stronger Investor Engagement",
      description:
        "Simple ways for visitors to reach out, sign up, and take the next step without friction.",
      details: [
        "Stronger placement of key calls to action",
        "Newsletter sign-up built for consistency",
        "Contact flow designed to reduce drop-offs",
        "Built to support future improvements",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Discovery & Planning",
      duration: "1 week",
      description:
        "We aligned on goals, clarified the priority journeys, and mapped the structure needed for a credible financial services website.",
      deliverables: [
        "Requirements and priorities",
        "Content structure and site map",
        "Key journeys and success criteria",
      ],
    },
    {
      phase: "Phase 2: UI/UX Design",
      duration: "2 weeks",
      description:
        "We designed a clean, trust-first interface that makes the business easy to understand and easy to navigate.",
      deliverables: [
        "High-fidelity designs",
        "Responsive layouts for desktop and mobile",
        "Brand-aligned design direction",
      ],
    },
    {
      phase: "Phase 3: Frontend Development",
      duration: "3 weeks",
      description:
        "We built the website with a smooth, modern experience and a structure that supports ongoing improvement.",
      deliverables: [
        "Responsive components",
        "Smooth interactions and UI polish",
        "SEO-friendly page setup",
      ],
    },
    {
      phase: "Phase 4: Integrations & Content Setup",
      duration: "2 weeks",
      description:
        "We connected lead capture, document access, and market snapshots so the website works as a practical business tool.",
      deliverables: [
        "Form handling and lead capture setup",
        "Document library and resources hub",
        "Market overview sections ready for growth",
      ],
    },
    {
      phase: "Phase 5: Testing & Optimization",
      duration: "1 week",
      description:
        "We tested across devices, improved usability, and ensured everything looked and worked consistently.",
      deliverables: [
        "Cross-device testing",
        "Performance and UX refinements",
        "Content checks for clarity and trust",
      ],
    },
    {
      phase: "Phase 6: Deployment & Handover",
      duration: "1 week",
      description:
        "We launched the website and ensured the team could confidently manage updates going forward.",
      deliverables: [
        "Production deployment",
        "Basic handover guidance",
        "Support option for ongoing improvements",
      ],
    },
  ];

  const challenges = [
    {
      challenge: "Building Trust Online",
      solution:
        "We focused on clarity, credibility, and structure so visitors immediately understand the brand and feel confident taking the next step.",
    },
    {
      challenge: "Explaining Multiple Services Clearly",
      solution:
        "We simplified information and organised the website so each vertical feels clear without overwhelming the visitor.",
    },
    {
      challenge: "Reducing Friction in Onboarding",
      solution:
        "We created clearer steps and calls to action, helping prospects move forward with less confusion and fewer drop-offs.",
    },
    {
      challenge: "Making Documents Easy to Find",
      solution:
        "We built a central resource hub so disclosures and supporting material are accessible and easy to reference.",
    },
    {
      challenge: "Keeping Market Updates Understandable",
      solution:
        "We improved how market information is presented so visitors can quickly get a snapshot without feeling lost.",
    },
  ];

  return (
    <>
      <Helmet>
        {/* ✅ Basic SEO Meta */}
        <title>Bullseyes Investments Case Study | Improving Clarity and Investor Experience</title>
        <meta
          name="description"
          content="See how ShiftDeploy helped Bullseyes Investments improve website clarity, investor experience, and onboarding flow with a modern, trust-first corporate site."
        />
        <meta
          name="keywords"
          content="Bullseyes Investments case study, financial services website, investor experience, onboarding flow, ShiftDeploy"
        />

        {/* ✅ Open Graph / Social Preview */}
        <meta property="og:title" content="Bullseyes Investments Case Study | Improving Clarity and Investor Experience" />
        <meta
          property="og:description"
          content="See how ShiftDeploy helped Bullseyes Investments improve website clarity, investor experience, and onboarding flow with a modern, trust-first corporate site."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.shiftdeploy.com/CaseStudies/BullseyesInvestmentsCase" />
        <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bullseyes Investments Case Study | Improving Clarity and Investor Experience" />
        <meta
          name="twitter:description"
          content="Discover how ShiftDeploy helped Bullseyes Investments improve investor experience, clarity, and onboarding flows with a modern website."
        />
        <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
      </Helmet>

      <Navigation isDarkBg={true} />
      {showLoader ? (
        <ShiftDeployLoader />
      ) : (
        <div className="bg-gray-50 min-h-screen">
          {/* Hero Section  */}
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
                    Case Study - Bullseyes Investments
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight"
                >
                  A clearer, more{" "}
                  <span className="text-primaryOrange">trusted</span>
                  <br />
                  website for investors
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="text-lg sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                  ShiftDeploy helped{" "}
                  <span className="text-primaryOrange font-semibold">
                    Bullseyes Investments Pvt. Ltd.
                  </span>{" "}
                  improve website clarity, present services more simply, and create a smoother path
                  for prospects to take action.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="pt-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-primaryBlue mb-4 sm:mb-8">
                  Project Overview
                </h2>
                <p className="sm:text-xl text-gray-700 leading-relaxed p-2">
                  ShiftDeploy partnered with{" "}
                  <span className="text-primaryOrange font-semibold">
                    Bullseyes Investments Pvt. Ltd.
                  </span>{" "}
                  to create a modern corporate website that feels trustworthy, is easy to navigate,
                  and guides prospects toward onboarding. The focus was on clarity, credibility, and
                  an experience that works well across devices.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 mb-8 sm:mb-16 p-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4 sm:mb-6">
                    Project Scope
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        A trust-first corporate website that clearly presents the business
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Clear onboarding guidance so prospects know what to do next
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        Service sections organised across Investments, Realtors, and Insurance
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        A central resources area for documents and investor information
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primaryOrange rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">
                        A structure designed for future improvements and content expansion
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        6 weeks
                      </div>
                      <div className="text-gray-600">Delivery Window</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        4 phases
                      </div>
                      <div className="text-gray-600">Milestones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-primaryOrange mb-2">
                        SEO-ready
                      </div>
                      <div className="text-gray-600">Structure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        100%
                      </div>
                      <div className="text-gray-600">Responsive</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
                    Key Highlights
                  </h3>
                  <div
                    style={{
                      backgroundImage: `url('https://res.cloudinary.com/dbazbq7u9/image/upload/v1764979474/keystatic_elynmv.png')`,
                      backgroundSize: '110%',
                      backgroundPosition: 'center',
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
                  Behind the Build
                </h2>
                <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  We focused on clarity, maintainability, and a smooth experience. The goal wasn’t
                  “more tech” it was a website that works better for prospects and the internal team.
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
                  What We Improved
                </h2>
                <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  The work focused on making the website easier to understand, easier to use, and
                  more effective at guiding visitors toward action.
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
                  A simple, structured process to move quickly while keeping the quality bar high.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {implementationPhases.map((phase, index) => (
                  <>
                    {index == 5 ? (
                      <div className="bg-primaryBlue rounded-2xl p-6 sm:p-10 shadow-xl text-left text-white space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                          Ongoing Improvements & Maintanence (ShiftFlow)
                        </h2>
                        <p className="md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                          After launch, we continue improving the site based on what users do in
                          the real world. Small, consistent upgrades help protect performance and
                          make the experience better over time.
                        </p>
                        <Link
                          to="/ContactUs"
                          className="inline-flex items-center px-4 sm:px-8 py-4 rounded-xl font-semibold bg-primaryOrange hover:bg-toOrange text-white sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          <span>Talk About Ongoing Support</span>
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
                            <h4 className="text-lg font-semibold text-primaryBlue mb-3">
                              Key Deliverables:
                            </h4>
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
                  The focus was to reduce confusion, improve trust, and make the next steps obvious
                  for a first-time visitor.
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
                  The new website improved how Bullseyes presents its services, made onboarding
                  steps clearer, and helped visitors find key information faster.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {[
                  { metric: "Clearer", label: "service navigation", icon: TrendingUp },
                  { metric: "Faster", label: "access to key pages", icon: Zap },
                  { metric: "Simpler", label: "onboarding steps", icon: CreditCard },
                  { metric: "Always on", label: "information access", icon: Shield },
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
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">
                      For Bullseyes Investments
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          A more professional online presence that builds trust with first-time visitors
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          Clearer journeys to key actions like contacting the team and starting onboarding
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          A structure that supports future improvements without needing a full redesign
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">For Investors</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          Easier access to the information needed to make decisions
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          A simpler, clearer experience across mobile and desktop
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">
                          Clear onboarding guidance to reduce confusion and drop-offs
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
                  Want a clearer, faster website that converts better?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  If your website feels hard to understand, slow to navigate, or unclear about next
                  steps, we can help. We focus on clarity, performance, and user journeys so your
                  site becomes a practical growth tool.
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
            </div>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
};

export default BullsEyesCase;
