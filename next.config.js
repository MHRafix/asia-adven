/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com", "setsail.qodeinteractive.com"],
  },
};

module.exports = nextConfig;
