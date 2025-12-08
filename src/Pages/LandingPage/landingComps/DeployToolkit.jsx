import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wrench,
  Zap,
  Shield,
  Globe,
  Server,
  Database,
  ArrowRight,
  MoveLeft,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  scaleOnHover,
} from "../../../utils/animations";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const DeployToolkit = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [websiteInput, setWebsiteInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formRef = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleIndex = (index) => {
    setActiveIndex(index);
  };
  const tools = [
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Lightning-fast content delivery worldwide with 99.9% uptime guarantee",
      problem:
        "Slow loading times due to centralized servers and long-distance data travel. This frustrates users and hurts SEO rankings.",
      solution:
        "Distributing content across multiple global edge locations drastically reduces latency, ensures faster load times, and improves SEO performance.",
      result: "40% faster loads",
    },
    {
      icon: Server,
      title: "Auto-Scaling Infrastructure",
      description:
        "Dynamically adjust resources based on demand to optimize performance",
      problem:
        "Traffic spikes can overwhelm fixed servers, causing downtime and slow response.",
      solution:
        "Our system automatically adjusts capacity in real time, ensuring smooth scaling during peak loads.",
      result: "99.9% uptime",
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "High-performance database solutions with automated backups",
      problem:
        "Unoptimized queries and slow retrieval bottleneck applications.",
      solution:
        "We apply indexing, caching, and optimized queries for faster data access.",
      result: "2x faster queries",
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description:
        "Enterprise-grade security measures to protect your applications",
      problem: "Apps face risks like SQL injection, DDoS, and data leaks.",
      solution:
        "We deploy multi-layered firewalls, encryption, and audits for strong protection.",
      result: "70% fewer risks",
    },
    {
      icon: Zap,
      title: "Performance Monitoring",
      description:
        "Real-time monitoring and alerting for optimal application health",
      problem: "Issues stay hidden until customers complain.",
      solution: "We use dashboards + instant alerts for proactive fixes.",
      result: "90% faster fixes",
    },
    {
      icon: Wrench,
      title: "DevOps Automation",
      description:
        "Streamlined workflows with CI/CD pipelines and automated testing",
      problem: "Manual deployment is slow and error-prone.",
      solution:
        "Automated pipelines & testing enable fast and reliable delivery.",
      result: "60% faster deploys",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // Remove https:// or http:// then validate domain
    const domain = websiteInput.replace(/^https?:\/\//, "").trim();
    const domainRegex = /^[a-zA-Z0-9.-]+\.(com|pk|net|org|io|co|dev|app)$/i;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!domainRegex.test(domain)) {
      setMessage(
        "Please enter a valid domain (like example.com or example.pk)"
      );
      return;
    }

    if (!emailRegex.test(emailInput)) {
      setMessage("Please enter a valid email address");
      return;
    }

    console.log("Domain:", domain, "Email:", emailInput);

    setLoading(true);

    emailjs
      .send(
        "service_tvail12",
        "template_5vz2597",
        {
          website: domain,
          email: emailInput,
          current_date: new Date().toLocaleDateString(),
        },
        "QvcGHkk74en4u55cN"
      )
      .then(() => {
        setMessage(
          "Website audit request sent successfully! Check your email for the report in 2 hours"
        );
        setLoading(false);
        setWebsiteInput("");
        setEmailInput("");
      })
      .catch(() => {
        setMessage("Failed to send. Please try again.");
      })
      .finally(() => setLoading(false));
  };
  return (
    <section
      id="deploy-toolkit"
      className="pt-12  text-textColor bg-gradient-to-b from-gray-50 to-gray-50"
    >
      <div className=" mx-auto flex flex-col justify-center items-center ">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6 leading-tight  "
          >
            Our
            <span className="text-primaryOrange pl-3">Deploy ToolKit</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="sm:text-lg  max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6  leading-relaxed px-4 sm:px-0 text-gray-700"
          >
            Our comprehensive Deploy Toolkit includes everything you need to
            build, deploy, and scale modern applications with confidence.
          </motion.p>
        </motion.div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl ">
          {tools.map((tool, index) => (
            <motion.div key={index} variants={scaleOnHover}>
              <div className="bg-white min-h-[350px] sm:min-h-[280px] lg:min-h-[300px] border sm:border-gray-200 rounded-3xl p-6 pb-12   sm:hover:shadow-md  transition-all duration-300 group relative overflow-hidden">
                <h1 className="text-2xl font-bold  mb-2 sm:mb-3 lg:mb-4 text-gray-900">
                  {tool.title}
                </h1>
                <p className=" mb-3 sm:mb-4 lg:mb-6 leading-relaxed   sm:text-lg text-gray-700">
                  {tool.description}
                </p>

                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  <div className="flex items-center  space-x-2 sm:space-x-3 ">
                    <div className="w-3 h-3 bg-primaryOrange rounded-full flex-shrink-0" />
                    <span className="text-md ">
                      <span className="text-primaryOrange font-semibold">
                        Problem:
                      </span>
                    </span>
                  </div>
                  <span className="text-gray-700 text-xs sm:text-base">
                    {tool.problem}
                  </span>
                </div>
                {/* this one card animation  */}
                <div
                  className={`w-full   absolute sm:-bottom-20 sm:left-20 bottom-0 left-0 group-hover:left-0 group-hover:bottom-0 text-white text-right ${
                    activeIndex == index && "-bottom-20 left-20"
                  }  transition-all duration-500`}
                  style={{}}
                >
                  <span
                    className={` font-bold bg-primaryBlue sm:px-2 px-4 py-2 inline-block rounded-tl-2xl cursor-pointer ${
                      activeIndex == index && "translate-y-16 translate-x-1/2"
                    }transition-all duration-500`}
                    onClick={() => handleIndex(index)}
                  >
                    Reveal Solution{" "}
                  </span>
                </div>
                {/* explanation card  */}
                <div
                  className={`w-full h-full bg-primaryBlue  absolute  px-6 py-4 text-white rounded-2xl  ${
                    activeIndex == index ? "top-0 left-0" : "-top-96 -left-96"
                  } transition-all duration-500 flex flex-col justify-between`}
                  style={{}}
                >
                  <div className="flex flex-col gap-y-2">
                    <h1
                      className={` font-bold   inline-block  cursor-pointer`}
                      onClick={() => handleIndex(null)}
                    >
                      {" "}
                      <MoveLeft />
                    </h1>

                    <span className=" font-bold text-xl">Our Solution</span>
                    {tool.solution}
                  </div>

                  <div className="w-full text-right text-xl font-bold ">
                    {tool.result}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to={"/deploy-toolkit"}
          className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm mb-12 group "
        >
          Why We’re Different
          <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 group-hover:ml-3 transition-all duration-300" />
        </Link>

        {/* Problem-solving CTA */}

        <div className="w-full  bg-gradient-to-br from-primaryBlue to-toBlue text-white ">
          <div className="w-full  p-4 sm:p-8 lg:p-16  drop-shadow-sm flex lg:flex-row flex-col   max-w-7xl mx-auto gap-4 sm:gap-6">
            <div className="flex-1 ">
              <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold  mb-4 sm:mb-6 lg:mb-8 leading-normal">
                Whether it's containers, CI/CD, or observability <br /> we’ve
                done it for teams like yours.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl  mb-6 sm:mb-8 lg:mb-10 xl:mb-12  mx-auto leading-relaxed">
                Our Deploy Toolkit is designed to solve the most common problems
                businesses face when building and scaling digital products. Let
                us help you overcome technical barriers.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex-1 space-y-8"
              >
                <img
                  src="https://seranking.com/blog/wp-content/uploads/2022/12/Open-Website-Audit-Settings.png"
                  alt=""
                  className="w-full lg:h-[350px] aspect-video object-cover"
                />

                <div className="flex flex-col gap-4">
                  {/* Website Input */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:bg-white rounded-lg sm:rounded-2xl w-full overflow-hidden">
                    <input
                      name="websiteInput"
                      type="text"
                      value={websiteInput}
                      onChange={(e) => setWebsiteInput(e.target.value)}
                      placeholder="Enter your website"
                      className="p-4 outline-none border-none text-textColor h-full sm:rounded-none rounded-lg flex-1"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center sm:bg-white rounded-lg sm:rounded-2xl w-full overflow-hidden gap-y-4">
                    <input
                      name="emailInput"
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="Enter your email"
                      className="p-4 outline-none border-none text-textColor h-full sm:rounded-none rounded-lg flex-1"
                    />
                    <button
                      disabled={loading}
                      className="bg-primaryOrange disabled:bg-gray-600 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-4 rounded-lg sm:rounded-none sm:rounded-r-2xl font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange disabled:hover:bg-slate-600 text-sm sm:w-fit w-full"
                      aria-label="Audit Request Sending Button"
                    >
                      {loading ? (
                        <>
                          Sending request
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </>
                      ) : (
                        <>
                          Send me free audit
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 p-4 sm:p-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center gap-3 ${
                    message.includes("successfully")
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-red-100 text-red-700 border border-red-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${
                      message.includes("successfully")
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {message.includes("successfully") ? "✓" : "!"}
                  </div>
                  {message}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployToolkit;
