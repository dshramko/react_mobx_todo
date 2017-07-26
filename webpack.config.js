const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 8000,
    host: "0.0.0.0",
    publicPath: "/"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, exclude: /node_modules/, loaders:['style-loader', 'css-loader'] }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}