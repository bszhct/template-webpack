const entry = require('./entry')
const output = require('./output')
const optimization = require('./optimization')
const rules = require('./rules')
const resolve = require('./resolve')
const plugins = require('./plugins')
const externals = require('./externals')


module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry,
  output,
  optimization,
  module: rules,
  resolve,
  plugins,
  externals,
}
