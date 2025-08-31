import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 8: FAQ
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [visibleFAQs, setVisibleFAQs] = useState([])
  const sectionRef = useRef(null)

  const faqs = [
    {
      question: "How quickly can you start?",
      answer:
        "Most projects begin within 48 hours of our strategy call. For urgent issues, we can often start same-day. We keep capacity reserved for rapid response because we know technical problems don't wait for convenient timing.",
    },
    {
      question: "Do you work with our existing team?",
      answer:
        "Absolutely. We're designed to augment your team, not replace them. We can work independently, collaborate closely, or train your team to maintain what we build. Whatever works best for your situation.",
    },
    {
      question: "What if you can't solve our problem?",
      answer:
        "We've never encountered a technical challenge we couldn't solve, but if we did, you wouldn't pay. Our 30-day money-back guarantee means you only pay for results, not attempts.",
    },
    {
      question: "How do you handle security and access?",
      answer:
        "Security is our specialty. We use industry-standard security protocols, sign comprehensive NDAs, and can work within your existing security frameworks. Many of our clients are in highly regulated industries.",
    },
    {
      question: "What happens after the project is complete?",
      answer:
        "We don't disappear. Every package includes ongoing support, and we're available for additional optimization, scaling support, or new challenges as they arise. Think of us as your technical insurance policy.",
    },
    {
      question: "How is this different from hiring a development agency?",
      answer:
        "We're specialists, not generalists. While agencies build features, we solve problems. We focus on the technical challenges that keep CTOs awake at night — performance, scaling, security, and infrastructure.",
    },
    {
      question: "What size companies do you work with?",
      answer:
        "We work with startups from pre-seed to Series B and beyond. Our sweet spot is growing companies (10-200 employees) who need enterprise-level technical expertise without enterprise-level overhead.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          faqs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFAQs((prev) => [...prev, index])
            }, index * 100)
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

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Questions? <br/>
            <span className="text-primaryOrange">
              We've got answers.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                visibleFAQs.includes(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="bg-primaryOrange  text-white font-semibold px-8 py-4 rounded-2xl hover:bg-toOrange">
            Book a Strategy Call
          </button>
          <p className="text-sm text-gray-500 mt-4">
            We'll answer everything and assess if we're a good fit for your challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQSection