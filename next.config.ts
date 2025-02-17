import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c-g-studio-coding-gods-com-server.onrender.com',
      },
    ],

    formats: ['image/webp'],
  },
  // check support with turbopack
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

export default nextConfig;
