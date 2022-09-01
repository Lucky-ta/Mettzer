/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SECRET_API_KEY: process.env.SECRET_API_KEY,
  },
};

module.exports = nextConfig;
