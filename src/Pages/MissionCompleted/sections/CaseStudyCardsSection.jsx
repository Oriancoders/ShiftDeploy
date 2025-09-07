import { useEffect, useRef, useState } from "react"

// Section 2: Case Study Cards Grid
function CaseStudyCardsSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const caseStudies = [
    {
      brand: "Slacker IOT",
      category: "SaaS Development",
      outcome: "Reduced server costs by 60% while handling 10x traffic",
      visual: "/placeholder.svg?height=300&width=400",
      metrics: { users: "1M+", uptime: "99.9%", savings: "$50K/mo" },
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      brand: "DataFlow",
      category: "Infrastructure",
      outcome: "Achieved zero-downtime deployments with 90% faster releases",
      visual: "/placeholder.svg?height=300&width=400",
      metrics: { deployments: "500+", downtime: "0 hrs", speed: "90% faster" },
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      brand: "GrowthLabs",
      category: "MVP Development",
      outcome: "Launched in 8 weeks, raised $2M Series A within 6 months",
      visual: "/placeholder.svg?height=300&width=400",
      metrics: { timeline: "8 weeks", funding: "$2M", users: "50K+" },
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
   
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }, index * 150)
          }
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Success stories that
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From scaling challenges to breakthrough launches, here's how we've helped teams achieve the impossible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-white/50`}
              >
                {/* Visual */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.visual || "/placeholder.svg"}
                    alt={`${study.brand} case study`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.brand}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{study.outcome}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 bg-primaryBlue text-white shadow-lg `}
                  >
                    Read Full Mission Report
                  </button>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default CaseStudyCardsSection