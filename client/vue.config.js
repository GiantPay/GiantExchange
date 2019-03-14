const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    ],
  },

  transpileDependencies: [
    'vue-echarts',
    'resize-detector',
  ],
};
