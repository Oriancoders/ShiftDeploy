import { Clock, MessageSquare, Shield, XCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"

// Section 6: What We Believe
function WhatWeBelieveSection() {
  const [visibleBeliefs, setVisibleBeliefs] = useState([])
  const [visibleBoundaries, setVisibleBoundaries] = useState([])
  const sectionRef = useRef(null)

  const beliefs = [
    {
      title: "Ethical tech",
      description: "Your users' data isn't our product. Privacy isn't a feature request.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Clear communication",
      description:
        "No technical jargon to hide behind. If we can't explain it simply, we don't understand it well enough.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Building long-term",
      description:
        "We're not here for quick wins. We're here for sustainable growth and systems that scale with your success.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
  ]

  const boundaries = [
    "We don't ghost clients. Ever.",
    "We don't promise impossible timelines to win projects.",
    "We don't build technical debt and call it 'MVP.'",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          beliefs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBeliefs((prev) => [...prev, index])
            }, index * 200)
          })

          setTimeout(() => {
            boundaries.forEach((_, index) => {
              setTimeout(() => {
                setVisibleBoundaries((prev) => [...prev, index])
              }, index * 150)
            })
          }, 800)
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            What we stand for
            <span className="block text-gray-600 text-3xl mt-4">(and what we won't stand for)</span>
          </h2>
        </div>

        {/* Beliefs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primaryBlue mb-12 text-center">We believe in:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className={`group transition-all duration-600 transform ${visibleBeliefs.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                  }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primaryBlue mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{belief.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{belief.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boundaries */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-primaryBlue mb-12 text-center">What we don't do:</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {boundaries.map((boundary, index) => (
              <div
                key={index}
                className={`flex items-center transition-all duration-500 transform ${visibleBoundaries.includes(index) ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  }`}
              >
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-xl text-gray-700">{boundary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <CursorFollower

            text="These boundaries aren't limitations, they're the foundation of trust."
            className="   max-w-2xl mx-auto bg-gradient-to-r from-secondaryBlue to-toSecBlue px-6 py-4 rounded-full text-white italic"
            textClassName='text-white font-semibold text-xs sm:text-sm lg:text-base'
            gradientFrom="#0C1F3A"
            gradientTo="#0B1D30"
            circleSize={100}
          />
        </div>

        {/*  */}
      </div>
    </section>
  )
}


export default WhatWeBelieveSection