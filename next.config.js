/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/profile",
    output: "export",
    reactStrictMode: true,
    images: { unoptimized: true }
};

module.exports = nextConfig;