module.exports = {
  devServer: {
    host: 'localhost',
    port: 8082,
    proxy: {
      /*      '/api': {
        // target: 'http://localhost',
        target: 'http://192.168.43.145:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }, */
      '/': {
        // target: 'http://localhost',
        target: 'http://192.168.43.145:8082',
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }

      }
    }
  },
  // 不打包map文件
  productionSourceMap: false,
  // 删除预加载，真正实现按需加载
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  },
  lintOnSave: false
}
