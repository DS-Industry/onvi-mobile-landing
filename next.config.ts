const nextConfig: import('next').NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/onvi-mobile-landing/',
  basePath: '/onvi-mobile-landing',
  output: 'export'
};

export default nextConfig;
