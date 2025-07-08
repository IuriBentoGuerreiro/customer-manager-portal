import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/clientes',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;