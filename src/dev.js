const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./base')


module.exports = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: [path.join(process.cwd(), 'public'), path.join(process.cwd(), 'node_modules')],
    host: '0.0.0.0',
    port: 9001,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
