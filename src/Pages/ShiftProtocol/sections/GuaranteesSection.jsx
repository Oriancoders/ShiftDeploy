import { CheckCircle, DollarSign, FileText, Lock, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 3: What We Guarantee
function GuaranteesSection() {
  const [visibleGuarantees, setVisibleGuarantees] = useState([])
  const sectionRef = useRef(null)

  const guarantees = [
    {
      title: "No Vendor Lock-In",
      fear: "We'll be trapped with them forever",
      guarantee:
        "You own everything. Full source code, documentation, and system access from day one. Leave anytime with everything you need to continue independently.",
      icon: <Lock className="w-8 h-8" />,
      
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Transparent Billing",
      fear: "Hidden costs will blow up our budget",
      guarantee:
        "Fixed-price projects with detailed scope documentation. Any changes require your written approval with updated pricing before work begins.",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Fully Documented Deliverables",
      fear: "We'll get working code but no understanding of how it works",
      guarantee:
        "Every system comes with comprehensive documentation, architectural diagrams, and team training materials. Your team can maintain and extend everything we build.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Quality Checkpoints",
      fear: "We won't know if it's working until it's too late",
      guarantee:
        "Mandatory quality reviews at 25%, 50%, 75%, and 100% completion. Nothing moves forward without your explicit approval.",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "30-Day Money-Back Promise",
      fear: "What if they can't actually deliver what they promised?",
      guarantee:
        "If you're not completely satisfied with our work within 30 days, we'll refund your investment. No questions asked.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          guarantees.forEach((_, index) => {
            setTimeout(() => {
              setVisibleGuarantees((prev) => [...prev, index])
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our non-negotiable
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              commitments
            </span>
          </h2>
          <p className="text-xl text-gray-600">The promises that protect your investment</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 transform ${
                visibleGuarantees.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              } ${index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${guarantee.color} mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="text-white">{guarantee.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{guarantee.title}</h3>

                {/* Fear */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">Your Fear:</h4>
                  <p className="text-gray-700 italic">"{guarantee.fear}"</p>
                </div>

                {/* Guarantee */}
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">Our Guarantee:</h4>
                  <p className="text-gray-700 leading-relaxed">{guarantee.guarantee}</p>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${guarantee.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuaranteesSection