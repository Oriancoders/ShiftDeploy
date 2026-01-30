import { CheckCircle } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"

// Section 4: How We Work
function HowWeWorkSection() {
  const sectionRef = useRef(null)

  const workPrinciples = [
    {
      title: "Low-overhead collaboration",
      description:
        "We step into your context quickly, align on priorities, and keep communication tight, so your team stays focused and decisions stay fast.",
      tools: [
        "Weekly milestones and clear owners",
        "Async updates (no meeting overload)",
        "Docs that capture decisions and tradeoffs",
        "Fast feedback loops with your stakeholders",
      ],
    },
    {
      title: "Progress you can see",
      description:
        "Instead of vague status updates, we ship in measurable increments. You get working deliverables, not slides , and you can track what’s done, what’s next, and why.",
      tools: [
        "Staged releases and safe rollouts",
        "Early demos for real-world validation",
        "Clear acceptance criteria per milestone",
        "Monitoring to confirm impact after launch",
      ],
    },
    {
      title: "Built to last and scale",
      description:
        "We design foundations that reduce risk: secure by default, performance-aware, and easy to maintain. The goal is fewer emergencies and smoother growth over time.",
      tools: [
        "Battle-tested architecture patterns",
        "Security-first access and data handling",
        "Performance baselines and optimization",
        "Maintainable handover-ready systems",
      ],
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            How we work <br />
            <span className="text-primaryOrange">inside your reality</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We put our feet in your shoes, understand the bottlenecks, align on the outcome, then execute with clarity.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-16">
          {workPrinciples.map((principle, index) => (
            <div
              key={index}
              className="transition-all duration-800 transform bg-white p-6 sm:p-8 rounded-2xl shadow-md sm:hover:shadow-lg"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl sm:text-3xl font-bold text-primaryBlue mb-4">
                    {principle.title}
                  </h3>
                  <p className="sm:text-lg text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    What you can expect:
                  </h4>
                  <ul className="space-y-2">
                    {principle.tools.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primaryOrange mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-20 space-y-4 sm:space-y-6">
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">The takeaway</p>
          <p className="sm:text-lg text-gray-600 italic">
            Less noise. More execution. Clear outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto">
            <Link
              to={"/ContactUs"}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md"
            >
              Launch Your Project
            </Link>

            <Link
              to={"/shift-protocol"}
              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Shift Protocol</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
