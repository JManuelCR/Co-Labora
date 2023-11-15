/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "co-labora-images.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
// output: 'export'
};

module.exports = nextConfig;
