import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
// Section 4: Client Quote Wall
function ClientQuoteWallSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const quotes = [
    {
      quote:
        "We needed to scale from 10K to 100K users without breaking the bank. ShiftDeploy delivered a solution that reduced our costs by 60% while handling 10x the traffic — faster and cleaner than expected.",
      author: "Sarah Chen",
      title: "CTO",
      company: "StreamlineHQ",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "scale infrastructure",
      delivered: "60% cost reduction + 10x capacity",
    },
    {
      quote:
        "We needed SOC2 compliance to close enterprise deals. ShiftDeploy delivered full certification in 4 months instead of the 12+ months everyone else quoted — faster and cleaner than expected.",
      author: "Marcus Rodriguez",
      title: "Founder",
      company: "SecureAPI",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "SOC2 compliance",
      delivered: "certification in 4 months",
    },
    {
      quote:
        "We needed to launch our MVP before our runway ran out. ShiftDeploy delivered a production-ready platform in 8 weeks that helped us raise $2M Series A — faster and cleaner than expected.",
      author: "Jennifer Park",
      title: "CEO",
      company: "GrowthLabs",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "rapid MVP development",
      delivered: "8-week launch + $2M funding",
    },
    {
      quote:
        "We needed zero-downtime deployments for our growing user base. ShiftDeploy delivered an automated CI/CD pipeline that eliminated outages and increased deployment speed by 90% — faster and cleaner than expected.",
      author: "David Kim",
      title: "CTO",
      company: "DataFlow",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "zero-downtime deployments",
      delivered: "0 outages + 90% faster deploys",
    },
    {
      quote:
        "We needed to fix our conversion funnel that was bleeding users. ShiftDeploy delivered a redesigned onboarding flow that increased conversions by 340% — faster and cleaner than expected.",
      author: "Alex Thompson",
      title: "Product Lead",
      company: "UserFlow",
      avatar: "/placeholder.svg?height=80&width=80",
      need: "conversion optimization",
      delivered: "340% conversion increase",
    },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className=" py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            What clients <br/>
            <span className="text-primaryOrange">
              really say
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600">The pattern is clear: we deliver what we promise, when we promise it</p>
        </div>

        {/* Quote Carousel */}
        <div className="relative mb-12 sm:mb-20">
          <div className="bg-white shadow-md rounded-3xl p-6 sm:p-10 text-center min-h-[300px] flex items-center justify-center">
            <div
            >
              <blockquote className="sm:text-xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl">
                "I was skeptical about outsourcing our infrastructure, but these guys know their stuff. Our AWS costs dropped 60% and performance actually improved. Best investment we've made."
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src={"/placeholder.svg"}
                  alt={"Marcus Rodriguez"}
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">SADIA</div>
                  <div className="text-gray-600">
                    CTO Seed
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Pattern Recognition */}


         <div className="text-center mt-12 space-y-6">
            <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">The ShiftDeploy Pattern</p>
            <p className="sm:text-xl text-gray-600 italic ">
              <span className=" font-semibold">Problem identified</span> →{" "}
              <span className=" font-semibold">Solution delivered</span> →{" "}
              <span className=" font-semibold">Results exceeded</span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto "
            >

              <Link to={"/ContactUs"}
                className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

              >
                Launch Your Project

              </Link>

              <Link to={"/shift-protocol"}
                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
              >
                <span>View Shift Protocol</span>

              </Link>


          </div>
        </div>
      </div>
    </section>
  )
}
export default ClientQuoteWallSection