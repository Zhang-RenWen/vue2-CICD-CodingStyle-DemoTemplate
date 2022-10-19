const webpack = require('webpack')
const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const plugins = [
  // Make built date as version
  new webpack.DefinePlugin({
    VERSION_FROM_WEBPACK: JSON.stringify(new Date()),
    BABEL_ENV: process.env.BABEL_ENV
  })
]

module.exports = {
  lintOnSave: true,
  runtimeCompiler: true,
  configureWebpack: {
    plugins,
    output: {
      filename: '[name].[hash:8].js'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/ComponentWebVue2/' : '/ComponentWebVue2/',
  productionSourceMap: false,
  chainWebpack(config) {
    const dir = path.resolve(__dirname, 'src/assets/icon') // 存svg圖片路徑
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ extract: false })
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    // 其他svg loader排除icon目錄
    config.module.rule('svg').exclude.add(dir)
    // 忽略/moment/locale下的所有文件 減少打包體積
    config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
  }
}
