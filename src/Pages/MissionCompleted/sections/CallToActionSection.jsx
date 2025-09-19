import { ArrowRight, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
      className="py-20 bg-primaryBlue relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-1000 transform `}
        >
          {/* Header */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your growth story starts <br/>
            <span className="text-primaryOrange">
              with the next shift.
            </span>
          </h2>

          {/* Subheadline */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="sm:text-xl  text-gray-300 leading-relaxed mb-8">
              You've seen what we can do. You've read the success stories. You know the results we deliver.<br/>
              The question isn't whether we can solve your challenges, it's when you're ready to begin your mission.

            </p>

          </div>

          {/* Social Proof */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">30+</div>
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



          {/* Primary CTA */}
           <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
            >

              Let's Explore Your Problem Together
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </Link >

          {/* Secondary CTA */}
          <div className="mb-12">
            <Link to={"/deploy-toolkit"} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-12 py-4 rounded-2xl hover:bg-white/20 transition-all duration-300">
              See Deploy ToolKit
            </Link>
          </div>

          {/* Final Message */}
          <div className="max-w-3xl mx-auto">
            <p className="sm:text-xl text-gray-300 leading-relaxed mb-6">
              Your competitors are scaling. Your users are waiting. Your technical challenges aren't going to solve
              themselves.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}


export default CallToActionSection