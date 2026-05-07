export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thankyou', '/api/'],
      },
    ],
    sitemap: 'https://shiftdeploy.com/sitemap.xml',
  };
}
