import React from 'react';
import { responsiveImage, lqipUrl } from '../lib/sanity/image';

/**
 * The one place images get rendered on the public site.
 *
 * Four things here are load-bearing for Core Web Vitals and image SEO:
 *  - srcset + sizes, so a phone downloads a phone-sized file
 *  - explicit width/height, which reserves layout space (no CLS)
 *  - priority for the LCP image: eager + fetchPriority=high, never lazy
 *  - a blurred LQIP behind it so the space is not blank while decoding
 *
 * Format negotiation (AVIF/WebP) is handled by Sanity's auto=format.
 */
export default function SanityImage({
  image,
  alt,
  sizes,
  maxWidth = 1600,
  priority = false,
  className = '',
  wrapperClassName = '',
  caption,
}) {
  const img = responsiveImage(image, { maxWidth, sizes });
  if (!img) return null;

  const lqip = lqipUrl(image);

  const el = (
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes={img.sizes}
      alt={alt || ''}
      width={img.width}
      height={img.height}
      // The LCP image must not be lazy - that is a guaranteed CWV failure.
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      className={className}
      style={
        lqip
          ? {
              backgroundImage: `url(${lqip})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    />
  );

  if (!caption) {
    return wrapperClassName ? <div className={wrapperClassName}>{el}</div> : el;
  }

  return (
    <figure className={wrapperClassName}>
      {el}
      <figcaption className="mt-2 text-center text-sm text-gray-600 italic">{caption}</figcaption>
    </figure>
  );
}
