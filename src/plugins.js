const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
  }),
]
