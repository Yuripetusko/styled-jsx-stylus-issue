const path = require('path');
const glob = require('glob');

module.exports = {
  webpack: (config, { dev, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.styl$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'global',
          },
        },
        {
          loader: 'stylus-loader',
          options: {
            sourceMap: false,
            includePaths: ['styles', 'pages']
              .map(d => path.join(__dirname, d))
              .map(g => glob.sync(g))
              .reduce((a, c) => a.concat(c), []),
          },
        },
      ],
    });
    return config;
  },
};
