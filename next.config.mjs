/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  transpilePackages: ['@n8n/chat'],
  async redirects() {
    return [
      { source: '/insideShiftDeploy', destination: '/about', permanent: true },
      { source: '/deploy-toolkit', destination: '/services', permanent: true },
      { source: '/shift-protocol', destination: '/about', permanent: true },
      { source: '/contactUs', destination: '/ContactUs', permanent: true },
      { source: '/contactus', destination: '/ContactUs', permanent: true },
      { source: '/contact', destination: '/ContactUs', permanent: true },
      { source: '/contact-us', destination: '/ContactUs', permanent: true },
    ];
  },
};

export default nextConfig;
