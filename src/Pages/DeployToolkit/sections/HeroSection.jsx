import { ArrowRight, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
// Section 1: Hero + Value Propositions
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({
      x: e.clientX, // mouse position X (from left)
      y: e.clientY, // mouse position Y (from top)
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative  flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-100 overflow-hidden pt-32 py-10"
    >
 

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
          <h1 className="text-5xl md:text-7xl font-bold text-primaryBlue mb-8 leading-tight">
            Build, optimize, and scale <br/>
            <span className="text-primaryOrange">
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
              The Deploy Toolkit is your on-demand team of engineers, DevOps pros, and product specialists solving the
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
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
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
            <motion.button
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

              >
                Launch Your Project

              </motion.button>
            <p className="text-gray-500">No contracts. No overhead. Just results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection