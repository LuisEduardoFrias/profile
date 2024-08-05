/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/profile",
    reactStrictMode: true,
    env: {
    PATH_CV: "/LuisEF_CV_En.pdf",
  },
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
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/LuisEduardoFrias/gats_and_boxes/main/gifs/**',
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