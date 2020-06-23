module.exports = {
  devServer: {
    port: 8080, // 端口
    proxy: {
      "/api": {
        target: "http://10.31.1.145:7777",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  },
  lintOnSave: false, // 取消 eslint 验证
  publicPath: "./",
  outputDir: "dist"
};
