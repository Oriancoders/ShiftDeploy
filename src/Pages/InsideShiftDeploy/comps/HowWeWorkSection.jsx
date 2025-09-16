import { CheckCircle, Code, Rocket, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"
import { Link } from "react-router-dom"

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
    <section ref={sectionRef} className="py-12 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Inside our <br />
            <span className="text-primaryOrange">
              operating system
            </span>
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-16">
          {workPrinciples.map((principle, index) => (
            <div
              key={index}
              className="transition-all duration-800 transform bg-white p-6 sm:p-8 rounded-2xl shadow-md sm:hover:shadow-lg"
            >
              <div className=" transition-colors duration-300">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">

                      <h3 className="text-xl sm:text-3xl font-bold text-primaryBlue">{principle.title}</h3>
                    </div>
                    <p className="sm:text-lg text-gray-600 leading-relaxed ">{principle.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Our Tools:</h4>
                    <ul className="space-y-2">
                      {principle.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-primaryOrange mr-2 flex-shrink-0" />
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




        <div className="text-center mt-16 sm:mt-20 space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">The Legacy</p>
          <p className="sm:text-lg text-gray-600 italic">
                This is how we work. This is how we win.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto ">
            <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Launch Your Project
            </Link >

            <Link to={"/shift-protocol"}

              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Shift Protocol</span>
            </Link>
          </div>
        </div>
 

      </div>
    </section>
  )
}

export default HowWeWorkSection