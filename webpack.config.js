const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SPAFontSpiderWebpackPlugin = require('spa-font-spider-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    static: './dist',
    port: 8080,
    webSocketServer: false
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'spa-font-spider-webpack-plugin-demo',
      template: 'index.html',
      scriptLoading: 'blocking'
    }),
    new SPAFontSpiderWebpackPlugin({
      fontFamilyPkgList: [
        {
          url: 'http://localhost:3002/si-yuan-regular.ttf',
          name: 'si-yuan-regular'
        },
        {
          url: 'http://localhost:3002/si-yuan-bold.ttf',
          name: 'si-yuan-bold'
        }
      ]
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    scriptType: false
  }
}
