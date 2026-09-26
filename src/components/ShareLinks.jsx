// Plain share links (no third-party scripts), so they work without consent.
export default function ShareLinks({ url, title }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    ['WhatsApp', `https://wa.me/?text=${t}%20${u}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${u}`],
    ['X', `https://twitter.com/intent/tweet?url=${u}&text=${t}`],
    ['Facebook', `https://www.facebook.com/sharer/sharer.php?u=${u}`],
    ['Email', `mailto:?subject=${t}&body=${u}`],
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-semibold text-primaryBlue mr-1">Share this:</span>
      {links.map(([label, href]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="min-h-[44px] inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-semibold text-primaryBlue hover:border-primaryOrange hover:text-primaryOrange"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
