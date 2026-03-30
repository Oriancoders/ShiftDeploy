import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react'; // Ensure you have lucide-react installed
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../utils/animations';

const DigitalReceptionist = ({

    videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1774790198/Digital_Receptionist_Demo_by_ShiftDeploy_ytazqe.mp4',
    posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1774876387/ChatGPT_Image_Mar_30_2026_06_12_34_PM_ivetk2.png' // Added f_auto,q_auto for optimization
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="w-full bg-gray-50 sm:pt-10 border-y border-gray-100 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP: Centered Heading & Description */}
                <motion.div
                    ref={ref}
                    variants={staggerContainer}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    className="text-center mb-8"
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6 leading-tight "
                    >
                        AI-Based<br />
                        <span className="text-primaryOrange ">Digital Booking Receptionist</span>

                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 leading-relaxed px-4 sm:px-0 text-gray-600"
                    >
                        We solve the issues that hold websites back, from slow performance and weak conversion to fragile builds and ongoing technical drag.

                    </motion.p>
                </motion.div>

                {/* BOTTOM: Video Left, Benefits Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Video Facade (The Optimization) */}
                    <div className="relative w-full rounded-xl shadow-2xl overflow-hidden bg-black aspect-video group">
                        {!isPlaying ? (
                            // 1. The "Facade" (Image + Button)
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 w-full h-full block cursor-pointer group focus:outline-none"
                                aria-label="Play testimonial video"
                            >
                                {/* Optimized Poster Image */}
                                <img
                                    src={posterSrc}
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    width="1280"
                                    height="720"
                                    loading="lazy"
                                />

                                {/* Dark Overlay for contrast */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                {/* Custom Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </button>
                        ) : (
                            // 2. The Actual Video (Only renders after click)
                            <video
                                className="w-full h-full object-cover"
                                src={videoSrc}
                                poster={posterSrc}
                                controls
                                autoPlay
                                playsInline
                            />
                        )}
                    </div>

                    {/* RIGHT: Key Benefits & CTA */}
                    <div className="flex flex-col justify-center">
                        {/* Key Stats & Benefits */}
                        <div className="space-y-5 mb-10">
                            <div className="flex gap-4">
                                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">Fewer missed bookings</p>
                                    <p className="text-gray-600 text-sm">Visitors can book instantly instead of leaving</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">Instant booking confirmations</p>
                                    <p className="text-gray-600 text-sm">Secure available slots in real-time</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">Always-on availability</p>
                                    <p className="text-gray-600 text-sm">Capture bookings anytime through live chat</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                                <div>
                                    <p className="text-gray-900 font-bold text-lg">Clear booking visibility</p>
                                    <p className="text-gray-600 text-sm">Keep track of incoming appointments easily</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+447311126710"
                                className="bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 hover:bg-toOrange text-md sm:w-fit w-full"

                            >
                                Call to Discuss
                            </a>
                            <Link
                                to="/digital-receptionist"
                                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold sm:hover:shadow-xl flex items-center justify-center space-x-2 text-md"

                            >
                                Visit Digital Receptionist
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DigitalReceptionist;