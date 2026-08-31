import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './client';

/**
 * Image URL helpers.
 *
 * Sanity's CDN does the format negotiation for us: `auto=format` returns AVIF
 * or WebP when the requesting browser sends an Accept header for them, and
 * falls back to the original format otherwise. That covers the format half of
 * image SEO without a <picture> element or any build step.
 *
 * What it does NOT do automatically is pick a *size*. A 2000px hero shipped to
 * a 390px phone is the single most common LCP failure, so everything here is
 * built around emitting a real srcset.
 */

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Widths we generate for srcset. Covers 1x and 2x for common viewports. */
const SRCSET_WIDTHS = [320, 480, 640, 768, 1024, 1280, 1600, 1920];

/** Default quality. 80 is the point where AVIF/WebP artefacts stop being visible. */
const DEFAULT_QUALITY = 80;

export function urlFor(image) {
  if (!image || !builder) return null;
  try {
    return builder.image(image);
  } catch {
    return null;
  }
}

/** A single URL at a given width. */
export function imageUrl(image, width = 1200, { quality = DEFAULT_QUALITY, height } = {}) {
  const b = urlFor(image);
  if (!b) return null;
  try {
    let out = b.width(width).quality(quality).auto('format').fit('max');
    if (height) out = out.height(height).fit('crop');
    return out.url();
  } catch {
    return null;
  }
}

/**
 * Intrinsic dimensions, parsed from the asset _ref.
 *
 * Sanity encodes them in the id (image-<hash>-<w>x<h>-<ext>), so we get real
 * width/height with no extra request. Setting them on the <img> is what
 * prevents cumulative layout shift.
 */
export function imageDimensions(image) {
  const ref = image?.asset?._ref || image?.asset?._id || image?._ref;
  if (typeof ref !== 'string') return null;
  const match = /-(\d+)x(\d+)-[a-z]+$/.exec(ref);
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!width || !height) return null;
  return { width, height, aspectRatio: width / height };
}

/**
 * Everything an <img> needs: src, srcset, and intrinsic dimensions.
 *
 * `sizes` must describe how wide the image renders at each breakpoint. Getting
 * it wrong is worse than omitting srcset, because the browser will confidently
 * pick the wrong candidate - so callers pass the value that matches their
 * actual layout.
 */
export function responsiveImage(image, { maxWidth = 1600, sizes, quality = DEFAULT_QUALITY } = {}) {
  const b = urlFor(image);
  if (!b) return null;

  const dims = imageDimensions(image);
  // Never upscale past the source: bigger candidates would just waste bytes.
  const ceiling = Math.min(maxWidth, dims?.width || maxWidth);
  const widths = SRCSET_WIDTHS.filter((w) => w <= ceiling);
  if (!widths.includes(ceiling)) widths.push(ceiling);

  const build = (w) => b.width(w).quality(quality).auto('format').fit('max').url();

  return {
    src: build(ceiling),
    srcSet: widths.map((w) => `${build(w)} ${w}w`).join(', '),
    sizes: sizes || '(max-width: 768px) 100vw, 768px',
    width: dims?.width,
    height: dims?.height,
    aspectRatio: dims?.aspectRatio,
  };
}

/**
 * A tiny blurred placeholder, inlined as the CSS background of the wrapper so
 * there is something on screen before the real image decodes.
 */
export function lqipUrl(image) {
  const b = urlFor(image);
  if (!b) return null;
  try {
    return b.width(24).quality(30).blur(20).auto('format').url();
  } catch {
    return null;
  }
}

/** Social cards need a fixed 1200x630 crop, honouring the editor's hotspot. */
export function socialImageUrl(image) {
  const b = urlFor(image);
  if (!b) return null;
  try {
    return b.width(1200).height(630).quality(85).fit('crop').auto('format').url();
  } catch {
    return null;
  }
}
