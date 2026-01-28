import { CheckCircle, Clock, MessageSquare, Users, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

// Section 4: Communication Rituals
function CommunicationRitualsSection() {
  // const [visibleRituals, setVisibleRituals] = useState([])
  const sectionRef = useRef(null)

  const rituals = [
    {
      title: "Daily Transparency",
      fear: "I'll have no idea what's happening day-to-day",
      ritual:
        "Daily progress updates via Slack with screenshots, code commits, and next-day priorities. No need to ask, you'll always know.",
      icon: <MessageSquare className="w-6 h-6" />,
      tools: ["Slack updates", "Code commits", "Progress screenshots", "Next-day priorities"],
    },
    {
      title: "Weekly Deep Dives",
      fear: "Technical updates will be meaningless jargon",
      ritual:
        "Weekly calls or chats with live demos, plain-English progress reports, and open Q&A.",
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
        "Minimum 4-hour overlap with your core business hours. All meetings scheduled in your timezone.",
      icon: <Clock className="w-6 h-6" />,
      tools: ["4-hour overlap minimum", "Your timezone priority", "Async communication", "Flexible scheduling"],
    },
  ]

  const tools = [
    {
      name: "Slack",
      purpose: "Real-time communication",
      icon: "https://w7.pngwing.com/pngs/642/135/png-transparent-slack-new-hd-logo-thumbnail.png"
    },
    {
      name: "Notion",
      purpose: "Project documentation and progress",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkfgoU8tVx-aUbyBH-_UcNuV0Y4mTaTixIKA&s"
    },
    {
      name: "ClickUp",
      purpose: "Task tracking and sprint planning",
      icon: "https://images.seeklogo.com/logo-png/38/2/clickup-symbol-logo-png_seeklogo-389754.png"
    },
    {
      name: "GitHub",
      purpose: "Code repository access",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
      name: "Figma",
      purpose: "Design files and prototypes",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png"
    },
  ];


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting) {
  //         rituals.forEach((_, index) => {
  //           setTimeout(() => {
  //             setVisibleRituals((prev) => [...prev, index])
  //           }, index * 200)
  //         })
  //       }
  //     },
  //     { threshold: 0.2 },
  //   )

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current)
  //   }

  //   return () => observer.disconnect()
  // }, [])

  return (
    <section ref={sectionRef} className="sm:py-12 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center sm:mb-20 mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            How we stay <br />
            <span className="text-primaryOrange">
              connected
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600">Communication protocols that eliminate project anxiety</p>
        </div>

        {/* Communication Rituals */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rituals.map((ritual, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform `}
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md sm:hover:shadow-xl transition-all duration-300 h-full">
                {/* Header */}

                <h3 className="text-2xl font-bold text-primaryBlue mb-6">{ritual.title}</h3>

                {/* Fear */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primaryOrange mb-2 uppercase tracking-wide">Your Fear:</h4>
                  <p className="sm:text-md text-xs text-gray-700 italic">"{ritual.fear}"</p>
                </div>

                {/* Ritual */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primaryBlue mb-2 uppercase tracking-wide">Our Ritual:</h4>
                  <p className="sm:text-md text-xs text-gray-700 leading-relaxed">{ritual.ritual}</p>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Includes:</h4>
                  <ul className="space-y-2">
                    {ritual.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-primaryOrange mr-2 flex-shrink-0" />
                        <span className="sm:text-md text-xs">{tool}</span>
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
          <p className="text-gray-600 text-center mb-8">Full access to all project tools from day one</p>

          <div className="grid md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:from-blue-50 hover:to-indigo-50 transition-colors duration-300">
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                </div>
                <h4 className="font-semibold text-primaryBlue mb-2">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.purpose}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto mt-16">
            <a target="_blacnk" href="https://join.slack.com/t/shiftdeployworkspace/shared_invite/zt-3dej8l23q-m2S_MrlF7zvL2F~9jwK6iA"

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Join Us On Slack 
            </a >

            <Link to={"/services"}

              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
} export default CommunicationRitualsSection