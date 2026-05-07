'use client';
import React, { useEffect, useMemo, useState } from "react";
import { Calendar, Clock3, User, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { isSanityConfigured, sanityClient } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./portableTextComponents.jsx";
import MediaSlider from "./MediaSlider.jsx";
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
    title,
    "slug": slug.current
  },
  author->{
    name,
    jobTitle,
    "image": image.asset->url,
    expertise,
    socialLinks
  },
  "mainImage": coalesce(mainImage, coverImage),
  minutes,
  readTime,
  body,
  seoTitle,
  seoDescription,
  focusKeyword,
  keywords,
  secondaryKeywords,
  openGraphImage,
  socialTitle,
  socialDescription,
  canonicalUrl,
  noIndex,
  searchIntent,
  funnelStage,
  primaryCta,
  internalLinks[]->{
    title,
    "slug": slug.current
  },
  theme,
  featured,
  status,
  relatedPosts[]->{
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    "date": coalesce(publishedAt, _createdAt),
    minutes,
    readingTime,
    author->{ name }
  }
}`;

const INSIGHTS_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"]
] | order(coalesce(publishedAt, _createdAt) desc) [0...20] {
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  body,
  "date": coalesce(publishedAt, _createdAt),
  tags,
  categories[]->{ title },
  author->{ name },
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
    <aside className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-primaryBlue px-5 py-4">
        <h2 className="text-base font-extrabold text-white">More from ShiftDeploy</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {insights.map((item) => (
          <Link
            key={`more-insight-${item.id}`}
            href={`/insights/${item.id}`}
            className="flex gap-3 p-4 hover:bg-gray-50 transition group"
          >
            <div className="flex-shrink-0 w-1 rounded-full bg-primaryOrange opacity-0 group-hover:opacity-100 transition" />
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-primaryBlue leading-snug group-hover:text-primaryOrange transition line-clamp-2">{item.title}</h3>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-2">
                <span>{formatDate(item.date)}</span>
                <span>·</span>
                <span>{item.minutes} min read</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

const InsightDetail = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp || params?.slug;
  const [post, setPost] = useState(null);
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
          authorJobTitle: doc?.author?.jobTitle || "",
          authorImage: doc?.author?.image || null,
          authorExpertise: doc?.author?.expertise || [],
          mainImage: doc.mainImage || doc.coverImage || null,
          body: Array.isArray(doc.body) ? doc.body : [],
          minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
          internalLinks: Array.isArray(doc.internalLinks) ? doc.internalLinks : [],
          theme: doc.theme || null,
          primaryCta: doc.primaryCta || null,
          relatedPosts: Array.isArray(doc.relatedPosts) ? doc.relatedPosts : [],
          featured: doc.featured || false,
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
      <Navigation isDarkBg="true" />

      {/* Hero banner */}
      <div className="relative bg-primaryBlue overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle,#fff 1px,transparent 1px)',backgroundSize:'32px 32px'}} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{background:'radial-gradient(circle,#F76707,transparent 70%)',transform:'translate(30%,-30%)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition mb-6">
            ← Back to Insights
          </Link>
          {post && (
            <>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags?.slice(0,3).map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold rounded-full bg-primaryOrange/20 text-orange-300 border border-orange-400/30">{tag}</span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white max-w-4xl mb-6">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-lg text-white/70 leading-relaxed max-w-3xl mb-8">{post.excerpt}</p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 pb-2">
                <span className="flex items-center gap-2">
                  {post.authorImage
                    ? <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover ring-2 ring-white/30" />
                    : <span className="w-8 h-8 rounded-full bg-primaryOrange/40 flex items-center justify-center text-white font-bold text-sm">{post.author?.[0]?.toUpperCase()}</span>
                  }
                  <span className="font-semibold text-white/80">{post.author}</span>
                  {post.authorJobTitle && <span className="text-white/50">· {post.authorJobTitle}</span>}
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
                <span className="w-px h-4 bg-white/20" />
                <span className="flex items-center gap-1.5"><Clock3 className="w-4 h-4" />{post.minutes} min read</span>
              </div>
            </>
          )}
          {!post && !isLoading && (
            <h1 className="text-3xl font-extrabold text-white">Insight</h1>
          )}
        </div>
      </div>

      <section className="min-h-screen bg-gray-50 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10 -mt-2">
          <div className="lg:col-span-8 xl:col-span-9">

          {isLoading && (
            <div className="mt-8 rounded-2xl bg-white p-8 text-gray-500 shadow-sm border border-gray-100 text-center">
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
              </div>
              <p className="mt-4 text-sm text-gray-400">Loading insight…</p>
            </div>
          )}

          {loadError && (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
              {loadError}
            </div>
          )}

          {!isLoading && !post && (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-gray-600 text-center">
              Insight not found.
            </div>
          )}

          {post && (
            <article className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {heroImage && (
                <figure className="overflow-hidden">
                  <img
                    src={getImageUrl(heroImage, 1400)}
                    alt={heroImage.alt || post.title || "Insight cover image"}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </figure>
              )}

              {Array.isArray(post.body) && post.body.length > 0 && (
                <div className="px-6 sm:px-10 pb-10 pt-8 max-w-none overflow-hidden space-y-2">
                  {/* Group consecutive list items into proper ul/ol wrappers */}
                  {(() => {
                    const grouped = [];
                    let i = 0;
                    while (i < post.body.length) {
                      const block = post.body[i];
                      if (block?.listItem === "bullet") {
                        const items = [];
                        while (i < post.body.length && post.body[i]?.listItem === "bullet") {
                          items.push(post.body[i]);
                          i++;
                        }
                        grouped.push({ _type: "__bulletList", items, _key: items[0]._key + "_list" });
                      } else if (block?.listItem === "number") {
                        const items = [];
                        while (i < post.body.length && post.body[i]?.listItem === "number") {
                          items.push(post.body[i]);
                          i++;
                        }
                        grouped.push({ _type: "__numberList", items, _key: items[0]._key + "_list" });
                      } else {
                        grouped.push(block);
                        i++;
                      }
                    }
                    return grouped;
                  })().map((block) => {
                    if (!block) return null;

                    if (block._type === "__bulletList") {
                      return (
                        <ul key={block._key} className="my-4 space-y-2 pl-0">
                          {block.items.map((item) => {
                            const textContent = renderTextWithMarks(item.children, item.markDefs);
                            return (
                              <li key={item._key} className="flex items-start gap-3 text-base sm:text-[17px] leading-[1.85] text-gray-700">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-primaryOrange flex-shrink-0" />
                                <span>{textContent}</span>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    }

                    if (block._type === "__numberList") {
                      return (
                        <ol key={block._key} className="my-4 space-y-2 pl-0">
                          {block.items.map((item, idx) => {
                            const textContent = renderTextWithMarks(item.children, item.markDefs);
                            return (
                              <li key={item._key} className="flex items-start gap-3 text-base sm:text-[17px] leading-[1.85] text-gray-700">
                                <span className="mt-1 w-6 h-6 rounded-full bg-primaryBlue text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                                <span>{textContent}</span>
                              </li>
                            );
                          })}
                        </ol>
                      );
                    }

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

                    // ============ CODE BLOCK (legacy) ============
                    if (block._type === "code") {
                      return <div key={block._key}>{renderCode(block)}</div>;
                    }

                    // ============ CODE BLOCK (new @sanity/code-input) ============
                    if (block._type === "codeBlock") {
                      const codeData = block.code || {};
                      return <div key={block._key}>{renderCode({
                        code: codeData.code || "",
                        language: codeData.language || "javascript",
                        filename: codeData.filename,
                        showLineNumbers: true,
                        caption: block.caption,
                      })}</div>;
                    }

                    // ============ STATS GRID ============
                    if (block._type === "statsGrid") {
                      const colMap = {"2":"grid-cols-2","3":"grid-cols-3","4":"grid-cols-4"};
                      const colClass = colMap[block.columns] || "grid-cols-3";
                      const bg = block.backgroundColor?.hex || "#F8FAFC";
                      const accent = block.accentColor?.hex || "#F76707";
                      return (
                        <div key={block._key} className="my-8">
                          {block.title && <h3 className="text-xl font-bold text-primaryBlue mb-4">{block.title}</h3>}
                          <div className={`grid ${colClass} gap-4`}>
                            {block.stats?.map((stat, idx) => (
                              <div key={idx} className="rounded-xl p-5 text-center border border-gray-100 shadow-sm" style={{background: bg}}>
                                <div className="text-3xl sm:text-4xl font-extrabold" style={{color: accent}}>{stat.value}</div>
                                <div className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</div>
                                {stat.description && <div className="text-xs text-gray-500 mt-1">{stat.description}</div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    // ============ PROS & CONS (prosCons) ============
                    if (block._type === "prosCons") {
                      const posColor = block.positiveColor?.hex || "#16A34A";
                      const negColor = block.negativeColor?.hex || "#DC2626";
                      return (
                        <div key={block._key} className="my-8">
                          {block.title && <h3 className="text-xl font-bold text-primaryBlue mb-4">{block.title}</h3>}
                          <div className="grid sm:grid-cols-2 gap-4">
                            {Array.isArray(block.pros) && block.pros.length > 0 && (
                              <div className="rounded-xl border p-5" style={{borderColor: posColor + "44", background: posColor + "0d"}}>
                                <h4 className="font-bold mb-3" style={{color: posColor}}>{block.prosTitle || "Pros"}</h4>
                                <ul className="space-y-2">
                                  {block.pros.map((pro, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                                      <span className="mt-0.5 font-bold" style={{color: posColor}}>✓</span>{pro}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {Array.isArray(block.cons) && block.cons.length > 0 && (
                              <div className="rounded-xl border p-5" style={{borderColor: negColor + "44", background: negColor + "0d"}}>
                                <h4 className="font-bold mb-3" style={{color: negColor}}>{block.consTitle || "Cons"}</h4>
                                <ul className="space-y-2">
                                  {block.cons.map((con, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                                      <span className="mt-0.5 font-bold" style={{color: negColor}}>✗</span>{con}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }

                    // ============ EMBED BLOCK ============
                    if (block._type === "embed") {
                      const embedUrl = getVideoEmbedUrl(block.url);
                      const aspectMap = {"16:9":"56.25%","4:3":"75%","1:1":"100%"};
                      const paddingTop = aspectMap[block.aspectRatio] || "56.25%";
                      if (!embedUrl && block.provider !== "custom") return null;
                      return (
                        <figure key={block._key} className="my-6 overflow-hidden rounded-xl shadow-sm">
                          <div className="relative w-full" style={{paddingTop}}>
                            <iframe
                              src={embedUrl || block.url}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          {block.caption && (
                            <figcaption className="px-4 py-2 text-sm text-gray-500 bg-gray-50 text-center">{block.caption}</figcaption>
                          )}
                        </figure>
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

                    // ============ FAQ BLOCK ============
                    if (block._type === "faq") {
                      return (
                        <div key={block._key} className="my-8 space-y-3">
                          {block.title && <h3 className="text-2xl font-bold text-primaryBlue mb-4">{block.title}</h3>}
                          {Array.isArray(block.items) && block.items.map((item, idx) => (
                            <details key={idx} className="group border border-gray-200 rounded-lg overflow-hidden">
                              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-primaryBlue bg-gray-50 hover:bg-gray-100 list-none">
                                {item.question}
                                <span className="ml-3 text-primaryOrange group-open:rotate-180 transition-transform">▼</span>
                              </summary>
                              <div className="px-5 py-4 text-gray-700 text-base leading-relaxed bg-white">
                                {item.answer}
                              </div>
                            </details>
                          ))}
                        </div>
                      );
                    }

                    // ============ TESTIMONIAL BLOCK ============
                    if (block._type === "testimonial") {
                      return (
                        <figure key={block._key} className="my-8 rounded-xl bg-blue-50 border border-blue-100 p-6 relative">
                          <blockquote className="text-lg italic text-gray-800 leading-relaxed mb-4">
                            &ldquo;{block.quote}&rdquo;
                          </blockquote>
                          <figcaption className="flex items-center gap-3">
                            {block.avatar && (
                              <img src={getImageUrl(block.avatar, 80)} alt={block.name || "Testimonial"} className="w-10 h-10 rounded-full object-cover" />
                            )}
                            <div>
                              {block.name && <p className="font-bold text-primaryBlue">{block.name}</p>}
                              {block.role && <p className="text-sm text-gray-500">{block.role}</p>}
                            </div>
                            {block.rating > 0 && (
                              <div className="ml-auto text-yellow-400 text-sm">
                                {"★".repeat(block.rating)}{"☆".repeat(5 - block.rating)}
                              </div>
                            )}
                          </figcaption>
                        </figure>
                      );
                    }

                    // ============ PROS & CONS BLOCK ============
                    if (block._type === "prosAndCons") {
                      return (
                        <div key={block._key} className="my-8 grid sm:grid-cols-2 gap-4">
                          {Array.isArray(block.pros) && block.pros.length > 0 && (
                            <div className="rounded-xl bg-green-50 border border-green-200 p-5">
                              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                <span className="text-green-500">✓</span> {block.prosLabel || "Pros"}
                              </h4>
                              <ul className="space-y-2">
                                {block.pros.map((pro, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-green-900 text-sm">
                                    <span className="text-green-500 mt-0.5">✓</span>{pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {Array.isArray(block.cons) && block.cons.length > 0 && (
                            <div className="rounded-xl bg-red-50 border border-red-200 p-5">
                              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                                <span className="text-red-500">✗</span> {block.consLabel || "Cons"}
                              </h4>
                              <ul className="space-y-2">
                                {block.cons.map((con, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-red-900 text-sm">
                                    <span className="text-red-500 mt-0.5">✗</span>{con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {block.verdict && (
                            <div className="sm:col-span-2 rounded-lg bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
                              <span className="font-semibold text-primaryBlue">Verdict: </span>{block.verdict}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // ============ BUTTON GROUP BLOCK ============
                    if (block._type === "buttonGroup") {
                      const alignClass = { left: "justify-start", center: "justify-center", right: "justify-end" }[block.alignment] || "justify-center";
                      return (
                        <div key={block._key} className={`my-6 flex flex-wrap gap-3 ${alignClass}`}>
                          {Array.isArray(block.buttons) && block.buttons.map((btn, idx) => {
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
                    }

                    // ============ THEMED SECTION BLOCK ============
                    if (block._type === "themedSection") {
                      const themeStyles = {
                        light: "bg-gray-50 text-gray-900",
                        dark: "bg-primaryBlue text-white",
                        brand: "bg-primaryOrange text-white",
                        gradient: "bg-gradient-to-br from-primaryBlue to-blue-800 text-white",
                      };
                      const sectionClass = themeStyles[block.theme] || themeStyles.light;
                      const paddingClass = { small: "p-4", medium: "p-6", large: "p-10" }[block.padding] || "p-6";
                      return (
                        <section key={block._key} className={`my-8 rounded-xl ${sectionClass} ${paddingClass}`}>
                          {block.heading && (
                            <h3 className="text-xl font-bold mb-3">{block.heading}</h3>
                          )}
                          {Array.isArray(block.content) && block.content.map((innerBlock) => {
                            if (innerBlock._type === "block" && innerBlock.children) {
                              return (
                                <p key={innerBlock._key} className="mb-2 leading-relaxed">
                                  {renderTextWithMarks(innerBlock.children, innerBlock.markDefs)}
                                </p>
                              );
                            }
                            return null;
                          })}
                        </section>
                      );
                    }

                    // ============ MEDIA SLIDER ============
                    if (block._type === "mediaSlider") {
                      return (
                        <MediaSlider key={block._key} block={block} getImageUrl={getImageUrl} />
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
                      if (!block.children || !Array.isArray(block.children)) return null;

                      const textContent = renderTextWithMarks(block.children, block.markDefs);
                      const alignmentClass = getAlignmentClass(block);

                      if (block.style === "blockquote") {
                        return (
                          <blockquote key={block._key} className={`my-6 border-l-4 border-primaryOrange bg-orange-50 pl-5 pr-4 py-4 rounded-r-xl italic text-gray-700 text-lg leading-relaxed break-words ${alignmentClass}`}>
                            {textContent}
                          </blockquote>
                        );
                      }
                      if (block.style === "h2") {
                        return (
                          <h2 key={block._key} className={`mt-10 mb-3 text-2xl sm:text-3xl font-extrabold text-primaryBlue leading-tight break-words border-b-2 border-gray-100 pb-3 ${alignmentClass}`}>
                            {textContent}
                          </h2>
                        );
                      }
                      if (block.style === "h3") {
                        return (
                          <h3 key={block._key} className={`mt-8 mb-2 text-xl sm:text-2xl font-bold text-primaryBlue leading-snug break-words ${alignmentClass}`}>
                            <span className="inline-block w-1 h-6 bg-primaryOrange rounded mr-3 align-middle" />
                            {textContent}
                          </h3>
                        );
                      }
                      if (block.style === "h4") {
                        return (
                          <h4 key={block._key} className={`mt-6 mb-2 text-lg sm:text-xl font-bold text-gray-800 break-words ${alignmentClass}`}>
                            {textContent}
                          </h4>
                        );
                      }
                      // Normal paragraph
                      const isEmpty = block.children?.every(c => !c?.text?.trim());
                      if (isEmpty) return <div key={block._key} className="h-3" />;
                      return (
                        <p key={block._key} className={`text-base sm:text-[17px] leading-[1.85] text-gray-700 break-words ${alignmentClass}`}>
                          {textContent}
                        </p>
                      );
                    }

                    return null;
                  })}
                </div>
              )}

              {/* Tags footer */}
              {post.tags?.length > 0 && (
                <div className="px-6 sm:px-10 pb-8 pt-4 border-t border-gray-100 mt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider self-center mr-1">Tags:</span>
                  {post.tags.map((tag) => (
                    <span key={`${post.id}-${tag}`} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primaryBlue border border-blue-100 break-all">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Author card */}
              <div className="mx-6 sm:mx-10 mb-6 mt-2 rounded-xl bg-gradient-to-r from-primaryBlue/5 to-blue-50 border border-blue-100 p-5 flex items-center gap-4">
                {post.authorImage
                  ? <img src={post.authorImage} alt={post.author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primaryBlue/20 flex-shrink-0" />
                  : <span className="w-14 h-14 rounded-full bg-primaryBlue flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0">{post.author?.[0]?.toUpperCase()}</span>
                }
                <div>
                  <p className="font-bold text-primaryBlue text-base">{post.author}</p>
                  {post.authorJobTitle && <p className="text-sm text-gray-500 mt-0.5">{post.authorJobTitle}</p>}
                  <p className="text-xs text-gray-400 mt-1">ShiftDeploy Team</p>
                </div>
              </div>

              {/* Related Posts */}
              {Array.isArray(post.relatedPosts) && post.relatedPosts.length > 0 && (
                <div className="mx-6 sm:mx-10 mb-8">
                  <h2 className="text-lg font-extrabold text-primaryBlue mb-4">Related Posts</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {post.relatedPosts.map((related) => (
                      <Link key={related.slug} href={`/insights/${related.slug}`} className="group rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-primaryBlue/20 hover:shadow-sm p-4 transition">
                        {related.mainImage && (
                          <img src={getImageUrl(related.mainImage, 400)} alt={related.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                        )}
                        <p className="text-xs text-gray-400 mb-1">{formatDate(related.date)}</p>
                        <h3 className="font-bold text-sm text-primaryBlue group-hover:text-primaryOrange transition leading-snug line-clamp-2">{related.title}</h3>
                        {related.excerpt && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{related.excerpt}</p>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          )}
          </div>

          <div className="hidden lg:block lg:col-span-4 xl:col-span-3 mt-8">
            <div className="lg:sticky lg:top-28 space-y-6">
              <MoreInsightsSection insights={moreInsights} />
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <MoreInsightsSection insights={moreInsights} />
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InsightDetail;
