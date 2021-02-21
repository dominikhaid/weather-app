const nextConfig = {
  compress: true,
  reactStrictMode: true,
  target: 'serverless',
  basePath: '/app/weather-app',
  images: {
    domains: ['localhost'],
    path: '/app/weather-app/_next/image',
    loader: 'default',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack(config, options) {
    // const rules = config.module.rules.map(rule => {
    //   console.log(rule);
    //   return rule;
    // });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

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
