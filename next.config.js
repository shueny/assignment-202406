/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  // Add basePath
  basePath: '/exam-202406',
}

module.exports = nextConfig
