import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/car-detailing',
  assetPrefix: '/car-detailing/',
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
