const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')


module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
    port: 9001,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
})
