import { Cpu, Zap, Battery } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function StoryInFramesSection() {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [visibleFrames, setVisibleFrames] = useState([])
  const sectionRef = useRef(null)

  const projectFrames = [
    {
      title: "The Challenge",
      subtitle: "Unstable Infrastructure",
      description: "We needed to collect real-time EV charger data reliably without constant breakdowns.",
      details:
        "Our early prototype could barely handle basic telemetry. MQTT packets were dropping, temperature spikes went unnoticed, and there was no session tracking. Scaling this for public deployment seemed impossible.",
      icon: <Cpu className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "Our Approach",
      subtitle: "IoT + Cloud Architecture",
      description:
        "We built a robust pipeline from edge to cloud with full session and payment handling.",
      details:
        "We rewrote the ESP32 firmware for stable MQTT publishing, implemented a Spring Boot backend to process and store telemetry, added WebSockets for real-time updates, and connected Stripe to handle charging session payments.",
      icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8" />,
    },
    {
      title: "The Result",
      subtitle: "Live and Scalable",
      description: "A production-ready EV charging platform with live telemetry and remote control.",
      details:
        "The system now streams continuous voltage, current, and temperature data from chargers to the dashboard, supports multiple users, logs full session history, and processes payments automatically ready to scale to a commercial network.",
      icon: <Battery className="w-6 sm:w-8 h-6 sm:h-8" />,
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
    <section ref={sectionRef} className="py-24 bg-gray-50 overflow-x-hidden text-textColor">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            From prototype to production ready <br/>
            <span className="text-primaryOrange">
              The EV Charger Journey
            </span>
          </h2>
          <p className="sm:text-xl text-gray-900">Project Spotlight: Smart EV Charging Platform</p>
        </div>

        {/* timeline map code stays same */}
        <div className="relative">


          <div className="grid md:grid-cols-3 gap-8">
            {projectFrames.map((frame, index) => (
              <div
                key={index}
              >
          
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-300 transition-all duration-300 h-full shadow-md sm:hover:shadow-xl">
                  <div className="inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 rounded-2xl bg-primaryBlue mb-4 sm:mb-6">
                    <div className="text-white">{frame.icon}</div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{frame.title}</h3>
                    <h4 className="text-lg  mb-4">{frame.subtitle}</h4>
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
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">The Lesson</p>
          <p className="sm:text-lg text-gray-600 italic">
            Innovation happens when hardware, software, and users all work in sync.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto ">
            <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Launch Your Project
            </Link >

            <Link to={"/CaseStudies/SlackerIOT"}

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
