import { ArrowRight, CheckCircle, Clock, Download, Mail, Phone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
 
          {/* Header */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to deploy <br/>
            <span className="text-primaryOrange">
              with confidence?
            </span>
          </h2>

          {/* Main Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="sm:text-xl text-gray-200 leading-relaxed mb-8">
              This is for serious builders who refuse to let technical debt slow down their growth. If you're tired of
              infrastructure headaches, scaling nightmares, and deployment anxiety. let's fix it.
            </p>
          </div>

          {/* Value Reinforcement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">In our 30-minute strategy call, you'll get:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-md text-white font-medium">Clear diagnosis of your biggest technical challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-md text-white font-medium">Specific recommendations you can implement immediately</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-md text-white font-medium">
                    Honest assessment of what needs to be fixed vs. what can wait
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-md text-white font-medium">Custom roadmap for scaling your infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
            {/* <div className="inline-flex items-center bg-primaryOrange/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 mb-6">
              <span className="text-orange-200">
                We only take on 8 new projects per month to ensure quality results. Current availability: 3 spots
                remaining for September.
              </span>
            </div> */}

          {/* Risk Reversal */}
          <p className="sm:text-lg text-gray-400 mb-8">
            Zero commitment. Zero cost. Just clarity on your technical roadmap.
          </p>

          {/* Primary CTA */}
           <Link to={"/shift-protocol"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
            >

              Let's Explore Your Problem Together
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </Link >




          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Questions? Email us:</h3>
              <p className="text-gray-300">hello@deploytoolkit.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Download className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Download</h3>
              <p className="text-gray-300"> Technical Audit Checklist</p>
            </div>
          </div>

          {/* Final Reinforcement */}
            <p className="sm:text-xl text-gray-300 leading-relaxed mb-6">
              Your competition is scaling. Your users are waiting. Your technical challenges aren't going to solve
              themselves.
            </p>
       
        </div>
    </section>
  )
}

export default FinalCTASection