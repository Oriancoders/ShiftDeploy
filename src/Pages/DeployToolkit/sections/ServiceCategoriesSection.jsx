import { CheckCircle, ChevronRight, Database, Rocket, Server, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
    <section ref={sectionRef} className="pt-10 pb-5 sm:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Your technical challenges <br />
            <span className="text-primaryOrange">
              solved
            </span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're launching your MVP or scaling to millions of users, we've got the specialized expertise you
            need without the full-time hire headaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-300 transform ${visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}

            >
              <div
                className={`relative  bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 transform  h-full border sm:shadow-sm sm:hover:shadow-lg`}
              >
                {/* Icon */}


                {/* Category & Subtitle */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-2">{service.category}</h3>
                  <p className="text-xs sm:text-lg text-gray-600 italic">{service.subtitle}</p>
                </div>

                {/* Headline */}
                <h4 className="sm:text-xl font-semibold text-gray-800 mb-6">{service.headline}</h4>

                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  {service.services.map((item, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-md text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pain Point & Solution */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-4">
                    <p className="text-sm text-primaryOrange font-semibold mb-2">Pain Point:</p>
                    <p className="text-xs sm:text-md text-gray-700 italic">"{service.painPoint}"</p>
                  </div>
                  <div>
                    <p className="text-sm text-primaryBlue font-semibold mb-2">Our Fix:</p>
                    <p className="text-xs sm:text-md text-gray-800 font-medium">{service.solution}</p>
                  </div>
                </div>



              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <Link to={"/ContactUs"}

          className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit"

        >
          Lets Solve Your Problem

        </Link>
      </div>
    </section>
  )
}

export default ServiceCategoriesSection