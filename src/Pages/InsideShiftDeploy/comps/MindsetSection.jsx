// Section 2: Mindset
import { Code, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function MindsetSection() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const mindsetItems = [
    {
      title: "We diagnose before we deploy.",
      description:
        "We start by stepping into your shoes — understanding the real pain, the constraints, and what success looks like. Then we design the fix with clarity, not assumptions.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Fundamentals over hype.",
      description:
        "Trends come and go. We build reliable systems: clean architecture, secure patterns, and performance you can measure — so your product holds up under growth.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Ship fast. Improve faster.",
      description:
        "We deliver in focused milestones, then iterate with real signals — speed, stability, conversion, cost. Shipping is the start; sharpening is how you win.",
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3, rootMargin: "-50px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The mindset behind <br />
            <span className="block bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
              how ShiftDeploy operates
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We’re not here to “build something.” We’re here to reduce risk, remove blockers, and ship systems that stay stable.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="space-y-24 sm:space-y-32">
          {mindsetItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-1000 transform ${
                visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-secondaryBlue to-toSecBlue mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="text-white">{item.icon}</div>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-primaryBlue transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="sm:text-xl text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue to-toBlue opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-28 sm:w-32 h-28 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-primaryBlue to-toBlue flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500">
                          <div className="text-white text-4xl">{item.icon}</div>
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {item.title.split(".")[0]}
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Clarity → Execution → Stability</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Visual */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 sm:mt-32">
          <p className="text-xl sm:text-2xl text-gray-600 italic font-light max-w-3xl mx-auto">
            This isn’t “our philosophy.” It’s how clients get relief — because we treat your problems like they’re ours.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MindsetSection
