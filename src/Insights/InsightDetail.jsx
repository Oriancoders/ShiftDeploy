import React, { useEffect, useMemo, useState } from "react";
import { Calendar, Clock3, User, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { isSanityConfigured, sanityClient } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./portableTextComponents.jsx";
// Initialize the image URL builder
const imageBuilder = sanityClient
  ? imageUrlBuilder(sanityClient)
  : null;

// Helper: Generate image URL from Sanity image object
const getImageUrl = (image, width = 800) => {
  if (!image || !imageBuilder) return "";
  try {
    return imageBuilder
      .image(image)
      .width(width)
      .auto("format")
      .url();
  } catch (error) {
    console.error("Error building image URL:", error);
    return "";
  }
};

// Helper: Extract video ID from YouTube/Vimeo URL
const getVideoEmbedUrl = (url) => {
  if (!url) return "";
  
  // YouTube
  const youtubeMatch = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/
  );
  if (youtubeMatch?.[1]) {
    const videoId = youtubeMatch[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // Vimeo
  const vimeoMatch = url.match(/(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  
  return "";
};

// Helper: Render text with marks (bold, italic, underline, links, highlights, font size)
const renderTextWithMarks = (children, markDefs = []) => {
  if (!Array.isArray(children)) return children;
  
  return children.map((span, idx) => {
    if (typeof span === "string") return span;
    if (!span || !span.text) return null;

    let element = <>{span.text}</>;
    const defs = Array.isArray(markDefs) ? markDefs : [];

    // Apply marks in order
    if (Array.isArray(span.marks)) {
      span.marks.forEach((mark) => {
        if (mark === "strong") {
          element = <strong key={`strong-${idx}`} className="font-bold">{element}</strong>;
        } else if (mark === "em") {
          element = <em key={`em-${idx}`} className="italic">{element}</em>;
        } else if (mark === "underline") {
          element = <u key={`underline-${idx}`} className="underline">{element}</u>;
        } else if (mark === "alignLeft") {
          element = <span key={`align-left-${idx}`} className="block w-full text-left">{element}</span>;
        } else if (mark === "alignCenter") {
          element = <span key={`align-center-${idx}`} className="block w-full text-center">{element}</span>;
        } else if (mark === "alignRight") {
          element = <span key={`align-right-${idx}`} className="block w-full text-right">{element}</span>;
        } else if (mark === "alignJustify") {
          element = <span key={`align-justify-${idx}`} className="block w-full text-justify">{element}</span>;
        } else if (typeof mark === "string") {
          const markDef = defs.find((def) => def?._key === mark);
          if (markDef?._type === "link") {
            const href = markDef.href || "#";
            const target = markDef.blank ? "_blank" : "_self";
            element = (
              <a
                key={`link-${idx}`}
                href={href}
                target={target}
                rel={markDef.blank ? "noopener noreferrer" : ""}
                className="text-primaryBlue hover:underline"
              >
                {element}
              </a>
            );
          } else if (
            markDef?._type === "alignLeft" ||
            markDef?._type === "alignCenter" ||
            markDef?._type === "alignRight" ||
            markDef?._type === "alignJustify"
          ) {
            const alignClass =
              markDef._type === "alignCenter"
                ? "text-center"
                : markDef._type === "alignRight"
                ? "text-right"
                : markDef._type === "alignJustify"
                ? "text-justify"
                : "text-left";
            element = <span key={`align-def-${idx}`} className={`block w-full ${alignClass}`}>{element}</span>;
          }
        } else if (typeof mark === "object" && mark._type === "link") {
          const href = mark.href || "#";
          const target = mark.blank ? "_blank" : "_self";
          element = (
            <a
              key={`link-${idx}`}
              href={href}
              target={target}
              rel={mark.blank ? "noopener noreferrer" : ""}
              className="text-primaryBlue hover:underline"
            >
              {element}
            </a>
          );
        } else if (typeof mark === "object" && mark._type === "highlight") {
          const color = mark.color === "primaryBlue" ? "bg-blue-200" : "bg-orange-200";
          element = (
            <mark key={`highlight-${idx}`} className={`${color} px-1 rounded`}>
              {element}
            </mark>
          );
        } else if (typeof mark === "object" && mark._type === "fontSize") {
          const sizeClass = {
            small: "text-xs",
            normal: "text-base",
            large: "text-lg",
            xlarge: "text-xl",
          }[mark.size] || "text-base";
          element = <span key={`size-${idx}`} className={sizeClass}>{element}</span>;
        }
      });
    }

    return element;
  });
};

// Helper: Render a table block
const parsePastedTable = (raw) => {
  const lines = String(raw || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return { header: [], rows: [] };

  const parsed = lines.map((line) => line.split("\t").map((cell) => cell.trim()));
  const [header, ...rows] = parsed;
  return { header, rows };
};

const renderTable = (table) => {
  if (!table) return null;
  
  const striped = table.striped;
  const compact = table.compact;
  const isPasteMode = table.inputMode === "paste";
  const parsedFromPaste = isPasteMode ? parsePastedTable(table.pastedData) : { header: [], rows: [] };
  const header = Array.isArray(table.header) && table.header.length > 0 ? table.header : parsedFromPaste.header;
  const rows = Array.isArray(table.rows) && table.rows.length > 0 ? table.rows : parsedFromPaste.rows;
  const hasHeader = Array.isArray(header) && header.length > 0;

  if (!hasHeader && (!Array.isArray(rows) || rows.length === 0)) return null;

  const getCellText = (cell) => {
    if (typeof cell === "string" || typeof cell === "number") return String(cell);
    if (cell && typeof cell.content === "string") return cell.content;
    return "";
  };
  const getCellAlignment = (cell) => {
    if (!cell || typeof cell !== "object") return "";
    return cell.alignment === "center"
      ? "text-center"
      : cell.alignment === "right"
      ? "text-right"
      : "";
  };
  
  return (
    <div className="overflow-x-auto my-6">
      <table className={`w-full border-collapse border border-gray-300 ${compact ? "text-sm" : ""}`}>
        {hasHeader && (
          <thead>
            <tr className="bg-primaryBlue text-white font-bold">
              {header.map((heading, headingIdx) => (
                <th
                  key={`heading-${headingIdx}`}
                  className={`border border-gray-300 px-4 ${compact ? "py-1" : "py-2"} text-left`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={`row-${rowIdx}`}
              className={`
                ${row.headerRow ? "bg-primaryBlue text-white font-bold" : ""}
                ${striped && rowIdx % 2 === 1 ? "bg-gray-100" : ""}
              `}
            >
              {(Array.isArray(row?.cells) ? row.cells : Array.isArray(row) ? row : []).map((cell, cellIdx) => (
                <td
                  key={`cell-${rowIdx}-${cellIdx}`}
                  className={`border border-gray-300 px-4 ${compact ? "py-1" : "py-2"} text-left ${
                    getCellAlignment(cell)
                  }`}
                >
                  {getCellText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper: Get callout icon and colors
const getCalloutStyles = (variant) => {
  const styles = {
    info: {
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
      iconColor: "text-blue-600",
      icon: Info,
    },
    warning: {
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-900",
      iconColor: "text-amber-600",
      icon: AlertTriangle,
    },
    success: {
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-900",
      iconColor: "text-green-600",
      icon: CheckCircle,
    },
    neutral: {
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-900",
      iconColor: "text-gray-600",
      icon: AlertCircle,
    },
  };
  
  return styles[variant] || styles.info;
};

// Helper: Render callout block
const renderCallout = (callout) => {
  const styles = getCalloutStyles(callout.variant);
  const Icon = styles.icon;
  const bgClass = callout.backgroundStyle === "solid" ? "opacity-100" : "opacity-50";
  
  return (
    <div
      className={`my-6 border-l-4 ${styles.borderColor} ${styles.bgColor} ${bgClass} p-4 rounded-r`}
    >
      <div className="flex gap-3">
        {callout.showIcon && (
          <Icon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${styles.iconColor}`} />
        )}
        <div className={`flex-1 ${styles.textColor}`}>
          {callout.title && <h4 className="font-bold mb-2">{callout.title}</h4>}
          {callout.content &&
            callout.content.map((block) => {
              if (block._type === "block" && block.children) {
                return (
                  <p key={block._key} className="text-sm">
                    {renderTextWithMarks(block.children, block.markDefs)}
                  </p>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

// Helper: Render CTA block
const renderCTA = (cta) => {
  const buttonClass = {
    primary: "bg-primaryBlue text-white hover:bg-blue-900",
    secondary: "bg-primaryOrange text-white hover:bg-orange-700",
    outline: "border-2 border-primaryBlue text-primaryBlue hover:bg-blue-50",
  }[cta.style] || "bg-primaryBlue text-white hover:bg-blue-900";
  
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[cta.alignment] || "text-center";
  
  return (
    <div className={`my-6 p-6 ${cta.darkModeVariant ? "bg-gray-900 text-white" : "bg-gray-100"} rounded-lg ${alignmentClass}`}>
      <h3 className="text-xl font-bold mb-2">{cta.title}</h3>
      {cta.description && <p className="mb-4 text-gray-700 dark:text-gray-300">{cta.description}</p>}
      <a
        href={cta.buttonLink}
        className={`inline-block px-6 py-3 rounded font-semibold transition ${buttonClass}`}
      >
        {cta.buttonText}
      </a>
    </div>
  );
};

// Helper: Render stats block
const renderStats = (stats) => {
  const colClass = {
    two: "grid-cols-2",
    three: "grid-cols-3",
    four: "grid-cols-4",
  }[stats.layout] || "grid-cols-3";
  
  const alignmentClass = stats.alignment === "left" ? "text-left" : "text-center";
  
  return (
    <div className={`my-6 grid ${colClass} gap-6 p-6 rounded-lg bg-gray-50`}>
      {stats.stats?.map((stat, idx) => (
        <div key={idx} className={alignmentClass}>
          <div className="text-3xl font-bold text-primaryBlue">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Helper: Render code block
const renderCode = (code) => {
  let highlightedCode = code.code;
  try {
    if (code.language) {
      highlightedCode = hljs.highlight(code.code, { language: code.language }).value;
    }
  } catch (e) {
    console.warn("Could not highlight code:", e);
  }
  
  return (
    <div className="my-6 rounded-lg overflow-hidden">
      <div className="bg-gray-900 text-gray-100 p-4">
        {code.language && <span className="text-xs text-gray-400">{code.language}</span>}
        <pre className="mt-2 text-sm overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
        {code.showLineNumbers && (
          <div className="text-xs text-gray-500 mt-2">
            {code.code.split("\n").length} lines
          </div>
        )}
      </div>
    </div>
  );
};

const INSIGHT_BY_SLUG_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"] &&
  slug.current == $slug
][0]{
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  "date": coalesce(publishedAt, _createdAt),
  tags,
  categories[]->{
    title
  },
  author->{
    name
  },
  "mainImage": coalesce(mainImage, coverImage),
  minutes,
  readTime,
  body
}`;

const INSIGHTS_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"]
] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  body,
  "date": coalesce(publishedAt, _createdAt),
  tags,
  categories[]->{
    title
  },
  author->{
    name
  },
  minutes,
  readTime
}`;

const normalizeTags = (rawTags, rawCategories) => {
  const fromTags = Array.isArray(rawTags)
    ? rawTags
        .map((tag) => {
          if (typeof tag === "string") return tag;
          if (tag && typeof tag.title === "string") return tag.title;
          if (tag && typeof tag.value === "string") return tag.value;
          return "";
        })
        .filter(Boolean)
    : [];

  const fromCategories = Array.isArray(rawCategories)
    ? rawCategories
        .map((cat) => (cat && typeof cat.title === "string" ? cat.title : ""))
        .filter(Boolean)
    : [];

  const combined = [...fromTags, ...fromCategories];
  return combined.length > 0 ? Array.from(new Set(combined)) : ["Insights"];
};

const formatDate = (iso) => {
  const d = new Date(iso);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const getBlockText = (block) => {
  if (!block || !Array.isArray(block.children)) return "";
  return block.children
    .map((child) => (typeof child?.text === "string" ? child.text : ""))
    .join("");
};

const getPortableTextWordCount = (body) => {
  if (!Array.isArray(body)) return 0;
  const text = body
    .map((block) => {
      if (!block || !Array.isArray(block.children)) return "";
      return block.children
        .map((child) => (typeof child?.text === "string" ? child.text : ""))
        .join(" ");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return 0;
  return text.split(" ").length;
};

const getReadMinutes = (minutes, readTime, body) => {
  const fromMinutes = Number(minutes);
  if (Number.isFinite(fromMinutes) && fromMinutes > 0) return Math.round(fromMinutes);

  const fromReadTime = Number(readTime);
  if (Number.isFinite(fromReadTime) && fromReadTime > 0) return Math.round(fromReadTime);

  const words = getPortableTextWordCount(body);
  if (words <= 0) return 1;
  return Math.max(1, Math.ceil(words / 200));
};

const getAlignmentClass = (block) => {
  const alignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  const styleMap = {
    alignLeft: "text-left",
    alignCenter: "text-center",
    alignRight: "text-right",
    alignJustify: "text-justify",
  };

  if (alignmentMap[block?.alignment]) return alignmentMap[block.alignment];
  return styleMap[block?.style] || "";
};

const MoreInsightsSection = ({ insights }) => {
  if (!Array.isArray(insights) || insights.length === 0) return null;

  return (
    <aside className="rounded-2xl bg-white p-5 shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)]">
      <h2 className="md:text-2xl font-extrabold text-primaryBlue">More Insights from ShiftDeploy</h2>
      <div className="mt-4 space-y-3">
        {insights.map((item) => (
          <Link
            key={`more-insight-${item.id}`}
            to={`/insights/${item.id}`}
            state={{ post: item }}
            className="block rounded-xl border border-gray-200 bg-gray-50 p-4 transition hover:border-gray-300 hover:bg-white"
          >
            <p className="text-xs text-gray-500">
              {formatDate(item.date)} · {item.minutes} min read
            </p>
            <h3 className="mt-1 text-sm font-bold text-primaryBlue leading-snug">{item.title}</h3>
          </Link>
        ))}
      </div>
    </aside>
  );
};

const InsightDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
  const [moreInsights, setMoreInsights] = useState([]);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let isCancelled = false;

    if (!slug || !isSanityConfigured || !sanityClient) {
      setIsLoading(false);
      return () => {
        isCancelled = true;
      };
    }

    const loadPost = async () => {
      try {
        setIsLoading(true);
        setLoadError("");
        const doc = await sanityClient.fetch(INSIGHT_BY_SLUG_QUERY, { slug });

        if (isCancelled || !doc) return;

        setPost({
          id: doc.id || doc._id,
          title: doc.title,
          excerpt: doc.excerpt || doc.summary || "",
          date: doc.date || new Date().toISOString(),
          tags: normalizeTags(doc.tags, doc.categories),
          author: doc?.author?.name || "ShiftDeploy",
          mainImage: doc.mainImage || doc.coverImage || null,
          body: Array.isArray(doc.body) ? doc.body : [],
          minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
        });
      } catch (error) {
        if (!isCancelled) {
          setLoadError("Could not load this insight from Sanity.");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadPost();

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    let isCancelled = false;

    if (!isSanityConfigured || !sanityClient) {
      return () => {
        isCancelled = true;
      };
    }

    const loadMoreInsights = async () => {
      try {
        const docs = await sanityClient.fetch(INSIGHTS_QUERY);
        if (isCancelled) return;

        const currentId = post?.id;
        const normalized = Array.isArray(docs)
          ? docs
              .filter((doc) => doc && doc.title)
              .map((doc) => ({
                id: doc.id || doc._id,
                title: doc.title,
                excerpt: doc.excerpt || doc.summary || "",
                date: doc.date || new Date().toISOString(),
                tags: normalizeTags(doc.tags, doc.categories),
                author: doc?.author?.name || "ShiftDeploy",
                minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
              }))
              .filter((doc) => doc.id !== currentId)
              .slice(0, 5)
          : [];

        setMoreInsights(normalized);
      } catch (error) {
        if (!isCancelled) {
          setMoreInsights([]);
        }
      }
    };

    loadMoreInsights();

    return () => {
      isCancelled = true;
    };
  }, [post?.id]);

  const pageTitle = useMemo(
    () => (post?.title ? `${post.title} | ShiftDeploy Insights` : "Insight | ShiftDeploy"),
    [post]
  );

  const heroImage = post?.mainImage || post?.coverImage || null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Navigation />

      <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 xl:col-span-9">
          <span
            
            className="inline-flex items-center rounded-full py-2 mb-4 text-sm font-bold text-primaryBlue/50  italic"
          >
            Insights {" > "} {pageTitle.slice(0, 28)}......
          </span>
          <hr />
          {isLoading && (
            <div className="mt-2 sm:mt-6 rounded-2xl bg-white p-6 text-gray-600 shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)]">
              Loading insight...
            </div>
          )}

          {loadError && (
            <div className="mt-2 sm:mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
              {loadError}
            </div>
          )}

          {!isLoading && !post && (
            <div className="mt-2 sm:mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
              Insight not found.
            </div>
          )}

          {post && (
            <article className="mt-2 sm:mt-6 rounded-2xl   overflow-hidden">
              {heroImage && (
                <figure className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={getImageUrl(heroImage, 1400)}
                    alt={heroImage.alt || post.title || "Insight cover image"}
                    className="w-full h-auto object-cover"
                  />
                </figure>
              )}

              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-primaryBlue break-words">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {formatDate(post.date)}
                </span>
                <span className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  {post.author}
                </span>
                <span className="text-gray-300">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="w-3.5 h-3.5 text-gray-400" />
                  {post.minutes} min read
                </span>
              </div>

              {post.excerpt && (
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-700">
                  {post.excerpt}
                </p>
              )}

              {Array.isArray(post.body) && post.body.length > 0 && (
                <div className="mt-8 space-y-4 prose prose-sm max-w-none overflow-hidden">
                  {post.body.map((block) => {
                    if (!block) return null;

                    // ============ IMAGE BLOCK ============
                    if (block._type === "imageBlock") {
                      const imageUrl = getImageUrl(block.image, 1000);
                      const altText = block.alt || "Blog image";
                      
                      if (!imageUrl) return null;
                      
                      const widthClass = {
                        normal: "max-w-2xl",
                        wide: "max-w-4xl",
                        full: "w-full",
                      }[block.width] || "max-w-2xl";
                      
                      const alignmentClass = {
                        left: "ml-0 mr-auto",
                        center: "mx-auto",
                        right: "ml-auto mr-0",
                        full: "w-full",
                      }[block.alignment] || "mx-auto";
                      
                      const roundedClass = block.rounded ? "rounded-lg" : "";
                      
                      return (
                        <figure key={block._key} className={`my-6 overflow-hidden ${alignmentClass} ${widthClass}`}>
                          <img
                            src={imageUrl}
                            alt={altText}
                            className={`w-full shadow-md ${roundedClass}`}
                          />
                          {block.caption && (
                            <figcaption className="mt-2 text-center text-sm text-gray-600 italic break-words">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    }

                    // ============ TABLE BLOCK ============
                    if (block._type === "table") {
                      return (
                        <div key={block._key} className="overflow-x-auto">
                          {renderTable(block)}
                        </div>
                      );
                    }

                    // ============ CALLOUT BLOCK ============
                    if (block._type === "callout") {
                      return (
                        <div key={block._key}>
                          {renderCallout(block)}
                        </div>
                      );
                    }

                    // ============ CTA BLOCK ============
                    if (block._type === "cta") {
                      return (
                        <div key={block._key}>
                          {renderCTA(block)}
                        </div>
                      );
                    }

                    // ============ STATS BLOCK ============
                    if (block._type === "stats") {
                      return (
                        <div key={block._key}>
                          {renderStats(block)}
                        </div>
                      );
                    }

                    // ============ CODE BLOCK ============
                    if (block._type === "code") {
                      return (
                        <div key={block._key}>
                          {renderCode(block)}
                        </div>
                      );
                    }

                    // ============ VIDEO BLOCK ============
                    if (block._type === "video") {
                      const embedUrl = getVideoEmbedUrl(block.url);
                      if (!embedUrl) return null;
                      
                      const fullWidth = block.alignment === "full";
                      
                      return (
                        <figure key={block._key} className={`my-6 ${fullWidth ? "w-full" : "max-w-2xl mx-auto"} overflow-hidden rounded-lg`}>
                          <iframe
                            src={embedUrl}
                            width="100%"
                            height={fullWidth ? "600" : "400"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full"
                          />
                          {block.caption && (
                            <figcaption className="mt-2 text-center text-sm text-gray-600">
                              {block.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    }

                    // ============ DIVIDER BLOCK ============
                    if (block._type === "divider") {
                      const thicknessClass = {
                        thin: "h-0.5",
                        thick: "h-1",
                        brand: "h-1",
                      }[block.style] || "h-0.5";
                      
                      const spacingClass = {
                        small: "my-3",
                        medium: "my-6",
                        large: "my-10",
                      }[block.spacing] || "my-6";
                      
                      const colorClass = block.style === "brand" ? "bg-primaryBlue" : "bg-gray-200";
                      
                      return (
                        <div key={block._key} className={spacingClass}>
                          <div className={`${thicknessClass} ${colorClass}`} />
                        </div>
                      );
                    }

                    // ============ TEXT BLOCK ============
                    if (block._type === "block" || !block._type) {
                      if (!block.children || !Array.isArray(block.children)) {
                        return null;
                      }

                      const textContent = renderTextWithMarks(block.children, block.markDefs);
                      const alignmentClass = getAlignmentClass(block);

                      // Blockquote style
                      if (block.style === "blockquote") {
                        return (
                          <blockquote
                            key={block._key}
                            className={`border-l-4 border-primaryBlue pl-4 italic my-4 text-gray-700 break-words ${alignmentClass}`}
                          >
                            {textContent}
                          </blockquote>
                        );
                      }

                      // Heading 2
                      if (block.style === "h2") {
                        return (
                          <h2
                            key={block._key}
                            className={`mt-8 mb-4 text-3xl font-bold text-primaryBlue break-words ${alignmentClass}`}
                          >
                            {textContent}
                          </h2>
                        );
                      }

                      // Heading 3
                      if (block.style === "h3") {
                        return (
                          <h3
                            key={block._key}
                            className={`mt-6 mb-3 text-2xl font-bold text-primaryBlue break-words ${alignmentClass}`}
                          >
                            {textContent}
                          </h3>
                        );
                      }

                      // Heading 4
                      if (block.style === "h4") {
                        return (
                          <h4
                            key={block._key}
                            className={`mt-5 mb-2 text-xl font-bold text-primaryBlue break-words ${alignmentClass}`}
                          >
                            {textContent}
                          </h4>
                        );
                      }

                      // Bullet list
                      if (block.listItem === "bullet") {
                        return (
                          <li
                            key={block._key}
                            className="ml-6 text-base sm:text-lg leading-relaxed text-gray-800 list-disc break-words"
                          >
                            {textContent}
                          </li>
                        );
                      }

                      // Normal paragraph
                      return (
                        <p
                            key={block._key}
                            className={`text-base sm:text-lg leading-relaxed text-gray-800 break-words ${alignmentClass}`}
                          >
                            {textContent}
                          </p>
                        );
                    }

                    return null;
                  })}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={`${post.id}-${tag}`}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 break-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )}
          </div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28">
              <MoreInsightsSection insights={moreInsights} />
            </div>
          </div>

          <div className="mt-6 lg:hidden">
            <MoreInsightsSection insights={moreInsights} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InsightDetail;
