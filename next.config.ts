/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: "export",
  basePath: "/onvi-landing-page", // Change this to your GitHub repo name
  assetPrefix: "/onvi-landing-page/",
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
