import { ArrowRight, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 1: Hero + Value Proposition
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-32 py-10"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Trust Indicator */}
          <div className="mb-6">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-200">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-600">Trusted by 200+ startups from seed to Series B</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Build, optimize, and scale
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              with confidence.
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              The Deploy Toolkit is your on-demand team of engineers, DevOps pros, and product specialists — solving the
              toughest backend, infra, and UX challenges so you can focus on what matters:{" "}
              <span className="text-orange-600 font-semibold">growing your business</span>.
            </p>
          </div>

          {/* Supporting Copy */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-gray-500 line-through text-lg mb-2">Stop wrestling with infrastructure</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 line-through text-lg mb-2">Stop losing sleep over scaling issues</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 line-through text-lg mb-2">
                  Stop hiring full-time for part-time problems
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 mb-6">
              <span className="flex items-center">
                Explore Services
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <p className="text-gray-500">No contracts. No overhead. Just results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection