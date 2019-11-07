const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins: [autoprefixer],
  },
}


module.exports = {
  rules: [
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    },
    {
      test: /\.js$/,
      loader: 'source-map-loader',
      enforce: 'pre',
    },
    {
      test: /\.(le|c)ss$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        postcss,
        'less-loader?{"sourceMap":true}',
      ],
    },
    {
      test: /\.styl$/,
      exclude: /node_modules/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
        'css-loader', 
        postcss, 
        'stylus-loader',
      ],
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          query: {
            name: '[name].[hash:8].[ext]',
            limit: 1024 * 10,
          },
        },
      ],
    },
  ],
}
