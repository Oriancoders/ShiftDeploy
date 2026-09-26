'use client';
import CloudinaryImage from '../../../components/CloudinaryImage';
import { useState } from 'react';
import { Play, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: 'A customer rings',
    body: 'You’re with someone, on a job, or it’s after hours.',
  },
  {
    title: 'It picks up, like your front desk would',
    body: 'Answers their questions and takes their details. Politely, every time.',
  },
  {
    title: 'The booking lands in your diary',
    body: 'You get a text straight away. Nothing to chase later.',
  },
];

const DigitalReceptionist = ({
  videoSrc = 'https://res.cloudinary.com/dbazbq7u9/video/upload/v1774790198/Digital_Receptionist_Demo_by_ShiftDeploy_ytazqe.mp4',
  posterSrc = 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1773750161/ChatGPT_Image_Mar_17_2026_05_22_24_PM_goshas.png',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="calls" className="w-full bg-white py-16 sm:py-24 border-y border-gray-100 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">AI receptionist &amp; call answering</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Can’t get to the phone?
            <span className="block text-primaryOrange">It still gets answered.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Our AI receptionist is a telephone answering service that never takes a day off.
            It answers your calls, day or night, and books the appointment for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-black aspect-video group">
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 size-full block cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primaryOrange"
                  aria-label="Play the digital receptionist demo"
                >
                  <CloudinaryImage
                    src={posterSrc}
                    alt="ShiftDeploy digital receptionist demonstration"
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
            <p className="mt-4 text-center text-sm text-gray-600">Watch it handle a booking call.</p>
          </div>

          <div>
            <ol className="grid gap-6">
              {steps.map(({ title, body }, i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1">
                    <p className="font-bold text-primaryBlue text-lg sm:text-xl leading-snug">{title}</p>
                    <p className="text-gray-600 sm:text-lg mt-1">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
              <Link
                href="/ContactUs"
                prefetch={false}
                className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Book a free demo <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a
                href="tel:+447311126710"
                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:shadow-xl transition-colors"
              >
                <Phone size={20} aria-hidden="true" /> 07311 126710
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionist;
