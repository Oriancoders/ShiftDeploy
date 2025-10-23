import { useEffect, useRef, useState, } from "react"
// Section 1: Hero Section

const SECTIONS = [
  {
    id: "introduction",
    title: "How ShiftDeploy Operates",
  },
  {
    id: "acceptance-of-terms",
    title: "When These Terms Apply",
  },
  {
    id: "eligibility-access",
    title: "Who Can Use Our Services",
  },
  {
    id: "use-of-services",
    title: "Proper Use of Our Website",
  },
  {
    id: "account-responsibilities",
    title: "Your Account & Obligations",
  },
  {
    id: "engagements-agreements",
    title: "How Projects Are Engaged",
  },
  {
    id: "payments-billing",
    title: "Payments, Refunds & Billing",
  },
  {
    id: "project-timelines",
    title: "Timelines, Revisions & Delivery",
  },
  {
    id: "intellectual-property",
    title: "Ownership & Intellectual Rights",
  },
  {
    id: "confidentiality",
    title: "How We Protect Confidentiality",
  },
  {
    id: "third-party-tools",
    title: "Third-Party Tools & Integrations",
  },
  {
    id: "warranties-disclaimers",
    title: "Service Warranties & Disclaimers",
  },
  {
    id: "limitation-liability",
    title: "Our Limitation of Liability",
  },
  {
    id: "termination-services",
    title: "Ending or Suspending Services",
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
  },
  {
    id: "changes-to-terms",
    title: "Updates to These Terms",
  },
  {
    id: "contact-info",
    title: "Contact ShiftDeploy for Questions",
  },
];


function HeroTerms() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)


    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative pb-10 min-h-screen  bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden sm:pt-28 "
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)`,
                        backgroundSize: "100px 100px",
                    }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div
                    className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >


                    {/* Main Headlines */}
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-primaryBlue mb-6 leading-normal">
                        ShiftDeploy  <br />
                        <span className="text-primaryOrange">
                            Terms Of Services
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <div
                        className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                            These Terms of Service outline the rules, rights, and responsibilities that
    guide how you interact with ShiftDeploy and our digital services. Please
    read them carefully. By using our website or engaging with our team, you
    agree to these terms.
                        </p>

                    </div>

                    <div className="w-full text-left">
                        <h1 className="text-3xl text-primaryBlue font-semibold text-left mt-6 relative inline 
                     ">What is in this page
                            <span className="absolute h-1 bg-primaryOrange w-full left-0 -bottom-2 rounded-full" />
                        </h1>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 w-full text-left mt-6">
                        {SECTIONS.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    const target = document.getElementById(`P_${index + 1}`);
                                    if (target) {
                                        const yOffset = -80; // adjust this to match your navbar height
                                        const y =
                                            target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
                                }}
                                className="sm:col-span-1 p-2 font-semibold flex items-center gap-x-2 text-primaryBlue hover:text-primaryOrange transition-colors duration-200 text-left"
                            >
                                <span>●</span>
                                <h3>{section.title}</h3>
                            </button>
                        ))}
                    </div>



                </div>
            </div>

            {/* Table of Contents */}

        </section>
    )
}
export default HeroTerms