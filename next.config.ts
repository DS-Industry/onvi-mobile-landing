const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: "/onvi-mobile-landing", // Your repo name (case-sensitive!)
  assetPrefix: "/onvi-mobile-landing/",
  output: 'export'
};

export default nextConfig;

