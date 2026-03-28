
import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

// Section 8: FAQ
function FAQSection({ onPrimaryAction }) {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [visibleFAQs, setVisibleFAQs] = useState([])
  const sectionRef = useRef(null)

  const faqs = [
  {
    question: 'Is this a SaaS tool my team has to learn?',
    answer:
      'No. This is a managed service. We train, configure, integrate, and refine your digital receptionist for your clinic so your team is not left to figure it out alone.',
  },
  {
    question: 'Can it work on our current website?',
    answer:
      'Yes. The offer is designed to fit into your existing clinic site rather than forcing you onto a new platform.',
  },
  {
    question: 'How is each clinic handled?',
    answer:
      'Each clinic gets its own trained digital receptionist based on services, FAQs, workflow, brand voice, and booking requirements. We do not drop the same generic bot into every account.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We stay involved. We review conversations, improve weak answers, update knowledge as your clinic changes, and keep the experience aligned with your front desk.',
  },
];

  useEffect(() => {
    const timeoutIds = []
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          faqs.forEach((_, index) => {
            const id = setTimeout(() => {
              setVisibleFAQs((prev) => {
                const next = new Set(prev)
                next.add(index)
                return Array.from(next)
              })
            }, index * 100)
            timeoutIds.push(id)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
      timeoutIds.forEach(clearTimeout)
    }
  }, []) // faqs is static, safe to ignore deps here

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index))
  }

  return (
    <section ref={sectionRef} className=" bg-gray-50 py-10 ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Questions? <br />
            <span className="text-primaryOrange">We've got answers.</span>
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
                  className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-primaryBlue pr-4">{faq.question}</h3>
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
                  <div className="sm:px-8 px-4 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>

          <button
            type="button" onClick={() => onPrimaryAction('for the Digital Receptionist Setup')}
            className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
          >
            Can't Find an Answer? Ask Us
            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
