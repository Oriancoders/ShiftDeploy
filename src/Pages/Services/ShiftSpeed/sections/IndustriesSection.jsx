import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Stethoscope, Scale, Landmark, Calendar, FileText, Shield, ArrowRight, MapPin, Rocket, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    id: "healthcare",
    icon: Stethoscope,
    label: "Healthcare Practices",
    title: "When Speed Impacts Patient Decisions",
    description:
      "Patients searching for care are often anxious and time-sensitive. If your site or booking flow feels slow or broken, trust is lost instantly.",
    benefits: [
      "Instant appointment and enquiry forms",
      "Fast-loading service and treatment pages",
      "Mobile-first performance for urgent searches",
      "Optimized integrations with booking systems",
    ],
    stat: "2.8x",
    statLabel: "Higher appointment conversions",
  }
  ,
  {
    id: "fintech",
    icon: Landmark,
    label: "FinTech & Financial Platforms",
    title: "Speed Builds Trust Before Branding Does",
    description:
      "In financial products, every delay raises doubt. Clients expect instant access, instant calculations, and instant feedback — without compromising security.",
    benefits: [
      "Fast, secure user dashboards",
      "Optimized calculators and interactive tools",
      "Performance monitoring without downtime",
      "Trust-first speed for high-stakes decisions",
    ],
    stat: "99.99%",
    statLabel: "Performance reliability",
  },
  {
    id: "saas",
    icon: Rocket,
    label: "SaaS & B2B Platforms",
    title: "Performance That Converts Trials into Revenue",
    description:
      "Your buyers judge your product before they ever sign up. Slow landing pages, delayed dashboards, or broken onboarding quietly kill conversions.",
    benefits: [
      "Lightning-fast landing and pricing pages",
      "Optimized onboarding and dashboards",
      "Reduced churn from performance friction",
      "Performance-ready scaling as traffic grows",
    ],
    stat: "34%",
    statLabel: "Higher trial-to-paid conversion",
  }
  ,
  {
    id: "local-services",
    icon: MapPin,
    label: "High-Intent Local Services",
    title: "Win the Click Before Competitors Load",
    description:
      "When users compare providers side-by-side, speed decides who gets contacted first. Slow pages lose leads before your offer is even seen.",
    benefits: [
      "Instant-loading service pages",
      "Fast lead capture on mobile",
      "Optimized for local search performance",
      "Reduced bounce from paid traffic",
    ],
    stat: "41%",
    statLabel: "More inbound leads",
  }

];

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("healthcare");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeIndustry = industries.find((i) => i.id === activeTab);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="industries" className=" py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Engineered for{" "}
            <span className="text-primaryOrange">High-Value Service Pages</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in industries where trust is everything. Speed is
            your first impression—make it count.
          </p>
        </motion.div>

        {/* Tab Navigation - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === industry.id
                ? "bg-primaryOrange text-white shadow-glow"
                : "bg-primaryBlue/10 text-primaryBlue/70 hover:bg-primaryBlue/15 hover:text-primaryBlue"
                }`}
            >
              <industry.icon className="w-5 h-5" />
              {industry.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Navigation - Mobile/Tablet Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:hidden mb-12 relative w-full"
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-4 bg-primaryOrange text-white rounded-xl font-semibold transition-all duration-300 hover:bg-toOrange"
          >
            <div className="flex items-center gap-2">
              <activeIndustry.icon className="w-5 h-5" />
              <span className="text-left">{activeIndustry.label}</span>
            </div>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-primaryOrange rounded-xl shadow-lg z-50 overflow-hidden"
              >
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => {
                      setActiveTab(industry.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-6 py-4 font-semibold transition-all duration-300 border-b last:border-b-0 ${
                      activeTab === industry.id
                        ? "bg-primaryOrange/10 text-primaryOrange"
                        : "text-primaryBlue/70 hover:bg-primaryBlue/5 hover:text-primaryBlue"
                    }`}
                  >
                    <industry.icon className="w-5 h-5" />
                    <span>{industry.label}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primaryOrange/20 text-primaryOrange rounded-full mb-6">
              <activeIndustry.icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{activeIndustry.label}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-primaryBlue mb-4">
              {activeIndustry.title}
            </h3>

            <p className="text-primaryBlue/70 leading-relaxed mb-8">
              {activeIndustry.description}
            </p>

            <ul className="space-y-4 mb-8">
              {activeIndustry.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primaryBlue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primaryBlue" />
                  </div>
                  <span className="text-primaryBlue">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to={"/contactus"}
              
              className="bg-primaryOrange mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl  mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit group text-center"

            >
              Optimize My {activeIndustry.label.slice(0, -1)} Site
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link >
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-primaryBlue rounded-3xl p-8 border border-primaryBlue/10">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <activeIndustry.icon className="w-8 h-8 text-primaryOrange" />
                    <span className="text-white font-semibold">
                      Performance Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-primaryBlue/20 text-primaryBlue text-sm font-semibold rounded-full">
                    Live
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/20  backdrop-blur-md rounded-xl p-4 text-white">
                    <div className="text-4xl font-semibold ">
                      {activeIndustry.stat}
                    </div>
                    <div className=" text-sm mt-1">
                      {activeIndustry.statLabel}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-white">
                    <div className="text-4xl font-semibold ">
                      1.8s
                    </div>
                    <div className=" text-sm mt-1">
                      Avg. Load Time
                    </div>
                  </div>
                </div>

                {/* Mock Graph */}
                <div className="bg-white/20  backdrop-blur-sm text-white rounded-xl p-4 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className=" text-md">Conversion Rate</span>
                    <span className="text-sm font-semibold">+124%</span>
                  </div>
                  <div className="h-24 flex items-end gap-1">
                    {[30, 45, 35, 50, 65, 55, 70, 85, 75, 90, 95, 98].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-toOrange to-primaryOrange rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-primaryBlue rounded-xl p-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 " />
                <div>
                  <div className="font-bold">+42</div>
                  <div className="text-xs">New Bookings</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-primaryBlue rounded-xl p-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 " />
                <div>
                  <div className="font-bold">A+ Grade</div>
                  <div className="text-xs">Security Score</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
