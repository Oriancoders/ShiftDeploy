import React, { useState } from 'react';
import { Play, Video, CheckCircle2 } from 'lucide-react';

export default function DemoVideoSection({
  videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1774790198/Digital_Receptionist_Demo_by_ShiftDeploy_ytazqe.mp4',
  posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/v1774876387/ChatGPT_Image_Mar_30_2026_06_12_34_PM_ivetk2.png',
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const points = [
    'See how the digital receptionist responds before booking a full demo',
    'Complete explanation of the product’s capabilities in a quick, engaging format',
    'Also for other service businesses',
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primaryOrange">Quick Explainer</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-primaryBlue md:text-5xl">
            Watch how the digital receptionist feels in practice.
          </h2>
          <p className="mt-4 text-base leading-7 text-textColor/75 md:text-lg">
            A lightweight preview for visitors who want a clearer picture first. The poster shows immediately, and the actual video loads only after click.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-primaryBlue shadow-[0_24px_80px_rgba(12,31,58,0.16)]">
            {!isPlaying ? (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 block h-full w-full cursor-pointer"
                aria-label="Play explainer video"
              >
                <img
                  src={posterSrc}
                  alt="Digital receptionist explainer poster"
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue/85 via-primaryBlue/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primaryBlue/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm md:left-5 md:top-5">
                  <Video className="h-4 w-4 text-primaryOrange" />
                  Watch Preview
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-105 md:h-20 md:w-20">
                    <Play className="ml-1 h-7 w-7 fill-white md:h-9 md:w-9" />
                  </div>
                </div>
              </button>
            ) : (
              <video
                className="h-full w-full object-cover"
                src={videoSrc}
                poster={posterSrc}
                controls
                autoPlay
                playsInline
                preload="none"
              />
            )}
          </div>
        </div>

        {/* <div className="mx-auto mt-8 grid max-w-4xl gap-3 md:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="rounded-2xl bg-gray-50 px-4 py-4 shadow-[0_10px_30px_rgba(12,31,58,0.05)]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primaryOrange" />
                <p className="text-sm leading-6 text-textColor/80 md:text-base">{point}</p>
              </div>
            </div>
          ))}
        </div> */}

       {/* //adding a cta button to click and call directly "Call & Get it Now"  */}
        <div className="mt-20 flex justify-center">
          <a href="tel:+447311126710" // Replace with your phone number
            className="inline-flex items-center gap-3 rounded-2xl bg-primaryOrange px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-primaryOrange/90"
          >
            Call & Get it Now
          </a>
        </div>
      </div>
    </section>
  );
}