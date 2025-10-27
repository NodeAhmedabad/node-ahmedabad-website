import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: false,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
