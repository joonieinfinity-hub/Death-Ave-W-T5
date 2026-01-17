/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // We specify which files to ignore to avoid conflicts with legacy SPA files
  webpack: (config) => {
    config.module.rules.push({
      test: /index\.tsx|App\.tsx|pages\/.*\.tsx$/,
      loader: 'ignore-loader',
    });
    return config;
  },
};

module.exports = nextConfig;