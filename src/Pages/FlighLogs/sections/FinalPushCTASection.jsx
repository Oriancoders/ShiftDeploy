import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 5: Final Push CTA
function FinalPushCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Header */}
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Ready to join
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              the flight logs?
            </span>
          </h2>

          {/* Supporting Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              You've read the stories. You've seen the results. You know what we deliver.
            </p>
            <p className="text-lg text-gray-500">
              The question isn't whether we can solve your challenges — it's when you're ready to get started.
            </p>
          </div>

          {/* Trust Reinforcement */}
          <div className="bg-gray-50 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Reliable</div>
                <div className="text-gray-600">100% on-time delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Understood</div>
                <div className="text-gray-600">We get your challenges</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Proven</div>
                <div className="text-gray-600">50+ successful missions</div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-8">
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-2xl font-bold px-16 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="flex items-center">
                Book Your Strategy Call
                <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Risk Reversal */}
          <p className="text-lg text-gray-500 mb-8">
            30-minute call. No commitment. Just an honest conversation about your challenges.
          </p>

          {/* Secondary Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
              See Our Process
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
              View Case Studies
            </button>
          </div>

          {/* Final Message */}
          <div className="mt-16 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 italic">
              Join the teams who chose reliability, understanding, and results.{" "}
              <span className="text-orange-600 font-semibold">Your success story starts here.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FinalPushCTASection