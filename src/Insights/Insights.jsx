'use client';
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { isSanityConfigured, sanityClient } from "../lib/sanity";

// ── Image builder ──────────────────────────────────────────────────────────────
const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null;
const getImageUrl = (image, width = 800) => {
  if (!image || !imageBuilder) return null;
  try { return imageBuilder.image(image).width(width).auto("format").url(); }
  catch { return null; }
};

// ── GROQ query — now includes mainImage ──────────────────────────────────────
const INSIGHTS_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"]
] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  "date": coalesce(publishedAt, _createdAt),
  tags,
  categories[]->{ title },
  author->{ name },
  mainImage,
  minutes,
  readTime,
  featured,
  status
}`;

// ── Helpers ───────────────────────────────────────────────────────────────────
const normalizeTags = (rawTags, rawCategories) => {
  const fromTags = Array.isArray(rawTags)
    ? rawTags.map((t) => (typeof t === "string" ? t : t?.title || t?.value || "")).filter(Boolean)
    : [];
  const fromCats = Array.isArray(rawCategories)
    ? rawCategories.map((c) => c?.title || "").filter(Boolean)
    : [];
  const combined = [...fromTags, ...fromCats];
  return combined.length > 0 ? Array.from(new Set(combined)) : ["Insights"];
};

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const getReadMinutes = (minutes, readTime) => {
  const m = Number(minutes);
  if (Number.isFinite(m) && m > 0) return Math.round(m);
  const rt = Number(readTime);
  if (Number.isFinite(rt) && rt > 0) return Math.round(rt);
  return 5;
};

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

// ── Category pill ─────────────────────────────────────────────────────────────
const CategoryPill = ({ text }) => (
  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primaryOrange bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full">
    <span className="w-1.5 h-1.5 rounded-full bg-primaryOrange" />
    {text}
  </span>
);

// ── Featured hero card (large) ────────────────────────────────────────────────
const HeroCard = ({ post }) => {
  const thumb = post.mainImage ? getImageUrl(post.mainImage, 1200) : null;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-2xl bg-primaryBlue shadow-xl"
    >
      <Link href={`/insights/${post.id}`} className="block">
        {/* Background image */}
        {thumb && (
          <div className="absolute inset-0">
            <img src={thumb} alt={post.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primaryBlue via-primaryBlue/80 to-primaryBlue/40" />
          </div>
        )}
        {!thumb && (
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        )}

        <div className="relative z-10 p-7 sm:p-10 min-h-[340px] flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[11px] font-bold bg-primaryOrange text-white px-2.5 py-0.5 rounded-full">⭐ Featured</span>
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[11px] font-bold bg-white/10 text-white/80 border border-white/20 px-2.5 py-0.5 rounded-full">{t}</span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3 group-hover:text-orange-200 transition-colors">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5" />{post.minutes} min</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primaryOrange bg-primaryOrange/10 border border-primaryOrange/30 px-3 py-1.5 rounded-full group-hover:bg-primaryOrange group-hover:text-white transition">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// ── Standard post card ────────────────────────────────────────────────────────
const InsightCard = ({ post, index = 0 }) => {
  const thumb = post.mainImage ? getImageUrl(post.mainImage, 640) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(12,31,58,0.07),0_6px_24px_rgba(12,31,58,0.07)] hover:shadow-[0_2px_0_rgba(12,31,58,0.10),0_16px_40px_rgba(12,31,58,0.12)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
    >
      {/* Thumbnail */}
      <Link href={`/insights/${post.id}`} className="block overflow-hidden bg-gray-100 relative aspect-[16/9] flex-shrink-0">
        {thumb ? (
          <img
            src={thumb}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primaryBlue/10 to-primaryBlue/5 flex items-center justify-center">
            <span className="text-4xl opacity-20">📄</span>
          </div>
        )}
        {/* Reading time badge */}
        <span className="absolute top-3 right-3 text-[11px] font-bold bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full flex items-center gap-1">
          <Clock3 className="w-3 h-3" />{post.minutes} min
        </span>
        {post.featured && (
          <span className="absolute top-3 left-3 text-[11px] font-bold bg-primaryOrange text-white px-2 py-0.5 rounded-full">⭐ Featured</span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.slice(0, 2).map((t) => (
            <CategoryPill key={t} text={t} />
          ))}
        </div>

        {/* Title */}
        <h2 className="font-extrabold text-primaryBlue leading-snug text-base sm:text-lg group-hover:text-primaryOrange transition-colors duration-200 line-clamp-2 mb-2">
          <Link href={`/insights/${post.id}`}>{post.title}</Link>
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4">{post.excerpt}</p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
          </div>
          <Link
            href={`/insights/${post.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-primaryOrange hover:text-primaryBlue transition-colors"
          >
            Read <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

// ── Sidebar post item ─────────────────────────────────────────────────────────
const SidebarPost = ({ post, showThumb = false }) => {
  const thumb = showThumb && post.mainImage ? getImageUrl(post.mainImage, 120) : null;
  return (
    <Link href={`/insights/${post.id}`} className="flex gap-3 group rounded-xl p-2.5 hover:bg-gray-50 transition">
      {showThumb && (
        <div className="flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden bg-gray-100">
          {thumb
            ? <img src={thumb} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            : <div className="w-full h-full bg-gradient-to-br from-primaryBlue/10 to-primaryBlue/5" />
          }
        </div>
      )}
      <div className="min-w-0">
        <p className="text-[11px] text-gray-400 mb-0.5">{formatDate(post.date)} · {post.minutes} min</p>
        <p className="text-sm font-bold text-gray-800 leading-snug group-hover:text-primaryBlue transition-colors line-clamp-2">{post.title}</p>
      </div>
    </Link>
  );
};

// ── Pagination ────────────────────────────────────────────────────────────────
const Pagination = ({ page, totalPages, onPrev, onNext, onGo }) => {
  const pages = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const start = Math.max(1, Math.min(page - 2, totalPages - 4));
    return Array.from({ length: Math.min(5, totalPages - start + 1) }, (_, i) => start + i);
  }, [page, totalPages]);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button onClick={onPrev} disabled={page === 1}
        className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-30 hover:border-primaryBlue hover:text-primaryBlue transition">
        <ChevronLeft className="w-4 h-4" />
      </button>
      {pages.map((p) => (
        <button key={p} onClick={() => onGo(p)}
          className={`w-9 h-9 rounded-xl text-sm font-bold transition ${p === page ? "bg-primaryBlue text-white" : "bg-white border border-gray-200 text-gray-700 hover:border-primaryBlue hover:text-primaryBlue"}`}>
          {p}
        </button>
      ))}
      {pages[pages.length - 1] < totalPages && <span className="text-gray-400 text-sm">…</span>}
      <button onClick={onNext} disabled={page === totalPages}
        className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-30 hover:border-primaryBlue hover:text-primaryBlue transition">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// ── Skeleton loader ───────────────────────────────────────────────────────────
const CardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
    <div className="aspect-[16/9] bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-1/3" />
      <div className="h-5 bg-gray-200 rounded w-5/6" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-4/6" />
    </div>
  </div>
);

// ── Main page ─────────────────────────────────────────────────────────────────
const Insights = () => {
  const POSTS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const [sanityPosts, setSanityPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(isSanityConfigured);
  const [loadError, setLoadError] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    let cancelled = false;
    if (!isSanityConfigured || !sanityClient) { setIsLoading(false); return; }

    (async () => {
      try {
        setIsLoading(true);
        const docs = await sanityClient.fetch(INSIGHTS_QUERY);
        if (cancelled) return;
        const normalized = Array.isArray(docs)
          ? docs.filter((d) => d?.title).map((d) => ({
              id: d.id || d._id,
              title: d.title,
              excerpt: d.excerpt || d.summary || "",
              date: d.date || new Date().toISOString(),
              tags: normalizeTags(d.tags, d.categories),
              author: d?.author?.name || "ShiftDeploy",
              mainImage: d.mainImage || null,
              minutes: getReadMinutes(d.minutes, d.readTime),
              featured: Boolean(d.featured),
              status: d.status || "published",
            }))
          : [];
        setSanityPosts(normalized);
      } catch {
        if (!cancelled) setLoadError("Could not load insights from Sanity.");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, []);

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set();
    sanityPosts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [sanityPosts]);

  const filteredPosts = useMemo(() => {
    const base = [...sanityPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (activeTag === "All") return base;
    return base.filter((p) => p.tags.includes(activeTag));
  }, [sanityPosts, activeTag]);

  const featuredPosts = useMemo(() => filteredPosts.filter((p) => p.featured), [filteredPosts]);
  const recentSidebar = useMemo(() => filteredPosts.slice(0, 5), [filteredPosts]);
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  useEffect(() => { setPage((p) => clamp(p, 1, totalPages)); }, [totalPages]);
  useEffect(() => { setPage(1); }, [activeTag]);

  const pagedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, page]);

  return (
    <>
      <Navigation />

      {/* ── Page hero ── */}
      <div className="relative bg-primaryBlue overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle,#F76707,transparent 70%)", transform: "translate(30%,-30%)" }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="text-xs font-bold tracking-widest text-primaryOrange uppercase mb-3">ShiftDeploy Blog</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Insights<span className="text-primaryOrange">.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-white/60 text-base sm:text-lg leading-relaxed">
              Evidence-driven memos from real audits — performance, UX friction, and conversion mechanics. No fluff.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span>{sanityPosts.length} articles published</span>
              {sanityPosts.length > 0 && <><span>·</span><span>Updated regularly</span></>}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="min-h-screen bg-gray-50 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

          {/* ── Tag filter bar ── */}
          {allTags.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-xs font-bold px-4 py-1.5 rounded-full border transition ${
                    activeTag === tag
                      ? "bg-primaryBlue text-white border-primaryBlue"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primaryBlue hover:text-primaryBlue"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* ── Main content ── */}
            <div className="lg:col-span-8">
              {/* Error / empty states */}
              {loadError && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800 mb-6">{loadError}</div>
              )}
              {!isSanityConfigured && (
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-800 mb-6">
                  Sanity is not configured. Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your <code>.env.local</code>.
                </div>
              )}

              {/* Featured hero (shows first featured post at top) */}
              {!isLoading && featuredPosts.length > 0 && activeTag === "All" && page === 1 && (
                <div className="mb-6">
                  <HeroCard post={featuredPosts[0]} />
                </div>
              )}

              {/* Skeleton loaders */}
              {isLoading && (
                <div className="grid sm:grid-cols-2 gap-5">
                  {Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)}
                </div>
              )}

              {/* Post grid */}
              {!isLoading && pagedPosts.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-5">
                  {pagedPosts.map((post, idx) => (
                    <InsightCard key={post.id} post={post} index={idx} />
                  ))}
                </div>
              )}

              {!isLoading && isSanityConfigured && !loadError && filteredPosts.length === 0 && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
                  {activeTag === "All" ? "No insights published yet." : `No posts tagged "${activeTag}".`}
                </div>
              )}

              {filteredPosts.length > POSTS_PER_PAGE && (
                <Pagination page={page} totalPages={totalPages} onPrev={() => setPage((p) => clamp(p - 1, 1, totalPages))} onNext={() => setPage((p) => clamp(p + 1, 1, totalPages))} onGo={(p) => setPage(clamp(p, 1, totalPages))} />
              )}
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-5">

                {/* Recent posts */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-primaryBlue px-5 py-3.5 flex items-center justify-between">
                    <h3 className="text-sm font-extrabold text-white">Latest Posts</h3>
                    <span className="text-xs text-white/50">{sanityPosts.length} total</span>
                  </div>
                  <div className="p-2 divide-y divide-gray-50">
                    {isLoading
                      ? Array.from({ length: 4 }).map((_, i) => (
                          <div key={i} className="p-3 flex gap-3 animate-pulse">
                            <div className="w-16 h-12 bg-gray-200 rounded-lg flex-shrink-0" />
                            <div className="flex-1 space-y-2">
                              <div className="h-3 bg-gray-200 rounded w-2/3" />
                              <div className="h-3 bg-gray-200 rounded w-full" />
                            </div>
                          </div>
                        ))
                      : recentSidebar.map((p) => <SidebarPost key={p.id} post={p} showThumb />)
                    }
                  </div>
                </div>

                {/* Topics cloud */}
                {allTags.length > 1 && (
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <h3 className="text-sm font-extrabold text-primaryBlue mb-3">Browse by Topic</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.filter((t) => t !== "All").map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setActiveTag(tag)}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border transition ${
                            activeTag === tag
                              ? "bg-primaryOrange text-white border-primaryOrange"
                              : "bg-orange-50 text-orange-700 border-orange-100 hover:border-primaryOrange"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA box */}
                <div className="bg-gradient-to-br from-primaryBlue to-blue-800 rounded-2xl p-5 text-white">
                  <p className="text-xs font-bold text-primaryOrange uppercase tracking-wider mb-2">Free Audit</p>
                  <h3 className="font-extrabold text-lg leading-snug mb-2">Is your site leaving money on the table?</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">Get a performance & conversion audit from ShiftDeploy — no fluff, actionable results.</p>
                  <Link href="/ContactUs" className="inline-flex items-center gap-2 bg-primaryOrange text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-orange-600 transition">
                    Get Free Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

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
