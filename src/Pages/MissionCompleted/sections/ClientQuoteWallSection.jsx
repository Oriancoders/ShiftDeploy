import { useEffect, useRef, useState } from "react"

// Section 4: Client Quote Wall
function ClientQuoteWallSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const quotes = [
    {
      quote:
        "We needed to scale from 10K to 100K users without breaking the bank. ShiftDeploy delivered a solution that reduced our costs by 60% while handling 10x the traffic — faster and cleaner than expected.",
      author: "Sarah Chen",
      title: "CTO",
      company: "StreamlineHQ",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "scale infrastructure",
      delivered: "60% cost reduction + 10x capacity",
    },
    {
      quote:
        "We needed SOC2 compliance to close enterprise deals. ShiftDeploy delivered full certification in 4 months instead of the 12+ months everyone else quoted — faster and cleaner than expected.",
      author: "Marcus Rodriguez",
      title: "Founder",
      company: "SecureAPI",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "SOC2 compliance",
      delivered: "certification in 4 months",
    },
    {
      quote:
        "We needed to launch our MVP before our runway ran out. ShiftDeploy delivered a production-ready platform in 8 weeks that helped us raise $2M Series A — faster and cleaner than expected.",
      author: "Jennifer Park",
      title: "CEO",
      company: "GrowthLabs",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "rapid MVP development",
      delivered: "8-week launch + $2M funding",
    },
    {
      quote:
        "We needed zero-downtime deployments for our growing user base. ShiftDeploy delivered an automated CI/CD pipeline that eliminated outages and increased deployment speed by 90% — faster and cleaner than expected.",
      author: "David Kim",
      title: "CTO",
      company: "DataFlow",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "zero-downtime deployments",
      delivered: "0 outages + 90% faster deploys",
    },
    {
      quote:
        "We needed to fix our conversion funnel that was bleeding users. ShiftDeploy delivered a redesigned onboarding flow that increased conversions by 340% — faster and cleaner than expected.",
      author: "Alex Thompson",
      title: "Product Lead",
      company: "UserFlow",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "conversion optimization",
      delivered: "340% conversion increase",
    },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What clients
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              really say
            </span>
          </h2>
          <p className="text-xl text-gray-600">The pattern is clear: we deliver what we promise, when we promise it.</p>
        </div>

        {/* Quote Carousel */}
        <div className="relative mb-12">
          <div className="bg-white rounded-3xl p-12 shadow-lg min-h-[400px] flex items-center justify-center">
            <div
              className={`text-center transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8 max-w-4xl">
                <span className="text-6xl text-gray-300 leading-none">"</span>
                We needed{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-semibold">
                  {quotes[currentQuote].need}
                </span>
                . ShiftDeploy delivered{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  {quotes[currentQuote].delivered}
                </span>{" "}
                — faster and cleaner than expected.
                <span className="text-6xl text-gray-300 leading-none">"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={quotes[currentQuote].avatar || "/placeholder.svg"}
                  alt={quotes[currentQuote].author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">{quotes[currentQuote].author}</div>
                  <div className="text-gray-600">
                    {quotes[currentQuote].title} @ {quotes[currentQuote].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Pattern Recognition */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The ShiftDeploy Pattern</h3>
            <p className="text-xl text-gray-700">
              <span className="text-red-600 font-semibold">Problem identified</span> →{" "}
              <span className="text-blue-600 font-semibold">Solution delivered</span> →{" "}
              <span className="text-green-600 font-semibold">Results exceeded</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ClientQuoteWallSection