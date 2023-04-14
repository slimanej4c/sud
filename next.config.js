/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
module.exports = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {...config.resolve.fallback, fs: false}

    return config
  },
}