/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wowslider.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "ayatrio-images.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "localhost:5173"
      },
      {
        protocol: "http",
        hostname: "localhost"
      },
      {
        protocol: "https",
        hostname: "wellgroomedgentleman.com"
      }
    ],
  },
  distDir: 'build'
};

module.exports = nextConfig;
