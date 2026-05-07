import React from "react";

export const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primaryBlue mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-primaryBlue mt-10 mb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-extrabold text-primaryBlue mt-8 mb-3 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-extrabold text-primaryBlue mt-6 mb-2 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed my-4 text-base sm:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primaryOrange/60 pl-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-4 pl-6 list-disc space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 pl-6 list-decimal space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-bold text-primaryBlue underline decoration-primaryOrange/50 underline-offset-4 hover:decoration-primaryOrange"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="text-gray-900 font-bold">{children}</strong>,
    em: ({ children }) => <em className="text-gray-800 italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    textColor: ({ children, value }) => (
      <span style={{ color: value?.hex || "inherit" }}>{children}</span>
    ),
    highlight: ({ children, value }) => {
      const colorMap = {
        primaryBlue: "bg-blue-200",
        primaryOrange: "bg-orange-200",
        yellow: "bg-yellow-200",
        green: "bg-green-200",
        red: "bg-red-200",
      };
      const bgClass = colorMap[value?.color] || "bg-yellow-200";
      return <mark className={`${bgClass} px-1 rounded`}>{children}</mark>;
    },
    fontSize: ({ children, value }) => {
      const sizeClass = {
        small: "text-xs",
        normal: "text-base",
        large: "text-lg",
        xlarge: "text-xl",
      }[value?.size] || "text-base";
      return <span className={sizeClass}>{children}</span>;
    },
    alignLeft: ({ children }) => <span className="block w-full text-left">{children}</span>,
    alignCenter: ({ children }) => <span className="block w-full text-center">{children}</span>,
    alignRight: ({ children }) => <span className="block w-full text-right">{children}</span>,
    alignJustify: ({ children }) => <span className="block w-full text-justify">{children}</span>,
  },

  types: {
    imageBlock: ({ value }) => {
      if (!value?.image) return null;
      const widthClass = { normal: "max-w-2xl", wide: "max-w-4xl", full: "w-full" }[value.width] || "max-w-2xl";
      const alignClass = { left: "ml-0 mr-auto", center: "mx-auto", right: "ml-auto mr-0", full: "w-full" }[value.alignment] || "mx-auto";
      const roundedClass = value.rounded ? "rounded-lg" : "";
      return (
        <figure className={`my-6 overflow-hidden ${alignClass} ${widthClass}`}>
          <img src={value._imageUrl || ""} alt={value.alt || "Blog image"} className={`w-full shadow-md ${roundedClass}`} />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600 italic">{value.caption}</figcaption>
          )}
        </figure>
      );
    },

    callout: ({ value }) => {
      const styles = {
        info: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", icon: "ℹ️" },
        warning: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", icon: "⚠️" },
        success: { bg: "bg-green-50", border: "border-green-200", text: "text-green-900", icon: "✅" },
        neutral: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-900", icon: "📌" },
      }[value?.variant] || { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", icon: "ℹ️" };
      return (
        <div className={`my-6 border-l-4 ${styles.border} ${styles.bg} p-4 rounded-r`}>
          <div className="flex gap-3">
            {value.showIcon && <span className="flex-shrink-0 mt-0.5">{styles.icon}</span>}
            <div className={`flex-1 ${styles.text}`}>
              {value.title && <h4 className="font-bold mb-2">{value.title}</h4>}
              <div className="text-sm">{value.content}</div>
            </div>
          </div>
        </div>
      );
    },

    faq: ({ value }) => (
      <div className="my-8 space-y-3">
        {value.title && <h3 className="text-2xl font-bold text-primaryBlue mb-4">{value.title}</h3>}
        {Array.isArray(value.items) && value.items.map((item, idx) => (
          <details key={idx} className="group border border-gray-200 rounded-lg overflow-hidden">
            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-primaryBlue bg-gray-50 hover:bg-gray-100 list-none">
              {item.question}
              <span className="ml-3 text-primaryOrange group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-5 py-4 text-gray-700 text-base leading-relaxed bg-white">{item.answer}</div>
          </details>
        ))}
      </div>
    ),

    testimonial: ({ value }) => (
      <figure className="my-8 rounded-xl bg-blue-50 border border-blue-100 p-6">
        <blockquote className="text-lg italic text-gray-800 leading-relaxed mb-4">
          &ldquo;{value.quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <div>
            {value.name && <p className="font-bold text-primaryBlue">{value.name}</p>}
            {value.role && <p className="text-sm text-gray-500">{value.role}</p>}
          </div>
          {value.rating > 0 && (
            <div className="ml-auto text-yellow-400 text-sm">
              {"★".repeat(value.rating)}{"☆".repeat(5 - value.rating)}
            </div>
          )}
        </figcaption>
      </figure>
    ),

    prosAndCons: ({ value }) => (
      <div className="my-8 grid sm:grid-cols-2 gap-4">
        {Array.isArray(value.pros) && value.pros.length > 0 && (
          <div className="rounded-xl bg-green-50 border border-green-200 p-5">
            <h4 className="font-bold text-green-800 mb-3">{value.prosLabel || "Pros"}</h4>
            <ul className="space-y-2">
              {value.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2 text-green-900 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>{pro}
                </li>
              ))}
            </ul>
          </div>
        )}
        {Array.isArray(value.cons) && value.cons.length > 0 && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-5">
            <h4 className="font-bold text-red-800 mb-3">{value.consLabel || "Cons"}</h4>
            <ul className="space-y-2">
              {value.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2 text-red-900 text-sm">
                  <span className="text-red-500 mt-0.5">✗</span>{con}
                </li>
              ))}
            </ul>
          </div>
        )}
        {value.verdict && (
          <div className="sm:col-span-2 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
            <span className="font-semibold text-primaryBlue">Verdict: </span>{value.verdict}
          </div>
        )}
      </div>
    ),

    stats: ({ value }) => {
      const colClass = { two: "grid-cols-2", three: "grid-cols-3", four: "grid-cols-4" }[value.layout] || "grid-cols-3";
      const alignClass = value.alignment === "left" ? "text-left" : "text-center";
      return (
        <div className={`my-6 grid ${colClass} gap-6 p-6 rounded-lg bg-gray-50`}>
          {value.stats?.map((stat, idx) => (
            <div key={idx} className={alignClass}>
              <div className="text-3xl font-bold text-primaryBlue">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      );
    },

    buttonGroup: ({ value }) => {
      const alignClass = { left: "justify-start", center: "justify-center", right: "justify-end" }[value.alignment] || "justify-center";
      return (
        <div className={`my-6 flex flex-wrap gap-3 ${alignClass}`}>
          {Array.isArray(value.buttons) && value.buttons.map((btn, idx) => {
            const btnClass = {
              primary: "bg-primaryBlue text-white hover:bg-blue-900",
              secondary: "bg-primaryOrange text-white hover:bg-orange-700",
              outline: "border-2 border-primaryBlue text-primaryBlue hover:bg-blue-50",
              ghost: "text-primaryBlue hover:underline",
            }[btn.style] || "bg-primaryBlue text-white";
            return (
              <a
                key={idx}
                href={btn.url || "#"}
                target={btn.openInNewTab ? "_blank" : "_self"}
                rel={btn.openInNewTab ? "noopener noreferrer" : ""}
                className={`inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition ${btnClass}`}
              >
                {btn.text}
              </a>
            );
          })}
        </div>
      );
    },

    themedSection: ({ value }) => {
      const themeClass = {
        light: "bg-gray-50 text-gray-900",
        dark: "bg-primaryBlue text-white",
        brand: "bg-primaryOrange text-white",
        gradient: "bg-gradient-to-br from-primaryBlue to-blue-800 text-white",
      }[value.theme] || "bg-gray-50 text-gray-900";
      const paddingClass = { small: "p-4", medium: "p-6", large: "p-10" }[value.padding] || "p-6";
      return (
        <section className={`my-8 rounded-xl ${themeClass} ${paddingClass}`}>
          {value.heading && <h3 className="text-xl font-bold mb-3">{value.heading}</h3>}
        </section>
      );
    },

    divider: ({ value }) => {
      const thicknessClass = { thin: "h-0.5", thick: "h-1", brand: "h-1" }[value.style] || "h-0.5";
      const spacingClass = { small: "my-3", medium: "my-6", large: "my-10" }[value.spacing] || "my-6";
      const colorClass = value.style === "brand" ? "bg-primaryBlue" : "bg-gray-200";
      return (
        <div className={spacingClass}>
          <div className={`${thicknessClass} ${colorClass}`} />
        </div>
      );
    },

    video: ({ value }) => {
      const getEmbedUrl = (url) => {
        if (!url) return "";
        const yt = url.match(/(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/);
        if (yt?.[1]) return `https://www.youtube.com/embed/${yt[1].split("&")[0]}`;
        const vi = url.match(/vimeo\.com\/(\d+)/);
        if (vi?.[1]) return `https://player.vimeo.com/video/${vi[1]}`;
        return "";
      };
      const embedUrl = getEmbedUrl(value.url);
      if (!embedUrl) return null;
      return (
        <figure className={`my-6 overflow-hidden rounded-lg ${value.alignment === "full" ? "w-full" : "max-w-2xl mx-auto"}`}>
          <iframe
            src={embedUrl}
            width="100%"
            height={value.alignment === "full" ? "600" : "400"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-600">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};
