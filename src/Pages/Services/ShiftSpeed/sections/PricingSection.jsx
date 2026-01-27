import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Check, Zap, Crown, Building2, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    id: "audit",
    name: "Vitals Audit",
    price: "$297",
    description: "Find exactly why patients leave your site before booking.",
    highlighted: false,
    features: [
      "Mobile speed score diagnosis (Google standard)",
      "Clear explanation of what’s slowing your site",
      "Top 3 fixes that will deliver the fastest improvement",
      "Comparison with faster competing clinics",
      "Recorded walkthrough explaining everything in plain English",
      "Action plan you can use with any developer",
    ],
    cta: "Get Your Audit",
    icon: Zap,
  },
  {
    id: "protocol",
    name: "Rapid Load Protocol",
    price: "$1,497",
    description: "We fix everything and make your site load instantly on mobile.",
    highlighted: true,
    badge: "Most Popular",
    outcome: "Sub-2 Second Mobile Load Time",
    features: [
      "Everything included in Vitals Audit",
      "Mobile-first speed fixes applied site-wide",
      "Booking & service pages optimized first",
      "Removal of elements slowing patient access",
      "Visible before/after speed proof",
      "Google performance standards fully passed",
      "30 days of post-fix monitoring & support",
    ],
    cta: "Start Optimization",
    icon: Crown,
  },
  {
    id: "dominator",
    name: "Speed Dominator",
    price: "$2,997",
    description: "Permanent speed advantage for growing and multi-location clinics.",
    highlighted: false,
    features: [
      "Everything included in Rapid Load Protocol",
      "Performance optimization across all locations",
      "Instant load experience for returning patients",
      "Advanced protection against future slowdowns",
      "Ongoing speed monitoring & alerts",
      "Quarterly performance tune-ups",
      "Priority response if issues ever appear",
    ],
    cta: "Contact Sales",
    icon: Building2,
  },
];



 const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
 
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBlue mb-6">
            Performance{" "}
            <span className="text-primaryOrange">as a Service</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the level of optimization that matches your business goals. 
            Every package comes with our satisfaction guarantee.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primaryBlue text-white border-2 border-primaryOrange shadow-glow lg:scale-105 h-fit"
                  : "border-2 shadow-xl h-fit hover:border-primaryOrange/30 "
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primaryOrange text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.highlighted
                    ? "bg-primaryOrange/20"
                    : "bg-primaryOrange/10"
                }`}
              >
                <plan.icon className={`w-7 h-7 ${plan.highlighted ? "text-primaryOrange" : "text-primaryOrange"}`} />
              </div>

              {/* Plan Name & Price */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-primaryBlue"
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span
                  className={`text-4xl font-black ${
                    plan.highlighted ? "text-white" : "text-primaryBlue"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  one-time
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {plan.description}
              </p>

              {/* Outcome Badge */}
              {plan.outcome && (
                <div className="mb-6 p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                  <p className="text-green-400 text-sm font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    {plan.outcome}
                  </p>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlighted
                          ? "bg-primaryOrange/30"
                          : "bg-primaryOrange/10"
                      }`}
                    >
                      <Check className="w-3 h-3 text-primaryOrange" />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full mt-12 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 flex items-center justify-center gap-x-2  font-bold transition-all group text-md  ${
                  plan.highlighted
                    ? "bg-primaryOrange sm:hover:bg-toOrange "
                    : "bg-primaryBlue hover:bg-primaryBlue-light text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primaryBlue rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            100% Performance Boost Guarantee
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            If we don't measurably improve your Core Web Vitals and load time, 
            we'll refund your investment in full. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


export default PricingSection