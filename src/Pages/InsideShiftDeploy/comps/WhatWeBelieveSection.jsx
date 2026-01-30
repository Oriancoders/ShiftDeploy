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
      title: "Trust-first delivery",
      description:
        "We treat your product like it’s live from day one — careful access, clean commits, and changes you can review. No surprises. No shortcuts.",
      icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "Clarity beats complexity",
      description:
        "We explain what’s broken, why it matters, and what we’ll do about it — in plain language. If it’s not clear, it’s not done.",
      icon: <MessageSquare className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "Systems that don’t fall apart",
      description:
        "We build for today’s release and tomorrow’s growth — stable infra, maintainable code, and decisions that still make sense six months later.",
      icon: <Clock className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
  ]

  const boundaries = [
    "We don’t disappear after kickoff. You always know what’s happening.",
    "We don’t sell timelines we can’t defend with a real plan.",
    "We don’t ship messy MVPs and call it “fast.” We ship lean, clean, and scalable.",
    "We don’t work in a black box. You get visibility, documentation, and ownership.",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries?.[0]?.isIntersecting) return

        beliefs.forEach((_, index) => {
          setTimeout(() => {
            setVisibleBeliefs((prev) => [...new Set([...prev, index])])
          }, index * 200)
        })

        setTimeout(() => {
          boundaries.forEach((_, index) => {
            setTimeout(() => {
              setVisibleBoundaries((prev) => [...new Set([...prev, index])])
            }, index * 150)
          })
        }, 800)
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-4 sm:mb-6">
            What we stand for
            <span className="block text-gray-600 text-lg sm:text-3xl mt-4">
              (and what we refuse to do)
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We step into your shoes, understand the pain, and fix the real problem — not just the symptoms.
          </p>
        </div>

        {/* Beliefs */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-6 sm:mb-12 text-center">
            We believe in
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className={`group transition-all duration-700 transform ${
                  visibleBeliefs.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-primaryBlue mb-6 transition-transform duration-300 group-hover:scale-110">
                    <div className="text-white">{belief.icon}</div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {belief.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boundaries */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-primaryBlue mb-6 sm:mb-12 text-center">
            What we don’t do:
          </h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {boundaries.map((boundary, index) => (
              <div
                key={index}
                className={`flex items-start transition-all duration-500 transform ${
                  visibleBoundaries.includes(index)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <XCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
                <p className="sm:text-xl text-gray-700">{boundary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <CursorFollower
            text="These aren’t “rules.” They’re how we earn trust — and keep it."
            className="max-w-2xl sm:mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName="text-white font-semibold text-sm lg:text-base"
            gradientFrom="#f76707"
            gradientTo="#0B1D30"
            circleSize={200}
          />
        </div>
      </div>
    </section>
  )
}

export default WhatWeBelieveSection
