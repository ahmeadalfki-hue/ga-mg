/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleprodsouthcentralus.blob.core.windows.net',
      },
    ],
  },
}

module.exports = nextConfig
