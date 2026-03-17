import React, { useState } from 'react';
import { Play } from 'lucide-react'; // Ensure you have lucide-react installed
import { Link } from 'react-router-dom';

const DigitalReceptionist = ({ 
  videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1773749011/How_and_Why_to_Improve_Booking_Experience_iktvlr.mp4', 
  posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1773750161/ChatGPT_Image_Mar_17_2026_05_22_24_PM_goshas.png' // Added f_auto,q_auto for optimization
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP: Centered Heading & Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primaryBlue mb-4 leading-tight">
            AI-Powered Booking
            <span className="block text-primaryOrange mt-2">Receptionist for Clinics</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Never miss another appointment. Handle 24/7 bookings, patient inquiries, and confirmations automatically while you focus on patient care.
          </p>
        </div>

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
                  <p className="text-gray-900 font-bold text-lg">50% fewer missed calls</p>
                  <p className="text-gray-600 text-sm">Intelligent call handling system</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Instant confirmations</p>
                  <p className="text-gray-600 text-sm">Reduce no-shows by 30%</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-gray-900 font-bold text-lg">24/7 booking availability</p>
                  <p className="text-gray-600 text-sm">Without hiring extra staff</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-primaryOrange font-bold text-2xl flex-shrink-0">✓</span>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Real-time admin alerts</p>
                  <p className="text-gray-600 text-sm">Get notified of new appointments instantly</p>
                </div>
              </div>
              
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+447311126710"
                className="px-8 py-4 bg-primaryOrange text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Call to Discuss
              </a>
              <Link 
                to="/contactus"
                className="px-8 py-4 border-2 border-primaryBlue text-primaryBlue font-bold rounded-lg hover:bg-primaryBlue hover:text-white transition-all text-center"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionist;