import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {

  ArrowRight,
  MoveLeft,
  Star,
} from "lucide-react";
import {
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
    title: "Slow Website Performance",
    description:
      "Your website takes too long to load, especially on mobile, and users leave before they engage.",
    problem:
      "Slow load times increase bounce rates, hurt search rankings, and quietly reduce conversions and ad ROI.",
    solution:
      "This is where ShiftSpeed comes in. We start with a deep performance audit and fix real bottlenecks at code and page level to improve Core Web Vitals and load times.",
    result: "30 to 60% faster load times",
  },
  {
    title: "Low Conversion Rates",
    description:
      "People visit your site, but they do not book, enquire, or sign up at the rate they should.",
    problem:
      "Unclear messaging, weak trust signals, and friction in key pages stop users from making decisions.",
    solution:
      "After speed is fixed, Our ShiftConvert model is designed to focus on user behaviour, trust, and clarity. We improve layouts, CTAs, and funnels to increase conversions.",
    result: "20 to 100% more leads",
  },
  {
    title: "Poor Core Web Vitals and SEO Impact",
    description:
      "Your site struggles with Google’s performance metrics and loses visibility as a result.",
    problem:
      "Failing Core Web Vitals lowers rankings and limits organic traffic growth, even with good content.",
    solution:
      "Our ShiftSpeed model directly targets these issues by optimising rendering, reducing JavaScript weight, and improving real user metrics, not just lab scores.",
    result: "Stronger rankings and visibility",
  },
  {
    title: "Outdated or Hard to Improve Website",
    description:
      "Your website works, but it is difficult to change, optimise, or scale as the business grows.",
    problem:
      "Older builds create technical debt and force expensive redesigns instead of continuous improvement.",
    solution:
      "Here the ShiftBuild model creates performance-first websites that are modular, flexible, and designed to support ongoing optimisation over time.",
    result: "Future-ready website foundation",
  },
  {
    title: "Performance Drops After Launch",
    description:
      "Even well-built websites slowly get slower, riskier, and harder to manage without oversight.",
    problem:
      "Updates, plugins, and small changes add up, causing performance and stability to decline month by month.",
    solution:
      "ShiftFlow keeps your site healthy with proactive monitoring, regular performance checks, and continuous improvements.",
    result: "Stable long-term performance",
  },
  {
    title: "No Clear Technical Ownership",
    description:
      "When something breaks or numbers drop, no one takes full responsibility for fixing it properly.",
    problem:
      "Multiple vendors lead to delays, guesswork, and missed opportunities for improvement.",
    solution:
      "ShiftDeploy brings everything together. Through ShiftSpeed, ShiftConvert, ShiftBuild, and ShiftFlow, we own performance and conversion outcomes end to end.",
    result: "One accountable expert team",
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
          "Website audit request sent successfully! Check your email for the report within 24 hours"
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
          <motion.h2 className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6">
            What
            <span className="text-primaryOrange pl-3">We Shift</span>
          </motion.h2>

          <motion.p className="sm:text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 leading-relaxed px-4 sm:px-0 text-gray-700">
            We focus on fixing the performance and conversion problems that quietly
            cost businesses traffic, trust, and revenue.
          </motion.p>

        </motion.div>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[80%]">
          {tools.map((tool, index) => (
            <motion.div key={index} variants={scaleOnHover}>
              <div className="bg-white min-h-[350px] sm:min-h-[280px] lg:min-h-[350px] border sm:border-gray-200 rounded-3xl p-6 pb-12   sm:hover:shadow-md  transition-all duration-300 group relative overflow-hidden">
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
                  className={`w-full   absolute sm:-bottom-20 sm:left-20 bottom-0 left-0 group-hover:left-0 group-hover:bottom-0 text-white text-right ${activeIndex == index && "-bottom-20 left-20"
                    }  transition-all duration-500`}
                  style={{}}
                >
                  <span
                    className={` font-bold bg-primaryBlue sm:px-2 px-4 py-2 inline-block rounded-tl-2xl cursor-pointer ${activeIndex == index && "translate-y-16 translate-x-1/2"
                      }transition-all duration-500`}
                    onClick={() => handleIndex(index)}
                  >
                    Reveal Solution{" "}
                  </span>
                </div>
                {/* explanation card  */}
                <div
                  className={`w-full h-full bg-primaryBlue  absolute  px-6 py-4 text-white rounded-2xl  ${activeIndex == index ? "top-0 left-0" : "-top-96 -left-96"
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
          to={"/insideShiftDeploy"}
          className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm mb-12 group "
        >
           Why ShiftDeploy 
          <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 group-hover:ml-3 transition-all duration-300" />
        </Link>

        {/* Problem-solving CTA */}

        <section id="problem-solving" className="w-full  bg-gradient-to-br from-primaryBlue to-toBlue text-white ">
          <div className="w-full  p-4 sm:p-8 lg:p-16  drop-shadow-sm flex lg:flex-row flex-col  2xl:max-w-[90%] max-w-7xl mx-auto  gap-10">
            <div className="flex-1 ">
              <h1 className="text-xxl sm:text-2xl 2xl:text-3xl font-bold  mb-4 sm:mb-6 leading-normal">
                If your website is slow, underperforming, or not converting.
                We’ve fixed this problem before.

              </h1>
              <p className="text-sm sm:text-base 2xl:text-xl mb-6 sm:mb-8  mx-auto leading-relaxed">
                We help businesses identify performance bottlenecks, fix conversion leaks,
                and build websites that support long-term growth, not just launch and decay.

              </p>

               
        {/* Content */}
        <div className="relative  p-6 2xl:p-12  text-center text-white bg-white/10 backdrop-blur-lg w-[90%] w-full sm:w-fit mx-auto rounded-2xl">


          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 2xl:w-6 h-4 2xl:h-6 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="2xl:text-xl italic leading-relaxed mb-8 max-w-4xl mx-auto text-white">
            “Shift Deploy is highly recommended …. they have consistently met deadlines, and their after sales service is
            outstanding!”
          </blockquote>

          <hr className="border-t border-white/20 " />
          <div className="flex sm:flex-row flex-col gap-4 2xl:gap-7 justify-evenly items-center w-full pt-6 2xl:pt-10 ">
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C5103AQHbnRvtGSPXEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562495944539?e=1771459200&v=beta&t=PjF3rjFdmQkUD0_Ucebz1nlWhlUU3sdVKA0jR22yfKE"
                alt="Kamran Abbas"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-2 ring-white/30 object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-md 2xl:text-lg leading-tight">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    Kamran Abbas
                  </a>
                </div>
                <div className="text-white/75 text-sm 2xl:text-base">
                  Chief Strategist at Bullseye Investment Private Limited
                </div>
              </div>
            </div>
            {/* Bottom-left CTA */}

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
              target="_blank"
              rel="noreferrer"
              className="sm:w-fit w-full  inline-flex items-center justify-center gap-2 bg-primaryOrange hover:bg-toOrange border border-white/20 text-white px-4 sm:px-5 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="flex-1 text-sm 2xl:text-md">Visit Source</span>
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </a>
          </div>

        </div>
            </div>

            <div className="flex flex-col gap-6">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex-1 space-y-8"
              >
                <img
                  // 1. Cloudinary Optimization (Mobile vs Desktop)
                  srcSet={`
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_600/v1765189190/shiftdeploy_audit_ht8dlu.png 600w,
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1765189190/shiftdeploy_audit_ht8dlu.png 1200w
  `}
                  // 2. Sizes Attribute
                  // "Full width on mobile, but cap it at 1200px wide on desktop"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  // 3. Fallback
                  src="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1765189190/shiftdeploy_audit_ht8dlu.png"
                  alt="ShiftDeploy Audit Report"
                  className="w-full lg:h-[350px] aspect-video object-cover rounded-lg"
                  // 4. Performance Setting (Lazy because it's below the fold)
                  loading="lazy"
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
                  className={`mt-4 p-4 sm:p-5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base flex items-center gap-3 ${message.includes("successfully")
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                    }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${message.includes("successfully")
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
        </section>
      </div>
    </section>
  );
};

export default DeployToolkit;
