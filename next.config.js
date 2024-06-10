/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  // Add basePath
  basePath: '',
}

module.exports = nextConfig
