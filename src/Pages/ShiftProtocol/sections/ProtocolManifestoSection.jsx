import { ArrowRight, } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import CursorFollower from "../../../utils/CursorFollower"
// Section 1: Protocol Manifesto (Hero)
function ProtocolManifestoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden pt-28 sm:pt-32 "
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
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div

        >

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-primaryBlue mb-8 leading-tight">
            The Shift Protocol <br />
            <span className="text-primaryOrange ">
              Your guarantee against technical chaos
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <p className="sm:text-xl  text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our battle-tested methodology transforms complex technical challenges into predictable, client-controlled
              outcomes.
              <span className="text-primaryBlue font-semibold"> No surprises. No abandonment. No confusion.</span>
            </p>
          </div>

          {/* Supporting Copy */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <p className="sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              After 200+ successful deployments, we've codified exactly how to build, optimize, and scale technical
              systems without the typical agency nightmares. The Shift Protocol isn't just our process, it's your
              insurance policy against project failure.
            </p>
          </div>



          {/* CTA */}

          <Link to={"/deploy-toolkit"}
            className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl  mb-6 font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md group mx-auto w-fit"

          >

            View Deploy Toolkit
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />

          </Link>

          <CursorFollower

            text="Every decision transparent. Every milestone client-approved. Every deliverable fully documented and
                owned by you."
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

export default ProtocolManifestoSection