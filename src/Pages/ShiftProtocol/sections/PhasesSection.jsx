import { CheckCircle, Clock, Code, Lightbulb, Monitor, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Section 2: The Phases
function PhasesSection() {
  const [visiblePhases, setVisiblePhases] = useState([])
  const sectionRef = useRef(null)
  const phaseRefs = useRef([])

  const phases = [
  {
    number: "01",
    title: "Discover & Align",
    timeline: "Days 1–5",
    fear: "They won’t fully grasp our unique needs and priorities.",
    promise:
      "We map every challenge, constraint, and growth objective before touching code—so nothing gets lost in translation.",
    whatHappens: [
      "Stakeholder alignment sessions",
      "Technical & business audit",
      "Risk and dependency mapping",
      "Clear success criteria definition",
    ],
    approval: "Discovery blueprint sign-off",
    icon: <Target className="w-8 h-8" />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    number: "02",
    title: "Design & Blueprint",
    timeline: "Week 1–2",
    fear: "They’ll propose something that looks good on paper but won’t scale in practice.",
    promise:
      "Our blueprints balance innovation with security, scalability, and long-term sustainability.",
    whatHappens: [
      "System architecture design",
      "Technology stack selection",
      "UX-first workflow mapping",
      "Integration strategy planning",
    ],
    approval: "Solution design document",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-50 to-orange-50",
  },
  {
    number: "03",
    title: "Engineer & Validate",
    timeline: "Weeks 2–8 (scope-dependent)",
    fear: "They’ll build something that doesn’t actually solve our problems.",
    promise:
      "Agile sprints with transparent demos and your approval at every key milestone—no surprises.",
    whatHappens: [
      "Modular, test-driven development",
      "Weekly progress demonstrations",
      "Feedback-driven iterations",
      "Quality checks at 25%, 50%, 75% completion",
    ],
    approval: "Each milestone demo",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    number: "04",
    title: "Deploy & Safeguard",
    timeline: "Days 1–7 post-build",
    fear: "They’ll launch it and disappear when issues arise.",
    promise:
      "We manage deployment like a mission launch—with monitoring, safeguards, and immediate response if needed.",
    whatHappens: [
      "Staged rollout with rollback options",
      "Performance & error monitoring setup",
      "Knowledge transfer workshops",
      "30-day intensive post-launch support",
    ],
    approval: "Production deployment sign-off",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    number: "05",
    title: "Evolve & Support",
    timeline: "Ongoing (your choice)",
    fear: "We’ll be locked in with no flexibility to adapt or maintain.",
    promise:
      "You get full ownership, documentation, and freedom—plus optional long-term partnership for continuous growth.",
    whatHappens: [
      "Comprehensive documentation handover",
      "Team enablement & training",
      "Optional ongoing optimization",
      "Full source code and ownership transfer",
    ],
    approval: "Support plan agreement",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisiblePhases((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 },
    )

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Five phases <br/>
            <span className="text-primaryOrange">
              Zero surprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The methodology that eliminates technical project anxiety
          </p>
        </div>

        <div className="flex flex-col gap-12  mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              ref={(el) => (phaseRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, y: 50 }}
              animate={visiblePhases.includes(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
  
              <div className={`relative z-10 flex justify-between rounded-3xl p-6 shadow-lg border border-gray-100 bg-white transition-all`}>
                {/* Header */}
                {/* Left side: Phase number, title, timeline, what happens */}
                <div className="min-w-[40%]">
                  <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 bg-primaryBlue shadow`}>
                    <span className="text-white">{phase.icon}</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-400">{phase.number}</div>
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                  </div>
                </div>
                {/* Timeline */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                    <Clock className="w-4 h-4 mr-1" />
                    {phase.timeline}
                  </span>
                </div>
                {/* What Happens */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    What Happens
                  </h4>
                  <ul className="space-y-2">
                    {phase.whatHappens.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
                {/* Right side: Fear & Promise, Approval */}
                <div className="border-l border-gray-200 px-10 flex flex-col justify-between">
                  {/* Approval */}
                <div className=" pt-3 mb-4">
                  <p className="text-xs text-gray-500 mb-1">Client Approval Required:</p>
                  <p className="text-gray-800 font-semibold text-sm">{phase.approval}</p>
                </div>
                {/* Fear & Promise */}
                  <div className="flex items-start bg-red-50 rounded-lg p-3">
                    <span>
                      <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z" /></svg>
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-red-600 uppercase mb-1">Your Fear</h4>
                      <p className="text-red-700 italic text-sm">"{phase.fear}"</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg p-3">
                    <span>
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-green-600 uppercase mb-1">Our Promise</h4>
                      <p className="text-green-700 font-medium text-sm">{phase.promise}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhasesSection