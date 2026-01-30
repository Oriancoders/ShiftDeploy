import { ArrowRight, Calendar, Clock, Mail, Users } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"

// Section 8: CTA
function CTASection() {
  const sectionRef = useRef(null)

  const engagementModes = [
    { title: "One-time Build", desc: "Ship a project end-to-end with clear milestones." },
    { title: "Fix & Optimize", desc: "Performance, reliability, costs, UX , remove bottlenecks fast." },
    { title: "Ongoing Support", desc: "Maintenance, improvements, monitoring, and long-term stability." },
    { title: "Dedicated Team", desc: "Plug in specialists to move faster without full-time hires." },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-primaryBlue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondaryBlue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Tell us what’s broken <br />
          <span className="text-primaryOrange">we’ll step into your shoes</span>
        </h2>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="sm:text-xl text-gray-200 leading-relaxed mb-4">
            ShiftDeploy doesn’t guess. We understand the pain first , then we design the fix, ship it, and make sure it
            stays stable as you grow.
          </p>
          <p className="sm:text-lg text-gray-300">
            If you want clarity, clean execution, and real outcomes , let’s talk.
          </p>
        </div>

        {/* 4 Business Models (light touch) */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 mb-10 max-w-4xl mx-auto">
          <h3 className="text-white font-semibold text-lg sm:text-2xl mb-6">
            Choose how you want to work with us
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {engagementModes.map((mode, idx) => (
              <div key={idx} className="bg-white/10 rounded-2xl p-4 hover:bg-white/15 transition-colors duration-300">
                <p className="text-white font-semibold">{mode.title}</p>
                <p className="text-gray-300 text-sm mt-1">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            to={"/ContactUs"}
            className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit"
          >
            Discuss Your Project
            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
          </Link>

          <Link
            to={"/shift-protocol"}
            className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 text-sm w-fit"
          >
            See How We Work
          </Link>
        </div>

        {/* Supporting Text */}
        <div className="text-gray-200">
          <div className="flex sm:flex-row flex-col gap-4 items-center justify-center text-sm">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Response time: within 24 hours</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Always from a human</span>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Better: open mail client directly instead of Gmail homepage */}
          <a
            href="mailto:contact@shiftdeploy.com"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
          >
            <Mail className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Email us</h3>
            <p className="text-gray-300 text-sm">contact@shiftdeploy.com</p>
          </a>

          <Link
            to={"/ContactUs"}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-300"
          >
            <Calendar className="w-8 h-8 text-primaryOrange mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Request a solution plan</h3>
            <p className="text-gray-300 text-sm">Share the problem , we reply with the best-fit model + next steps.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
