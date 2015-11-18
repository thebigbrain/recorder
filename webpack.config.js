'use strict';

var webpack = require('webpack'),  
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  srcPath = path.join(__dirname, 'src');

module.exports = {
    target: "web"
    entry: path.join(srcPath, "entry.js"),
    output: {
        path: path.join(__dirname, 'tmp'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        contentBase: "./tmp"
    }
};