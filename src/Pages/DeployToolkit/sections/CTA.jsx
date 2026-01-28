import { ArrowRight, CheckCircle, Mail } from "lucide-react"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

// Section 9: Final CTA
function FinalCTASection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Keeping observer in case you want to trigger animations later
        // (currently no state needed)
        if (entries[0].isIntersecting) {
          // no-op for now
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primaryBlue to-toBlue relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to improve results <br />
          <span className="text-primaryOrange">with confidence?</span>
        </h2>

        {/* Main Copy */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="sm:text-xl text-gray-200 leading-relaxed mb-8">
            If your website or product feels slow, unclear, or harder to manage than it should be. We’ll help you fix
            what’s blocking growth. No pressure. Just a clear plan you can act on.
          </p>
        </div>

        {/* Value Reinforcement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            In a 30-minute strategy call, you’ll walk away with:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-md text-white font-medium">
                A clear diagnosis of what’s hurting speed, trust, or conversions
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-md text-white font-medium">
                A short list of high-impact fixes (so you don’t waste time on noise)
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-md text-white font-medium">
                An honest “do this now vs later” breakdown to protect your budget
              </p>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
              <p className="text-xs sm:text-md text-white font-medium">
                A simple roadmap — optimize, improve UX, or rebuild — based on your goals
              </p>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <p className="sm:text-lg text-gray-200 mb-8">
          No commitment. No cost. Just clarity on what to fix next.
        </p>

        {/* Primary CTA */}
        <Link
          to={"/ContactUs"}
          className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
        >
          Book a Free Strategy Call
          <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
        </Link>

        {/* Contact Information */}
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
            <Mail className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Prefer email?</h3>
            <p className="text-gray-300">contact@shiftdeploy.com</p>
          </div>
        </div>

        {/* Final Reinforcement */}
        <p className="sm:text-xl text-gray-300 leading-relaxed mb-6">
          Better speed. Clearer journeys. Stronger trust. That’s what turns visits into revenue.
        </p>
      </div>
    </section>
  )
}

export default FinalCTASection
