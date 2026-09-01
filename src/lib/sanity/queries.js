/** GROQ queries. Public queries live alongside the admin ones for one source of truth. */

/** Admin list view: every post regardless of status, newest first. */
export const adminPostsQuery = `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc){
  _id,
  title,
  "slug": slug.current,
  status,
  publishedAt,
  updatedAt,
  _updatedAt,
  excerpt,
  featured,
  "authorName": author->name,
  categories[]->{ title, "slug": slug.current },
  "hasDirectAnswer": defined(directAnswer.answer),
  "faqCount": count(faqSection.items)
}`;

/** Full document for the admin editor. */
export const adminPostByIdQuery = `*[_type == "post" && _id == $id][0]{
  ...,
  "slug": slug.current,
  author->{ _id, name },
  categories[]->{ _id, title },
  "mainImageUrl": mainImage.asset->url,
  "openGraphImageUrl": social.openGraphImage.asset->url
}`;

/** Slug collision check used before saving. */
export const slugExistsQuery = `count(*[_type == $type && slug.current == $slug && _id != $excludeId && !(_id in path("drafts.**"))])`;

export const adminAuthorsQuery = `*[_type == "author"] | order(name asc){
  _id, name, "slug": slug.current, jobTitle, bio, "imageUrl": image.asset->url
}`;

export const adminCategoriesQuery = `*[_type == "category"] | order(title asc){
  _id, title, "slug": slug.current, description, topicCluster, color
}`;

/** Author profile page: the author plus everything they have written. */
export const authorBySlugQuery = `*[_type == "author" && slug.current == $slug][0]{
  _id,
  name,
  jobTitle,
  bio,
  expertise,
  credentials,
  sameAs,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  "posts": *[_type == "post" && author._ref == ^._id && status == "published"]
    | order(coalesce(publishedAt, _createdAt) desc){
      title,
      "slug": slug.current,
      excerpt,
      "date": coalesce(publishedAt, _createdAt),
      mainImage,
      categories[]->{ title }
    }
}`;

/** Slugs for generateStaticParams on the author route. */
export const authorSlugsQuery = `*[_type == "author" && defined(slug.current)].slug.current`;
