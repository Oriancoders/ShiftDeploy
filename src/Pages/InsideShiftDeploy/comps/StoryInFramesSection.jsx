import { Cpu, Zap, Battery } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"

function StoryInFramesSection() {
  const sectionRef = useRef(null)

  const projectFrames = [
    {
      title: "The Challenge",
      subtitle: "Growth Without Visibility",
      description:
        "Bullseye Investments needed a platform that could keep up with real-time financial activity and investor expectations.",
      details:
        "Their existing setup struggled with delayed data updates, limited transparency, and manual processes that slowed down decision-making. As usage grew, the system became harder to trust and even harder to scale.",
      icon: <Cpu className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "Our Approach",
      subtitle: "Build, Then Optimize",
      description:
        "We rebuilt the platform foundation and then optimized it for real-time performance and reliability.",
      details:
        "ShiftDeploy delivered a clean, scalable platform with real-time APIs, automated data flows, and a clear separation between user dashboards and admin controls. The focus was stability first, then speed, then clarity.",
      icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "The Result",
      subtitle: "Clarity at Scale",
      description:
        "A reliable investment platform designed to support growth and investor confidence.",
      details:
        "Bullseye now operates on a system that delivers timely data, smoother internal operations, and a more transparent experience for stakeholders — without increasing operational complexity.",
      icon: <Battery className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-x-hidden text-textColor">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            From fragile systems to <br />
            <span className="text-primaryOrange">
              decision-ready platforms
            </span>
          </h2>
          <p className="sm:text-xl text-gray-900">
            Project Spotlight: Bullseye Investments
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {projectFrames.map((frame, index) => (
              <div key={index}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-300 transition-all duration-300 h-full shadow-md sm:hover:shadow-xl">
                  <div className="inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-primaryBlue mb-4 sm:mb-6">
                    <div className="text-white">{frame.icon}</div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      {frame.title}
                    </h3>
                    <h4 className="text-lg mb-4">{frame.subtitle}</h4>
                  </div>

                  <blockquote className="sm:text-lg italic mb-4 sm:mb-6 border-l-4 border-primaryBlue pl-4">
                    "{frame.description}"
                  </blockquote>

                  <p className="leading-relaxed">{frame.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 sm:mt-20 space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">
            The Lesson
          </p>
          <p className="sm:text-lg text-gray-600 italic">
            Strong financial products are built on clarity, trust, and systems that don’t break under pressure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto">
            <Link
              to={"/ContactUs"}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Start Your Platform
            </Link>

            <Link
              to={"/CaseStudies/BullseyesCase"}
              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Full Case Study</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryInFramesSection
