import { Quote, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 2: Quote Wall
function QuoteWallSection() {
  const [visibleQuotes, setVisibleQuotes] = useState([])
  const sectionRef = useRef(null)
  const quoteRefs = useRef([])

  const testimonials = [
    {
      quote:
        "We were drowning in technical debt and our deployment process was a nightmare. ShiftDeploy didn't just fix our CI/CD pipeline — they understood our constraints and delivered a solution that actually worked for our team size and budget. Reliable, on time, and they got us.",
      author: "Sarah Chen",
      role: "CTO",
      company: "GrowthLabs",
      tag: "DevOps",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-blue-500 to-indigo-600",
    },
    {
      quote:
        "I've worked with a lot of agencies, and most of them overpromise and underdeliver. ShiftDeploy was different — they understood our scaling challenges from day one and delivered exactly what they said they would, when they said they would. Our infrastructure now handles 10x the load.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "DataFlow",
      tag: "Infra",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-green-500 to-emerald-600",
    },
    {
      quote:
        "We needed to launch our MVP before our runway ran out. Most developers would have built something generic, but ShiftDeploy took the time to understand our specific market and user needs. They delivered a product that helped us raise our Series A. Reliable partners who understood us completely.",
      author: "Jennifer Park",
      role: "CEO",
      company: "UserFlow",
      tag: "Full Build",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-purple-500 to-pink-600",
    },
    {
      quote:
        "Our user onboarding was bleeding conversions and we couldn't figure out why. ShiftDeploy's UX audit revealed issues we never would have caught. They redesigned our entire flow and our conversion rate jumped 340%. They understood our users better than we did.",
      author: "David Kim",
      role: "Product Lead",
      company: "StreamlineHQ",
      tag: "UX",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-orange-500 to-red-600",
    },
    {
      quote:
        "We needed SOC2 compliance to close enterprise deals, but every consultant quoted us 12+ months. ShiftDeploy understood our urgency and delivered full certification in 4 months. Reliable, thorough, and they kept us informed every step of the way.",
      author: "Alex Thompson",
      role: "CTO",
      company: "SecureAPI",
      tag: "DevOps",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-teal-500 to-cyan-600",
    },
    {
      quote:
        "Our database was the bottleneck killing our growth. Previous developers just threw more servers at the problem. ShiftDeploy understood our data patterns and optimized our queries. Same hardware, 10x performance. They understood the real problem.",
      author: "Lisa Wang",
      role: "Engineering Lead",
      company: "ScaleUp",
      tag: "Infra",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
      color: "from-indigo-500 to-purple-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleQuotes((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 },
    )

    quoteRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What they really
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              think of us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unfiltered feedback from teams who needed results — and got them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (quoteRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleQuotes.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="flex items-start mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span
                      className={`ml-4 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${testimonial.color} text-white`}
                    >
                      {testimonial.tag}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">
                      {testimonial.role} @ {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Reinforcement Message */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Pattern is Clear</h3>
            <p className="text-xl text-gray-600">
              <span className="text-blue-600 font-semibold">Reliable</span> delivery.{" "}
              <span className="text-green-600 font-semibold">On time</span> execution.{" "}
              <span className="text-orange-600 font-semibold">Understood</span> completely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteWallSection