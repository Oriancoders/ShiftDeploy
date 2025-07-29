import { BarChart3, Calendar, CheckCircle, Clock, Rocket, Target, TrendingUp, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      icon: <Clock className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Average Uptime",
      description: "Post-optimization",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      value: 75,
      suffix: "%",
      label: "Faster Deployments",
      description: "Average improvement",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      value: 10,
      suffix: "x",
      label: "Scale Capacity",
      description: "Average increase",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
  ]

  const additionalStats = [
    { label: "Projects Completed", value: "50+", icon: <CheckCircle className="w-6 h-6" /> },
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The numbers
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              don't lie
            </span>
          </h2>
          <p className="text-xl text-gray-600">Measurable impact across every mission we complete.</p>
        </div>

        {/* Main Metrics */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-gray-50 rounded-3xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} mb-6`}
                >
                  <div className="text-white">{metric.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {animatedNumbers[index] || 0}
                  {metric.suffix}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{metric.label}</div>
                <div className="text-gray-600">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mission Statistics</h3>
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
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-600 italic">
            Every number represents a team that trusted us with their mission-critical challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImpactAnalyticsSection