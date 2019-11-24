const dev = require('./lib/dev')
const build = require('./lib/build')

const entry = require('./lib/entry')
const externals = require('./lib/externals')
const optimization = require('./lib/optimization')
const output = require('./lib/output')
const plugins = require('./lib/plugins')
const resolve = require('./lib/resolve')
const rules = require('./lib/rules')


module.exports = {
  dev,
  build,

  externals,
  entry,
  optimization,
  output,
  plugins,
  resolve,
  rules,
}
