/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  // Add basePath
  basePath: '/exam-202406',
}

module.exports = nextConfig
