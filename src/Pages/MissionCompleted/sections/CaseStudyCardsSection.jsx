import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import ev_dashboard from "../../../Assets/Images/profilecard/ev_dashboard.png"
import k2_traders from "../../../Assets/Images/profilecard/k2_traders.png"
import bullseyes from "../../../Assets/Images/profilecard/bullseyes.png"

// Section 2: Case Study Cards Grid
function CaseStudyCardsSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const caseStudies = [
    {
      brand: "Slacker IoT",
      category: "IoT & SaaS Platform",
      outcome: "Built a scalable EV charging platform with real-time telemetry and automated billing",
      visual: ev_dashboard,
      metrics: { users: "5K+", uptime: "99.9%", costReduction: "40%" },
      url: "/CaseStudies/SlackerIOT"
    },
    {
      brand: "Bullseye Investments",
      category: "FinTech Infrastructure",
      outcome: "Delivered a live stock market dashboard integrated with APIs and Google Sheets",
      visual: bullseyes,
      metrics: { dataFeeds: "50+", downtime: "0 hrs", engagement: "3x higher" },
      url: '/CaseStudies/BullseyesCase'
    },

    {
      brand: "K2 Traders",
      category: "eCommerce Development",
      outcome: "Zero recurring fees with a fully optimized React-based store",
      visual: k2_traders,
      metrics: { savings: "$1000s", hosting: " Free ", maintenance: "One-time" },
      url: "/CaseStudies/K2TradersCase"
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
    <section id="casestudy" ref={sectionRef} className="pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Success Stories That <br/>
            <span className="text-primaryOrange">
              Speak For Themselves
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From scaling challenges to breakthrough launches, here's how we've helped teams achieve the impossible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-300 transform ${visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}

            >
              <div
                className={`relative bg-white rounded-3xl overflow-hidden sm:hover:shadow-xl shadow-md transition-all duration-300`}
              >
                {/* Visual */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.visual || "/placeholder.svg"}
                    alt={`${study.brand} case study`}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-primaryBlue backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col">
                  <h3 className="text-2xl font-bold text-primaryBlue mb-4">{study.brand}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{study.outcome}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-6">
                    {Object.entries(study.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-lg font-bold text-primaryBlue">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={study.url}
                    className={` py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform  bg-primaryBlue text-white shadow-lg  mx-auto mt-6`}
                  >
                    Read Full Mission Report
                  </Link>
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