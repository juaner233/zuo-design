'use strict'
// Template version: 1.0.1
// see https://github.com/QC-L/webpack-multi-page-template for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/articles.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/zuoapi': {
        //http://oynvlnf3a.bkt.clouddn.com/file/api/hot_articles.json
        target: 'http://oynvlnf3a.bkt.clouddn.com',
        //路径重写
        pathRewrite: {
          '^/zuoapi': '/file/api'
        },
        //防止被拦截
        headers:{
          Host:'oynvlnf3a.bkt.clouddn.com'
        }
      },
      '/api': {
        //要请求的接口网址
        target: 'http://www.zuodesign.cn',
        //路径重写
        pathRewrite: {
          //在请求地址中访问到api的时候，把它变成空
          '^/api': '/api'
        },
        headers:{
          Host : 'www.zuodesign.cn',
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
