import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    qualities: [100, 75],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "images.unsplash.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "images.pexels.com",
    //   },
    // ],
  },
  compress: true,
};

export default nextConfig;
