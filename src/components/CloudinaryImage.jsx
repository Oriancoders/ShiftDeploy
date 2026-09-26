function sizedUrl(src, width) {
  if (src.startsWith('/')) return src;
  const url = new URL(src);
  if (url.hostname !== 'res.cloudinary.com' || !url.pathname.includes('/image/upload/')) return src;
  url.pathname = url.pathname.replace('/image/upload/', `/image/upload/c_limit,w_${width}/`);
  return url.toString();
}

export default function CloudinaryImage({ src, alt, sizes = '(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 50vw, 640px', ...props }) {
  return (
    // Cloudinary already provides the image CDN; request viewport-sized variants directly.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={sizedUrl(src, 960)}
      srcSet={[480, 768, 960, 1280].map(width => `${sizedUrl(src, width)} ${width}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      decoding="async"
    />
  );
}
