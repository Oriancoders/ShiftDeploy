import { Rocket, Target, Zap } from "lucide-react"
import { useRef } from "react"
import CursorFollower from "../../../utils/CursorFollower"

// Section 1: Inside ShiftDeploy (How We Work)
function OriginStorySection() {
  const sectionRef = useRef(null)

  const stages = [
    {
      title: "Step In",
      subtitle: "We start in your shoes",
      description:
        "Before we touch anything, we learn the real pressure: what’s breaking, what’s blocked, and what success actually looks like for your business. No assumptions. No templated solutions.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145684/spark_wmkexc.avif",
      // (optional) consider swapping this image to a “strategy / workshop / planning” visual for stronger business tone
    },
    {
      title: "Simplify",
      subtitle: "Clarity before complexity",
      description:
        "We turn messy problems into a clear plan: what to fix first, what can wait, and what will move the needle. That’s how teams stop wasting time and start shipping with confidence.",
      icon: <Target className="w-8 h-8" />,
      image: "https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145716/struggle_kodvee.jpg",
      // (optional) consider swapping this image to “systems / roadmap / clarity” instead of “struggle”
    },
    {
      title: "Deliver",
      subtitle: "Outcome-focused execution",
      description:
        "Then we execute with ownership. You get measurable improvements, cleaner flows, and a system that’s easier to run. The goal isn’t more features, it’s fewer headaches and better results.",
      icon: <Rocket className="w-8 h-8" />,
      image: "https://res.cloudinary.com/dbazbq7u9/image/upload/v1765145681/system_musz7d.jpg",
      // (optional) consider swapping this image to “business growth / dashboard / results” visual
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="pt-28 sm:pt-32 pb-20 text-textColor relative overflow-hidden"
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
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 sm:w-40 lg:w-64 xl:w-80 h-24 sm:h-40 lg:h-64 xl:h-80 bg-gradient-to-br from-orange-50 to-orange-50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-96 xl:w-[600px] h-48 sm:h-64 lg:h-96 xl:h-[600px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primaryBlue mb-4 leading-[1.3]">
            We don’t start with code
            <span className="block bg-gradient-to-r from-primaryOrange to-orange-600 bg-clip-text text-transparent pb-5">
              We start with your pain
            </span>
          </h1>

          <CursorFollower
            text="We put our feets in your shoes first, then we simplify and deliver."
            className="max-w-2xl sm:mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName="text-white font-semibold text-sm lg:text-base"
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
          <div className="space-y-16 sm:space-y-32">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 sm:gap-16 items-center ${
                  index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="relative">
                    <h3 className="text-5xl font-bold text-primaryBlue mb-2">{stage.title}</h3>
                    <h4 className="text-xl text-gray-800 font-semibold mb-6">{stage.subtitle}</h4>
                    <p className="text-lg text-gray-800 leading-relaxed">{stage.description}</p>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div
                    className="relative h-52 sm:h-80 rounded-3xl overflow-hidden bg-slate-400"
                    style={{
                      backgroundImage: `url(${stage.image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>

                {/* Timeline Node */}
                <div className="absolute lg:block hidden left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-gray-800 z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <CursorFollower
            text="Less noise. Clear ownership. Measurable progress."
            className="max-w-2xl sm:mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-xl sm:rounded-full text-white mx-auto"
            textClassName="text-white font-semibold text-sm lg:text-base"
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
