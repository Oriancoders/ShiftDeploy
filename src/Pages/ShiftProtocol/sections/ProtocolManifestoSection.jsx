import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden pt-32 pb-10"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-700 font-medium">
                200+ successful deployments • Zero project failures
              </span>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">The Shift Protocol</h1>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">
            Your guarantee against technical chaos
          </h2>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our battle-tested methodology transforms complex technical challenges into predictable, client-controlled
              outcomes.
              <span className="text-gray-900 font-semibold"> No surprises. No abandonment. No confusion.</span>
            </p>
          </div>

          {/* Supporting Copy */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              After 200+ successful deployments, we've codified exactly how to build, optimize, and scale technical
              systems without the typical agency nightmares. The Shift Protocol isn't just our process—it's your
              insurance policy against project failure.
            </p>
          </div>

          {/* Key Promise */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-green-100">
              <p className="text-xl text-gray-800 italic font-medium">
                Every decision transparent. Every milestone client-approved. Every deliverable fully documented and
                owned by you.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-900 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center">
                View Our Complete Process
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProtocolManifestoSection