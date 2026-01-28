import { CheckCircle, Zap, TrendingUp, Rocket, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

// Section 2: Service Categories (ShiftDeploy Models)
function ServiceCategoriesSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const cardRefs = useRef([])

  const services = [
    {
      category: "ShiftSpeed™",
      subtitle: "When your site feels slow and people bounce",
      headline: "Make your website feel fast (and keep it fast).",
      services: [
        "Speed + Core Web Vitals audit: see what’s actually slowing you down",
        "Practical fixes: remove bottlenecks that hurt loading and usability",
        "Mobile-first performance: faster pages where it matters most",
        "Before/after reporting: clear wins you can show your team",
      ],
      painPoint: "We’re losing visitors before the page even loads.",
      solution: "We tighten performance so people stay, browse, and trust your brand.",
      icon: <Zap className="w-7 h-7 text-white" />,
    },
    {
      category: "ShiftConvert™",
      subtitle: "When traffic is coming in but leads aren’t",
      headline: "Turn visits into enquiries, bookings, and sales.",
      services: [
        "Conversion review: find where users drop off",
        "Trust + clarity fixes: stronger copy, layout, and CTAs",
        "Funnel clean-up: smoother steps from landing → action",
        "Simple reporting: track what changed and what improved",
      ],
      painPoint: "People visit, but they don’t take action.",
      solution: "We remove friction and make the next step obvious (without redesign chaos).",
      icon: <TrendingUp className="w-7 h-7 text-white" />,
    },
    {
      category: "ShiftBuild™",
      subtitle: "When you need a site that’s built right from day one",
      headline: "Launch a clean, modern website that’s easy to grow.",
      services: [
        "New builds or rebuilds: designed for speed and clarity",
        "Modular pages: easy to update without breaking things",
        "SEO-ready foundation: clean structure and best-practice setup",
        "Built for iteration: ready for ongoing conversion improvements",
      ],
      painPoint: "Our website works, but it’s hard to improve or scale.",
      solution: "We rebuild the foundation so your site can grow with your business.",
      icon: <Rocket className="w-7 h-7 text-white" />,
    },
    {
      category: "ShiftFlow™",
      subtitle: "When things slowly break over time without ownership",
      headline: "Ongoing care so performance doesn’t decay month by month.",
      services: [
        "Monitoring + checkups: catch issues before they hurt results",
        "Updates + maintenance: keep the site stable and secure",
        "Monthly improvements: small wins that compound over time",
        "One accountable partner: no vendor juggling or finger-pointing",
      ],
      painPoint: "No one owns the site end-to-end once it’s live.",
      solution: "We stay involved to keep the site stable, fast, and improving.",
      icon: <Shield className="w-7 h-7 text-white" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]))
            }, index * 150)
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
    <section className="pt-10 pb-5 sm:pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Choose the model that fits
            <br />
            <span className="text-primaryOrange">your situation</span>
          </h2>
          <p className="sm:text-xl text-gray-600 max-w-4xl mx-auto">
            ShiftDeploy is built around four clear outcomes: speed, conversions, strong foundations, and ongoing care.
            Pick what you need right now—we’ll handle the execution end-to-end.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`group transition-all duration-300 transform ${
                visibleCards.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 transition-all duration-300 h-full border sm:shadow-sm sm:hover:shadow-lg">
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primaryBlue flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* Category & Subtitle */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-2">{service.category}</h3>
                  <p className="text-sm sm:text-lg text-gray-600">{service.subtitle}</p>
                </div>

                {/* Headline */}
                <h4 className="text-sm sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">{service.headline}</h4>

                {/* Services List */}
                <ul className="space-y-3 mb-4 sm:mb-6">
                  {service.services.map((item, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-primaryOrange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-md text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pain Point & Solution */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="mb-4">
                    <p className="text-md text-primaryOrange font-semibold mb-2">Pain Point:</p>
                    <p className="text-sm text-gray-700 italic font-medium">"{service.painPoint}"</p>
                  </div>
                  <div>
                    <p className="text-md text-primaryBlue font-semibold mb-2">Our Fix:</p>
                    <p className="text-sm text-gray-800">{service.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={"/ContactUs"}
          className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl mx-auto mb-6 font-bold flex items-center justify-center gap-x-2 sm:hover:bg-toOrange text-md w-fit"
        >
          Lets Solve Your Problem
        </Link>
      </div>
    </section>
  )
}

export default ServiceCategoriesSection
