/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  styledComponents: true,
  images: {
    domains: ["www.codingem.com", "insights.dice.com", "www.orientat.ro"],
  },
};

module.exports = nextConfig;
