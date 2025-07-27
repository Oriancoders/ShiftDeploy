import { CheckCircle, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 6: Client-Led Case Confirmation
function ClientControlSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const approvalGates = [
    "Discovery Phase: Complete technical audit and project plan",
    "Design Phase: User experience flows and system architecture",
    "Development Milestones: 25%, 50%, 75% completion reviews",
    "Pre-Launch: Full system testing and deployment plan",
    "Launch: Production deployment authorization",
    "Handover: Final documentation and knowledge transfer",
  ]

  const controlPoints = [
    { point: "Budget Control", description: "No work begins without your written approval" },
    { point: "Timeline Control", description: "All deadlines set with your input and agreement" },
    { point: "Quality Control", description: "Nothing ships without your explicit approval" },
    { point: "Scope Control", description: "All changes require your authorization" },
    { point: "Access Control", description: "Full admin access to all systems and code" },
    { point: "Exit Control", description: "Leave anytime with everything you need" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            You approve
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              everything
            </span>
          </h2>
          <p className="text-xl text-gray-600">Client control at every critical decision point</p>
        </div>

        {/* Core Promise */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center mb-16 border border-blue-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Core Promise</h3>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Every step reviewed by you. Every delivery approved by you. Every major decision requires your explicit
              sign-off before we proceed.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Approval Gates */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Approval Gates</h3>
              <ul className="space-y-4">
                {approvalGates.map((gate, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{gate}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Control Points */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Control Points</h3>
              <ul className="space-y-4">
                {controlPoints.map((control, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{control.point}:</span>
                      <span className="text-gray-700 ml-2">{control.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div
          className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl mx-auto">
              "The Shift Protocol gave us something we'd never experienced with a technical partner: complete
              confidence. We knew exactly what was happening, when it would be done, and that we could trust the
              outcome. No surprises, no vendor lock-in, no regrets."
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=60" alt="Sarah Chen" className="w-15 h-15 rounded-full mr-4" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
                <div className="text-gray-600">CTO @ GrowthLabs (Series A)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientControlSection