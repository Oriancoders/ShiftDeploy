import { ArrowRight, Calendar, Clock, Mail, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
      className="py-20 bg-primaryBlue relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative text-center">
       
          {/* Header */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Want to build <br/>
            <span className="text-primaryOrange">
              with us?
            </span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="sm:text-xl  text-gray-200 leading-relaxed mb-6">
              We're not for everyone. We're for teams who value substance over speed, foundations over facades, and
              partnerships over transactions.
            </p>
            <p className="sm:text-lg text-gray-300">If that sounds like you, let's talk.</p>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            {/* Primary CTA */}
           <Link to={"/shift-protocol"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
            >

              Let's Explore Your Problem Together
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </Link >
          </div>

          {/* Supporting Text */}
          <div className="text-gray-200">
            {/* <p className="mb-4">
              No sales pitch. No generic proposals. Just an honest conversation about whether we're the right fit for
              what you're building.
            </p> */}
            <div className="flex sm:flex-row flex-col gap-4 items-center justify-center space-x-6 text-sm">
              <div className="flex  items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex  items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Always from a human</span>
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a href="https://mail.google.com/mail/u/0/" target="_blank" className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Mail className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm">contact@shiftdeploy.com</p>
            </a>
            <Link to={"/ContactUs"} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300">
              <Calendar className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Schedule a Conversation</h3>
              <p className="text-gray-300 text-sm">Submit your problem and we reach you with solution</p>
            </Link>
          </div>
    
      </div>
    </section>
  )
}

export default CTASection