/**
 * Client-side image compression, run before upload.
 *
 * Doing this in the browser rather than server-side means a 8 MB phone photo
 * never crosses the wire at full size, and the asset stored in Sanity is
 * already sensibly bounded. Sanity's CDN still handles per-request format and
 * size negotiation on top of this - the goal here is only to stop absurd
 * originals from being stored.
 *
 * Output is WebP where the browser can encode it (universally supported for
 * canvas export now), falling back to JPEG.
 */

const MAX_DIMENSION = 2400; // Beyond this is wasted bytes for a blog.
const QUALITY = 0.82;

/** Formats we leave completely alone. */
const PASSTHROUGH = ['image/svg+xml', 'image/gif'];

export async function compressImage(file) {
  // SVG is already tiny and vector; GIF may be animated and canvas would kill it.
  if (PASSTHROUGH.includes(file.type)) return file;
  if (typeof document === 'undefined') return file;

  try {
    const bitmap = await createImageBitmap(file);

    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob = await new Promise((resolve) =>
      canvas.toBlob(resolve, 'image/webp', QUALITY)
    );
    if (!blob) return file;

    // If compression made it bigger (already-optimised source), keep the original.
    if (blob.size >= file.size && scale === 1) return file;

    const name = file.name.replace(/\.[^.]+$/, '') + '.webp';
    return new File([blob], name, { type: 'image/webp', lastModified: Date.now() });
  } catch {
    // Any failure here is non-fatal: upload the original.
    return file;
  }
}

/** Human-readable size, for the upload UI. */
export function formatBytes(bytes) {
  if (!bytes) return '0 KB';
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
