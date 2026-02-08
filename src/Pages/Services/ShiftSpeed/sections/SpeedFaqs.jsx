import { ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

// Section 8: FAQ
function SpeedFaqs() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [visibleFAQs, setVisibleFAQs] = useState([])
  const sectionRef = useRef(null)

 const faqs = [
  {
    question: "How quickly can you start?",
    answer:
      "We usually begin with the audit within 48 hours of confirmation. Since the first step is measurement, there’s no long onboarding or preparation required. You’ll see findings before any work is proposed.",
  },
  {
    question: "Do you work with our existing team or developer?",
    answer:
      "Yes. We frequently work alongside in-house teams or external developers. Our role is to diagnose performance and usability issues and either implement fixes ourselves or provide clear guidance your team can follow.",
  },
  {
    question: "What if the audit shows no major issues?",
    answer:
      "Then you’ve gained confirmation, not a sales pitch. If your site is already performing well, we’ll tell you that. The audit exists to give clarity, not to force a project.",
  },
  {
    question: "Do you make changes during the free audit?",
    answer:
      "No. The audit is diagnostic only. We analyze performance, usability, and conversion risks without touching your live site. Any fixes are discussed separately, after you review the findings.",
  },
  {
    question: "How do you handle access and security?",
    answer:
      "The audit requires no backend access. If you choose to proceed with implementation later, we follow standard security practices, work within your access policies, and only request what’s necessary.",
  },
  {
    question: "What happens after optimization is complete?",
    answer:
      "You receive a before-and-after report showing what changed and why it matters. From there, some clients stop, others continue with ongoing monitoring or improvements. There’s no forced long-term commitment.",
  },
  {
    question: "How is this different from a typical agency?",
    answer:
      "Most agencies start by building or redesigning. We start by measuring. Performance, usability, and conversion issues are identified first, so decisions are based on evidence, not assumptions.",
  },
];


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
    <section ref={sectionRef} className=" bg-gray-50 py-10 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
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
                  className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-primaryBlue pr-4">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 
                    ${
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
          <Link to={"/ContactUs"}

              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
            >

              Can't Find an Answer? Ask Us
              <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </Link >

        </div>
      </div>
    </section>
  )
}

export default SpeedFaqs