import { BarChart3, CheckCircle, Shield, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 5: Case Snapshots
function CaseSnapshotsSection() {
  const [visibleCases, setVisibleCases] = useState([])
  const sectionRef = useRef(null)

  const cases = [
    {
      title: "E-commerce Platform",
      challenge: "Our checkout was timing out during flash sales. We were losing $50K+ per incident.",
      solution: "Database optimization, caching layer implementation, and load balancing.",
      results: [
        { metric: "87% reduction", description: "in page load times" },
        { metric: "Zero downtime", description: "during Black Friday (their biggest day ever)" },
        { metric: "$2M+ additional revenue", description: "from improved conversion rates" },
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "SaaS Startup",
      challenge: "AWS bills were eating 40% of our runway. We were scaling costs, not revenue.",
      solution: "Infrastructure audit, right-sizing, and automated scaling policies.",
      results: [
        { metric: "$15K monthly savings", description: "on cloud costs" },
        { metric: "3x performance improvement", description: "with optimized architecture" },
        { metric: "18 months additional runway", description: "from cost optimization alone" },
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "FinTech Company",
      challenge: "We needed SOC2 compliance to close enterprise deals, but had no idea where to start.",
      solution: "Complete security audit, compliance framework implementation, and documentation.",
      results: [
        { metric: "SOC2 Type II certification", description: "in 4 months (industry average: 12+ months)" },
        { metric: "$500K enterprise deal", description: "closed within 30 days of certification" },
        { metric: "Zero security incidents", description: "since implementation" },
      ],
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          cases.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCases((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real problems. Real solutions. <br/>
            <span className="text-primaryOrange">
              Real results.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 transform ${
                visibleCases.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}

            >
              <div className="bg-white rounded-3xl p-8 transition-all duration-500 transform h-full border-2 border-gray-100">
                {/* Icon */}
                {/* <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.gradient} mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="text-white">{caseStudy.icon}</div>
                </div> */}

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{caseStudy.title}</h3>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">The Challenge:</h4>
                  <blockquote className="text-gray-700 italic border-l-4 border-red-200 pl-4">
                    "{caseStudy.challenge}"
                  </blockquote>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">Our Solution:</h4>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-4 uppercase tracking-wide">The Result:</h4>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-gray-900">{result.metric}</span>
                          <span className="text-gray-600"> {result.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 font-semibold mb-2">Bottom Line:</p>
            <p className="text-xl text-gray-600">
              These aren't just our wins —{" "}
              <span className="text-blue-600 font-semibold">
                they're your competitive advantages waiting to happen.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseSnapshotsSection