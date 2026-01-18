import type { NextConfig } from "next";

module.exports = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/ds3adujw3/image/upload/**',
      },
    ],
  },
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
