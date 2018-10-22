const path = require('path');

// 测试接口域名
const DEV_API_HOST = 'http://localhost:8080'
// 正式接口域名
const PROD_API_HOST = 'https://api.csdoker.com'

const appData = require('./mock/data.json');
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径（构建好的文件输出到哪里）
  baseUrl: '/',
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '//your_url'
  //   : '/',
  // 输出文件目录
  outputDir: 'dist',
  // assetsDir: 'static',
  // filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('static', resolve('static'))
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }
    // Object.assign(config, {
    //   // 开发生产共同配置
    //   resolve: {
    //     alias: {
    //       '@': path.resolve(__dirname, './src'),
    //       '@c': path.resolve(__dirname, './src/components')
    //     }
    //   }
    // });
  },
  // vue-loader 配置项  https://vue-loader.vuejs.org/en/options.html

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // open: true,
    open: 'darwin' === process.platform,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // 设置代理
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: process.env.NODE_ENV === 'production' ?
          PROD_API_HOST : DEV_API_HOST,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // axios.get('/api/getDataPoint').then(res => {
    //   console.log(res)
    // })
    // 设置代理
    before: app => {
      app.get('/api/seller', (req, res, next) => {
        res.json({
          errno: 0,
          data: seller
        });
      })
      app.get('/api/goods', (req, res, next) => {
        res.json({
          errno: 0,
          data: goods
        });
      })
      app.get('/api/ratings', (req, res, next) => {
        res.json({
          errno: 0,
          data: ratings
        });
      })
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}
