// const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }
    // postcss
    // hotReload: false,//根据环境变量生成
    // loaders: {//自定义loader
    //     'docs': docsLoader,
    //     js: 'coffee'
    // },
    // preLoader: {

    // },
    // postLoader:{

    // }
  }
}
