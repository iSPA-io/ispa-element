const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: true,
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
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.tpl',
        filename: './index.html',
        favicon: './src/logo-square.png',
      }),
    ],
  },
  css: {
    extract: false,
  },
  chainWebpack: config => {
    // config.resolve.symlinks(false)

    config.resolve.extensions
      .clear()
      .add('.vue')
      .add('.tsx')
      .add('.ts')
      .add('.mjs')
      .add('.js')
      .add('.jsx')
      .add('.json')
      .add('.wasm')
  },
}

