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
    ];
  },
};

export default nextConfig;
