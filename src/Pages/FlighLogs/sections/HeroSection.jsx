import { ArrowRight, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-32 pb-10"
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
          {/* <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium">4.9/5 average rating • 50+ completed missions</span>
            </div>
          </div> */}

          {/* Main Headlines */}
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-primaryBlue mb-6 leading-tight">
            Flight Logs <br/>
            <span className="text-primaryOrange">
              Real Stories
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="sm:text-xl  text-gray-700 max-w-4xl mx-auto mb-4 leading-relaxed">
              Hear from the founders, CTOs, and tech teams who trusted us with their mission-critical projects.
              No sales copy. No fluff. Just honest feedback from teams who needed results and got them.

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
                <div className="text-xl sm:text-3xl font-bold mb-2">99%</div>
                <div className="text-gray-600">On-time delivery</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-3xl font-bold  mb-2">95%</div>
                <div className="text-gray-600">Client retention</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-xl sm:text-3xl font-bold mb-2">4.9/5</div>
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
            <Link to={"/missions"} className="flex w-fit mx-auto items-center group bg-primaryOrange hover:bg-toOrange text-white text-xl font-semibold px-8 sm:px-12 py-4 rounded-2xl transition-all duration-300 transform  hover:shadow-2xl hover:shadow-blue-500/25">
                Read Their Stories
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection