import { Quote, Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
// Section 2: Quote Wall
function QuoteWallSection() {
  const [visibleQuotes, setVisibleQuotes] = useState([])
  const sectionRef = useRef(null)
  const quoteRefs = useRef([])

 const testimonials = [
  {
    quote:
      "We were burning cash every month just to keep our old store running. ShiftDeploy built us a fast, modern e-commerce platform and deployed it on Vercel with zero ongoing costs. It just works — no servers to babysit, no maintenance headaches. This move saved us a fortune.",
    author: "Ahmed Khan",
    role: "Founder",
    company: "K2 Traders",
    tag: "E-commerce",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    quote:
      "We had no real online presence and it was hurting our credibility with investors. ShiftDeploy built a clean, professional platform that helped us showcase our work and attract serious investors. It’s been a big step forward for our brand.",
    author: "Kamran Abbas",
    role: "Director",
    company: "Bullseyes Investments",
    tag: "Web Development",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=14",
  },
  {
    quote:
      "They built our entire EV charging platform from scratch. Hardware, software, billing, everything. The real-time telemetry and admin controls are rock solid, and the Stripe billing runs automatically. It’s rare to find a team that can handle full-stack plus IoT this well.",
    author: "Sara Wells",
    role: "CTO",
    company: "Slacker IoT",
    tag: "IoT & Cloud",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    quote:
      "Our deployments were a mess and broke something every other week. ShiftDeploy rebuilt our entire CI/CD pipeline and now releases go out in minutes, not hours. Zero downtime since the switch.",
    author: "Ravi Patel",
    role: "Head of Engineering",
    company: "Buildly",
    tag: "DevOps",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=43",
  },
  {
    quote:
      "We needed to launch our MVP fast but didn’t want something generic. ShiftDeploy actually took time to understand our users and built something polished that investors loved. We closed our seed round two weeks after launch.",
    author: "Hannah Lee",
    role: "CEO",
    company: "QuickCart",
    tag: "MVP Development",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=52",
  },
  {
    quote:
      "Our platform kept crashing during traffic spikes. ShiftDeploy tuned our backend and database to handle 10x more load on the same servers. Users stopped complaining overnight.",
    author: "Jason Miller",
    role: "Product Lead",
    company: "PeakOps",
    tag: "Infra",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=51",
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleQuotes((prev) => [...new Set([...prev, index])])
            }, index * 200)
          }
        })
      },
      { threshold: 0.2 },
    )

    quoteRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryBlue mb-6">
            What they really<br/>
            <span className="text-primaryOrange">
              think of us
            </span>
          </h2>
          <p className="sm:first-letter:text-xl text-gray-600 max-w-3xl mx-auto">
            Unfiltered feedback from teams who needed results and got them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (quoteRefs.current[index] = el)}
              data-index={index}
              className={`group `}
            >
              <div className="bg-white rounded-3xl p-8 shadow-md sm:hover:shadow-xl transition-all duration-300 transform  h-full flex flex-col justify-between">
                <div>
                  {/* Quote Icon */}
                <div className="flex items-start mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-primaryBlue flex items-center justify-center mr-4 flex-shrink-0`}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span
                      className={`ml-4 px-3 py-1 rounded-full text-sm font-medium bg-primaryBlue text-white`}
                    >
                      {testimonial.tag}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">
                      {testimonial.role} @ {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
    
              </div>
            </div>
          ))}
        </div>



        <div className="text-center mt-12 sm:mt-20 space-y-6">
          <p className="text-3xl sm:text-5xl text-primaryBlue font-semibold">The Pattern is Clear</p>
          <p className="sm:text-xl text-gray-600 italic ">
            <span className=" font-semibold"></span> delivery.{" "}
              <span className="font-semibold">On time</span> execution.{" "}
              <span className="font-semibold">Understood</span> completely.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 mx-auto "
          >

            <Link to={"/ContactUs"}
              className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md "

            >
              Launch Your Project

            </Link>

            <Link to={"/missions"}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  shadow-lg sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
            >
              <span>View Case Study</span>

            </Link>


          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteWallSection