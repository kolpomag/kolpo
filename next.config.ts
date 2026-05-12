import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/siir/prehistorik-bir-guzelligin-var',
        destination: '/siir/prehistoric-bir-guzelligin-var',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;