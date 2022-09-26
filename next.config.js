/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
};

module.exports = {
  env: {
    REACT_APP_BE_BASEURL: "http://localhost:3001",
  },
};

module.exports = nextConfig;
