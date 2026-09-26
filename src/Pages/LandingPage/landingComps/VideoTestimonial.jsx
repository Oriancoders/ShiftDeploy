'use client';
import CloudinaryImage from '../../../components/CloudinaryImage';
import { useState } from 'react';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

const VideoTestimonial = ({
  videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1771101197/Web_Video_1_handbraked_xii5jz.mp4',
  posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1771111040/poster_drnahj.webp',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-24 border-y border-gray-100">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-black aspect-video group">
          {!isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 size-full block cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primaryOrange"
              aria-label="Play Farjad Abbas's video review of ShiftDeploy"
            >
              <CloudinaryImage
                src={posterSrc}
                alt="Farjad Abbas of Bullseye Investments talking about working with ShiftDeploy"
                className="size-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                width="1280"
                height="720"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="size-8 text-white fill-white ml-1" aria-hidden="true" />
                </div>
              </div>
            </button>
          ) : (
            <video className="size-full object-cover" src={videoSrc} poster={posterSrc} controls autoPlay playsInline />
          )}
        </div>

        <div>
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Client review</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Don’t take our word for it.
            <span className="block text-primaryOrange">Hear it from a client.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Farjad Abbas talks about what it was like to work with us on Bullseye
            Investments’ new website.
          </p>

          <figure className="mt-6 border-l-4 border-primaryOrange pl-4">
            <blockquote className="text-2xl font-semibold text-primaryBlue">“Better than anything I’ve seen.”</blockquote>
            <figcaption className="mt-2">
              <span className="block font-bold text-primaryBlue">Farjad Abbas</span>
              <span className="text-gray-600">Head of Business Development, Bullseye Investments</span>
            </figcaption>
          </figure>

          <Link
            href="/CaseStudies/BullseyesCase"
            prefetch={false}
            className="mt-8 inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange"
          >
            Read the full case study <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
