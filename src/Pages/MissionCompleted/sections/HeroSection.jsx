import { ArrowRight, CheckCircle, Filter } from "lucide-react"
import { useEffect, useRef, useState, } from "react"
import { motion } from "framer-motion"
import CursorFollower from "../../../utils/CursorFollower"
// Section 1: Hero Section
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")
  const sectionRef = useRef(null)

  const filters = ["All", "SaaS", "Infra", "UI/UX", "MVPs"]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {/* Trust Badge
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium"></span>
            </div>
          </div> */}

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold text-primaryBlue mb-6 leading-tight">
            Missions That Made <br />
            <span className="text-primaryOrange">
              the Shift
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4 leading-relaxed">
              See how our clients scaled, shipped, and succeeded the ShiftDeploy way.
            </p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              Here's how we brought clarity, speed, and scale to high-stakes tech teams.
            </p>
          </div>

          {/* Filter Toggle */}
          {/* <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-500 ml-3" />
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        activeFilter === filter
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto  font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

            >
              Explore Success Stories


            </motion.button>

            <CursorFollower
              text="50+ missions completed • 100% success rate"
              className="  max-w-2xl mt-12 bg-gradient-to-r from-secondaryBlue to-toSecBlue px-6 py-4 rounded-full text-white mx-auto"
              textClassName='text-white font-semibold text-xs sm:text-sm lg:text-base italic'
              gradientFrom="#0C1F3A"
              gradientTo="#0B1D30"
              circleSize={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection