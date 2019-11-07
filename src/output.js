const path = require('path')


module.exports = {
  path: path.join(process.cwd(), '/dist'),
  filename: 'js/[name].[conenthash:8].js',
  publicPath: '/',
  chunkFilename: 'js/[name].[conenthash:8].js',
}
