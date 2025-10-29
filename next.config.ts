import type { NextConfig } from "next";

const config: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["https://agentic-de042eac.vercel.app"],
    },
    optimizePackageImports: ["lucide-react", "framer-motion"],
    viewTransition: true,
    staleTimes: {
      dynamic: 60,
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  reactStrictMode: true,
};

export default config;
