const path = require('path')
module.exports = {
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
      args[0].title = 'xianmistore'
      return args
    })
  }
}
