/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
