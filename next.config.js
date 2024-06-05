/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/profile",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'icon.icepanel.io',
                port: '',
                pathname: '/Technology/**',
            },
        ],
        formats: ['image/webp'],
        //  unoptimized: true,
    },
    //output: "export",
    /*
     */
};

module.exports = nextConfig;