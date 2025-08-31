import { CheckCircle, ChevronRight, Database, Rocket, Server, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 2: Service Categories
function ServiceCategoriesSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const services = [
    {
      category: "Start-to-Scale Solutions",
      subtitle: "For early-stage founders who need to ship fast",
      headline: "From idea to production in weeks, not months.",
      services: [
        "MVP Development : Ship your core product with clean, scalable code",
        "Product Strategy : Validate features before you build them",
        "UX/UI Design : Interfaces that users actually want to use",
        "Technical Architecture : Build it right the first time",
      ],
      painPoint: "We're burning runway on features nobody wants.",
      solution: "Validated development that ships what users need.",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      category: "Infra & DevOps",
      subtitle: "For growing teams drowning in deployment complexity",
      headline: "Infrastructure that scales with you, not against you.",
      services: [
        "Cloud Architecture : AWS, GCP, Azure setups that actually work",
        "CI/CD Pipelines : Deploy with confidence, not crossed fingers",
        "Monitoring & Alerts : Know about problems before your users do",
        "Performance Optimization : Fast apps = happy users = more revenue",
      ],
      painPoint: "Our app crashes every time we get traffic.",
      solution: "Bulletproof infrastructure that handles your success.",
      icon: <Server className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      category: "Optimization & APIs",
      subtitle: "For scale-ups with integration nightmares",
      headline: "Connect everything. Break nothing.",
      services: [
        "Database Optimization : Queries that fly, not crawl",
        "API Development : Integrations that work the first time",
        "Third-party Connections : Stripe, Slack, Salesforce ",
        "Data Pipeline Architecture : Turn data chaos into business intelligence",
      ],
      painPoint: "Our database is slower than our growth.",
      solution: "Optimized systems that accelerate, not bottleneck.",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      category: "Security & Compliance",
      subtitle: "For companies that can't afford to get hacked",
      headline: "Sleep soundly. We've got your back(end).",
      services: [
        "Security Audits : Find vulnerabilities before hackers do",
        "Compliance Setup : SOC2, GDPR, HIPAA without the headaches",
        "Penetration Testing : Stress-test your defenses",
        "Incident Response : When things go wrong, we make them right",
      ],
      painPoint: "One security breach could kill our company.",
      solution: "Enterprise-grade security without enterprise complexity.",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50 to-orange-50",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Your technical challenges, <br/>
            <span className="text-primaryOrange">
              solved.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're launching your MVP or scaling to millions of users, we've got the specialized expertise you
            need without the full-time hire headaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}

            >
              <div
                className={`relative  bg-white rounded-3xl p-8 transition-all duration-500 transform  h-full border border-gray-300`}
              >
                {/* Icon */}
                {/* <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className="text-white">{service.icon}</div>
                </div> */}

                {/* Category & Subtitle */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primaryBlue mb-2">{service.category}</h3>
                  <p className="text-gray-600 italic">{service.subtitle}</p>
                </div>

                {/* Headline */}
                <h4 className="text-xl font-semibold text-gray-800 mb-6">{service.headline}</h4>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pain Point & Solution */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-4">
                    <p className="text-sm text-red-500 font-semibold mb-2">Pain Point:</p>
                    <p className="text-gray-700 italic">"{service.painPoint}"</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-500 font-semibold mb-2">Our Fix:</p>
                    <p className="text-gray-800 font-medium">{service.solution}</p>
                  </div>
                </div>

                

                {/* Hover Arrow
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div
                    className={`w-10 h-10 rounded-full bg-primaryBlue flex items-center justify-center`}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategoriesSection