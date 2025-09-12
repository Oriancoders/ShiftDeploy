import { useEffect, useRef, useState } from "react"

// Section 7: Testimonials
function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const testimonials = [
 
    {
      quote:
        "",
      author: "Marcus Rodriguez",
      title: "Founder @ DataFlow",
      stage: "",
      avatar: "/placeholder.svg?height=80&width=80",
    },
   
  ]

  const trustIndicators = [
    { metric: "100+", description: "successful deployments" },
    { metric: "99.9%", description: "uptime average across client projects" },
    { metric: "Thousands+", description: "in client funding raised after our optimizations" },
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
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center  sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            What founders <br/>
            <span className="text-primaryOrange">
              are saying
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-12 sm:mb-20">
          <div className="sm:bg-white sm:shadow-lg rounded-3xl  sm:p-12 text-center sm:min-h-[300px] flex items-center justify-center">
            <div
            >
              <blockquote className="sm:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl">
                "I was skeptical about outsourcing our infrastructure, but these guys know their stuff. Our AWS costs dropped 60% and performance actually improved. Best investment we've made."
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={"/placeholder.svg"}
                  alt={"Marcus Rodriguez"}
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">SADIA</div>
                  <div className="text-gray-600">
                    CTO Seed
                  </div>
                </div>
              </div>
            </div>
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
              <div className="text-3xl md:text-5xl font-bold text-primaryOrange mb-2">{indicator.metric}</div>
              <div className="text-gray-600">{indicator.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection