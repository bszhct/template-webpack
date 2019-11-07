/**
 * 
 * 打包时要排除的第三方库
 * 
 * root: 可以通过一个全局变量访问 library(通过 script 标签)
 * commonjs: 可以将 library 作为一个 commonjs 模块访问
 * commonjs2: 和上面的类似, 但导出的是 module.exports.default
 * amd: 类似于 commonjs, 但使用 AMD 模块系统
 */
module.exports = {
  react: 'React',
  'react-dom': 'ReactDOM',
  mobx: 'mobx',
  'mobx-react': 'mobxReact',
  redux: 'redux',
  'react-redux': 'ReactRedux',
  lodash: {
    root: '_',
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: 'lodash',
  },
  moment: 'moment',
  d3: 'd3',
}
