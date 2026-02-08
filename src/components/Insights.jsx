import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import coloredLogo from '../Assets/colored.png';
import Footer from './Footer';
import Navigation from './Navigation';

const Insights = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <>
            <Navigation />
            <section className=" min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28">
                <div className="max-w-3xl w-full text-center">
{/* 
                    <img src={coloredLogo} alt="ShiftDeploy" className="w-14 h-14 sm:w-80 mx-auto my-6 object-contain" loading="lazy" /> */}

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-primaryBlue to-toBlue bg-clip-text text-transparent">
                            Insights Coming
                        </span>
                        <br />
                        <span className="text-primaryOrange">Soon</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        We're crafting powerful insights and data-driven strategies to help your business grow faster.
                        <span className="font-semibold text-gray-800"> Stay tuned for exclusive content.</span>
                    </motion.p>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-10 sm:mb-14"
                    >
                        <p className="text-gray-600 text-base sm:text-lg">
                            Get notified when our insights hub launches and be first to access strategic content,
                            case studies, and performance reports tailored for your success.
                        </p>
                    </motion.div>

                    {/* Email Subscription */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-12 sm:mb-16 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    >
                        <div className="relative flex-1">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-primaryBlue focus:outline-none transition-all duration-300 bg-white text-gray-800 placeholder-gray-400"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primaryOrange hover:bg-toOrange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <span>Notify Me</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.form>

                    {/* Confirmation Message */}
                    {subscribed && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="mb-8 p-4 sm:p-6 bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl"
                        >
                            <p className="text-green-700 font-semibold text-sm sm:text-base">
                                ✓ Thanks! We'll notify you when Insights launch.
                            </p>
                        </motion.div>
                    )}

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="inline-block"
                    >
                        <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-6 sm:p-8">
                            <p className="text-gray-600 text-sm sm:text-base mb-2">📈 What to Expect</p>
                            <ul className="text-left space-y-2 sm:space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primaryOrange rounded-full" />
                                    <span className="text-gray-700 text-sm sm:text-base">Performance benchmarks & industry trends</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primaryOrange rounded-full" />
                                    <span className="text-gray-700 text-sm sm:text-base">Strategic optimization guides & case studies</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primaryOrange rounded-full" />
                                    <span className="text-gray-700 text-sm sm:text-base">Exclusive insights for your business growth</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Insights;