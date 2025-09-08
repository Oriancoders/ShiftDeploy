import { BarChart3, Clock, Code, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
// Section 4: Process
function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState([])
  const sectionRef = useRef(null)

  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Deep-dive into your current setup, pain points, and growth goals.",
      outcome: "Clear understanding of what's broken, what's working, and what needs to happen next.",
      timeline: "2-3 days",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "02",
      title: "Diagnose",
      description: "Technical audit, performance analysis, and architecture review.",
      outcome: "Detailed report with prioritized recommendations and effort estimates.",
      timeline: "3-5 days",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      number: "03",
      title: "Solve",
      description: "Implement solutions with your team or independently, depending on your needs.",
      outcome: "Working code, optimized systems, and documentation that doesn't suck.",
      timeline: "1-8 weeks",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      number: "04",
      title: "Monitor & Scale",
      description: "Ongoing monitoring, optimization, and support as you grow.",
      outcome: "Peace of mind and systems that scale with your success.",
      timeline: "Ongoing",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, index])
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
    <section ref={sectionRef} className="pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            How we turn chaos <br/>
            <span className="text-primaryOrange">
              into clarity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No guesswork. No surprises. Just a proven process that gets results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden lg:block"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primaryBlue to-primaryOrange transform -translate-y-1/2 transition-all duration-2000 hidden lg:block"
            style={{ width: `${(visibleSteps.length / steps.length) * 100}%` }}
          ></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 transform ${
                  visibleSteps.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
              >
                {/* Step Number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-primaryOrange rounded-full z-10 hidden lg:flex items-center justify-center">
                  <div className="w-3 h-3 bg-primaryOrange rounded-full"></div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-md transition-all duration-300 h-full">
                  {/* Icon & Number */}
                    
                    <div className="text-3xl font-bold  mb-4 text-primaryBlue">{step.number}</div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primaryBlue mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">What you get:</p>
                      <p className="text-gray-700">{step.outcome}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primaryOrange mr-2" />
                      <span className="text-sm text-gray-500">{step.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Promise */}


        <div className="text-center mt-16 space-y-4">
            <p className="text-3xl text-primaryBlue font-semibold ">Process Promise</p>
            <p className="text-xl text-gray-600 italic ">
              Every step includes regular check-ins, progress updates, and your approval before moving forward.<br/>
              <span className="font-semibold">Your project, your timeline, your success.</span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto "
            >

              <motion.button
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

              >
                Launch Your Project

              </motion.button>

              {/* <motion.button
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
              >
                <span>View Case Study</span>

              </motion.button> */}


          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection