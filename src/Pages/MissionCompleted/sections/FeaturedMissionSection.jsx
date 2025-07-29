import { BarChart3, CheckCircle, Code, Database, GitBranch, Layers, Server, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 3: Featured Mission Deep Dive
function FeaturedMissionSection() {
  const [activeTab, setActiveTab] = useState("challenge")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const mission = {
    client: "StreamlineHQ",
    category: "SaaS Infrastructure Scaling",
    timeline: "12 weeks",
    team: "3 engineers + 1 DevOps specialist",
    before: {
      traffic: "10K users",
      uptime: "95.2%",
      costs: "$15K/month",
      deployments: "Weekly (manual)",
    },
    after: {
      traffic: "100K+ users",
      uptime: "99.9%",
      costs: "$6K/month",
      deployments: "Daily (automated)",
    },
    challenges: [
      "Database queries timing out during peak traffic",
      "Manual deployment process causing frequent downtime",
      "AWS costs spiraling out of control with growth",
      "No monitoring system to identify bottlenecks",
    ],
    solutions: [
      "Implemented Redis caching layer and query optimization",
      "Built automated CI/CD pipeline with blue-green deployments",
      "Right-sized infrastructure with auto-scaling policies",
      "Set up comprehensive monitoring with Datadog integration",
    ],
    tools: [
      { name: "AWS", icon: <Server className="w-6 h-6" /> },
      { name: "Redis", icon: <Database className="w-6 h-6" /> },
      { name: "Docker", icon: <Layers className="w-6 h-6" /> },
      { name: "GitHub Actions", icon: <GitBranch className="w-6 h-6" /> },
      { name: "Datadog", icon: <BarChart3 className="w-6 h-6" /> },
      { name: "Terraform", icon: <Code className="w-6 h-6" /> },
    ],
    phases: [
      { phase: "Discovery & Audit", duration: "2 weeks", status: "completed" },
      { phase: "Infrastructure Optimization", duration: "4 weeks", status: "completed" },
      { phase: "CI/CD Implementation", duration: "3 weeks", status: "completed" },
      { phase: "Monitoring & Testing", duration: "2 weeks", status: "completed" },
      { phase: "Launch & Handover", duration: "1 week", status: "completed" },
    ],
  }

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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mission spotlight:
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {mission.client}
            </span>
          </h2>
          <p className="text-xl text-gray-600">{mission.category}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Before → After */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Before → After Comparison */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Before → After</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Before ShiftDeploy</h4>
                  <div className="space-y-3">
                    {Object.entries(mission.before).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-red-700 capitalize">{key}:</span>
                        <span className="font-medium text-red-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-2xl p-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">After ShiftDeploy</h4>
                  <div className="space-y-3">
                    {Object.entries(mission.after).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-green-700 capitalize">{key}:</span>
                        <span className="font-medium text-green-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Mission Impact</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10x</div>
                  <div className="text-sm text-gray-600">Traffic Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">7x</div>
                  <div className="text-sm text-gray-600">Deploy Speed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Challenges/Solutions & Timeline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-2xl p-2 mb-8">
              {["challenge", "solution", "timeline"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 capitalize ${
                    activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab === "challenge" ? "Challenges" : tab === "solution" ? "Our Solution" : "Timeline"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "challenge" && (
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">The Challenges We Faced</h4>
                  {mission.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start bg-red-50 rounded-xl p-4">
                      <Target className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">How We Solved It</h4>
                  <div className="space-y-4">
                    {mission.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start bg-green-50 rounded-xl p-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used */}
                  <div className="mt-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Tools & Technologies</h5>
                    <div className="grid grid-cols-3 gap-4">
                      {mission.tools.map((tool, index) => (
                        <div key={index} className="flex items-center bg-white rounded-xl p-3 shadow-sm">
                          <div className="text-gray-600 mr-2">{tool.icon}</div>
                          <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "timeline" && (
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Project Timeline</h4>
                  <div className="space-y-4">
                    {mission.phases.map((phase, index) => (
                      <div key={index} className="flex items-center bg-gray-50 rounded-xl p-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-900">{phase.phase}</span>
                            <span className="text-sm text-gray-500">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-900">Total Duration:</span>
                      <span className="text-xl font-bold text-blue-600">{mission.timeline}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMissionSection