import CloudinaryImage from '../../../components/CloudinaryImage';
import { ExternalLink, Star, Calendar, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const MissionsCompleted = () => {
  // Helper: split number + suffix (supports "10+", "4.9/5", "200%")
  const splitValue = (value) => {
    const match = value.match(/(\d+\.?\d*)(.*)/);
    return match
      ? { number: parseFloat(match[1]), suffix: match[2] }
      : { number: 0, suffix: "" };
  };

  // ✅ Keep the stats honest / neutral (no UK claim, no hype)
  const stats = [
    { icon: Users, value: "10+", label: "Projects Delivered" },
    { icon: TrendingUp, value: "30", suffix: "%+", label: "Typical Speed Gains" },
    { icon: Calendar, value: "3", suffix: " Years+", label: "Hands-on Experience" },
    { icon: Star, value: "4.9", suffix: "/5", label: "Client Satisfaction" },
  ];


  // ✅ Keep projects exactly as you said (real)
  const projects = [
    {
      title: "Smart EV Charging Platform",
      client: "Slacker IoT",
      imageAlt: "Slacker IoT EV charging dashboard showing battery, power and session data",
      category: "ShiftBuild",
      description:
        "Built an end-to-end EV charging platform from scratch, including the customer dashboard, admin controls, and billing flows.",
      image:
        "https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978775/ev_dashboard_lak5oh.png",
      results: [
        "Live device status and session tracking",
        "Automated billing and payment capture",
        "Admin dashboard for monitoring and control",
      ],
      url: "/CaseStudies/SlackerIOT",
    },
    {
      title: "Conversion-Focused E-commerce Platform",
      client: "K2 Traders",
      imageAlt: "K2 Traders website homepage and product navigation",
      category: "ShiftBuild",
      description:
        "Built a new e-commerce website from scratch with a cleaner shopping flow, faster pages, and a setup that’s easy to maintain.",
      image:
        "https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979152/k2_traders_vj05aq.png",
      results: [
        "Faster page loads across key pages",
        "Mobile-first shopping and checkout flow",
        "$0/year hosting setup",
      ],
      url: "/CaseStudies/K2TradersCase",
    },
    {
      title: "Modern Investment Platform for Digital Trust",
      client: "Bullseyes Investments",
      imageAlt: "Bullseye Investments website homepage showing its financial services offer",
      category: "ShiftConvert",
      description:
        "Designed and built a brokerage website focused on clear positioning, structured CTAs, and seamless access to the client portal.",
      image:
        "https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978786/bullseyes_x1ifpw.png",
      results: [
        "Clear service positioning",

        "Structured call-to-action hierarchy",

        "Reduced friction in key user flows",
      ],
      url: "/CaseStudies/BullseyesCase",
    },
  ];


  return (
    <section id="missions-completed" className="py-12 bg-white text-primaryBlue">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center mb-8">
          {/* Left: Title + Copy */}
          <div




            className="mb-6 sm:mb-16 sm:flex-1 sm:border-r border-gray-300"
          >
            <h2

              className="text-3xl sm:text-left text-center sm:text-5xl font-bold text-primaryBlue mb-6 leading-tight"
            >
              Missions
              <br />
              <span className="text-primaryOrange">Completed</span>
            </h2>

            <p

              className="text-lg sm:text-left text-center max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-4 sm:px-0 text-gray-700"
            >
              Here are a few projects we’ve delivered. Different industries, different stacks, one
              consistent focus: building systems that run reliably and perform better over time.
            </p>


          </div>

          {/* Right: Stats */}
          <div



            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-16 lg:mb-20 sm:flex-1"
          >
            {stats.map((stat, index) => {
              const { number, suffix } = splitValue(stat.value + (stat.suffix || ""));
              return (
                <div key={stat?.id ?? stat?.slug ?? stat?.title ?? stat?.name ?? index} className="text-center">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-primaryBlue">
                    {number}
                    {suffix}
                  </div>
                  <div className="font-medium text-center text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects showcase */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <div
              key={project?.id ?? project?.slug ?? project?.title ?? project?.name ?? index}



              className="bg-white border border-gray-300 rounded-3xl overflow-hidden transition-all duration-100 group grid lg:grid-cols-2 gap-0"
            >
              {/* Left: Image */}
              <div
                className={`relative h-48 sm:h-64 lg:h-full order-2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <CloudinaryImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="size-full object-contain bg-gray-100 sm:rounded-none"
                  loading="lazy"
                />
              </div>

              {/* Right: Content */}
              <div
                className={`p-4 sm:p-6 lg:p-8 xl:p-10 order-1 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-primaryBlue mb-1 sm:mb-2 lg:mb-3">
                  {project.title}
                </h3>

                <p className="text-primaryOrange font-semibold mb-1 text-sm sm:text-base lg:text-lg">
                  {project.client}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  {project.category}
                </p>

                <p className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                  {project.description}
                </p>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-4 sm:mb-6 lg:mb-8">
                  <div>
                    <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm sm:text-base lg:text-lg text-gray-900">
                      Key Results:
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5 sm:gap-2 lg:gap-3">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={result?.id ?? result?.slug ?? result?.title ?? result?.name ?? resultIndex}
                          className="flex items-center gap-x-2 sm:gap-x-3"
                        >
                          <Star className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm lg:text-base text-gray-800">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-x-3 lg:gap-x-4">
                  <Link
                    href={project.url}
                    className="bg-primaryOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-sm"
                  >
                    <ExternalLink className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" />
                    <span>View Project Report</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA (simple, aligned) */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href={"/ContactUs"}
            className="bg-primaryBlue text-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-toBlue transition-all duration-200"
          >
            Start with a Quick Audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissionsCompleted;
