const entry = require('./entry')
const output = require('./output')
const optimization = require('./optimization')
const rules = require('./rules')
const resolve = require('./resolve')
const externals = require('./externals')


module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry,
  output,
  optimization,
  module: rules,
  resolve,
  externals,
}
