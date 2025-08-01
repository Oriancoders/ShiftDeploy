import { BarChart3, Clock, Code, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 4: Process
function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState([])
  const sectionRef = useRef(null)

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Deep-dive into your current setup, pain points, and growth goals.",
      outcome: "Clear understanding of what's broken, what's working, and what needs to happen next.",
      timeline: "2-3 days",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Diagnose",
      description: "Technical audit, performance analysis, and architecture review.",
      outcome: "Detailed report with prioritized recommendations and effort estimates.",
      timeline: "3-5 days",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      number: "03",
      title: "Solve",
      description: "Implement solutions with your team or independently, depending on your needs.",
      outcome: "Working code, optimized systems, and documentation that doesn't suck.",
      timeline: "1-8 weeks",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      number: "04",
      title: "Monitor & Scale",
      description: "Ongoing monitoring, optimization, and support as you grow.",
      outcome: "Peace of mind and systems that scale with your success.",
      timeline: "Ongoing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
            }, index * 300)
          })
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
            How we turn chaos
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              into clarity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No guesswork. No surprises. Just a proven process that gets results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500  via-green-500 to-orange-500 transform -translate-y-1/2 transition-all duration-2000 hidden lg:block"
            style={{ width: `${(visibleSteps.length / steps.length) * 100}%` }}
          ></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform ${
                  visibleSteps.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                {/* Step Number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-gray-300 rounded-full z-10 hidden lg:flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon & Number */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mr-4`}
                    >
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-gray-300">{step.number}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">What you get:</p>
                      <p className="text-gray-700">{step.outcome}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">{step.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Promise */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Process Promise:</h3>
            <p className="text-blue-800 leading-relaxed">
              Every step includes regular check-ins, progress updates, and your approval before moving forward.{" "}
              <span className="font-semibold">Your project, your timeline, your success.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection