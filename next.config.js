/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true,
  output: "export",
  images: {
    domains: ["i.ytimg.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
