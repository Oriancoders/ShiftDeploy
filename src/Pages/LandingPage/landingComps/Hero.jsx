import React, { useContext } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import CursorFollower from "../../../utils/CursorFollower";
import { Link } from "react-router-dom";
import { ContextAPI } from "../../../GlobalProvider/ContextAPI";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { scrwidth } = useContext(ContextAPI);

  const moveX = useTransform(x, [0, window.innerWidth], [-50, 50]);
  const moveY = useTransform(y, [0, window.innerHeight], [-50, 50]);

  const handleMouseMove = (e) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  //make a function here to smoothly scroll to section (problem-solving) on button click
  // Smoothly scroll to a section by id
  const scrollToProblemSolving = () => {
    const el = document.getElementById("problem-solving");
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      offset: -100,
    });
  };


  return (
    <>

      <section
        onMouseMove={handleMouseMove}
        className=" bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden  pt-16 sm:pt-24 text-textColor pb-20 sm:pb-12"
      >


        <div className="flex sm:items-center">
          <motion.div
            style={{ x: scrwidth > 660 ? moveX : 0, y: scrwidth > 660 ? moveY : 0 }}
            className="absolute inset-0 opacity-30"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, #4361EE 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #F76707 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4361EE 1px, transparent 1px)`,
                backgroundSize: "100px 100px",
                transform: scrwidth > 660 ? moveX : 0,
                y: scrwidth > 660 ? moveY : 0,
              }}
            ></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 sm:items-center">
              <div className="flex flex-col lg:items-start sm:items-center">
                <CursorFollower
                  text={
                    <p className="flex items-center justify-center gap-x-2 italic">
                      Building <ArrowRight size={16} /> Optimization <ArrowRight size={16} />{" "}
                      Succeed
                    </p>
                  }
                  className=" w-fit mb-4 sm:mb-6 md:mb-8 bg-primaryBlue  px-6 py-2 rounded-full text-white"
                  textClassName="text-white font-semibold text-sm lg:text-base "
                  gradientFrom="#f76707"
                  gradientTo="#0B1D30"
                  circleSize={100}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight lg:text-left sm:text-center text-left "
                >
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
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="text-xl   mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-lg lg:max-w-xl xl:max-w-2xl  lg:mx-0 leading-relaxed  sm:px-0 lg:text-left sm:text-center text-left text-gray-700"
                >
                  Get a free performance audit showing how speed and usability affect real visitors, without making changes to your site.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-16 ">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <button
                      type="button"
                      onClick={scrollToProblemSolving}
                      className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md sm:w-fit w-full"
                    >
                      Get Free Audit
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Link
                      to={"/missions"}
                      className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4  rounded-lg sm:rounded-xl lg:rounded-2xl font-bold  sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"
                    >
                      View Missions Completed
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Right content - Enhanced 3D Material Prototype */}

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative mt-8 lg:mt-0 px-4 sm:px-0"
              >
                <img
                  // 1. Define the versions available
                  srcSet={`
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_600/v1769118309/ChatGPT_Image_Jan_23_2026_02_43_24_AM_ch39qy.png 600w,
    https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1769118309/ChatGPT_Image_Jan_23_2026_02_43_24_AM_ch39qy.png 1200w
  `}
                  // 2. Tell browser how wide the image will be on screen
                  // "On mobile, it takes up 100% of screen. On desktop, cap it at 1200px."
                  sizes="(max-width: 768px) 100vw, 1200px"
                  // 3. Fallback for old browsers

                  src="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1769118309/ChatGPT_Image_Jan_23_2026_02_43_24_AM_ch39qy.png"
                  alt="3D Material Prototype Illustration"
                  className="w-full h-auto rounded-xl"
                  // 4. Performance Boosters
                  fetchPriority="high"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>
        </div>




      </section>



      <div className="relative  overflow-hidden shadow-lg w-full mx-auto bg-primaryBlue text-center py-10 text-white ">
        {/* Background */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)`,
              backgroundSize: "90px 90px",
            }}
          />
        </div>
        <motion.h2 className="text-3xl sm:text-5xl font-bold mb-6 px-4">
          What <span className="text-primaryOrange">Client Think</span> About Us
        </motion.h2>
        {/* Content */}
        <div className="relative p-6 sm:p-12 text-center text-white bg-white/10 backdrop-blur-lg w-[90%] sm:w-fit mx-auto rounded-2xl mb-10">


          {/* Stars */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="sm:text-xl italic leading-relaxed mb-8 max-w-4xl mx-auto text-white">
            “Shift Deploy is highly recommended …. they have consistently met deadlines, and their after sales service is
            outstanding!”
          </blockquote>

          <hr className="border-t border-white/20 " />
          <div className="flex sm:flex-row flex-col gap-7 justify-evenly items-center w-full pt-10 ">
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://media.licdn.com/dms/image/v2/C5103AQHbnRvtGSPXEA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562495944539?e=1771459200&v=beta&t=PjF3rjFdmQkUD0_Ucebz1nlWhlUU3sdVKA0jR22yfKE"
                alt="Kamran Abbas"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full ring-2 ring-white/30 object-cover"
              />
              <div className="text-left">
                <div className="font-semibold sm:text-lg leading-tight">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    Kamran Abbas
                  </a>
                </div>
                <div className="text-white/75 text-sm sm:text-base">
                  Chief Strategist at Bullseye Investment Private Limited
                </div>
              </div>
            </div>
            {/* Bottom-left CTA */}

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
              target="_blank"
              rel="noreferrer"
              className="sm:w-fit w-full  inline-flex items-center justify-center gap-2 bg-primaryOrange hover:bg-toOrange border border-white/20 text-white px-4 sm:px-5 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Visit Source
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </a>
          </div>

        </div>

      </div>



    </>
  );
};

export default Hero;
