import { CheckCircle, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
// Section 6: Client-Led Case Confirmation
function ClientControlSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const approvalGates = [
    { point: "Discovery Phase", description: "Complete technical audit and project plan" },
    { point: "Design Phase", description: "User experience flows and system architecture" },
    { point: "Development Milestones", description: "25%, 50%, 75% completion reviews" },
    { point: "Pre-Launch", description: "Full system testing and deployment plan" },
    { point: "Launch", description: "Production deployment authorization" },
    { point: "Handover", description: "Final documentation and knowledge transfer" },
  ]

  const controlPoints = [
    { point: "Budget Control", description: "No work begins without your written approval" },
    { point: "Timeline Control", description: "All deadlines set with your input and agreement" },
    { point: "Quality Control", description: "Nothing ships without your explicit approval" },
    { point: "Scope Control", description: "All changes require your authorization" },
    { point: "Access Control", description: "Full admin access to all systems and code" },
    { point: "Exit Control", description: "Leave anytime with everything you need" },
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
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className=" mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            You approve <br />
            <span className="text-primaryOrange">
              everything
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600">Client control at every critical decision point</p>
        </div>



        <div className="grid lg:grid-cols-2 gap-12 mb-16 px-6 max-w-6xl mx-auto">
          {/* Approval Gates */}
          <div
            className={`transition-all duration-1000 delay-300 transform `}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Approval Gates</h3>
              <ul className="space-y-4">
                {approvalGates.map((gate, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{gate.point}:</span>
                      <span className="text-gray-700 ml-2">{gate.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Control Points */}
          <div
           
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-6">Your Control Points</h3>
              <ul className="space-y-4">
                {controlPoints.map((control, index) => (
                  <li key={index} className="flex items-start  text-xs sm:text-sm">
                    <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-primaryOrange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">{control.point}:</span>
                      <span className="text-gray-700 ml-2">{control.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Core Promise */}
        <div className="text-center my-16 space-y-6 bg-primaryBlue sm:py-16 py-6 w-full">
          <p className="text-3xl sm:text-5xl text-white font-semibold">Core Promise</p>
          <p className="text-lg max-w-4xl text-center mx-auto text-gray-100 italic ">
            Every step reviewed by you. Every delivery approved by you. Every major decision requires your explicit
            sign-off before we proceed.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto "
          >

            <Link to={"/ContactUs"}
  
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

            >
              Launch Your Project

            </Link>
 
            <Link to={"/insideShiftDeploy"}
              className="bg-white  border-2 border-primaryBlue text-primaryBlue px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Inside ShiftDeploy</span>

            </Link>


          </div>
        </div>
        {/* Client Testimonial */}
        <div
          className={` px-6`}
        >
          <div className="sm:bg-white rounded-3xl p-6 sm:p-12 shadow-md text-center max-w-6xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="sm:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl mx-auto">
              "The Shift Protocol gave us something we'd never experienced with a technical partner: complete
              confidence. We knew exactly what was happening, when it would be done, and that we could trust the
              outcome. No surprises, no vendor lock-in, no regrets."
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=60" alt="Sarah Chen" className="w-12 sm:w-15 h-12 sm:h-15 rounded-full mr-4" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 sm:text-lg">Sarah Chen</div>
                <div className="text-gray-600">CTO @ GrowthLabs (Series A)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientControlSection