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
     {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-toSecBlue/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The principles that ship <br/>
            <span className="text-primaryOrange">
              with every project
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`group cursor-pointer transition-all duration-300 transform ${
                visibleItems.includes(index) ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
              }`}

            >
              <div className="relative h-full">
                <div
                  className={`relative p-6 sm:p-8 rounded-3xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-full transition-all duration-500 transform group-hover:border-gray-600 `}
                >
    


                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>

   
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <p className="sm:text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light">
              These aren't just nice words on a wall. They're the non-negotiables that guide every decision,
              <span className="text-orange-400 font-medium"> every line of code</span>,
              <span className="text-white font-medium"> every client conversation</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection