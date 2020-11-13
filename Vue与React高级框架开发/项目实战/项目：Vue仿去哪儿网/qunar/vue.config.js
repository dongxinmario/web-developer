const path = require('path')
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('@', path.join(__dirname, './src/'))
      .set('common', path.join(__dirname, './src/components/'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}