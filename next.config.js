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
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/pmndrs/zustand/main/**',
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