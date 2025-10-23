/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
};

module.exports = nextConfig;
