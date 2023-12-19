/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true,

  images: {
    domains: ["i.ytimg.com"],
  },
};

module.exports = nextConfig;
