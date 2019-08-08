const port = process.env.port || process.env.npm_config_port || 9876
module.exports = {
  publicPath: '/',
  // lintOnSave: process.env.NODE_ENV !== 'production',
  // outputDir: 'dist',
  // assetsDir: 'static'
  devServer: {
    port: port,
    overlay: {
      warnings: true,
      errors: true
    },
    // 开发环境跨域
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
