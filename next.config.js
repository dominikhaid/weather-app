const nextConfig = {
  compress: true,
  reactStrictMode: true,
  target: 'serverless',
  basePath: '/app/weather-app',
  images: {
    domains: ['localhost'],
    // domains: [],
    path: '/app/weather-app/_next/image',
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack(config, options) {
    return config;
  },
};

// const withLess = require('@zeit/next-less');
// module.exports = withLess(
//   {
//     cssModules: true,
//   },
//   nextConfig,
// );

module.exports = nextConfig;
