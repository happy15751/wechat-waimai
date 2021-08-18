var path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            //   'text-color': '#f00',
            //   'border-color': '#00f',
            // 'nav-bar-height':'60px',
            'nav-bar-title-font-size': '20px',
            'nav-bar-background-color': '#000',
            'nav-bar-title-text-color': '#fff',
            'nav-bar-icon-color': '#fff'

            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //   hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
};