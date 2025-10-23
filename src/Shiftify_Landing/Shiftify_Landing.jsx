import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Settings,
    DollarSign,
    BarChart3,
    Cloud,
    Rocket,
    Lock,
    Handshake,
    Check,
    Menu,
    X,
    Github,
    Linkedin
} from 'lucide-react';
import Footer from '../components/Footer';
import coloredV from '../Assets/Images/coloredV.png';
import { Link } from 'react-router-dom';


function Shiftify_Landing() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/70 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="2xl:max-w-60 sm:max-w-48 max-w-36"
                        >
                            <Link to="/">
                                <img src={coloredV} alt="ShiftDeploy Logo" />
                            </Link>
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('home')} className="text-[#0C1F3A] hover:text-[#F76707] transition-colors relative group">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F76707] group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button onClick={() => scrollToSection('features')} className="text-[#0C1F3A] hover:text-[#F76707] transition-colors relative group">
                                Features
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F76707] group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button onClick={() => scrollToSection('compare')} className="text-[#0C1F3A] hover:text-[#F76707] transition-colors relative group">
                                Compare
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F76707] group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button onClick={() => scrollToSection('pricing')} className="text-[#0C1F3A] hover:text-[#F76707] transition-colors relative group">
                                Pricing
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F76707] group-hover:w-full transition-all duration-300"></span>
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="text-[#0C1F3A] hover:text-[#F76707] transition-colors relative group">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F76707] group-hover:w-full transition-all duration-300"></span>
                            </button>
                        </div>

                        <div className="hidden md:block">
                            <button className="bg-[#F76707] text-white px-6 py-2.5 rounded-lg hover:bg-[#e05d00] hover:shadow-lg hover:shadow-[#F76707]/30 transition-all duration-300 font-semibold">
                                Start for $15/mo
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0C1F3A]">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-[#0C1F3A] hover:bg-gray-100 rounded">Home</button>
                            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-[#0C1F3A] hover:bg-gray-100 rounded">Features</button>
                            <button onClick={() => scrollToSection('compare')} className="block w-full text-left px-4 py-2 text-[#0C1F3A] hover:bg-gray-100 rounded">Compare</button>
                            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-[#0C1F3A] hover:bg-gray-100 rounded">Pricing</button>
                            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-[#0C1F3A] hover:bg-gray-100 rounded">Contact</button>
                            <button className="w-full bg-[#F76707] text-white px-6 py-2.5 rounded-lg hover:bg-[#e05d00] transition-colors font-semibold">
                                Start for $15/mo
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-[#0C1F3A] leading-tight mb-6">
                                Build your online store at <span className="text-[#F76707]">half Shopify's</span> cost.
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Modern, scalable and fully managed — powered by Next.js & Supabase.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                <button className="bg-[#F76707] text-white px-8 py-4 rounded-lg hover:bg-[#e05d00] hover:shadow-xl hover:shadow-[#F76707]/30 transition-all duration-300 font-semibold text-lg">
                                    Start for $15/mo
                                </button>
                                <button className="border-2 border-[#0C1F3A] text-[#0C1F3A] px-8 py-4 rounded-lg hover:bg-[#0C1F3A] hover:text-white transition-all duration-300 font-semibold text-lg">
                                    See Live Demo
                                </button>
                            </div>
                            <p className="text-sm text-gray-500">No hidden fees • Cancel anytime</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-[#0C1F3A]">Dashboard</h3>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-[#F76707]/10 to-[#F76707]/5 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-gray-600">Total Revenue</span>
                                            <span className="text-2xl font-bold text-[#F76707]">$12,450</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-[#F76707] h-2 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">Orders</p>
                                            <p className="text-2xl font-bold text-[#0C1F3A]">148</p>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-sm text-gray-600 mb-1">Products</p>
                                            <p className="text-2xl font-bold text-[#0C1F3A]">42</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F3A] mb-4">
                            Why Businesses Choose ShiftDeploy
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { Icon: Settings, title: 'Full Control', desc: 'Own your data, no lock-ins.', delay: 0.1 },
                            { Icon: DollarSign, title: 'Half the Cost', desc: '$15/mo predictable pricing.', delay: 0.2 },
                            { Icon: BarChart3, title: 'Easy Dashboard', desc: 'Manage products & orders easily.', delay: 0.3 },
                            { Icon: Cloud, title: 'Free Hosting', desc: 'Fast deployments on Vercel.', delay: 0.4 }
                        ].map((feature, index) => (
                            <AnimatedFeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section id="compare" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafd]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F3A] mb-4">
                            ShiftDeploy vs Shopify
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#0C1F3A] text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold">Feature</th>
                                        <th className="px-6 py-4 text-center font-semibold">Shopify</th>
                                        <th className="px-6 py-4 text-center font-semibold bg-[#F76707]">ShiftDeploy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'Monthly Price', shopify: '$29', shiftdeploy: '$15' },
                                        { feature: 'Hosting', shopify: 'Paid', shiftdeploy: 'Free (Vercel)' },
                                        { feature: 'Backend', shopify: 'Proprietary', shiftdeploy: 'Supabase' },
                                        { feature: 'Customization', shopify: 'Template-Based', shiftdeploy: 'Full Stack Freedom' }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-[#0C1F3A]">{row.feature}</td>
                                            <td className="px-6 py-4 text-center text-gray-600">{row.shopify}</td>
                                            <td className="px-6 py-4 text-center font-semibold text-[#F76707]">{row.shiftdeploy}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-[#0C1F3A] mb-6">
                                Powerful dashboard — built for sellers.
                            </h2>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Real-time order tracking',
                                    'Easy product import/export',
                                    'Simple discount management'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="text-[#F76707] flex-shrink-0 mt-1" size={20} />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#F76707] text-white px-8 py-4 rounded-lg hover:bg-[#e05d00] hover:shadow-xl hover:shadow-[#F76707]/30 transition-all duration-300 font-semibold text-lg">
                                Get Started
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-[#0C1F3A] to-[#1a3a5f] rounded-2xl shadow-2xl p-8 text-white">
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm opacity-80">Recent Orders</span>
                                            <span className="text-xs bg-white/20 px-2 py-1 rounded">Live</span>
                                        </div>
                                        <div className="space-y-3">
                                            {['Order #1248', 'Order #1247', 'Order #1246'].map((order, i) => (
                                                <div key={i} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex justify-between items-center">
                                                    <span className="font-medium">{order}</span>
                                                    <span className="text-[#F76707] font-semibold">${(Math.random() * 100 + 20).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F3A] mb-4">
                            Simple, Transparent Pricing
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$15',
                                features: ['Up to 50 products', '2k visits/month', 'Basic analytics', 'Email support'],
                                highlighted: false,
                                delay: 0.1
                            },
                            {
                                name: 'Growth',
                                price: '$25',
                                features: ['Up to 300 products', '10k visits/month', 'SEO tools', 'Email marketing', 'Priority support'],
                                highlighted: true,
                                delay: 0.2
                            },
                            {
                                name: 'Pro',
                                price: '$39',
                                features: ['Unlimited products', 'Unlimited visits', 'Custom integrations', 'Dedicated support', 'White-label'],
                                highlighted: false,
                                delay: 0.3
                            }
                        ].map((plan, index) => (
                            <AnimatedPricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0C1F3A] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why ShiftDeploy?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12">
                            We focus on modern stacks, transparent pricing, and stores that scale with you.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: 'Built for Growth', delay: 0.1 },
                            { icon: Lock, title: 'Your Data, Your Rules', delay: 0.2 },
                            { icon: Handshake, title: 'Transparent Support', delay: 0.3 }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F76707] rounded-full mb-4">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "ShiftDeploy cut our monthly costs in half while giving us more control. Best decision we made.",
                                name: "Sarah Chen",
                                role: "Founder, StyleBox",
                                delay: 0.1
                            },
                            {
                                quote: "The dashboard is intuitive and powerful. We migrated from Shopify in just two days.",
                                name: "Marcus Williams",
                                role: "CEO, TechGear",
                                delay: 0.2
                            },
                            {
                                quote: "Finally, an eCommerce platform that doesn't lock you in. Full flexibility at a fraction of the cost.",
                                name: "Emily Rodriguez",
                                role: "Owner, Artisan Crafts",
                                delay: 0.3
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: testimonial.delay }}
                                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-semibold text-[#0C1F3A]">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0C1F3A] mb-8 leading-tight">
                            Launch your eCommerce store today — pay half, own everything.
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#F76707] text-white px-10 py-5 rounded-lg hover:bg-[#e05d00] hover:shadow-xl hover:shadow-[#F76707]/30 transition-all duration-300 font-semibold text-lg">
                                Start Now
                            </button>
                            <button className="border-2 border-[#0C1F3A] text-[#0C1F3A] px-10 py-5 rounded-lg hover:bg-[#0C1F3A] hover:text-white transition-all duration-300 font-semibold text-lg">
                                Talk to Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

function AnimatedFeatureCard({ Icon, title, desc, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: delay }}
            className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#F76707] transition-all duration-300 group"
        >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#F76707]/10 rounded-lg mb-4 group-hover:bg-[#F76707] transition-colors duration-300">
                <Icon className="text-[#F76707] group-hover:text-white transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0C1F3A] mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </motion.div>
    );
}

function AnimatedPricingCard({ name, price, features, highlighted, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.6, delay: delay }}
            whileHover={{ y: -8 }}
            className={`bg-white rounded-2xl p-8 ${highlighted
                    ? 'border-4 border-[#F76707] shadow-2xl shadow-[#F76707]/20'
                    : 'border border-gray-200 shadow-lg'
                } hover:shadow-2xl transition-all duration-300`}
        >
            {highlighted && (
                <div className="text-center mb-4">
                    <span className="bg-[#F76707] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                    </span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-[#0C1F3A] mb-2">{name}</h3>
            <div className="mb-6">
                <span className="text-5xl font-bold text-[#0C1F3A]">{price}</span>
                <span className="text-gray-600">/mo</span>
            </div>
            <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check className="text-[#F76707] flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${highlighted
                    ? 'bg-[#F76707] text-white hover:bg-[#e05d00] hover:shadow-lg hover:shadow-[#F76707]/30'
                    : 'border-2 border-[#0C1F3A] text-[#0C1F3A] hover:bg-[#0C1F3A] hover:text-white'
                }`}>
                Get Started
            </button>
        </motion.div>
    );
}

export default Shiftify_Landing;
