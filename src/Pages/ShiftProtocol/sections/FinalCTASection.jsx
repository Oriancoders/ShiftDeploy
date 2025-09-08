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
      className="py-20 bg-primaryBlue relative overflow-hidden"
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
            Ready to eliminate <br/>
            <span className="text-primaryOrange">
              technical project risk?
            </span>
          </h2>

          {/* Supporting Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              The Shift Protocol isn't just our internal process, it's your roadmap to technical project success.
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
                  <CheckCircle className="w-4 h-4 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Reversal */}
          <p className="text-lg text-gray-200 mb-12">
            No commitment required. No sales pressure. Just complete transparency about how we work and what you can
            expect.
          </p>

  

          {/* Contact Options */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Download className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Download Protocol Brief</h3>
              <p className="text-gray-300 text-sm">Get the complete methodology guide instantly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Calendar className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Book Process Walkthrough</h3>
              <p className="text-gray-300 text-sm">
                See the protocol in action with real project examples

              </p>
            </div>
          </div>

   
        </div>
      </div>
    </section>
  )
}
export default FinalCTASection