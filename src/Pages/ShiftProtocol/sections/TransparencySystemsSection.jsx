import { DollarSign, Eye, FileText, GitBranch, Monitor } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 5: Transparency Systems
function TransparencySystemsSection() {
  const [visibleSystems, setVisibleSystems] = useState([])
  const sectionRef = useRef(null)

  const systems = [
    {
      title: "Real-Time Progress Tracking",
      fear: "I won't know if we're on track or falling behind",
      system:
        "Live project dashboard showing task completion, timeline status, and upcoming milestones. Updated in real-time, accessible 24/7.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Full System Access",
      fear: "They'll control all the important systems",
      system:
        "Admin access to all platforms from project start: GitHub, Figma, Notion, Cloud Infrastructure. You maintain control throughout.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Source Code Ownership",
      fear: "We won't actually own what we're paying for",
      system:
        "All code committed to your GitHub organization. You maintain full ownership and control throughout the project, not just at the end.",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Documentation Standards",
      fear: "The documentation will be useless when they're gone",
      system:
        "Living documentation updated with every code change. Includes architecture diagrams, API docs, deployment procedures, and troubleshooting guides.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Financial Transparency",
      fear: "Costs will spiral out of control",
      system:
        "Detailed time tracking with weekly budget reports. All expenses pre-approved. No surprise charges, ever.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          systems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSystems((prev) => [...prev, index])
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Complete project <br/>
            <span className=" text-primaryOrange">
              visibility
            </span>
          </h2>
          <p className="text-xl text-gray-600">The systems that keep you informed and in control</p>
        </div>

        <div className="space-y-12">
          {systems.map((system, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                visibleSystems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl p-8  hover:shadow-lg shadow-md transition-all duration-300">
                <div className="grid md:grid-cols-4 gap-8 items-center">
                  {/* Icon */}
                  <div className="md:col-span-1">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primaryBlue mb-4`}
                    >
                      <div className="text-white">{system.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{system.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 space-y-4">
                    {/* Fear */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4">
                      <h4 className="text-sm font-semibold text-red-600 mb-1 uppercase tracking-wide">Your Fear:</h4>
                      <p className="text-red-700 italic">"{system.fear}"</p>
                    </div>

                    {/* System */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
                      <h4 className="text-sm font-semibold text-green-600 mb-1 uppercase tracking-wide">Our System:</h4>
                      <p className="text-green-700 font-medium">{system.system}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TransparencySystemsSection