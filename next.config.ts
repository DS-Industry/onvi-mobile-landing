const nextConfig: import('next').NextConfig = {
  output: "export",
  basePath: "/onvi-mobile-landing",
  assetPrefix: "/onvi-mobile-landing/",
  trailingSlash: true, // Important for static exports!
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
