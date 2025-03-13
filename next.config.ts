import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static exports
  },
  basePath: "/onvi-mobile-landing",
  assetPrefix: "/onvi-mobile-landing/",
};

export default nextConfig;
