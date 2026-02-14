import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import CursorFollower from "../../../utils/CursorFollower";
import { Link } from "react-router-dom";
import { ContextAPI } from "../../../GlobalProvider/ContextAPI";

const Hero = () => {
  const { scrwidth } = useContext(ContextAPI);
  const scrollToProblemSolving = () => {
    const el = document.getElementById("problem-solving");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden pt-16 sm:pt-24 text-textColor pb-20 sm:pb-12">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px), radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px), radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 sm:items-center">

            {/* Left Column: Text Content */}
            <div className="flex flex-col lg:items-start sm:items-center">
              {scrwidth > 640 ? (<CursorFollower
                text={
                  <p className="flex items-center justify-center gap-x-2 italic">
                    Building <ArrowRight size={16} /> Optimization{" "}
                    <ArrowRight size={16} /> Succeed
                  </p>
                }
                className="w-fit mb-4 sm:mb-6 md:mb-8 bg-primaryBlue px-6 py-2 rounded-full text-white"
                textClassName="text-white font-semibold text-xs sm:text-sm lg:text-base"
                gradientFrom="#f76707"
                gradientTo="#0B1D30"
                circleSize={100}
              />) : (
                <span className="w-fit mb-4 sm:mb-6 md:mb-8 bg-primaryBlue px-4 sm:px-6 py-2 rounded-full text-white font-semibold text-xs sm:text-sm lg:text-base">
                  <p className="flex items-center justify-center gap-x-2 italic">
                    Building <ArrowRight size={16} /> Optimization{" "}
                    <ArrowRight size={16} /> Succeed
                  </p>
                </span>
              )}

              <div className="text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight lg:text-left sm:text-center text-left">
                <h1>
                  <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                    Website Performance
                  </span>
                  <br />
                  <span className="text-primaryOrange">Measured First</span>
                  <br />
                  <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                    No Guesswork
                  </span>
                </h1>
              </div>

              <p className="text-xl mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl lg:mx-0 leading-relaxed sm:px-0 lg:text-left sm:text-center text-left text-gray-700">
                Get a free performance audit showing how speed and usability
                affect real visitors, without making changes to your site.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-16">
                <div>
                  <button
                    type="button"
                    onClick={scrollToProblemSolving}
                    className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md sm:w-fit w-full"
                  >
                    Get Free Audit
                  </button>
                </div>

                <div>
                  <Link
                    to={"/services/shiftspeed"}
                    className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
                  >
                    View ShiftSpeed
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Image (FIXED SECTION) */}
            <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
              <img
                srcSet={`
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto:eco,w_400/v1771102147/hero_image_aw1jnc.webp 400w,
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto:eco,w_600/v1771102147/hero_image_aw1jnc.webp 600w,
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto:eco,w_800/v1771102147/hero_image_aw1jnc.webp 800w,
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1771102147/hero_image_aw1jnc.webp 1200w
  `}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                src="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1771102147/hero_image_aw1jnc.webp"
                width="1200"
                height="675"
                alt="3D Material Prototype Illustration"
                className="w-full h-auto rounded-xl"
                fetchPriority="high"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;