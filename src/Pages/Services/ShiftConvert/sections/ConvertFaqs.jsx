'use client';
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function ConvertFaqs() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [visibleFAQs, setVisibleFAQs] = useState([]);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "How quickly can you start?",
      answer:
        "We usually begin with the conversion audit within 48 hours. You get initial findings early, so priorities are clear before implementation starts.",
    },
    {
      question: "Do you redesign the full website?",
      answer:
        "Not unless it is necessary. ShiftConvert focuses on the highest-impact pages and funnel stages first, so improvements are fast and measurable.",
    },
    {
      question: "Can you work with our current designer or developer?",
      answer:
        "Yes. We can implement directly or collaborate with your team. You get clear recommendations, rationale, and execution guidance either way.",
    },
    {
      question: "Do you run A/B tests?",
      answer:
        "When traffic volume supports it, yes. For lower traffic funnels, we prioritize evidence-based UX and copy fixes first, then test selectively.",
    },
    {
      question: "What metrics do you track?",
      answer:
        "We track primary conversion events, funnel step completion, CTA engagement, and lead quality indicators, not just vanity clicks.",
    },
    {
      question: "Will this help lead quality, not just volume?",
      answer:
        "That is the goal. We improve conversion paths while filtering for intent, so your team gets more relevant enquiries and fewer poor-fit leads.",
    },
    {
      question: "What happens after optimization is complete?",
      answer:
        "You receive a clear before-and-after impact summary. From there, you can stop, continue with monitoring, or scale into deeper funnel optimization.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          faqs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFAQs((prev) => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-10 sm:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
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
          <Link
            href="/contactus"
            className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm w-fit mb-12 mx-auto"
          >
            Can't Find an Answer? Ask Us
            <ArrowRight className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ConvertFaqs;
