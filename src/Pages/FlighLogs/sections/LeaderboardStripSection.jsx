import { CheckCircle, Clock, Star, Target, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 4: Leaderboard Strip
function LeaderboardStripSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const leaderboardStats = [
    {
      metric: "Projects Delivered",
      value: "50+",
      description: "On time, every time",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      metric: "Client Satisfaction",
      value: "4.9/5",
      description: "Average rating",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
    },
    {
      metric: "Success Rate",
      value: "100%",
      description: "Mission completion",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      metric: "Client Retention",
      value: "95%",
      description: "Come back for more",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      metric: "Average Timeline",
      value: "8 weeks",
      description: "From start to launch",
      icon: <Clock className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-r from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 2px, transparent 2px),
                           radial-gradient(circle at 80% 20%, #F76707 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The numbers
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              speak volumes
            </span>
          </h2>
          <p className="text-xl text-gray-300">Consistent results across every mission we complete.</p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8">
          {leaderboardStats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors duration-300">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6`}
                >
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-2">{stat.metric}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl text-white font-medium">
              These aren't just numbers —{" "}
              <span className="text-orange-400">they're promises kept to teams who trusted us</span> with their
              mission-critical projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeaderboardStripSection