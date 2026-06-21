import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@autocare/ui"],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
