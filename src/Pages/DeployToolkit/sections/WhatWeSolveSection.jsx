import { BarChart3, CheckCircle, Globe, Rocket, TrendingUp, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 3: What We Solve
function WhatWeSolveSection() {
  const [visibleProblems, setVisibleProblems] = useState([])
  const sectionRef = useRef(null)
  const problemRefs = useRef([])

  const problems = [
    {
      pain: "Our app is slow and users are complaining, but we don't know why.",
      fix: "Performance Forensics — We find the bottlenecks, fix the code, and monitor the metrics that matter.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      pain: "We're spending more on servers than salaries, and it's getting worse.",
      fix: "Cost Optimization — Right-size your infrastructure and cut cloud bills by 40-60% without sacrificing performance.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      pain: "Every deployment is a gamble. Sometimes it works, sometimes it doesn't.",
      fix: "Bulletproof CI/CD — Automated testing, staged rollouts, and instant rollbacks. Deploy with confidence.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      pain: "We need to integrate with [insert API here] but our team has never done it.",
      fix: "Integration Specialists — We've connected everything to everything. Your integration works on day one.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      pain: "We're growing fast but our systems aren't. Everything's breaking.",
      fix: "Scale-Ready Architecture — Systems designed to handle 10x growth without 10x complexity.",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProblems((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.3 },
    )

    problemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The problems keeping you <br/>
            <span className="text-primaryOrange">
              up at night
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've seen it all. Here are the technical nightmares we turn into competitive advantages.
          </p>
        </div>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={(el) => (problemRefs.current[index] = el)}
              data-index={index}
              className={`transition-all duration-700 transform ${
                visibleProblems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Pain Point */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="text-white">{problem.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 mb-2">Your Pain:</h3>
                      </div>
                    </div>
                    <blockquote className="text-xl text-red-700 italic leading-relaxed">"{problem.pain}"</blockquote>
                  </div>
                </div>

                {/* Solution */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Our Fix:</h3>
                      </div>
                    </div>
                    <p className="text-xl text-green-700 leading-relaxed font-medium">{problem.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl text-gray-600 italic">
            Sound familiar? You're not alone.{" "}
            <span className="text-blue-600 font-semibold">And you don't have to solve this alone.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeSolveSection