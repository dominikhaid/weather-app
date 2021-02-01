const path = require('path');

module.exports = {
  stories: [
    '../src/pages/**/*.stories.js',
    '../src/components/**/*.stories.js',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    'storycap',
    'storybook-addon-designs',
    '@storybook/addon-controls',
  ],
  webpackFinal: async config => {
    const rules = config.module.rules.map(rule => {
      if (/svg/.test(rule.test))
        rule.test = /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
      return rule;
    });

    config.module.rules = rules;

    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: false,
            // localIdentName: '[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.alias['components'] = path.resolve(
      __dirname,
      '../src/components',
    );
    config.resolve.alias['lib'] = path.resolve(__dirname, '../src/lib');
    config.resolve.alias['src'] = path.resolve(__dirname, '../src');
    config.resolve.alias['data'] = path.resolve(__dirname, '../src/data');
    config.resolve.alias['context'] = path.resolve(__dirname, '../src/context');
    config.resolve.alias['hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['routers'] = path.resolve(__dirname, '../src/routers');
    config.resolve.alias['reducers'] = path.resolve(
      __dirname,
      '../src/reducers',
    );
    config.resolve.alias['includes'] = path.resolve(
      __dirname,
      '../src/includes',
    );
    config.resolve.alias['public'] = path.resolve(__dirname, '../public');

    return config;
  },
};
