const PROXY_API_BASE_URL = "http://spm.source.natapp1.cc/";

module.exports = {
  devServer: {
    port: 8080, // 端口号，如果端口号被占用，会自动加1
    host: "0.0.0.0", // 主机名， 127.0.0.1，  真机 0.0.0.0
    https: false, //协议
    open: false, //启动服务时自动打开浏览器访问
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: PROXY_API_BASE_URL,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
