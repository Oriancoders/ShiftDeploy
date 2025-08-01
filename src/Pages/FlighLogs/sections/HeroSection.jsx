import { ArrowRight, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 1: Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-32 "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #F76707 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Trust Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium">4.9/5 average rating • 50+ completed missions</span>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
            Flight Logs
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Real Stories
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed">
              Hear from the founders, CTOs, and tech teams who trusted us with their mission-critical projects.
            </p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              No sales copy. No fluff. Just honest feedback from teams who needed results — and got them.
            </p>
          </div>

          {/* Key Stats */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">On-time delivery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Client retention</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Average rating</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center">
                Read Their Stories
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection