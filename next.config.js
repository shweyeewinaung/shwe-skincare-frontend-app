/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shweyeewinaung.com",
        port: "",
        pathname: "/skincare-images/**",
      },
    ],
  },
};

const additionalConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:3009/api/:path*", // API URL
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  ...additionalConfig,
};
