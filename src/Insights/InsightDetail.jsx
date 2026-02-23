import React, { useEffect, useMemo, useState } from "react";
import { Calendar, Clock3, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { isSanityConfigured, sanityClient } from "../lib/sanity";

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
  minutes,
  readTime,
  body
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

const InsightDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
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

  const pageTitle = useMemo(
    () => (post?.title ? `${post.title} | ShiftDeploy Insights` : "Insight | ShiftDeploy"),
    [post]
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Navigation />

      <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/insights"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold text-primaryBlue bg-white ring-1 ring-gray-200 hover:ring-gray-300"
          >
            Back to insights
          </Link>

          {isLoading && (
            <div className="mt-6 rounded-2xl bg-white p-6 text-gray-600 shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)]">
              Loading insight...
            </div>
          )}

          {loadError && (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-800">
              {loadError}
            </div>
          )}

          {!isLoading && !post && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
              Insight not found.
            </div>
          )}

          {post && (
            <article className="mt-6 rounded-2xl bg-white p-6 sm:p-8 shadow-[0_1px_0_rgba(12,31,58,0.08),0_10px_30px_rgba(12,31,58,0.06)]">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-primaryBlue">
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
                <div className="mt-8 space-y-4 text-gray-800 leading-relaxed">
                  {post.body.map((block) => {
                    const text = getBlockText(block);
                    if (!text) return null;

                    if (block.listItem === "bullet") {
                      return (
                        <p key={block._key} className="text-base sm:text-lg pl-4">
                          • {text}
                        </p>
                      );
                    }

                    if (block.style === "h2") {
                      return (
                        <h2 key={block._key} className="mt-6 text-2xl font-bold text-primaryBlue">
                          {text}
                        </h2>
                      );
                    }

                    if (block.style === "h3") {
                      return (
                        <h3 key={block._key} className="mt-5 text-xl font-bold text-primaryBlue">
                          {text}
                        </h3>
                      );
                    }

                    return (
                      <p key={block._key} className="text-base sm:text-lg">
                        {text}
                      </p>
                    );
                  })}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={`${post.id}-${tag}`}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InsightDetail;
