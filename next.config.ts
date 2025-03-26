const nextConfig: import('next').NextConfig = {
    output: 'export', // This enables static HTML export
    images: {
        unoptimized: true, // Required for static export with images
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Use the base path if provided
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', // Prefix for assets
    trailingSlash: true, // Recommended for static deployments
};

export default nextConfig;

