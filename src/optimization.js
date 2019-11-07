/* eslint-disable @typescript-eslint/camelcase */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safeParser = require('postcss-safe-parser')


module.exports = {
  splitChunks: {
    cacheGroups: {
      common: {
        test: /[\\/]node_modules[\\/] || src\//,
        chunks: 'all',
        name: 'common',
        minSize: 0,
        minChunks: 2,
        enforce: true,
      },
    },
  },
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
      },
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        parser: safeParser,
        discardComments: {
          removeAll: true,
        },
      },
    }),
  ],
}
