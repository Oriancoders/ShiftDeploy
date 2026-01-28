import { BarChart3, CheckCircle, Rocket, TrendingUp, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CursorFollower from "../../../utils/CursorFollower"

// Section 3: What We Solve
function WhatWeSolveSection() {
  const [visibleProblems, setVisibleProblems] = useState([])
  const problemRefs = useRef([])

  const problems = [
    {
      pain: "Our website feels slow — and we can see users dropping off, but we don’t know what to fix first.",
      fix: "ShiftSpeed™: We identify the real slow points, apply practical fixes, and track improvements with before/after metrics (Core Web Vitals + key pages).",
      icon: <BarChart3 className="w-4 sm:w-6 h-4 sm:h-6" />,
    },
    {
      pain: "We’re getting traffic, but leads and bookings aren’t consistent, it’s hard to tell what’s working.",
      fix: "ShiftConvert™: We tighten messaging, layout, and CTAs, then improve the journey so visitors know what to do next. Clear reporting so you can see what improved.",
      icon: <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6" />,
    },
    {
      pain: "Our website looks outdated or feels messy and we’re worried it’s hurting trust.",
      fix: "ShiftBuild™: We rebuild with a cleaner structure, faster pages, and a modern experience that’s easier to maintain and easier for customers to understand.",
      icon: <Rocket className="w-4 sm:w-6 h-4 sm:h-6" />,
    },
    {
      pain: "Small updates keep turning into big headaches. Things break, and nobody truly owns the site long-term.",
      fix: "ShiftFlow™: Ongoing care that keeps your site stable, fast, and improving—regular checkups, updates, and monthly optimizations with one accountable partner.",
      icon: <Zap className="w-4 sm:w-6 h-4 sm:h-6" />,
    },
    {
      pain: "We need to connect tools (payments, forms, dashboards), but we don’t want a long build or a fragile setup.",
      fix: "Practical integrations: We connect the essentials cleanly, keep it maintainable, and document it so your team isn’t stuck later.",
      icon: <BarChart3 className="w-4 sm:w-6 h-4 sm:h-6" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleProblems((prev) => (prev.includes(index) ? prev : [...prev, index]))
            }, index * 200)
          }
        })
      },
      { threshold: 0.3 },
    )

    problemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pb-5 sm:pt-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-4 sm:mb-6">
            The issues that quietly
            <br />
            <span className="text-primaryOrange">slow down growth</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Most teams don’t need “more features.” They need clarity, speed, and a site that converts.
            Here are the problems we step in to fix.
          </p>
        </div>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              ref={(el) => (problemRefs.current[index] = el)}
              data-index={index}
              className={`transition-all duration-700 transform ${
                visibleProblems.includes(index) ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
                {/* Pain Point */}
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="bg-primaryOrange/5 border-l-4 border-primaryOrange rounded-r-2xl p-4 sm:p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-primaryOrange rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <div className="text-white">{problem.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-md text-lg font-semibold text-primaryOrange mb-2">Your Pain:</h3>
                      </div>
                    </div>
                    <blockquote className="text-sm sm:text-lg text-primaryOrange italic leading-relaxed font-medium">
                      "{problem.pain}"
                    </blockquote>
                  </div>
                </div>

                {/* Solution */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-primaryBlue/5 border-l-4 border-primaryBlue rounded-r-2xl p-4 sm:p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-primaryBlue rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-md sm:text-lg font-semibold text-primaryBlue mb-2">Our Fix:</h3>
                      </div>
                    </div>
                    <p className="text-sm sm:text-lg text-primaryBlue leading-relaxed">{problem.fix}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <CursorFollower
            text="If any of this sounds familiar, ShiftDeploy we can help you fix it with a clear plan and clean execution."
            className="max-w-2xl mt-12 bg-primaryBlue px-10 sm:px-6 py-4 rounded-3xl sm:rounded-full text-white mx-auto"
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

export default WhatWeSolveSection

