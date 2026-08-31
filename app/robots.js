export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thankyou', '/api/', '/admin', '/admin/'],
      },
    ],
    sitemap: 'https://shiftdeploy.com/sitemap.xml',
  };
}
