import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
    <section ref={sectionRef} className="py-20 bg-primaryBlue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-2000 transform `}
        >
          {/* Header */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to join <br/>
            <span className="text-primaryOrange">
              the flight logs?
            </span>
          </h2>

          {/* Supporting Copy */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              You've read the stories. You've seen the results. You know what we deliver.
            </p>
            <p className="sm:text-lg text-gray-200">
              The question isn't whether we can solve your challenges, it's when you're ready to get started.
            </p>
          </div>

          {/* Trust Reinforcement */}
          <div className=" rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300  text-white">
                <div className="text-3xl font-bold mb-2">Reliable</div>
                <div className="text-gray-100">100% on-time delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300  text-white">
                <div className="text-3xl font-bold  mb-2">Understood</div>
                <div className="text-gray-100">We get your challenges</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300  text-white">
                <div className="text-3xl font-bold 0 mb-2">Proven</div>
                <div className="text-gray-100">30+ successful missions</div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
           <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
            >
              Let's Solve Your Problem Together
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </Link >


          {/* Risk Reversal */}
          <p className="sm:text-lg text-gray-200 mb-8">
            30-minute call. No commitment. Just an honest conversation about your challenges.
          </p>

          {/* Secondary Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link to={"/shift-protocol"} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300  text-white">
              See Our Process
            </Link>
            <Link to={"/missions"}  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300  text-white">
              View Portfolio
            </Link>
          </div>

          {/* Final Message */}
          <div className="mt-16 max-w-3xl mx-auto">
            <p className="sm:text-xl text-gray-200 italic">
              Join the teams who chose reliability, understanding, and results.{" "}
              <span className="text-primaryOrange font-semibold">Your success story starts here.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FinalPushCTASection