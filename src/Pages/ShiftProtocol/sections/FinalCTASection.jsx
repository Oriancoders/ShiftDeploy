import { Calendar, CheckCircle, Download, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 7: Final CTA
function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const briefIncludes = [
    "Complete phase-by-phase breakdown",
    "Client approval checkpoints and timelines",
    "Communication protocols and tool access",
    "Quality guarantees and success metrics",
    "Real project examples and case studies",
    "Template documents and checklists",
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

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-primaryBlue to-toBlue relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Header */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to eliminate
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              technical project risk?
            </span>
          </h2>

          {/* Supporting Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              The Shift Protocol isn't just our internal process—it's your roadmap to technical project success.
              Download the complete methodology guide or book a 30-minute walkthrough to see exactly how we'll execute
              your project.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">In this comprehensive brief, you'll get:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {briefIncludes.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Reversal */}
          <p className="text-lg text-gray-400 mb-12">
            No commitment required. No sales pressure. Just complete transparency about how we work and what you can
            expect.
          </p>

          {/* Dual CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="flex items-center justify-center">
                <Download className="mr-3 w-6 h-6" />
                Download Protocol Brief
              </span>
              <span className="block text-sm opacity-90 mt-1">Get the complete methodology guide instantly</span>
            </button>

            <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center justify-center">
                <Calendar className="mr-3 w-6 h-6" />
                Book Process Walkthrough
              </span>
              <span className="block text-sm opacity-90 mt-1">
                See the protocol in action with real project examples
              </span>
            </button>
          </div>

          {/* Final Reassurance */}
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-200 font-medium">
                Used by 200+ startups from seed to Series B. Zero project failures in 3+ years.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FinalCTASection