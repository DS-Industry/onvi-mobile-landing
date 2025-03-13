/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  basePath: "/onvi-mobile-landing", // Change this to your GitHub repo name
  assetPrefix: "/onvi-mobile-landing/",
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
