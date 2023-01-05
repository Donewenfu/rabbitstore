const path = require('path')
module.exports = {
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.scss'),
        path.join(__dirname, './src/assets/styles/mixins.scss')
      ]
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // 更改网页标题
      args[0].title = 'xiangmistore'
      return args
    })
  },
  devServer: {
    port: 3033,
　　host: "0.0.0.0",
　　https: false, // https:{type:Boolean}
　　open: true, // 配置自动启动浏览器
　　disableHostCheck: true, //webpack4.0 开启热更新  主要代码
  },
  // 配置打包路径
  publicPath: './'
}
