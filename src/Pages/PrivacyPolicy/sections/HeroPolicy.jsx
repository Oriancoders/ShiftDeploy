import { useEffect, useRef, useState, } from "react"
import CursorFollower from "../../../utils/CursorFollower"
import { section } from "framer-motion/client";
// Section 1: 

const SECTIONS = [
    {
        id: "introduction",
        title: "How ShiftDeploy Protects Your Privacy",
        desc: "An overview of our commitment to safeguarding your personal and business data."
    },
    {
        id: "information-we-collect",
        title: "What Information ShiftDeploy Collects",
        desc: "Details about the data you share with us directly and what we automatically collect when you use our services."
    },
    {
        id: "how-we-use",
        title: "How ShiftDeploy Uses Your Information",
        desc: "Explains the purposes behind data collection — from improving services to ensuring security and compliance."
    },
    {
        id: "cookies-analytics",
        title: "Cookies, Analytics & Tracking Technologies",
        desc: "How we use cookies and analytics tools to improve your browsing experience, plus how you can manage or opt out."
    },
    {
        id: "third-party",
        title: "Third-Party Services We Depend On",
        desc: "A breakdown of the trusted providers (like AWS, Google, and others) that help us deliver secure, reliable services."
    },
    {
        id: "data-retention",
        title: "How Long ShiftDeploy Keeps Your Data",
        desc: "Why we store certain information, how long it’s retained, and when it’s securely deleted."
    },
    {
        id: "data-security",
        title: "How ShiftDeploy Secures Your Data",
        desc: "An outline of the technical and organizational measures we take to protect your information from unauthorized access."
    },
    {
        id: "your-rights",
        title: "Your Privacy Rights & How to Exercise Them",
        desc: "Learn how you can access, correct, or delete your data, and the options available to control your personal information."
    },
    {
        id: "international-transfers",
        title: "How ShiftDeploy Handles International Data Transfers",
        desc: "Explains where your data may be processed and the safeguards we use when transferring data across regions."
    },
    {
        id: "children-privacy",
        title: "Children’s Privacy at ShiftDeploy",
        desc: "Clarifies that our services are designed for businesses and professionals, not individuals under the age of 16."
    },
    {
        id: "changes-to-policy",
        title: "Updates to ShiftDeploy’s Privacy Policy",
        desc: "How we’ll notify you about significant changes and keep you informed about updates to our data practices."
    },
    {
        id: "contact-us",
        title: "Contact ShiftDeploy’s Privacy Team",
        desc: "How to reach us with privacy questions, data requests, or feedback."
    }
];

function HeroPolicy() {
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
                        ShiftDeploy Community  <br />
                        <span className="text-primaryOrange">
                            Privacy Policy
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <div
                        className={`transition-all duration-1000 delay-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <p className="sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
                            ShiftDeploy is a technology agency building full-stack applications, cloud & DevOps solutions. This Privacy Policy explains what information we collect, how we use it, and your rights.
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
export default HeroPolicy