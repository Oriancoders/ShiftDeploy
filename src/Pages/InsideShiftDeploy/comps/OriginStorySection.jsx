import { Rocket, Target, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"
import { image } from "framer-motion/client"

// Section 1: Origin Story
function OriginStorySection() {
  const [currentStage, setCurrentStage] = useState(0)
  const [visibleStages, setVisibleStages] = useState([])
  const sectionRef = useRef(null)

  const stages = [
    {
      title: "Spark",
      subtitle: "The Problem",
      description:
        "We started in the trenches—debugging someone else's nightmare at 3 AM, watching 'quick fixes' compound into technical debt mountains. The industry was full of builders who moved fast and broke everything, including trust.",
      icon: <Zap className="w-8 h-8" />,
      image : 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg'
    },
    {
      title: "Struggle",
      subtitle: "The Question",
      description:
        "So we asked a dangerous question: What if we slowed down to speed up? What if we built things right the first time instead of patching them forever?",
      icon: <Target className="w-8 h-8" />,
      image : 'https://images.pexels.com/photos/27349270/pexels-photo-27349270.jpeg'
    },
    {
      title: "System",
      subtitle: "The Solution",
      description:
        "ShiftDeploy was born from that rebellion against rushed code and empty promises. We became the agency we wished existed—one that treats your project like our own legacy.",
      icon: <Rocket className="w-8 h-8" />,
      image : 'https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stages.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStages((prev) => [...prev, index])
            }, index * 800)
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
    <section
      ref={sectionRef}
      className="pt-28 sm:pt-32  text-textColor relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Background elements */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-48 lg:w-80 xl:w-96 h-32 sm:h-48 lg:h-80 xl:h-96 bg-gradient-to-br from-blue-200/30 to-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-40 lg:w-64 xl:w-80 h-24 sm:h-40 lg:h-64 xl:h-80 bg-gradient-to-br from-orange-50 to-orange-50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-96 xl:w-[600px] h-48 sm:h-64 lg:h-96 xl:h-[600px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Cinematic Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primaryBlue mb-4 leading-[1.3]">
            Built in chaos
            <span className="block bg-gradient-to-r from-primaryOrange to-orange-600 bg-clip-text text-transparent pb-5">
              Deployed for clarity
            </span>
          </h1>
          <CursorFollower

            text="Every great system starts with a problem worth solving"
            className="  max-w-2xl sm:mt-12 bg-primaryBlue  px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName='text-white font-semibold text-sm lg:text-base'
            gradientFrom="#f76707"
            gradientTo="#0B1D30"
            circleSize={200}

          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute lg:block hidden left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primaryBlue to-toBlue rounded-full"></div>

          {/* Stages */}
          <div className="space-y-32">
            {stages.map((stage, index) => (
     
                <div
                  className={`grid md:grid-cols-2 gap-8 sm:gap-16 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <div className="relative">
                      {/* <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondaryBlue to-toSecBlue mb-6`}
                      >
                        <div className="text-white">{stage.icon}</div>
                      </div> */}
                      <h3 className="text-5xl font-bold text-primaryBlue mb-2">{stage.title}</h3>
                      <h4 className="text-xl text-gray-800 font-semibold mb-6">{stage.subtitle}</h4>
                      <p className="text-lg text-gray-800 leading-relaxed">{stage.description}</p>
                      
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="relative h-52 sm:h-80 rounded-3xl overflow-hidden bg-slate-400" style={{
                      backgroundImage : `url(${stage.image})`,
                      backgroundSize : 'cover' ,
                      backgroundRepeat : 'no-repeat'
                      
                    }}>
                      
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute lg:block hidden  left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-800 z-10"></div>
                </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-32">
          <CursorFollower

            text="Some agencies chase trends. We chase fundamentals."
           className="  max-w-2xl sm:mt-12 bg-primaryBlue  px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName='text-white font-semibold text-sm lg:text-base'
            gradientFrom="#f76707"
            gradientTo="#0B1D30"
            circleSize={200}

          />
        </div>
      </div>
    </section>
  )
}

export default OriginStorySection