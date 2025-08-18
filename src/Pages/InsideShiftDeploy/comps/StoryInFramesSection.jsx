import { Code, Rocket, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

//Section 7: Story in Frames
function StoryInFramesSection() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [visibleFrames, setVisibleFrames] = useState([])
  const sectionRef = useRef(null)

  const projectFrames = [
    {
      title: "The Challenge",
      subtitle: "Client Scaling Crisis",
      description: "We need to scale from 1,000 to 100,000 users without breaking the bank or the system.",
      details:
        "A growing SaaS platform was hitting performance walls. Database queries were slowing down, server costs were skyrocketing, and user complaints were mounting.",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
    },
    {
      title: "Our Approach",
      subtitle: "Surgical Precision",
      description:
        "Instead of rebuilding everything, we identified the three bottlenecks that mattered. Surgical precision over wholesale replacement.",
      details:
        "We analyzed the entire system, found the critical performance bottlenecks, and implemented targeted optimizations rather than expensive rewrites.",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "The Result",
      subtitle: "Mission Accomplished",
      description: "99.9% uptime during their biggest launch. 40% reduction in server costs. One very happy client.",
      details:
        "The optimized system handled the traffic surge flawlessly, costs went down instead of up, and the client's biggest product launch was their smoothest ever.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          projectFrames.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFrames((prev) => [...prev, index])
            }, index * 400)
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
    <section ref={sectionRef} className="py-24 bg-white overflow-x-hidden text-textColor">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            From concept to deployment <br/>
            <span className="text-toSecBlue">
              A real story
            </span>
          </h2>
          <p className="text-xl ">Project Spotlight: E-Commerce Platform Scale-Up</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 transform -translate-y-1/2 transition-all duration-1000 hidden md:block"
            style={{ width: `${(visibleFrames.length / projectFrames.length) * 100}%` }}
          ></div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectFrames.map((frame, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform group ${
                  visibleFrames.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-gray-300 group-hover:border-toSecBlue rounded-full z-10 hidden md:block"></div>

                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondaryBlue mb-6`}
                  >
                    <div className="text-white">{frame.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{frame.title}</h3>
                    <h4 className="text-lg  mb-4">{frame.subtitle}</h4>
                  </div>

                  <blockquote className="text-lg  italic mb-6 border-l-4 border-gray-300 pl-4">
                    "{frame.description}"
                  </blockquote>

                  <p className=" leading-relaxed">{frame.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <p className="text-2xl text-gray-700 font-semibold">The Lesson:</p>
            <p className="text-xl text-gray-600 italic mt-2">
              Sometimes the best solution is the one that doesn't require starting over.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryInFramesSection