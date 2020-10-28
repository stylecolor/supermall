// const path = require("path");
// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  lintOnSave:false,    //关闭esLint
  assetsDir: "./",
  devServer: {
    port: 8080, // 端口号
    host: "localhost",
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // } // 配置多个代理

    overlay: { //关闭esLint
      warnings: false,
      errors: false
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }

  // 路径取别名
  // chainWebpack: config => {
  //   config.resolve.alias
  //       .set("@", resolve("src"))
  //       .set("assets", resolve("src/assets"))
  //       .set("components", resolve("src/components"))
  //       .set("views", resolve("src/views"))
  //       // .set("base", resolve("baseConfig"))
  //       // .set("public", resolve("public"));
  // },

}
