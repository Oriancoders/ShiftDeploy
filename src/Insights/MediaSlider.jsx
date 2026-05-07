'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

const getVideoEmbedUrl = (url) => {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=0&rel=0`;
  const vi = url.match(/vimeo\.com\/(\d+)/);
  if (vi) return `https://player.vimeo.com/video/${vi[1]}`;
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) return url;
  return null;
};

const isMp4 = (url) => /\.(mp4|webm|ogg)(\?|$)/i.test(url || '');

export default function MediaSlider({ block, getImageUrl }) {
  const {
    slides = [],
    autoplay = true,
    autoplaySpeed = 3500,
    showCaptions = true,
    aspectRatio = '16/9',
    rounded = true,
    title,
  } = block;

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((idx) => {
    if (isTransitioning || idx === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  }, [current, isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % total), [goTo, current, total]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [goTo, current, total]);

  useEffect(() => {
    if (!autoplay || isHovered || total <= 1) return;
    timerRef.current = setInterval(next, autoplaySpeed);
    return () => clearInterval(timerRef.current);
  }, [autoplay, isHovered, next, autoplaySpeed, total]);

  if (!slides.length) return null;

  // aspect ratio padding
  const [w, h] = aspectRatio.split('/').map(Number);
  const paddingTop = `${((h / w) * 100).toFixed(2)}%`;
  const roundedClass = rounded ? 'rounded-2xl' : '';

  const slide = slides[current];
  const embedUrl = slide?.type === 'video' ? getVideoEmbedUrl(slide.videoUrl) : null;
  const imageUrl = slide?.type === 'image' && slide.image ? getImageUrl(slide.image, 1200) : null;

  return (
    <div
      className="my-8 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title && (
        <h3 className="text-xl font-bold text-primaryBlue mb-3">{title}</h3>
      )}

      {/* Slide area */}
      <div className={`relative overflow-hidden bg-gray-900 shadow-lg ${roundedClass}`}>
        <div className="relative w-full" style={{ paddingTop }}>
          {/* Image slide */}
          {slide?.type === 'image' && imageUrl && (
            <img
              key={current}
              src={imageUrl}
              alt={slide.alt || slide.caption || 'Slide image'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            />
          )}

          {/* Video — embedded (YouTube/Vimeo) */}
          {slide?.type === 'video' && embedUrl && !isMp4(slide.videoUrl) && (
            <iframe
              key={current}
              src={embedUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {/* Video — native mp4 */}
          {slide?.type === 'video' && isMp4(slide.videoUrl) && (
            <video
              key={current}
              src={slide.videoUrl}
              controls
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            />
          )}

          {/* Caption overlay */}
          {showCaptions && slide?.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
              <p className="text-white text-sm font-medium">{slide.caption}</p>
            </div>
          )}

          {/* Prev / Next arrows */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition backdrop-blur-sm z-10"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition backdrop-blur-sm z-10"
                aria-label="Next slide"
              >
                ›
              </button>
            </>
          )}

          {/* Slide counter badge */}
          {total > 1 && (
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {current + 1} / {total}
            </div>
          )}
        </div>

        {/* Dot indicators + autoplay progress */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-1.5 py-3 bg-gray-900/80">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? 'w-6 h-2 bg-primaryOrange'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip (shown when > 3 slides) */}
      {total > 3 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {slides.map((s, idx) => {
            const thumbUrl = s.type === 'image' && s.image ? getImageUrl(s.image, 160) : null;
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition ${
                  idx === current ? 'border-primaryOrange' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                {thumbUrl ? (
                  <img src={thumbUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white text-lg">▶</div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
