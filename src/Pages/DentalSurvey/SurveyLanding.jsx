import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, ClipboardList, Clock, PoundSterling, Calendar, Smile, Send, Star, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = lazy(() => import('../../components/Navigation'));

const FEEDBACK_MESSAGES = [
    "Great insight!",
    "That makes sense.",
    "Interesting point!",
    "UK Dentists agree.",
    "Keep going!",
    "Almost there!",
    "Valuable data!",
    "Thank you!",
    "Perfect!"
];

const CharacterFeedback = ({ step, isVisible }) => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const randomMsg = FEEDBACK_MESSAGES[Math.floor(Math.random() * FEEDBACK_MESSAGES.length)];
        setMessage(randomMsg);
    }, [step]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 1.1, opacity: 0, y: -10 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 z-[40] pointer-events-none w-full text-center"
                >
                    <span className="bg-[#0C1F3A] text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl border border-white/10">
                        ✨ {message}
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const DentalSurvey = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [showFeedback, setShowFeedback] = useState(false);
    const [shouldLoadRest, setShouldLoadRest] = useState(false);
    const [formData, setFormData] = useState({
        timestamp: new Date().toISOString(),
        first_name: '',
        practice_name: '',
        email: '',
        q1: '',
        q2: [],
        q3: '',
        q4: '',
        q5: '',
        q6: null,
        q7: null,
        demo_full_name: '',
        demo_role: '',
        demo_business_email: '',
        demo_phone: '',
        demo_day: '',
        demo_time: ''
    });

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Update timestamp on actual submission
    const updateTimestamp = () => {
        setFormData(prev => ({ ...prev, timestamp: new Date().toISOString() }));
    };

    useEffect(() => {
        if (step > 1 && step < 11) {
            setShowFeedback(true);
            const timer = setTimeout(() => setShowFeedback(false), 2000); 
            return () => clearTimeout(timer);
        }
    }, [step]);

    // Lazy load on interaction
    useEffect(() => {
        const handleInteraction = () => {
            setShouldLoadRest(true);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('scroll', handleInteraction, { passive: true });
        window.addEventListener('mousemove', handleInteraction, { passive: true });
        window.addEventListener('touchstart', handleInteraction, { passive: true });
        window.addEventListener('keydown', handleInteraction, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const handleNext = () => {
        if (validateStep()) {
            if (step === 7) {
                if (formData.q5 === "No, I'm happy with how things work") {
                    handleSubmit();
                    return;
                }
            }
            if (step === 9) {
                if (formData.q7 === "Yes, let's schedule a demo") {
                    setStep(10);
                } else {
                    // Directly proceed to submission for "No thanks" or "Maybe"
                    handleSubmit();
                    return;
                }
                return;
            }
            if (step === 10) {
                handleSubmit();
                return;
            }
            setStep(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const handleBack = () => {
        if (step === 11 || step === 12) return;
        if (step === 8 && (formData.q5 === "Yes, that sounds useful" || formData.q5 === "Maybe, I'd want to know more")) {
            setStep(7);
        } else if (step === 10) {
            setStep(9);
        } else {
            setStep(prev => prev - 1);
        }
        window.scrollTo(0, 0);
    };

    const resetSurvey = () => {
        setStep(1);
        setFormData({
            timestamp: new Date().toISOString(),
            first_name: '',
            practice_name: '',
            email: '',
            q1: '',
            q2: [],
            q3: '',
            q4: '',
            q5: '',
            q6: null,
            q7: null,
            demo_full_name: '',
            demo_role: '',
            demo_business_email: '',
            demo_phone: '',
            demo_day: '',
            demo_time: ''
        });
        setErrors({});
        window.scrollTo(0, 0);
    };

    const validateStep = () => {
        let newErrors = {};
        if (step === 2) {
            if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
            if (!formData.practice_name.trim()) newErrors.practice_name = "Practice name is required";
        }
        if (step === 3 && !formData.q1) newErrors.q1 = "Please select an option";
        if (step === 4 && formData.q2.length === 0) newErrors.q2 = "Please select at least one option";
        if (step === 5 && !formData.q3) newErrors.q3 = "Please select an option";
        if (step === 6 && !formData.q4) newErrors.q4 = "Please select an option";
        if (step === 7 && !formData.q5) newErrors.q5 = "Please select an option";
        if (step === 8 && !formData.q6) newErrors.q6 = "Please select an option";
        if (step === 9 && !formData.q7) newErrors.q7 = "Please select an option";
        if (step === 10) {
            if (!formData.demo_full_name.trim()) newErrors.demo_full_name = "Full name is required";
            if (!formData.demo_role.trim()) newErrors.demo_role = "Your role is required";
            if (!formData.demo_business_email.trim()) {
                newErrors.demo_business_email = "Business email is required";
            } else if (!/\S+@\S+\.\S+/.test(formData.demo_business_email)) {
                newErrors.demo_business_email = "Please enter a valid email";
            }
            if (!formData.demo_phone.trim()) newErrors.demo_phone = "Phone number is required";
            if (!formData.demo_day) newErrors.demo_day = "Preferred day is required";
            if (!formData.demo_time) newErrors.demo_time = "Preferred time is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const finalData = { ...formData, timestamp: new Date().toISOString() };
        
        // Instant UI Feedback: Transition to the thank you page immediately
        if (formData.q7 === "Yes, let's schedule a demo") {
            setStep(12);
        } else {
            setStep(11);
        }

        // Fire and forget the network request in the background
        try {
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvay-eL-9G7LEuHptZ9MvJ5AnE_hKcDNWJKr_Nef8rBl3PAUloAxH61XWJuaodmPlR/exec';
            
            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
            }).catch(err => console.error("Background Submission Error:", err));

        } catch (error) {
            console.error("Submission Setup Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const progress = step <= 1 ? 0 : step >= 11 ? 100 : ((step - 1) / 9) * 100;

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center space-y-6 sm:space-y-10 py-2 sm:py-6"
                    >
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primaryOrange/20 blur-2xl rounded-full" />
                            <div className="relative inline-flex p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white shadow-xl text-primaryOrange mb-1 border border-gray-100">
                                <ClipboardList className="w-8 h-8 sm:w-14 sm:h-14" />
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-[#0C1F3A] leading-[1.2] sm:leading-[1.1] tracking-tight px-2">
                                Help us build something that <span className="text-primaryOrange">actually</span> helps.
                            </h1>
                            <p className="text-sm sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium px-4">
                                We're a team working on a solution for UK dental practices and we need your honest opinion before we build anything. 
                                <span className="block mt-2 text-primaryBlue/40 text-[10px] sm:text-sm font-bold uppercase tracking-widest">Takes 4 minutes / No sales / No follow up</span>
                            </p>
                        </div>
                        <div className="px-4 w-full">
                            <button 
                                onClick={handleNext}
                                className="group relative inline-flex w-full sm:w-auto items-center justify-center bg-[#0C1F3A] hover:bg-[#162a4a] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl text-base sm:text-xl font-bold transition-all shadow-2xl shadow-primaryBlue/30 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Your Input <ChevronRight className="ml-2 w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                );

            case 2:
                return (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-1 sm:space-y-2">
                            <h2 className="text-xl sm:text-3xl font-bold text-primaryBlue tracking-tight">Tell us a bit about you</h2>
                            <p className="text-gray-500 font-medium text-sm sm:text-lg">This helps us understand the context of your clinic.</p>
                        </div>
                        <div className="space-y-4 sm:space-y-5">
                            <div className="group text-left">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1 transition-colors group-focus-within:text-primaryBlue">First Name *</label>
                                <input 
                                    type="text" 
                                    value={formData.first_name}
                                    onChange={(e) => setFormData({...formData, first_name: e.target.value, demo_full_name: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.first_name ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-sm sm:text-lg text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-medium shadow-sm placeholder:text-gray-300 placeholder:text-xs sm:placeholder:text-base`}
                                    placeholder="Your first name"
                                />
                                {errors.first_name && <p className="text-red-500 text-[10px] sm:text-sm mt-1 flex items-center gap-1 font-medium"><AlertCircle size={14}/> {errors.first_name}</p>}
                            </div>
                            <div className="group text-left">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1 transition-colors group-focus-within:text-primaryBlue">Practice Name *</label>
                                <input 
                                    type="text" 
                                    value={formData.practice_name}
                                    onChange={(e) => setFormData({...formData, practice_name: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.practice_name ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-sm sm:text-lg text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-medium shadow-sm placeholder:text-gray-300 placeholder:text-xs sm:placeholder:text-base`}
                                    placeholder="Name of your dental practice"
                                />
                                {errors.practice_name && <p className="text-red-500 text-[10px] sm:text-sm mt-1 flex items-center gap-1 font-medium"><AlertCircle size={14}/> {errors.practice_name}</p>}
                            </div>
                            <div className="group text-left">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1 transition-colors group-focus-within:text-primaryBlue">Email (Optional)</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-sm sm:text-lg text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-medium shadow-sm placeholder:text-gray-300 placeholder:text-xs sm:placeholder:text-base"
                                    placeholder="you@practice.com"
                                />
                                <div className="mt-3 flex items-center gap-2 p-2 sm:p-3 bg-primaryBlue/5 rounded-lg sm:rounded-xl text-primaryBlue/70 text-[10px] sm:text-sm font-medium">
                                    <ClipboardList className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                    <span>Optional (only if you'd like to hear what we find)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <SelectionStep 
                        question="Typically, how often do patients contact your practice outside of your standard opening hours, such as evenings, weekends, or holidays?"
                        options={[
                            "Rarely, we don't see much activity then",
                            "A few times a week",
                            "Daily, often multiple times",
                            "Constantly, we're likely losing track"
                        ]}
                        value={formData.q1}
                        onChange={(val) => setFormData({...formData, q1: val})}
                        error={errors.q1}
                        icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 4:
                return (
                    <MultiSelectionStep 
                        question="What currently happens to these out-of-hours enquiries?"
                        description="Select all that apply"
                        options={[
                            "We pick them up when we reopen",
                            "They're added to a backlog for follow-up",
                            "Patients leave a voicemail",
                            "Some enquiries likely drop through the cracks",
                            "We have an automated system in place"
                        ]}
                        selectedValues={formData.q2}
                        onChange={(val) => {
                            const newVals = formData.q2.includes(val) 
                                ? formData.q2.filter(v => v !== val)
                                : [...formData.q2, val];
                            setFormData({...formData, q2: newVals});
                        }}
                        error={errors.q2}
                    />
                );

            case 5:
                return (
                    <SelectionStep 
                        question="Realistically, what percentage of these enquiries do you think aren't successfully converted into appointments?"
                        options={[
                            "Under 10%",
                            "10% to 30%",
                            "30% to 50%",
                            "Over 50% unfortunately",
                            "Unsure"
                        ]}
                        value={formData.q3}
                        onChange={(val) => setFormData({...formData, q3: val})}
                        error={errors.q3}
                        icon={<AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 6:
                return (
                    <SelectionStep 
                        question="On average, what is the typical value of a new patient at your practice?"
                        options={[
                            "Under £200",
                            "£200 to £500",
                            "£500 to £1,000",
                            "Over £1,000",
                            "Too variable to estimate"
                        ]}
                        value={formData.q4}
                        onChange={(val) => setFormData({...formData, q4: val})}
                        error={errors.q4}
                        icon={<PoundSterling className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 7:
                return (
                    <SelectionStep 
                        question="Would it be beneficial if these enquiries were handled automatically instantly answered and booked into your diary while you're offline?"
                        options={[
                            "Yes, that's definitely needed",
                            "Potentially, I'd like more details",
                            "No, our current process is fine"
                        ]}
                        value={formData.q5}
                        onChange={(val) => setFormData({...formData, q5: val})}
                        error={errors.q5}
                        icon={<Star className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 8:
                return (
                    <SelectionStep 
                        question="If a solution like this significantly reduced missed bookings, what monthly investment would feel reasonable for your practice?"
                        options={[
                            "Under £100/month",
                            "£100 to £200/month",
                            "£200 to £400/month",
                            "Over £400 if it delivers results",
                            "I'd need a trial before deciding on value"
                        ]}
                        value={formData.q6}
                        onChange={(val) => setFormData({...formData, q6: val})}
                        error={errors.q6}
                        icon={<PoundSterling className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 9:
                return (
                    <SelectionStep 
                        question="We'll soon be offering early access to a select group of practices. Would you like a preview of how this works?"
                        options={[
                            "Yes, let's schedule a demo",
                            "Not yet, but keep me informed",
                            "No, thank you"
                        ]}
                        value={formData.q7}
                        onChange={(val) => setFormData({...formData, q7: val})}
                        error={errors.q7}
                        icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primaryOrange" />}
                    />
                );

            case 10:
                return (
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-3 sm:space-y-4">
                            <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primaryBlue/5 text-primaryBlue">
                                <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <div className="space-y-1 sm:space-y-2 text-left">
                                <h2 className="text-xl sm:text-3xl font-bold text-primaryBlue tracking-tight">Great, just a few final details.</h2>
                                <p className="text-gray-500 font-medium text-sm sm:text-lg">We'll reach out to schedule your demo.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-2 sm:pt-4 text-left">
                            <div className="group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Full Name *</label>
                                <input 
                                    type="text" 
                                    value={formData.demo_full_name}
                                    onChange={(e) => setFormData({...formData, demo_full_name: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.demo_full_name ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-semibold`}
                                    placeholder="Your full name"
                                />
                                {errors.demo_full_name && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_full_name}</p>}
                            </div>
                            <div className="group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Your Role *</label>
                                <input 
                                    type="text" 
                                    value={formData.demo_role}
                                    onChange={(e) => setFormData({...formData, demo_role: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.demo_role ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-semibold`}
                                    placeholder="e.g. Practice Manager"
                                />
                                {errors.demo_role && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_role}</p>}
                            </div>
                            <div className="md:col-span-2 group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Business Email *</label>
                                <input 
                                    type="email" 
                                    value={formData.demo_business_email}
                                    onChange={(e) => setFormData({...formData, demo_business_email: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.demo_business_email ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-semibold`}
                                    placeholder="you@practice-name.co.uk"
                                />
                                {errors.demo_business_email && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_business_email}</p>}
                            </div>
                            <div className="group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Phone Number *</label>
                                <input 
                                    type="tel" 
                                    value={formData.demo_phone}
                                    onChange={(e) => setFormData({...formData, demo_phone: e.target.value})}
                                    className={`w-full bg-gray-50 border-2 ${errors.demo_phone ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white transition-all font-semibold`}
                                    placeholder="07XXX XXXXXX"
                                />
                                {errors.demo_phone && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_phone}</p>}
                            </div>
                            <div className="group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Preferred Day *</label>
                                <div className="relative">
                                    <select 
                                        value={formData.demo_day}
                                        onChange={(e) => setFormData({...formData, demo_day: e.target.value})}
                                        className={`w-full bg-gray-50 border-2 ${errors.demo_day ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white appearance-none transition-all font-semibold`}
                                    >
                                        <option value="">Select a day</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                        <option value="Sunday">Sunday</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronRight size={18} className="rotate-90"/>
                                    </div>
                                </div>
                                {errors.demo_day && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_day}</p>}
                            </div>
                            <div className="group">
                                <label className="block text-primaryBlue/60 font-bold text-[10px] sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 ml-1">Preferred Time *</label>
                                <div className="relative">
                                    <select 
                                        value={formData.demo_time}
                                        onChange={(e) => setFormData({...formData, demo_time: e.target.value})}
                                        className={`w-full bg-gray-50 border-2 ${errors.demo_time ? 'border-red-500' : 'border-gray-100'} rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-sm sm:text-base text-primaryBlue focus:outline-none focus:border-primaryBlue focus:bg-white appearance-none transition-all font-semibold`}
                                    >
                                        <option value="">Select a time</option>
                                        <option value="Morning (9am–12pm)">Morning (9am–12pm)</option>
                                        <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <ChevronRight size={18} className="rotate-90"/>
                                    </div>
                                </div>
                                {errors.demo_time && <p className="text-red-500 text-[10px] sm:text-xs mt-1 font-medium">{errors.demo_time}</p>}
                            </div>
                        </div>
                    </div>
                );

            case 11:
                return (
                    <div className="text-center space-y-6 py-6 sm:py-12 px-4">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primaryOrange/20 blur-2xl rounded-full" />
                            <div className="relative inline-flex p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white shadow-xl text-primaryOrange mb-2 border border-gray-100">
                                <Smile className="w-8 h-8 sm:w-14 sm:h-14" />
                            </div>
                        </div>
                        <div className="space-y-4 max-w-lg mx-auto">
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0C1F3A] tracking-tight leading-tight">Your help is invaluable.</h2>
                            <p className="text-sm sm:text-xl text-gray-500 leading-relaxed font-medium">
                                Thank you, this is exactly the kind of honest feedback we need. 
                                We won't follow up, but if you ever want to see what we're building, you know where to find us.
                            </p>
                        </div>
                        <div className="pt-8 flex flex-col gap-3 max-w-sm mx-auto">
                            <button 
                                onClick={() => navigate('/digital-receptionist')}
                                className="w-full bg-primaryBlue hover:bg-[#162a4a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primaryBlue/20"
                            >
                                Visit Digital Receptionist
                            </button>
                            <button 
                                onClick={resetSurvey}
                                className="w-full bg-white border-2 border-gray-100 text-gray-400 hover:text-primaryBlue hover:border-primaryBlue/20 px-8 py-4 rounded-xl font-bold transition-all"
                            >
                                Re-submit Survey
                            </button>
                        </div>
                    </div>
                );

            case 12:
                return (
                    <div className="text-center space-y-6 py-6 sm:py-12 px-4">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                            <div className="relative inline-flex p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-white shadow-xl text-green-500 mb-2 border border-gray-100">
                                <Send className="w-8 h-8 sm:w-14 sm:h-14" />
                            </div>
                        </div>
                        <div className="space-y-4 max-w-lg mx-auto">
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0C1F3A] tracking-tight leading-tight">Thank You for the Response. <br/>You're on the list!</h2>
                            <p className="text-sm sm:text-xl text-gray-500 leading-relaxed font-medium">
                                One of our team will reach out on your preferred day. 
                                We'll keep it to 20 minutes and show you exactly how it works. Speak soon.
                            </p>
                        </div>
                        <div className="pt-8 flex flex-col gap-3 max-w-sm mx-auto">
                            <button 
                                onClick={() => navigate('/digital-receptionist')}
                                className="w-full bg-primaryBlue hover:bg-[#162a4a] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primaryBlue/20"
                            >
                                Visit Digital Receptionist
                            </button>
                            <button 
                                onClick={resetSurvey}
                                className="w-full bg-white border-2 border-gray-100 text-gray-400 hover:text-primaryBlue hover:border-primaryBlue/20 px-8 py-4 rounded-xl font-bold transition-all"
                            >
                                Re-submit Survey
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <>
        <Helmet>
                <title>Dental Practice Survey - Out-of-Hours Management | ShiftDeploy</title>
                <meta name="description" content="Help us understand how UK dental practices manage out-of-hours patient enquiries. Quick 4-minute survey with no follow-up. Gain insights into appointment booking challenges." />
                <meta name="keywords" content="dental practice, out-of-hours, patient enquiries, appointment booking, dental practice management, UK dentistry, practice software" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Dental Practice Survey - Out-of-Hours Management | ShiftDeploy" />
                <meta property="og:description" content="Help us understand how UK dental practices manage out-of-hours patient enquiries. Quick 4-minute survey with honest feedback." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dental Practice Survey - Out-of-Hours Management" />
                <meta name="twitter:description" content="Quick 4-minute survey. No sales. No follow-up. Help us build solutions for UK dental practices." />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
            </Helmet>
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
            
            
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 100, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primaryBlue/5 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [0, -90, 0],
                    x: [0, -100, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primaryOrange/5 rounded-full blur-[120px]" 
            />
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, #0C1F3A 1px, transparent 0)",
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="w-full max-w-2xl z-10 relative">
                {/* Progress Bar */}
                {step > 1 && step < 11 && (
                    <div className="mb-8 relative z-20">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-primaryBlue/40 mb-3">
                            <span>Your Input</span>
                            <span>{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="w-full h-1.5 bg-white rounded-full overflow-hidden shadow-inner border border-gray-100/50">
                            <motion.div 
                                className="h-full bg-primaryOrange"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                )}

                {/* Feedback pill removed as per user request */}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`relative z-10 ${step > 1 && step < 11 ? "bg-white p-5 sm:p-8 md:p-14 rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(12,31,58,0.1)] border border-white/50 overflow-hidden" : ""}`}
                    >
                        {/* Decorative accent for the card */}
                        {step > 1 && step < 11 && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primaryBlue/10 via-primaryOrange/10 to-primaryBlue/10" />
                        )}

                        {renderStep()}

                        {/* Navigation Buttons */}
                        {step > 1 && step < 11 && (
                            <div className="flex flex-col items-center justify-between mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-100 gap-3 sm:gap-4 sm:flex-row-reverse">
                                <button 
                                    onClick={handleNext}
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto flex items-center justify-center bg-primaryBlue hover:bg-[#162a4a] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all shadow-xl shadow-primaryBlue/20 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                            Saving...
                                        </div>
                                    ) : (
                                        <>
                                            {step === 10 ? 'Finalize' : 'Continue'} <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                        </>
                                    )}
                                </button>
                                <button 
                                    onClick={handleBack}
                                    className="w-full sm:w-auto flex items-center justify-center px-6 py-3 text-gray-400 hover:text-primaryBlue font-semibold transition-colors text-sm sm:text-base"
                                >
                                    <ChevronLeft className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Back
                                </button>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        </>

    );
};

const SelectionStep = ({ question, options, value, onChange, error, icon }) => (
    <div className="space-y-4 sm:space-y-8">
        <div className="space-y-2 sm:space-y-4">
            <div className="inline-flex p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-primaryBlue/5 text-primaryBlue">
                {React.cloneElement(icon, { size: 20, className: "sm:w-7 sm:h-7" })}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primaryBlue leading-tight tracking-tight text-left">{question}</h2>
        </div>
        <div className="space-y-2 sm:space-y-3">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onChange(option)}
                    className={`w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all flex justify-between items-center group ${
                        value === option 
                        ? 'bg-primaryBlue/5 border-primaryBlue text-primaryBlue' 
                        : 'bg-gray-50/50 border-gray-100 text-gray-600 hover:border-primaryBlue/20 hover:bg-white'
                    }`}
                >
                    <span className="text-sm sm:text-lg font-semibold pr-2">{option}</span>
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                        value === option ? 'bg-primaryBlue border-primaryBlue' : 'border-gray-200 group-hover:border-primaryBlue/30'
                    }`}>
                        {value === option && <Check size={12} className="text-white sm:w-3.5 sm:h-3.5" strokeWidth={4} />}
                    </div>
                </button>
            ))}
            {error && <p className="text-red-500 font-medium text-[10px] sm:text-sm mt-1 sm:mt-3 flex items-center gap-1"><AlertCircle size={14}/> {error}</p>}
        </div>
    </div>
);

const MultiSelectionStep = ({ question, description, options, selectedValues, onChange, error }) => (
    <div className="space-y-4 sm:space-y-8">
        <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primaryBlue leading-tight tracking-tight text-left">{question}</h2>
            <p className="text-gray-500 font-medium text-xs sm:text-base">{description}</p>
        </div>
        <div className="space-y-2 sm:space-y-3">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onChange(option)}
                    className={`w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all flex justify-between items-center group ${
                        selectedValues.includes(option) 
                        ? 'bg-primaryBlue/5 border-primaryBlue text-primaryBlue' 
                        : 'bg-gray-50/50 border-gray-100 text-gray-600 hover:border-primaryBlue/20 hover:bg-white'
                    }`}
                >
                    <span className="text-sm sm:text-lg font-semibold pr-2">{option}</span>
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg border-2 flex items-center justify-center transition-all shrink-0 ${
                        selectedValues.includes(option) ? 'bg-primaryBlue border-primaryBlue' : 'border-gray-200 group-hover:border-primaryBlue/30'
                    }`}>
                        {selectedValues.includes(option) && <Check size={12} className="text-white sm:w-3.5 sm:h-3.5" strokeWidth={4} />}
                    </div>
                </button>
            ))}
            {error && <p className="text-red-500 font-medium text-[10px] sm:text-sm mt-1 sm:mt-3 flex items-center gap-1"><AlertCircle size={14}/> {error}</p>}
        </div>
    </div>
);

export default DentalSurvey;
