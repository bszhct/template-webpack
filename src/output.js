const path = require('path')


module.exports = {
  path: path.join(process.cwd(), '/dist'),
  filename: '[name].[hash].js',
  publicPath: '/',
  chunkFilename: '[name].[contenthash].js',
}
