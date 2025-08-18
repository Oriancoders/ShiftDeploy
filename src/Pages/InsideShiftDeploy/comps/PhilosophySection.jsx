import { ChevronRight, Layers, MessageSquare, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 5: Philosophy
function PhilosophySection() {
  const [visibleItems, setVisibleItems] = useState([])
  const [hoveredItem, setHoveredItem] = useState(null)
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const philosophyItems = [
    {
      title: "Quality over urgency",
      description:
        "Rushed code is expensive code. We'd rather deliver something solid next week than something broken today.",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      hoverGradient: "from-secondaryBlue to-toSecBlue",
    },
    {
      title: "Communication = architecture",
      description:
        "The best technical solution means nothing if we can't explain why it matters. Clarity in communication creates clarity in code.",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      hoverGradient: "from-orange-600 via-red-600 to-pink-600",
    },
    {
      title: "Simplicity is strength",
      description:
        "Complex problems don't always need complex solutions. The most elegant code is often the most boring code.",
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-green-500 via-teal-500 to-blue-500",
      hoverGradient: "from-green-600 via-teal-600 to-blue-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2, rootMargin: "-100px" },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #4361EE 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #F76707 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The principles that ship <br/>
            <span className="text-secondaryBlue">
              with every project
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group cursor-pointer transition-all duration-700 transform ${
                visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-full">
                <div
                  className={`relative p-8 rounded-3xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-full transition-all duration-500 transform group-hover:scale-105 group-hover:border-gray-600 ${
                    hoveredItem === index ? "shadow-2xl shadow-blue-500/20" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                      hoveredItem === index ? item.hoverGradient : item.gradient
                    } opacity-0 group-hover:opacity-10 transition-all duration-500`}
                  ></div>

                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondaryBlue mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light">
              These aren't just nice words on a wall. They're the non-negotiables that guide every decision,
              <span className="text-orange-400 font-medium"> every line of code</span>,
              <span className="text-blue-400 font-medium"> every client conversation</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection