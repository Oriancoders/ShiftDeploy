import React, { useState } from 'react';
import { Play } from 'lucide-react'; // Ensure you have lucide-react installed

const VideoTestimonial = ({ 
  videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1771101197/Web_Video_1_handbraked_xii5jz.mp4', 
  posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1771111040/poster_drnahj.webp' // Added f_auto,q_auto for optimization
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* RIGHT: Context Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primaryBlue mb-6 leading-tight">
              Trusted by 
              <span className="block text-primaryOrange mt-2">High-Stakes Financial Firms</span>
            </h2>

            <p className="text-lg text-gray-700 italic mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              "We focus on fixing the performance and conversion problems that quietly cost businesses traffic, trust, and revenue."
            </p>

            <div className="border-l-4 border-primaryOrange pl-4 text-left mx-auto md:mx-0 w-fit">
              <p className="font-bold text-gray-900 text-lg">
                Farjad Abbas
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                Head of Business Development @ Bullseye Investments
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;