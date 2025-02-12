const path = require('path');
const {getDefaultPreset}  = require('@wingsuit-designsystem/core');

module.exports = {

  apps: {
    drupal: {
      path: './',
        cssMode: 'extract',
        distFolder: './dist/app-drupal',
        twigDistFolder: 'templates',
        type: 'drupal',
        assets: [
        {
          folder: '',
          glob: 'tokens/*.pcss.css',
          replace: '.pcss.css',
        },
        {
          folder: '',
          glob: 'components/**/*.pcss.css',
          replace: '.pcss.css',
        },

        {
          folder: 'images/',
          glob: 'components/**/images/*.{svg,gif,webp,jpg,jpeg}',
          replace: '',
        },
        {
          folder: 'vendors/',
          glob: 'js/**/*.vendor.js',
          replace: '.vendor.js',
        },
        {
          folder: 'behaviors/',
          glob: 'components/**/*.behavior.js',
          replace: '.behavior.js',
        },
      ],
        assetsDistFolder: '',
        designSystem: 'default',
        presets: [
        getDefaultPreset('assets'),
        getDefaultPreset('assetsVideos'),
        getDefaultPreset('babel'),
        getDefaultPreset('css'),
        getDefaultPreset('cms'),
      ],
    },
  },
  parameters: {
    placeholder: {
      service: 'placebeard',
    },
  },
  webpack: (appConfig) => {
    if (appConfig.type === 'drupal') {
      return {
        externals: {
          '@drupal/once': 'once',
        },
      };
    }
    return {};
  },
  presets: [
    '@wingsuit-designsystem/preset-lint',
    '@wingsuit-designsystem/preset-placeholder',
    '@wingsuit-designsystem/preset-imagemin',
  ],
  designSystems: {
    default: {
      path: './',
      namespaces: {
        tokens: path.resolve(__dirname, 'tokens'),
        components: path.resolve(__dirname, 'components'),
      },
    },
  },
};
