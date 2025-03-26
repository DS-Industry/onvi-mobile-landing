const nextConfig: import('next').NextConfig = {
    output: 'standalone', // This enables static HTML export
    images: {
        unoptimized: true, // Required for static export with images
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', // Use the base path if provided
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '', // Prefix for assets
    trailingSlash: true, // Recommended for static deployments

    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ],
            },
            {
                source: '/.well-known/assetlinks.json',
                headers: [
                    { key: 'Content-Type', value: 'application/json' }
                ],
            }
        ];
    },
    async rewrites() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                destination: '/.well-known/apple-app-site-association',
            },
            {
                source: '/.well-known/assetlinks.json',
                destination: '/.well-known/assetlinks.json',
            },
        ];
    },

};

export default nextConfig;

