import { ArrowRight, CheckCircle, Clock, Code, Lightbulb, Monitor, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
      icon: <Target className="w-6 sm:w-8 h-6 sm:h-8" />,
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
      icon: <Lightbulb className="w-6 sm:w-8 h-6 sm:h-8" />,
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
      icon: <Code className="w-6 sm:w-8 h-6 sm:h-8" />,
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
      icon: <Monitor className="w-6 sm:w-8 h-6 sm:h-8" />,
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
      icon: <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />,
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
            }, index * 20)
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
    <section ref={sectionRef} className="pb-12 pt-12 sm:pt-24 bg-gradient-to-br from-white via-gray-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Five phases <br />
            <span className="text-primaryOrange">
              Zero surprises
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
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
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >

              <div className={`relative z-10 flex md:flex-row flex-col justify-between rounded-3xl p-6 shadow-md sm:hover:shadow-lg border border-gray-100 bg-white transition-all`}>
                {/* Header */}
                {/* Left side: Phase number, title, timeline, what happens */}
                <div className="min-w-[40%]">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`w-12 md:w-14 h-12 md:h-14 rounded-xl flex items-center justify-center mr-4 bg-primaryBlue shadow`}>
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
                    <h4 className="sm:text-lg font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      What Happens
                    </h4>
                    <ul className="space-y-2">
                      {phase.whatHappens.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-primaryOrange mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Right side: Fear & Promise, Approval */}
                <div className="md:border-l border-gray-200 md:px-10 flex flex-col space-y-4 md:space-y-6">
                  {/* Approval */}
                  <div className=" pt-3 mb-4">
                    <p className="text-lg text-gray-500 mb-1">Client Approval Required:</p>
                    <p className="text-gray-800 font-semibold text-xs sm:text-sm">{phase.approval}</p>
                  </div>
                  {/* Fear & Promise */}
                  <div className="flex items-start  rounded-lg ">

                    <div>
                      <h4 className="sm:text-lg font-semibold text-primaryOrange uppercase mb-1">Your Fear</h4>
                      <p className="text-primaryOrange italic text-xs sm:text-sm">"{phase.fear}"</p>
                    </div>
                  </div>
                  <div className="flex items-start rounded-lg ">

                    <div>
                      <h4 className="sm:text-lg font-semibold text-gray-900 uppercase mb-1">Our Promise</h4>
                      <p className="text-primaryBlue font-medium text-xs sm:text-sm">{phase.promise}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}

        <div className="text-center mt-16 sm:mt-20 space-y-4 sm:space-y-6 ">
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">And Thats How We Win</p>
          <p className="sm:text-lg text-gray-600 italic max-w-4xl mx-auto">
            You’ve seen the journey from brainstorming to breakthrough.
            Now let’s turn your vision into reality and build something remarkable together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto ">
            <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Launch Your Project
            </Link >

            <Link to={"/missions"}

              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhasesSection