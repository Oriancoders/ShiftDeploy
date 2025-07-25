// Section 2: Mindset

import { ChevronRight, Code, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"


function MindsetSection() {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  const mindsetItems = [
    {
      title: "Build with intention.",
      description:
        "Every line serves a purpose. Every decision has a reason. We don't code by accident—we architect by design.",
      icon: <Code className="w-8 h-8" />,
      color: "",
    },
    {
      title: "No fluff. Just fundamentals.",
      description:
        "While others chase the latest framework, we master the timeless principles. Solid foundations outlast shiny objects.",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "We ship. Then we sharpen.",
      description:
        "Perfect is the enemy of shipped. But shipped without iteration is the enemy of great. We find the balance.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The code behind
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              the code
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
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
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondaryBlue to-secondaryBlue mb-8 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                    <div className="mt-6 cursor-pointer flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                      <span className="text-sm font-semibold mr-2">Explore this principle</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative h-80 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500`}
                        >
                          <div className="text-white text-4xl">{item.icon}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                          {item.title.split(".")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32">
          <p className="text-2xl text-gray-600 italic font-light">This isn't just how we code. This is how we think.</p>
        </div>
      </div>
    </section>
  )
}

export default MindsetSection