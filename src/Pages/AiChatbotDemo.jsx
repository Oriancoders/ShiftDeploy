import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Play, ArrowLeft, MessageCircleMore, CalendarClock, CheckCircle2, User, Mail, Phone, Building2, CalendarDays, Clock3, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const defaultVideo = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

const bookingSteps = [
  {
    key: 'name',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    question: 'Great, let us start. What is your full name?',
    validate: (value) => value.trim().length >= 2,
    error: 'Please enter a valid name.',
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'name@company.com',
    question: 'Thanks. What email should we use for confirmation?',
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    error: 'Please enter a valid email address.',
  },
  {
    key: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 555 123 4567',
    question: 'What is the best phone number for quick follow-up?',
    validate: (value) => value.replace(/\D/g, '').length >= 7,
    error: 'Please enter a valid phone number.',
  },
  {
    key: 'purpose',
    label: 'Purpose',
    type: 'text',
    placeholder: 'Consultation, demo, support, etc.',
    question: 'What is the purpose of your appointment?',
    validate: (value) => value.trim().length >= 3,
    error: 'Please add a short purpose.',
  },
  {
    key: 'company',
    label: 'Company Name',
    type: 'text',
    placeholder: 'Enter your company name or website',
    question: 'What is your company name (or website)?',
    validate: (value) => /^[A-Za-z0-9\s.&'/-]{2,}$/.test(value.trim()),
    error: 'Please enter a valid company name or website.',
  },
  {
    key: 'date',
    label: 'Preferred Date',
    type: 'date',
    placeholder: '',
    question: 'Which date works best for your appointment?',
    validate: (value) => Boolean(value),
    error: 'Please choose an appointment date.',
  },
  {
    key: 'time',
    label: 'Preferred Time',
    type: 'time',
    placeholder: '',
    question: 'What time should we book for you?',
    validate: (value) => Boolean(value),
    error: 'Please choose a preferred time.',
  },
];

export default function AiChatbotDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [bookingData, setBookingData] = useState({});
  const [completedBooking, setCompletedBooking] = useState(null);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Welcome. This is a simple booking demo. Our production assistant is more advanced and tailored for your business.',
    },
    {
      role: 'bot',
      text: bookingSteps[0].question,
    },
  ]);
  const messagesBodyRef = useRef(null);
  const videoUrl = import.meta.env.VITE_DEMO_VIDEO_URL || defaultVideo;

  const currentStep = bookingSteps[stepIndex];
  const isCompleted = stepIndex >= bookingSteps.length;

  const helperText = useMemo(() => {
    if (isCompleted) return 'Demo completed successfully.';
    return `Step ${stepIndex + 1} of ${bookingSteps.length}: ${currentStep.label}`;
  }, [currentStep, isCompleted, stepIndex]);

  useEffect(() => {
    const el = messagesBodyRef.current;
    if (!el) return;

    el.scrollTo({
      top: el.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const pushBotMessage = (text) => {
    setMessages((prev) => [...prev, { role: 'bot', text }]);
  };

  const handleSend = () => {
    if (isCompleted || !currentStep) return;

    const value = inputValue.trim();
    if (!currentStep.validate(value)) {
      pushBotMessage(currentStep.error);
      return;
    }

    setMessages((prev) => [...prev, { role: 'user', text: value }]);
    setBookingData((prev) => ({ ...prev, [currentStep.key]: value }));
    setInputValue('');

    const nextIndex = stepIndex + 1;
    if (nextIndex < bookingSteps.length) {
      setStepIndex(nextIndex);
      pushBotMessage(bookingSteps[nextIndex].question);
      return;
    }

    const finalData = { ...bookingData, [currentStep.key]: value };
    setCompletedBooking(finalData);
    setShowCompletionModal(true);
    setStepIndex(nextIndex);
    pushBotMessage(
      `Booked. ${finalData.name || 'Your'} appointment request is noted for ${finalData.date || 'your selected date'} at ${
        finalData.time || 'your selected time'
      }. We will contact you on ${finalData.email || 'your email'} and ${finalData.phone || 'your phone'}.`
    );
    pushBotMessage(
      'This is a simple demo flow. Once you are interested, we provide a much smarter assistant with natural conversation, qualification logic, and live calendar sync.'
    );
  };

  const resetDemo = () => {
    setStepIndex(0);
    setInputValue('');
    setBookingData({});
    setCompletedBooking(null);
    setShowCompletionModal(false);
    setMessages([
      {
        role: 'bot',
        text: 'Welcome. This is a simple booking demo. Our production assistant is more advanced and tailored for your business.',
      },
      {
        role: 'bot',
        text: bookingSteps[0].question,
      },
    ]);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter' && currentStep?.type !== 'date' && currentStep?.type !== 'time') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-textColor overflow-x-hidden">
      <Navigation isDarkBg={false} />

      <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-b from-[#0b1f46] via-[#0a1b3d] to-[#102a57] text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <Link to="/digital-receptionist" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Digital Receptionist
          </Link>
          <div className="mt-8 max-w-3xl">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm">
              <Bot className="w-4 h-4" />
              Interactive Demo
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4">Try a booking chat in real time.</h1>
            <p className="text-blue-100/90 text-lg mt-4">
              Test the demo assistant by completing a sample appointment flow. It is intentionally simple for preview purposes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#f8fbff]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden min-h-[520px]">
            <div className="px-5 py-4 border-b border-blue-100 bg-blue-50/70 flex items-center justify-between">
              <h2 className="font-bold text-[#0c1f3a] flex items-center gap-2">
                <MessageCircleMore className="w-5 h-5 text-primaryOrange" />
                Booking Chatbot Demo
              </h2>
              <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">{helperText}</span>
            </div>

            <div ref={messagesBodyRef} className="h-[470px] p-4 overflow-y-auto bg-slate-50/60">
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        message.role === 'user' ? 'bg-primaryOrange text-white rounded-br-md' : 'bg-white text-[#0c1f3a] border border-gray-200 rounded-bl-md'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-blue-100 bg-white">
              <div className="flex gap-2">
                {!isCompleted && (currentStep?.type === 'date' || currentStep?.type === 'time') ? (
                  <div className="w-11 shrink-0 rounded-xl border border-gray-300 bg-blue-50 flex items-center justify-center text-blue-700">
                    <CalendarClock className="w-5 h-5 animate-pulse" />
                  </div>
                ) : null}
                <input
                  type={isCompleted ? 'text' : currentStep.type}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder={isCompleted ? 'Demo completed. Click restart.' : currentStep.placeholder}
                  disabled={isCompleted}
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primaryOrange/40 disabled:bg-gray-100 disabled:text-gray-400"
                />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isCompleted}
                  className="px-5 py-3 rounded-xl font-semibold text-white bg-primaryOrange hover:bg-orange-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Send
                </button>
              </div>
              <button type="button" onClick={resetDemo} className="mt-3 text-sm text-primaryBlue hover:underline">
                Restart Demo
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="font-bold text-[#0c1f3a]">What this demo collects</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>1. Name</li>
                <li>2. Email</li>
                <li>3. Phone Number</li>
                <li>4. Purpose of Appointment</li>
                <li>5. Company Name</li>
                <li>6. Preferred Date</li>
                <li>7. Preferred Time</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0c1f3a] to-[#153870] rounded-2xl p-5 text-white">
              <p className="text-sm text-blue-100">Important</p>
              <p className="text-lg font-bold mt-1">This is a simple demo. Production version is far more capable.</p>
              <p className="text-sm text-blue-100 mt-2">
                If you are interested, we can deploy a fully branded assistant with smarter logic, human-like conversation, and CRM/calendar integrations.
              </p>
              <Link to="/digital-receptionist" className="mt-4 inline-flex items-center justify-center w-full bg-primaryOrange hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-colors">
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex items-center gap-2 mb-5">
            <Play className="w-5 h-5 text-primaryOrange" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c1f3a]">See Video Demo</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src={videoUrl}
              title="Digital Receptionist Video Demo"
              className="w-full aspect-video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {showCompletionModal && completedBooking ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#091328]/70 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl rounded-3xl border border-blue-100 bg-white shadow-2xl overflow-hidden">
            <div className="relative px-6 md:px-8 pt-8 pb-6 bg-gradient-to-br from-[#0c1f3a] via-[#133264] to-[#1c4e92] text-white">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/20 animate-ping" />
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 animate-pulse" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#b8ffcf] animate-pulse" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider">Appointment Confirmed</p>
                  <h3 className="text-2xl md:text-3xl font-extrabold mt-1">Thank You, {completedBooking.name || 'Guest'}!</h3>
                  <p className="text-blue-100 mt-2 text-sm md:text-base">
                    Booked. {completedBooking.name || 'Your'} appointment request is noted for {completedBooking.date || 'selected date'} at{' '}
                    {completedBooking.time || 'selected time'}.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-b from-white to-[#f7fbff]">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-[#0c1f3a] font-bold">
                  <Sparkles className="w-4 h-4 text-primaryOrange animate-pulse" />
                  Confirmation Details
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <User className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.name || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <Mail className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.email || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <Phone className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.phone || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <Building2 className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.company || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <CalendarDays className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.date || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-[#f8fbff] border border-blue-100 px-3 py-2 text-[#0c1f3a]">
                    <Clock3 className="w-4 h-4 text-primaryOrange" />
                    <span>{completedBooking.time || 'N/A'}</span>
                  </div>
                </div>
                <p className="mt-5 text-sm text-gray-600">
                  We will contact you on <span className="font-semibold text-[#0c1f3a]">{completedBooking.email || 'your email'}</span> and{' '}
                  <span className="font-semibold text-[#0c1f3a]">{completedBooking.phone || 'your phone'}</span>.
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  This is a simple demo flow. Once you are interested, we provide a much smarter assistant with natural conversation, qualification logic, and live calendar sync.
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setShowCompletionModal(false)}
                  className="flex-1 rounded-xl border border-blue-200 bg-white text-[#0c1f3a] font-semibold py-3 hover:bg-blue-50 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={resetDemo}
                  className="flex-1 rounded-xl bg-primaryOrange text-white font-semibold py-3 hover:bg-orange-500 transition-colors"
                >
                  Book Another Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}
