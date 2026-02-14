import React, { useEffect, useRef, useState } from 'react'

const VideoTestimonial = ({ videoSrc = '', posterSrc = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isLoaded) return

    const onUserInteract = () => setIsLoaded(true)

    const events = ['pointerdown', 'touchstart', 'keydown', 'wheel']
    events.forEach((ev) => window.addEventListener(ev, onUserInteract, { passive: true, once: true }))

    // Fallback: if component becomes visible, load the video
    let io
    if ('IntersectionObserver' in window && containerRef.current) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true)
          }
        })
      }, { rootMargin: '200px' })

      io.observe(containerRef.current)
    }

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, onUserInteract))
      if (io && containerRef.current) io.unobserve(containerRef.current)
    }
  }, [isLoaded])
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={containerRef}>
            <div className="w-full rounded-lg shadow-xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
              <video
                preload="none"
                controls
                playsInline
                poster={posterSrc || undefined}
                src={isLoaded ? videoSrc : undefined}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-center mb-8 md:text-left w-full">
              <h2 className="text-3xl sm:text-5xl font-bold text-primaryBlue mb-6">
                Trusted by
                <span className="text-primaryOrange pl-3">High-Stakes Financial Firms</span>
              </h2>

              <p className="sm:text-lg max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto md:mx-0 mb-6 leading-relaxed px-4 sm:px-0 text-gray-700 italic">
                We focus on fixing the performance and conversion problems that quietly
                cost businesses traffic, trust, and revenue.
              </p>

              <p className="mt-6 font-semibold text-gray-800">
                Farjad Abbas, Head of Business Development @ Bullseye Investments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonial