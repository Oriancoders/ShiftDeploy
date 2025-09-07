import { ArrowRight, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 6: Call to Action
function CallToActionSection() {
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
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Header */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your growth story starts <br/>
            <span className="text-primaryOrange">
              with the next shift.
            </span>
          </h2>

          {/* Subheadline */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl  text-gray-300 leading-relaxed mb-8">
              You've seen what we can do. You've read the success stories. You know the results we deliver.<br/>
              The question isn't whether we can solve your challenges, it's when you're ready to begin your mission.

            </p>

          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Missions Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">8 weeks</div>
                <div className="text-gray-300">Average Timeline</div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="mb-8">
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 mb-6">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-orange-200">
                We only take on 6 new missions per month to ensure quality results. Current availability: 2 spots
                remaining.
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-12">
             <button className="group bg-primaryOrange hover:bg-toOrange text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform  hover:shadow-blue-500/25">
              <span className="flex items-center">
                Book  Your Free Strategy Call
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="mb-12">
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-12 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300">
              See The Shift Protocol
            </button>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Your competitors are scaling. Your users are waiting. Your technical challenges aren't going to solve
              themselves.
            </p>
            <p className="text-2xl font-bold text-primaryOrange">
              Let's begin your mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default CallToActionSection