/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "dotstat.anemonlabs.ru",
      },
      {
        protocol: "http",
        hostname: "dotstat.anemonlabs.ru",
      },
    ],
  },
  output: "standalone",
  async rewrites() {
    return [];
  },
};

export default nextConfig;
