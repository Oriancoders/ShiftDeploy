import { ArrowRight, Calendar, Clock, Mail, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 8: CTA
function CTASection() {
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
      className="py-32 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Header */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Want to build <br/>
            <span className="text-primaryOrange">
              with us?
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl  text-gray-300 leading-relaxed mb-6">
              We're not for everyone. We're for teams who value substance over speed, foundations over facades, and
              partnerships over transactions.
            </p>
            <p className="text-lg text-gray-400">If that sounds like you, let's talk.</p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="group bg-primaryOrange hover:bg-toOrange text-white text-xl font-semibold px-12 py-6 rounded-2xl transition-all duration-300 transform  hover:shadow-blue-500/25">
              <span className="flex items-center">
                Let's Discuss Your Project
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Supporting Text */}
          <div className="text-gray-200">
            {/* <p className="mb-4">
              No sales pitch. No generic proposals. Just an honest conversation about whether we're the right fit for
              what you're building.
            </p> */}
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Always from a human</span>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm">hello@shiftdeploy.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Schedule a Chat</h3>
              <p className="text-gray-300 text-sm">Book a 30-minute chat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection