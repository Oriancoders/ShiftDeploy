import { Layers, MessageSquare, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

// Section 5: Philosophy
function PhilosophySection() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const philosophyItems = [
    {
      title: "Ship outcomes, not shortcuts",
      description:
        "We protect timelines without sacrificing quality. That means fewer re-dos, fewer surprises, and a delivery you can confidently build on.",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      hoverGradient: "from-secondaryBlue to-toSecBlue",
    },
    {
      title: "Clarity wins projects",
      description:
        "We align early, communicate often, and make tradeoffs visible. When everyone understands the plan, decisions get faster and delivery stays predictable.",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      hoverGradient: "from-orange-600 via-red-600 to-pink-600",
    },
    {
      title: "Simple scales better",
      description:
        "We design systems that are easy to run, easy to extend, and easy to hand over. Less complexity means lower cost and faster growth over time.",
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
    <section ref={sectionRef} className="py-24 bg-primaryBlue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-toSecBlue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primaryOrange/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The principles that deliver <br />
            <span className="text-primaryOrange">real business results</span>
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
                  className={`relative p-6 sm:p-8 rounded-3xl border border-gray-700 bg-primaryBlue/50 backdrop-blur-sm h-full transition-all duration-500 transform group-hover:border-gray-600`}
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
            <p className="sm:text-xl md:text-2xl text-gray-200 leading-relaxed italic font-light">
              These aren’t slogans. They’re the standards we use to make decisions, from strategy to delivery,
              so you get <span className="text-primaryOrange font-medium">speed with reliability</span> and{" "}
              <span className="text-white font-medium">results you can measure</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
