import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com'],
  },
};

export default nextConfig;
