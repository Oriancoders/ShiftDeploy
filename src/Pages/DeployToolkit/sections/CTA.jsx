import { ArrowRight, CheckCircle, Clock, Mail, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 9: Final CTA
function FinalCTASection() {
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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primaryBlue  to-toBlue relative overflow-hidden"
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
            Ready to deploy <br/>
            <span className="text-primaryOrange">
              with confidence?
            </span>
          </h2>

          {/* Main Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              This is for serious builders who refuse to let technical debt slow down their growth. If you're tired of
              infrastructure headaches, scaling nightmares, and deployment anxiety. let's fix it.
            </p>
          </div>

          {/* Value Reinforcement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">In our 30-minute strategy call, you'll get:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Clear diagnosis of your biggest technical challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Specific recommendations you can implement immediately</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">
                    Honest assessment of what needs to be fixed vs. what can wait
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Custom roadmap for scaling your infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 mb-6">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-200">
                We only take on 8 new projects per month to ensure quality results. Current availability: 3 spots
                remaining for February.
              </span>
            </div>
          </div>

          {/* Risk Reversal */}
          <p className="text-lg text-gray-400 mb-8">
            Zero commitment. Zero cost. Just clarity on your technical roadmap.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
             <button className="group bg-primaryOrange hover:bg-toOrange text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform  hover:shadow-blue-500/25">
              <span className="flex items-center">
                Schedule Your Free Strategy Call
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Secondary Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300">
              Get Custom Quote
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300">
              Download Technical Audit Checklist
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Questions? Email us:</h3>
              <p className="text-gray-300">hello@deploytoolkit.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Phone className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Urgent technical emergency?</h3>
              <p className="text-gray-300">Call/text: (555) 123-DEPLOY</p>
            </div>
          </div>

          {/* Final Reinforcement */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Your competition is scaling. Your users are waiting. Your technical challenges aren't going to solve
              themselves.
            </p>
            <p className="text-2xl font-bold text-primaryOrange">
              Let's deploy together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection