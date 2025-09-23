import React from "react";

/**
 * TrustStrip
 * - Shows a repeating row of logos (grayscale by default)
 * - Infinite marquee animation (left -> right)
 * - Hover the strip to pause; hover/focus a logo to reveal color
 *
 * Usage: <TrustStrip speed={30} /> // speed in seconds for full loop
 */

const LOGO_URLS = [
  // Replace these with your hosted logo URLs (PNG/SVG). Keep sizes similar for best results.
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  "https://cdn.worldvectorlogo.com/logos/docker.svg",
  "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
  "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  "https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg",
  "https://cdn.worldvectorlogo.com/logos/vercel.svg",
];

const TrustStrip = ({ speed = 28 }) => {
  // We duplicate the list to create a smooth seamless loop
  const logos = [...LOGO_URLS, ...LOGO_URLS];

  return (
    <div className="w-full overflow-hidden bg-gray-50 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-primaryBlue mb-6 leading-tight text-center px-6">Our Circle of Trust & Technology Excellence</h1>
      {/* Inline styles for keyframes so you don't need to change tailwind config */}
      <style>{`
        @keyframes trust-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move half since we duplicated the list */
        }

        /* reduce GPU jank: use transform with translate3d */
        .trust-marquee {
          animation: trust-marquee ${speed}s linear infinite;
          will-change: transform;
        }

        /* Pause animation when container is hovered */
        .trust-strip:hover .trust-marquee,
        .trust-strip:focus-within .trust-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="trust-strip relative w-full  py-10 flex items-center "
        aria-label="Technologies we use"
      >
        <div
          className="trust-marquee flex items-center gap-8"
          style={{ minWidth: "200%" }} /* ensures 2x length for seamless translation */
        >
          {logos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="flex-shrink-0"
              style={{ width: "140px" }} /* adjust per design */
            >
              <img
                src={src}
                alt={`logo-${i}`}
                className="mx-auto w-full object-contain filter grayscale transition-filter duration-200 ease-in-out logo-focus"
                // Accessibility: make logos keyboard-focusable so keyboard users can remove grayscale
                tabIndex={0}
                style={{
                  // ensure images look good on dark/light backgrounds
                  maxHeight: "48px",
                }}
                onKeyDown={(e) => {
                  // allow Enter/Space to "activate" (no action) but remove grayscale while focused
                  if (e.key === "Enter" || e.key === " ") {
                    e.currentTarget.style.filter = "none";
                    // put it back on blur (native behavior will remove later)
                  }
                }}
                onFocus={(e) => (e.currentTarget.style.filter = "none")}
                onBlur={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
