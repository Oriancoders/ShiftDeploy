import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Timer, ShieldAlert, TrendingDown } from "lucide-react";

const problemCards = [
  {
    icon: AlertTriangle,
    title: "The Google Core Web Vitals Update",
    description:
      "Google now penalizes sites with poor LCP (Largest Contentful Paint). If your site takes >2.5s to render, you are invisible in search results.",
    stat: "2.5s",
    statLabel: "Max LCP for Good Score",
    color: "bg-red-500/10 text-red-500 border-red-500/20",
  },
  {
    icon: Timer,
    title: "The Mobile Patience Threshold",
    description:
      "53% of visits are abandoned if a mobile site takes longer than 3 seconds to load. You are paying for ads that bounce before they even see your offer.",
    stat: "53%",
    statLabel: "Bounce Rate After 3s",
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  },
  {
    icon: ShieldAlert,
    title: "Trust = Speed",
    description:
      "In high-stakes industries like Dentistry and Law, a glitchy site signals incompetence. Speed is your first trust signal.",
    stat: "88%",
    statLabel: "Won't Return to Slow Site",
    color: "bg-orange/10 text-orange border-orange/20",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="section-padding bg-slate" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-full mb-6">
            <TrendingDown className="w-4 h-4" />
            <span className="text-sm font-semibold">The Silent Revenue Killer</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
            Why "Good Enough" is{" "}
            <span className="text-orange">Failing Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your competitors are already investing in performance. Every millisecond 
            you lose is a customer they gain. Here's what's really happening behind the scenes.
          </p>
        </motion.div>

        {/* Problem Cards - Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium p-8 group hover:border-orange/30 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.color} border mb-6`}
              >
                <card.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Stat */}
              <div className="pt-6 border-t border-border">
                <div className="text-3xl font-black text-navy">{card.stat}</div>
                <div className="text-sm text-muted-foreground">{card.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-navy rounded-2xl p-8 md:p-10 text-center"
        >
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            <span className="text-orange font-bold">The bottom line:</span> If your page takes 
            more than 2 seconds to load, you're losing leads to competitors who invested in speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;