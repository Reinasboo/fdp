import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
    // Optimize images for better performance
    formats: ["image/avif", "image/webp"],
  },
  // Performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
