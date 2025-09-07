import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import CursorFollower from "../../../utils/CursorFollower"
// Section 1: Protocol Manifesto (Hero)
function ProtocolManifestoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden pt-32 "
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {/* Trust Badge */}
          {/* <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium">
                200+ 
              </span>
            </div>
          </div> */}




          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primaryBlue mb-8 leading-tight">
            The Shift Protocol <br />
            <span className="text-primaryOrange md:text-5xl">
              Your guarantee against technical chaos
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <p className="text-xl  text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our battle-tested methodology transforms complex technical challenges into predictable, client-controlled
              outcomes.
              <span className="text-gray-900 font-semibold"> No surprises. No abandonment. No confusion.</span>
            </p>
          </div>

          {/* Supporting Copy */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              After 200+ successful deployments, we've codified exactly how to build, optimize, and scale technical
              systems without the typical agency nightmares. The Shift Protocol isn't just our process, it's your
              insurance policy against project failure.
            </p>
          </div>

          {/* Key Promise */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            {/* <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-green-100">
              <p className="text-xl text-gray-800 italic font-medium">
                Every decision transparent. Every milestone client-approved. Every deliverable fully documented and
                owned by you.
              </p>
            </div> */}
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-900 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >


            <motion.button
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

            >

              View Our Complete Process
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />

            </motion.button>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-20">
            <CursorFollower

              text="We've Shifted many successfull deployments • Zero project failures"
              className="  max-w-2xl mx-auto bg-gradient-to-r from-secondaryBlue to-toSecBlue px-6 py-4 rounded-full text-white"
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

export default ProtocolManifestoSection