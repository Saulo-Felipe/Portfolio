/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2nir1j4sou8ez.cloudfront.net"
      }
    ]
  },
  // reactStrictMode: false
};

module.exports = nextConfig;
