import { useEffect, useRef, useState } from "react"

// Section 7: Testimonials
function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const testimonials = [
    {
      quote:
        "Deploy Toolkit saved us 6 months of hiring and $200K in salaries. They solved our scaling issues in 3 weeks and our app has been rock-solid ever since.",
      author: "Sarah Chen",
      title: "CTO @ GrowthLabs",
      stage: "Series A",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I was skeptical about outsourcing our infrastructure, but these guys know their stuff. Our AWS costs dropped 60% and performance actually improved. Best investment we've made.",
      author: "Marcus Rodriguez",
      title: "Founder @ DataFlow",
      stage: "Seed",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "We needed SOC2 compliance to close enterprise deals. Deploy Toolkit got us certified in 4 months instead of the 12+ months everyone else quoted. We closed our first $500K deal 30 days later.",
      author: "Jennifer Park",
      title: "CEO @ SecureAPI",
      stage: "Series B",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Their team feels like an extension of ours. They understand our business, not just our code. When we have a problem, they solve it before it becomes a crisis.",
      author: "David Kim",
      title: "CTO @ StreamlineHQ",
      stage: "Series A",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Finally, a technical partner that speaks both engineer and business. They optimized our database, improved our user experience, and helped us scale to 100K+ users without breaking a sweat.",
      author: "Alex Thompson",
      title: "Founder @ UserFlow",
      stage: "Seed",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const trustIndicators = [
    { metric: "200+", description: "successful deployments" },
    { metric: "99.9%", description: "uptime average across client projects" },
    { metric: "$50M+", description: "in client funding raised after our optimizations" },
    { metric: "Zero", description: "security breaches in 3+ years" },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What founders
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="bg-gray-50 rounded-3xl p-12 text-center min-h-[300px] flex items-center justify-center">
            <div
              className={`transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <blockquote className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].title} ({testimonials[currentTestimonial].stage})
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{indicator.metric}</div>
              <div className="text-gray-600">{indicator.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection