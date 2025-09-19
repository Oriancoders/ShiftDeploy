import { BarChart3, Calendar, CheckCircle, Clock, Rocket, Target, TrendingUp, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"

// Section 5: Impact Analytics
function ImpactAnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({})
  const sectionRef = useRef(null)

  const metrics = [
    {
      value: 50000,
      suffix: "+",
      label: "Total Hours Saved",
      description: "Across all client projects",
      icon: <Clock className="w-5 sm:w-8 h-5 sm:h-8" />,
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Average Uptime",
      description: "Post-optimization",
      icon: <TrendingUp className="w-5 sm:w-8 h-5 sm:h-8" />,
    },
    {
      value: 75,
      suffix: "%",
      label: "Faster Deployments",
      description: "Average improvement",
      icon: <Rocket className="w-5 sm:w-8 h-5 sm:h-8" />,
    },
    {
      value: 10,
      suffix: "x",
      label: "Scale Capacity",
      description: "Average increase",
      icon: <BarChart3 className="w-5 sm:w-8 h-5 sm:h-8" />,
    },
  ]

  const additionalStats = [
    { label: "Projects Completed", value: "30+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Success Rate", value: "100%", icon: <Target className="w-6 h-6" /> },
    { label: "Client Retention", value: "95%", icon: <Users className="w-6 h-6" /> },
    { label: "Average Timeline", value: "8 weeks", icon: <Calendar className="w-6 h-6" /> },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          metrics.forEach((metric, index) => {
            setTimeout(() => {
              animateNumber(index, metric.value)
            }, index * 200)
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

  const animateNumber = (index, targetValue) => {
    let currentValue = 0
    const increment = targetValue / 50
    const timer = setInterval(() => {
      currentValue += increment
      if (currentValue >= targetValue) {
        currentValue = targetValue
        clearInterval(timer)
      }
      setAnimatedNumbers((prev) => ({
        ...prev,
        [index]: Math.floor(currentValue * 10) / 10,
      }))
    }, 30)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            The numbers <br />
            <span className="text-primaryOrange">
              don't lie
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600">Measurable impact across every mission we complete.</p>
        </div>

        {/* Main Metrics */}
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 sm:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            >
              <div className=" bg-white sm:bg-gray-50 rounded-3xl p-4 sm:h-auto h-full sm:p-8 text-center sm:hover:bg-white sm:shadow-none shadow-md sm:hover:shadow-xl transition-all duration-300 transform ">
                <div
                  className={`inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-primaryBlue mb-2 sm:mb-6`}
                >
                  <div className="text-white">{metric.icon}</div>
                </div>
                <div className="text-lg sm:text-4xl font-bold text-primaryBlue mb-2">
                  {animatedNumbers[index] || 0}
                  {metric.suffix}
                </div>
                <div className="text-md sm:text-xl font-semibold text-gray-800 mb-2">{metric.label}</div>
                <div className="text-xs sm:text-md text-gray-600">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="bg-white rounded-3xl p-8 sm:shadow-lg">
            <h3 className="text-4xl font-bold text-primaryBlue mb-8 text-center">Mission Statistics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {additionalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <div className="text-gray-600">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Message */}
        <div className="text-center">
          <CursorFollower
            text="Every number represents a team that trusted us with their critical challenges"
            className="  max-w-2xl mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-3xl sm:rounded-full text-white mx-auto"
            textClassName='text-white font-semibold  sm:text-sm lg:text-base '
            gradientFrom="#F76707"
            gradientTo="#0B1D30"
            circleSize={100}
          />
        </div>
      </div>
    </section>
  )
}

export default ImpactAnalyticsSection