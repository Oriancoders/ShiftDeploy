import { useEffect, useRef, useState } from "react"

// Section 3: Team
function TeamSection() {
  const [visibleMembers, setVisibleMembers] = useState([])
  const sectionRef = useRef(null)
  const memberRefs = useRef([])

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Code Architect",
      background: "Built scalable systems for 50M+ users before most people knew what 'scalable' meant.",
      philosophy: "Clean code is a love letter to your future self.",
      funFact: "Debugs faster after his third espresso.",
      avatar: "/placeholder.svg?height=200&width=200",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Sarah Kim",
      role: "UX Translator",
      background: "Bridges the gap between 'what users want' and 'what's actually possible.'",
      philosophy: "If it needs a manual, we failed.",
      funFact: "Has strong opinions about button radius (and she's usually right).",
      avatar: "/placeholder.svg?height=200&width=200",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Marcus Rodriguez",
      role: "Infra Pilot",
      background: "Keeps servers running while everyone else sleeps. DevOps wizard with a talent for automation.",
      philosophy: "If you're doing it twice, automate it.",
      funFact: "Once prevented a major outage with a single bash script at 2 AM.",
      avatar: "/placeholder.svg?height=200&width=200",
      gradient: "from-green-500 to-teal-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleMembers((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 },
    )

    memberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We are operators,
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              not spectators.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the humans who turn coffee into code and problems into possibilities. We're not just developers—we're
            digital craftspeople who happen to speak fluent JavaScript.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (memberRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleMembers.includes(index) ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1`}>
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-full`}
                  >
                    {member.role}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{member.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.background}</p>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-sm text-gray-500 mb-2">Philosophy:</p>
                    <p className="text-gray-700 italic">"{member.philosophy}"</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500 mb-1">Fun fact:</p>
                    <p className="text-gray-700 text-sm">{member.funFact}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 italic">We're small enough to care, experienced enough to deliver.</p>
        </div>
      </div>
    </section>
  )
}

export default TeamSection