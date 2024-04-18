const resolve = require('path').resolve;

module.exports = {
  rootDir: resolve(__dirname, '../'),
  srcDir: __dirname,
  render: {
    resourceHints: false,
  },
  target: 'static',
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: false,
        ignoreNotFoundWarnings: true,
      },
    ],
  ],
  modules: ['../lib/module', './modules/generate', 'nuxt-buefy'],
  ghost: {
    url: 'https://cms.057000.xyz',
    key: '37b95fcedd15bf',
    version: 'v4',
  },
  dev: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV === 'production',
};
