import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { isSanityConfigured, sanityClient } from "../lib/sanity";

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
  readTime,
  featured
}`;

const getBodyPreview = (body, words = 24) => {
  if (!Array.isArray(body)) return "";
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

  if (!text) return "";
  const parts = text.split(" ");
  if (parts.length <= words) return text;
  return `${parts.slice(0, words).join(" ")}...`;
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

// ---------------------------
// Helpers
// ---------------------------
const formatDate = (iso) => {
  const d = new Date(iso);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const slugToInsightUrl = (id) => `/insights/${id}`;

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// ---------------------------
// Premium UI Primitives
// ---------------------------
const TagLabel = ({ text }) => (
  <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
    <span className="w-1.5 h-1.5 rounded-full bg-primaryOrange" />
    {text}
  </span>
);

const MetaRow = ({ date, author, minutes }) => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
    <span className="inline-flex items-center gap-1.5">
      <Calendar className="w-3.5 h-3.5 text-gray-400" />
      {formatDate(date)}
    </span>
    <span className="text-gray-300">•</span>
    <span className="inline-flex items-center gap-1.5">
      <User className="w-3.5 h-3.5 text-gray-400" />
      {author}
    </span>
    <span className="text-gray-300">•</span>
    <span className="inline-flex items-center gap-1.5">
      <Clock3 className="w-3.5 h-3.5 text-gray-400" />
      {minutes} min read
    </span>
  </div>
);

const InsightCard = ({ post }) => (
  <motion.article
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.32 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)] hover:shadow-[0_1px_0_rgba(12,31,58,0.10),0_18px_40px_rgba(12,31,58,0.10)] transition-shadow"
  >
    {/* subtle top accent */}
    <div className="h-1 w-full bg-gradient-to-r from-primaryBlue to-primaryOrange opacity-70" />

    <div className="p-5 sm:p-7">
      {/* Kicker */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-bold text-gray-700">
        <Sparkles className="w-3.5 h-3.5 text-primaryOrange" />
        Audit memo
      </div>

      <MetaRow date={post.date} author={post.author} minutes={post.minutes ?? 5} />

      <h2 className="mt-3 text-xl sm:text-2xl font-extrabold text-primaryBlue leading-tight">
        <Link
          to={slugToInsightUrl(post.id)}
          state={{ post }}
          className="underline-offset-4 decoration-2 decoration-primaryOrange/50 group-hover:underline"
        >
          {post.title}
        </Link>
      </h2>

      <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {post.tags.map((t) => (
          <TagLabel key={`${post.id}-${t}`} text={t} />
        ))}
      </div>

      <div className="mt-6">
        <Link
          to={slugToInsightUrl(post.id)}
          state={{ post }}
          className="inline-flex items-center gap-2 font-extrabold bg-primaryBlue text-white px-4 py-2 rounded-full transition-colors text-xs md:text-sm xl:text-md"
        >
          Read more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.article>
);

const SidebarSection = ({ title, rightText, children }) => (
  <div className="rounded-2xl bg-white shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)] overflow-hidden">
    <div className="px-5 sm:px-6 py-4 border-b border-gray-100 flex items-baseline justify-between">
      <h3 className="text-sm font-extrabold text-primaryBlue tracking-wide">
        {title}
      </h3>
      {rightText ? (
        <span className="text-xs font-semibold text-gray-500">{rightText}</span>
      ) : null}
    </div>
    <div className="p-5 sm:p-6">{children}</div>
  </div>
);

const SidebarPost = ({ post, compact = false }) => (
  <Link
    to={slugToInsightUrl(post.id)}
    state={{ post }}
    className="block rounded-xl bg-gray-50/60 hover:bg-gray-50 transition-colors px-4 py-3"
  >
    <div className="text-[11px] text-gray-500 mb-1">
      {formatDate(post.date)} · {post.minutes ?? 6} min
    </div>
    <div className={`font-bold text-gray-900 leading-snug ${compact ? "text-sm" : "text-[15px]"}`}>
      {post.title}
    </div>
    <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
      {post.tags.slice(0, 2).map((t) => (
        <TagLabel key={`${post.id}-sb-${t}`} text={t} />
      ))}
    </div>
  </Link>
);

const Pagination = ({ page, totalPages, onPrev, onNext, onGo }) => {
  const pages = useMemo(() => {
    const max = 5;
    if (totalPages <= max) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + 4);
    const adjustedStart = Math.max(1, end - 4);
    return Array.from({ length: end - adjustedStart + 1 }, (_, i) => adjustedStart + i);
  }, [page, totalPages]);

  return (
    <div className="flex items-center justify-between gap-3 mt-8">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-extrabold text-gray-800 shadow-sm ring-1 ring-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:ring-gray-300 transition"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        Prev
      </button>

      <div className="flex items-center gap-2">
        {pages.map((p) => (
          <button
            key={`page-${p}`}
            onClick={() => onGo(p)}
            className={[
              "rounded-xl px-4 py-2 font-extrabold ring-1 transition",
              p === page
                ? "bg-primaryBlue text-white ring-primaryBlue"
                : "bg-white text-gray-800 ring-gray-200 hover:ring-gray-300",
            ].join(" ")}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        ))}
        {pages[pages.length - 1] !== totalPages && (
          <span className="px-2 text-gray-400">…</span>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-extrabold text-gray-800 shadow-sm ring-1 ring-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:ring-gray-300 transition"
        aria-label="Next page"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// ---------------------------
// Main Page
// ---------------------------
const Insights = () => {
  const POSTS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [sanityPosts, setSanityPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let isCancelled = false;

    if (!isSanityConfigured || !sanityClient) {
      setIsLoading(false);
      return () => {
        isCancelled = true;
      };
    }

    const loadInsights = async () => {
      try {
        setIsLoading(true);
        setLoadError("");

        const docs = await sanityClient.fetch(INSIGHTS_QUERY);
        if (isCancelled) return;

        const normalized = Array.isArray(docs)
          ? docs
              .filter((doc) => doc && doc.title)
              .map((doc) => ({
                id: doc.id || doc._id,
                title: doc.title,
                excerpt: doc.excerpt || doc.summary || getBodyPreview(doc.body),
                date: doc.date || new Date().toISOString(),
                tags: normalizeTags(doc.tags, doc.categories),
                author: doc?.author?.name || "ShiftDeploy",
                minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
                featured: Boolean(doc.featured),
              }))
          : [];

        setSanityPosts(normalized);
      } catch (error) {
        if (!isCancelled) {
          setLoadError("Could not load insights from Sanity.");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadInsights();

    return () => {
      isCancelled = true;
    };
  }, []);

  const allPosts = useMemo(() => {
    const copy = [...sanityPosts];
    copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    return copy;
  }, [sanityPosts]);

  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));

  useEffect(() => {
    setPage((prev) => clamp(prev, 1, totalPages));
  }, [totalPages]);

  const pagedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [allPosts, page]);

  const featured = useMemo(() => allPosts.filter((p) => p.featured).slice(0, 2), [allPosts]);
  const recentPosts = useMemo(() => allPosts.slice(0, 6), [allPosts]);

  const goToPage = (p) => setPage(clamp(p, 1, totalPages));
  const handlePrev = () => goToPage(page - 1);
  const handleNext = () => goToPage(page + 1);

  const pageTitle = "Insights | ShiftDeploy";
  const pageDesc =
    "Evidence-driven memos from real audits—performance, UX friction, and conversion mechanics. No fluff. Just patterns that repeat.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header / Hero */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-primaryBlue">
              Insights<span className="text-primaryOrange">.</span>
            </h1>

            <p className="mt-4 max-w-2xl text-gray-600 text-base sm:text-lg leading-relaxed">
              Short, evidence-driven memos from real audits—performance, UX friction, and conversion mechanics.
              No fluff. Just patterns that show up repeatedly.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left: Post cards */}
            <div className="lg:col-span-8 space-y-5">
              {isLoading && (
                <div className="rounded-2xl bg-white p-5 sm:p-7 text-sm text-gray-600 shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)]">
                  Loading insights from Sanity...
                </div>
              )}

              {loadError && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-7 text-sm text-amber-800">
                  {loadError}
                </div>
              )}

              {!isSanityConfigured && (
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-7 text-sm text-blue-800">
                  Sanity is not configured yet (`VITE_SANITY_PROJECT_ID` / `VITE_SANITY_DATASET` missing).
                </div>
              )}

              {!isLoading && isSanityConfigured && !loadError && allPosts.length === 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 text-sm text-gray-700">
                  No insights published yet.
                </div>
              )}

              {pagedPosts.map((post) => (
                <InsightCard key={post.id} post={post} />
              ))}

              {allPosts.length > 0 && (
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onGo={goToPage}
                />
              )}
            </div>

            {/* Right: Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">
                <SidebarSection title="START HERE" rightText={`${allPosts.length} total`}>
                  <div className="space-y-3">
                    {featured.length > 0 ? (
                      featured.map((p) => <SidebarPost key={`feat-${p.id}`} post={p} />)
                    ) : (
                      <div className="text-sm text-gray-600">
                        No featured posts yet. Mark a couple as featured to guide new readers.
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="text-xs font-extrabold text-gray-700 tracking-wide mb-3">
                      RECENT
                    </div>
                    <div className="space-y-2">
                      {recentPosts.map((p) => (
                        <SidebarPost key={`recent-${p.id}`} post={p} compact />
                      ))}
                    </div>
                  </div>
                </SidebarSection>

                {/* <SidebarSection title="NOTE" rightText="">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We publish weekly. If you want a newsletter module here, add it only after you’re consistent for
                    4–6 weeks—otherwise it’s a dead widget that hurts credibility.
                  </p>
                </SidebarSection> */}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insights;

