'use strict';

var webpack = require('webpack'),  
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  target: 'web',
  cache: true,
  entry: {
    module: path.join(srcPath, 'module.js'),
    common: ['react', 'react-router','alt'],
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, 'tmp'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: "[name].[chunkhash].chunk.js",
    libraryTarget: "umd",
    library: ["Recorder", "[name]"],
    pathInfo: true
  },

  module: {
    loaders: [
      // Extract css files
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      // Optionally extract less files
      // or any other compile-to-css language
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'common'}),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.NoErrorsPlugin()
  ],

  debug: true,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './tmp',
    historyApiFallback: true,
    host: "0.0.0.0",
    port: "80"
  }
};