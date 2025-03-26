const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: process.env.NODE_ENV === "production" ? '/onvi-mobile-landing/' : "",
  basePath: process.env.NODE_ENV === "production" ? '/onvi-mobile-landing' : "",
  output: 'export'
};

export default nextConfig;
