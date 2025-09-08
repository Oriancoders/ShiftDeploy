import { CheckCircle, DollarSign, FileText, Lock, Shield, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
// Section 3: What We Guarantee
function GuaranteesSection() {
  const [visibleGuarantees, setVisibleGuarantees] = useState([])
  const sectionRef = useRef(null)

 const guarantees = [
  {
    title: "No Lock-In",
    fear: "We might get stuck with them forever",
    guarantee:
      "You fully own the source code, docs, and access from day one. You can walk away anytime without losing control.",
    icon: <Lock className="w-8 h-8" />,
  },
  {
    title: "Clear Billing",
    fear: "Hidden charges could blow up our budget",
    guarantee:
      "We work on fixed-price scopes. Any change requires your written approval, so costs stay predictable and safe.",
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    title: "Full Docs",
    fear: "We'll get code but no clear instructions",
    guarantee:
      "Every delivery includes full documentation, diagrams, and handover notes, so your team can run it smoothly.",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    title: "Quality Gates",
    fear: "We may discover issues too late in the build",
    guarantee:
      "We stop at 25%, 50%, 75%, and 100% to run quality reviews. Nothing advances without your explicit approval.",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: "Money-Back",
    fear: "What if they fail to deliver what we need?",
    guarantee:
      "If you’re not satisfied within the first 30 days, we refund your investment in full—no questions, no delays.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    title: "Direct Access",
    fear: "We might only deal with sales, not builders",
    guarantee:
      "You always speak with the engineers and designers working on your project—no middle layers, just real experts.",
    icon: <Users className="w-8 h-8" />,
  },
];



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
    <section ref={sectionRef} className="pt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            Our non-negotiable <br/>
            <span className="text-primaryOrange">
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
              <div className="bg-white rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform  h-full border border-gray-300">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primaryBlue mb-6 transform transition-all duration-500 `}
                >
                  <div className="text-white">{guarantee.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{guarantee.title}</h3>

                {/* Fear */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primaryOrange mb-2 uppercase tracking-wide">Your Fear:</h4>
                  <p className="text-gray-700 italic">"{guarantee.fear}"</p>
                </div>

                {/* Guarantee */}
                <div>
                  <h4 className="text-sm font-semibold text-primaryBlue mb-2 uppercase tracking-wide">Our Guarantee:</h4>
                  <p className="text-gray-700 leading-relaxed">{guarantee.guarantee}</p>
                </div>

 
              </div>
            </div>
          ))}
        </div>

<motion.button
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md mx-auto mt-20"

            >
              Launch Your Project

            </motion.button>
      </div>
    </section>
  )
}

export default GuaranteesSection