/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Removed 'output: export' to enable API routes on Vercel
  // Removed 'distDir' and 'unoptimized' for standard Vercel deployment
};

module.exports = nextConfig;
