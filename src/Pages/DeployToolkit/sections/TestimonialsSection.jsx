import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 7: Testimonials
function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)


const trustIndicators = [
  { metric: "10+", description: "projects shipped end-to-end" },
  { metric: "30%+", description: "typical speed improvements delivered" },
  { metric: "Hands-on", description: "founder-led execution on every project" },
  { metric: "100%", description: "client projects delivered as agreed" },
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



  return (
    <section ref={sectionRef} className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center  sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            What founders <br />
            <span className="text-primaryOrange">
              are saying
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-12 sm:mb-20">
          <div className="bg-white shadow-md sm:shadow-lg rounded-3xl p-6 sm:p-12 text-center sm:min-h-[300px] flex items-center justify-center">
           
            <div>
              {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
              <blockquote className="sm:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl">
                "Shift Deploy is highly recommended …. they have consistently met deadlines, and their after sales service is outstanding!"
              </blockquote>
            <hr className="border-gray-300 mb-6" />
              <div className="flex items-center justify-center">
              <img src="https://media.licdn.com/dms/image/v2/C5103AQHbnRvtGSPXEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562495944539?e=1771459200&v=beta&t=PjF3rjFdmQkUD0_Ucebz1nlWhlUU3sdVKA0jR22yfKE" alt="Kamran Abbas" className="w-12 sm:w-15 h-12 sm:h-15 rounded-full mr-4" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 sm:text-lg"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/" target="__blank">Kamran Abbas</a></div>
                <div className="text-gray-600">Chief Strategist at Bullseye Investment Private Limited</div>
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
              className={`text-center transition-all duration-700 delay-${index * 100} transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primaryOrange mb-2">{indicator.metric}</div>
              <div className="text-gray-600">{indicator.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection