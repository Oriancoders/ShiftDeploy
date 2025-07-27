import { CheckCircle, Clock, FileText, GitBranch, MessageSquare, Settings, Target, Users, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 4: Communication Rituals
function CommunicationRitualsSection() {
  const [visibleRituals, setVisibleRituals] = useState([])
  const sectionRef = useRef(null)

  const rituals = [
    {
      title: "Daily Transparency",
      fear: "I'll have no idea what's happening day-to-day",
      ritual:
        "Daily progress updates via Slack with screenshots, code commits, and next-day priorities. No need to ask—you'll always know.",
      icon: <MessageSquare className="w-6 h-6" />,
      tools: ["Slack updates", "Code commits", "Progress screenshots", "Next-day priorities"],
    },
    {
      title: "Weekly Deep Dives",
      fear: "Technical updates will be meaningless jargon",
      ritual:
        "30-minute weekly calls with live demos, plain-English progress reports, and open Q&A. Technical details available but never required.",
      icon: <Users className="w-6 h-6" />,
      tools: ["Live demos", "Plain-English reports", "Open Q&A", "Technical deep-dives (optional)"],
    },
    {
      title: "Instant Access",
      fear: "I won't be able to reach them when I need to",
      ritual:
        "Dedicated Slack channel with 4-hour response guarantee during business hours. Emergency contact for critical issues.",
      icon: <Zap className="w-6 h-6" />,
      tools: ["Dedicated Slack channel", "4-hour response guarantee", "Emergency contact", "Critical issue escalation"],
    },
    {
      title: "Timezone Alignment",
      fear: "Time zone differences will slow everything down",
      ritual:
        "Minimum 4-hour overlap with your core business hours. All meetings scheduled in your timezone. Async updates for maximum efficiency.",
      icon: <Clock className="w-6 h-6" />,
      tools: ["4-hour overlap minimum", "Your timezone priority", "Async communication", "Flexible scheduling"],
    },
  ]

  const tools = [
    { name: "Slack", purpose: "Real-time communication", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Notion", purpose: "Project documentation and progress", icon: <FileText className="w-5 h-5" /> },
    { name: "Linear", purpose: "Task tracking and sprint planning", icon: <Target className="w-5 h-5" /> },
    { name: "GitHub", purpose: "Code repository access", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Figma", purpose: "Design files and prototypes", icon: <Settings className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          rituals.forEach((_, index) => {
            setTimeout(() => {
              setVisibleRituals((prev) => [...prev, index])
            }, index * 200)
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How we stay
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              connected
            </span>
          </h2>
          <p className="text-xl text-gray-600">Communication protocols that eliminate project anxiety</p>
        </div>

        {/* Communication Rituals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rituals.map((ritual, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                visibleRituals.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-white">{ritual.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{ritual.title}</h3>
                </div>

                {/* Fear */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">Your Fear:</h4>
                  <p className="text-gray-700 italic">"{ritual.fear}"</p>
                </div>

                {/* Ritual */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">Our Ritual:</h4>
                  <p className="text-gray-700 leading-relaxed">{ritual.ritual}</p>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Includes:</h4>
                  <ul className="space-y-2">
                    {ritual.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Transparency */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tool Transparency</h3>
          <p className="text-gray-600 text-center mb-8">Full access to all project tools from day one:</p>

          <div className="grid md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:from-blue-50 hover:to-indigo-50 transition-colors duration-300">
                  <div className="text-gray-600">{tool.icon}</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}export default CommunicationRitualsSection