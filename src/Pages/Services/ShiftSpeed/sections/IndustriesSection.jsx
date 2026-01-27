import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Stethoscope, Scale, Landmark, Calendar, FileText, Shield, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "dental",
    icon: Stethoscope,
    label: "Dental Clinics",
    title: "Load Booking Forms Instantly",
    description:
      "Your patients are searching for emergency dental care on their phones. If your booking form takes 5 seconds to load, they've already moved on to your competitor down the street.",
    benefits: [
      "Instant booking form loading for higher conversion",
      "High-res before/after case studies without lag",
      "Mobile-first optimization for on-the-go patients",
      "Integration-friendly for Dentrix, Open Dental, etc.",
    ],
    stat: "3.2x",
    statLabel: "More online bookings",
  },
  {
    id: "legal",
    icon: Scale,
    label: "Law Firms",
    title: "Create Immediate Authority",
    description:
      "When someone needs a lawyer, they're stressed and making quick decisions. A slow, glitchy website screams 'amateur.' Your site should load faster than they can blink.",
    benefits: [
      "Zero layout shifts while clients read practice areas",
      "Fast-loading attorney profiles and credentials",
      "Instant contact form submission with confirmation",
      "SEO-optimized for local legal searches",
    ],
    stat: "47%",
    statLabel: "Lower bounce rate",
  },
  {
    id: "finance",
    icon: Landmark,
    label: "Financial Services",
    title: "Security and Speed Hand-in-Hand",
    description:
      "In finance, milliseconds matter. Clients expect instant access to portals, calculators, and secure documents. Slow performance erodes trust before you even say hello.",
    benefits: [
      "Zero-downtime architecture with 99.99% uptime",
      "Secure, fast-loading client portals",
      "Optimized calculators and interactive tools",
      "Compliance-ready performance monitoring",
    ],
    stat: "99.99%",
    statLabel: "Uptime guaranteed",
  },
];

export const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState("dental");
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
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlue mb-6">
            Engineered for{" "}
            <span className="text-primaryOrange">High-Value Service Pages</span>
          </h2>
          <p className="text-lg text-primaryBlue/60 leading-relaxed">
            We specialize in industries where trust is everything. Speed is 
            your first impression—make it count.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === industry.id
                  ? "bg-primaryOrange text-white shadow-glow"
                  : "bg-primaryBlue/10 text-primaryBlue/70 hover:bg-primaryBlue/15 hover:text-primaryBlue"
              }`}
            >
              <industry.icon className="w-5 h-5" />
              {industry.label}
            </button>
          ))}
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

            <button
              onClick={() => scrollToSection("#pricing")}
                className="bg-primaryOrange mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl  mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit group"

            >
              Optimize My {activeIndustry.label.slice(0, -1)} Site
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
