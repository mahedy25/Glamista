import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['utfs.io'], // Optional if you're using remotePatterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
