'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonPaths = require('./paths');

module.exports = {
  entry: ['@babel/polyfill', commonPaths.entryPath],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }], {
      copyUnmodified: true
    })
  ]
};
