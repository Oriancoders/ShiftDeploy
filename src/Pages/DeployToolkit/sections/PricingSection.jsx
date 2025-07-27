import { CheckCircle, Clock, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 6: Pricing
function PricingSection() {
  const [visiblePlans, setVisiblePlans] = useState([])
  const sectionRef = useRef(null)

  const plans = [
    {
      name: "Rapid Deploy",
      subtitle: "Quick fixes and urgent issues",
      price: "Starting at $5,000",
      timeline: "1-2 weeks",
      features: [
        "Technical audit and diagnosis",
        "Priority issue resolution",
        "Performance optimization",
        "Basic monitoring setup",
        "30 days of support",
      ],
      perfectFor: "Critical bugs, performance issues, security patches",
      popular: false,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      name: "Scale Deploy",
      subtitle: "Growing companies ready to level up",
      price: "Starting at $15,000",
      timeline: "4-6 weeks",
      features: [
        "Complete infrastructure review",
        "Architecture optimization",
        "CI/CD pipeline setup",
        "Advanced monitoring and alerts",
        "Team training and documentation",
        "90 days of support",
      ],
      perfectFor: "Scaling challenges, infrastructure overhauls, team augmentation",
      popular: true,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      name: "Enterprise Deploy",
      subtitle: "Complex, mission-critical needs",
      price: "Starting at $35,000",
      timeline: "8-12 weeks",
      features: [
        "Full-stack architecture design",
        "Security and compliance setup",
        "Custom integrations and APIs",
        "Dedicated engineering team",
        "Ongoing partnership and support",
        "6 months of priority support",
      ],
      perfectFor: "Enterprise sales requirements, compliance needs, complex integrations",
      popular: false,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          plans.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePlans((prev) => [...prev, index])
            }, index * 200)
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose your
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              deployment strategy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you need a quick fix or a complete overhaul, we've got a package that fits your timeline and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 transform ${
                visiblePlans.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              } ${plan.popular ? "lg:scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular Choice
                  </div>
                </div>
              )}

              <div
                className={`relative bg-gradient-to-br ${plan.bgGradient} rounded-3xl p-8 border-2 ${
                  plan.popular ? "border-orange-200" : "border-white"
                } hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{plan.timeline}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Perfect For */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Perfect for:</h4>
                  <p className="text-gray-700">{plan.perfectFor}</p>
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                >
                  Book Strategy Call
                </button>

                {/* Background Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Toolkit */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Toolkit</h3>
            <p className="text-gray-600 mb-6">For unique challenges that don't fit a box</p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-green-800">30-Day Money-Back Guarantee</h3>
            </div>
            <p className="text-green-700">
              If you're not completely satisfied with our work, we'll refund your investment. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default PricingSection