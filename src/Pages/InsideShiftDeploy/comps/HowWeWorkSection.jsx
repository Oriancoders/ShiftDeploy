import { CheckCircle, Code, Rocket, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"

// Section 4: How We Work
function HowWeWorkSection() {
  const [visiblePrinciples, setVisiblePrinciples] = useState([])
  const sectionRef = useRef(null)

  const workPrinciples = [
    {
      title: "Code > Meetings",
      description:
        "We believe in async-first communication and documentation that doesn't lie. Your project moves forward even when we're not in the same room.",
      icon: <Code className="w-6 h-6" />,
      tools: ["Linear for clarity", "Notion for knowledge", "Slack for speed", "GitHub for truth"],
    },
    {
      title: "One deploy > Ten promises",
      description:
        "We'd rather show you working software than perfect presentations. Progress beats perfection, but both beat promises.",
      icon: <Rocket className="w-6 h-6" />,
      tools: ["Continuous deployment", "Feature flags", "Real-time monitoring", "User feedback loops"],
    },
    {
      title: "We don't chase trends, we build foundations",
      description:
        "While others pivot to the framework-of-the-month, we're mastering the fundamentals that will matter in five years.",
      icon: <Shield className="w-6 h-6" />,
      tools: [
        "Battle-tested technologies",
        "Scalable architectures",
        "Security-first approach",
        "Performance optimization",
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          workPrinciples.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePrinciples((prev) => [...prev, index])
            }, index * 300)
          })
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
            Inside our <br />
            <span className="text-primaryOrange">
              operating system
            </span>
          </h2>
        </div>

        <div className="space-y-16">
          {workPrinciples.map((principle, index) => (
            <div
              key={index}
              className={`transition-all duration-800 transform bg-white p-10 rounded-2xl shadow-md hover:shadow-lg ${visiblePrinciples.includes(index) ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
            >
              <div className=" transition-colors duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <div className="text-white">{principle.icon}</div>
                      </div> */}
                      <h3 className="text-3xl font-bold text-primaryBlue">{principle.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{principle.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Our Tools:</h4>
                    <ul className="space-y-2">
                      {principle.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



        <div className="w-full flex justify-center items-center mt-20">
          <CursorFollower

            text="This is how we work. This is how we win."
            className="   max-w-2xl mx-auto bg-gradient-to-r from-secondaryBlue to-toSecBlue px-6 py-4 rounded-full text-white italic"
            textClassName='text-white font-semibold text-xs sm:text-sm lg:text-base'
            gradientFrom="#0C1F3A"
            gradientTo="#0B1D30"
            circleSize={100}

          />
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection