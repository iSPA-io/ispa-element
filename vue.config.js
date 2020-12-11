
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    devServer: {
      watchOptions: {
        poll: true,
      },
    },
  },
  css: {
    extract: false,
  },
  chainWebpack: config => {
    config.resolve.symlinks(false)

    // config.module.
  },
}

