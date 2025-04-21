import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['utfs.io'], // ✅ allow utfs.io for external images
  },
};

export default nextConfig;
