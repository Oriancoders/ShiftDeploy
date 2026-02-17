import { BarChart3, CheckCircle, Code, Database, GitBranch, Layers, Server, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 3: Featured Mission Deep Dive
function FeaturedMissionSection() {
  const [activeTab, setActiveTab] = useState("challenge")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const mission = {
  client: "Bullseye Investments",
  category: "Conversion-Focused Brokerage Website",
  timeline: "3–4 weeks",
  team: "1–2 engineers",
  before: {
    messaging: "Unclear value proposition",
    navigation: "High-friction user flow",
    ctas: "Weak / inconsistent CTAs",
    portalAccess: "Not clearly surfaced",
  },
  after: {
    messaging: "Clear positioning + structure",
    navigation: "Simplified page flow",
    ctas: "Conversion-led CTA hierarchy",
    portalAccess: "Direct and prominent access",
  },
  challenges: [
    "The website didn’t communicate trust and positioning clearly within the first scroll",
    "Key user journeys were scattered and visitors had to “figure out” what to do next",
    "Calls-to-action were inconsistent across pages, weakening conversion intent",
    "Client portal access existed, but wasn’t presented in a clear, guided way",
  ],
  solutions: [
    "Rebuilt the page structure around clarity-first messaging and trust signals",
    "Designed a clean CTA hierarchy to guide visitors toward the next action",
    "Aligned layout, spacing, and sections to reduce friction and improve scannability",
    "Implemented a clear, consistent portal access path across the site",
  ],
  tools: [
    { name: "UX Structure", icon: <Layers className="w-6 h-6" /> },
    { name: "CTA Hierarchy", icon: <Target className="w-6 h-6" /> },
    { name: "Performance Hygiene", icon: <BarChart3 className="w-6 h-6" /> },
    { name: "Implementation", icon: <Code className="w-6 h-6" /> },
    { name: "Deployment", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Reliability", icon: <Server className="w-6 h-6" /> },
  ],
  phases: [
    { phase: "Discovery & Page Review", duration: "2–3 days", status: "completed" },
    { phase: "Messaging & Structure Rewrite", duration: "4–6 days", status: "completed" },
    { phase: "UI Implementation", duration: "1–1.5 weeks", status: "completed" },
    { phase: "QA & Refinement", duration: "2–4 days", status: "completed" },
    { phase: "Launch & Post-Launch Support", duration: "2–3 days", status: "completed" },
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Mission spotlight <br/>
            <span className="text-primaryOrange">
              {mission.client}
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600">{mission.category}</p>
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
                <div className="bg-primaryOrange/10 border-l-4 border-primaryOrange rounded-r-2xl p-6 sm:max-w-auto max-w-[90vw]">
                  <h4 className="text-lg font-semibold text-primaryOrange mb-4">Before ShiftDeploy</h4>
                  <div className="space-y-3">
                    {Object.entries(mission.before).map(([key, value]) => (
                      <ul key={key} className="flex justify-between">
                        <li className="font-medium text-primaryOrange">{value}</li>
                      </ul>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className="bg-primaryBlue/5 border-l-4 border-primaryBlue rounded-r-2xl p-6  sm:max-w-auto max-w-[90vw]">
                  <h4 className="text-lg font-semibold text-primaryBlue  mb-4">After ShiftDeploy</h4>
                  <div className="space-y-3">
                    {Object.entries(mission.after).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium text-primaryBlue ">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white shadow-md rounded-2xl p-8  sm:max-w-auto max-w-[90vw]">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Mission Impact</h4>
              <div className="grid grid-cols-2 gap-6 text-primaryBlue">
                <div className="text-center">
                  <div className="text-3xl font-bold ">10x</div>
                  <div className="text-sm text-gray-600">Traffic Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold ">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">7x</div>
                  <div className="text-sm text-gray-600">Deploy Speed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Challenges/Solutions & Timeline */}
          <div
            className={`transition-all duration-1000 delay-300 transform`}
          >
            {/* Tab Navigation */}
            <div className="flex bg-gray-100 rounded-2xl p-2 mb-4 sm:mb-8">
              {["challenge", "solution", "timeline"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`sm:text-md text-xs flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 capitalize ${
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4 sm:mb-6">The Challenges We Faced</h4>
                  {mission.challenges.map((challenge, index) => (
                    <div key={index} className="flex sm:items-center items-start bg-red-50 rounded-xl p-4">
                      <Target className="w-4 sm:w-5 h-4 sm:h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="sm:text-md text-xs text-gray-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "solution" && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 sm:mb-6">How We Solved It</h4>
                  <div className="space-y-4">
                    {mission.solutions.map((solution, index) => (
                      <div key={index} className="flex sm:items-center items-start bg-green-50 rounded-xl p-4">
                        <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="sm:text-md text-xs text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used */}
                  <div className="mt-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Tools & Technologies</h5>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                      <div key={index} className="flex items-center bg-gray-50 rounded-xl p-3 sm:p-4 bg-primaryBlue/5">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primaryBlue rounded-full flex items-center justify-center mr-4">
                          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center ">
                            <span className="sm:text-md text-xs font-medium text-gray-900">{phase.phase}</span>
                            <span className="text-sm text-gray-500">{phase.duration}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-primaryBlue/5  rounded-xl p-4">
                    <div className="flex items-center text-primaryBlue justify-between">
                      <span className="font-semibold ">Total Duration:</span>
                      <span className="text-xl font-bold ">{mission.timeline}</span>
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