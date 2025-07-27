import { CheckCircle, Clock, Code, Monitor, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 2: The Phases
function PhasesSection() {
  const [visiblePhases, setVisiblePhases] = useState([])
  const sectionRef = useRef(null)
  const phaseRefs = useRef([])

  const phases = [
    {
      number: "01",
      title: "Understand",
      timeline: "Days 1-5",
      fear: "They won't really understand our unique challenges",
      promise:
        "Deep-dive discovery that maps every technical pain point, business constraint, and growth goal before we write a single line of code.",
      whatHappens: [
        "Technical architecture audit",
        "Stakeholder alignment sessions",
        "Risk assessment and mitigation planning",
        "Success metrics definition",
      ],
      approval: "Complete understanding document",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      number: "02",
      title: "Engineer",
      timeline: "Weeks 1-6 (varies by scope)",
      fear: "They'll build something that doesn't actually solve our problems",
      promise: "Iterative development with weekly demos and your approval at every major milestone.",
      whatHappens: [
        "Modular development approach",
        "Weekly progress demonstrations",
        "Real-time collaboration and feedback",
        "Quality checkpoints at 25%, 50%, 75% completion",
      ],
      approval: "Each development milestone",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      number: "03",
      title: "Deploy & Monitor",
      timeline: "Days 1-7 post-development",
      fear: "They'll disappear after launch when things inevitably break",
      promise: "Staged deployment with 24/7 monitoring and immediate issue resolution during critical launch period.",
      whatHappens: [
        "Staged rollout with rollback capabilities",
        "Performance monitoring setup",
        "Team training and knowledge transfer",
        "30-day intensive support period",
      ],
      approval: "Production deployment sign-off",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      number: "04",
      title: "Evolve & Support",
      timeline: "Ongoing (your choice)",
      fear: "We'll be stuck with code we can't maintain or improve",
      promise: "Complete documentation, team training, and optional ongoing partnership—but zero vendor lock-in.",
      whatHappens: [
        "Comprehensive documentation handover",
        "Team training and knowledge transfer",
        "Optional ongoing optimization and support",
        "Full source code and system ownership transfer",
      ],
      approval: "Support level and duration",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
  ]

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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Four phases.
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zero surprises.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The methodology that eliminates technical project anxiety
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div
              key={index}
              ref={(el) => (phaseRefs.current[index] = el)}
              data-index={index}
              className={`transition-all duration-700 transform ${
                visiblePhases.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className={`bg-gradient-to-br ${phase.bgColor} rounded-3xl p-8 border border-white/50`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Phase Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mr-4`}
                      >
                        <div className="text-white">{phase.icon}</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-300">{phase.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-6">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-medium">{phase.timeline}</span>
                    </div>
                  </div>

                  {/* Fear & Promise */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Fear */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                      <h4 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">Your Fear:</h4>
                      <p className="text-red-700 italic">"{phase.fear}"</p>
                    </div>

                    {/* Promise */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
                      <h4 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                        Our Promise:
                      </h4>
                      <p className="text-green-700 font-medium">{phase.promise}</p>
                    </div>

                    {/* What Happens */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                        What Happens:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {phase.whatHappens.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm text-gray-500 mb-1">Client Approval Required:</p>
                        <p className="text-gray-800 font-semibold">{phase.approval}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhasesSection