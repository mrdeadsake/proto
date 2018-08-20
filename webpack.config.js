const productName = 'proto';
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  cache: true,
  context: path.resolve(__dirname, './client/'),
  devtool: 'cheap-module-source-map', // React 16's suggestion: https://reactjs.org/docs/cross-origin-errors.html#webpack
  entry: path.resolve(__dirname, './client/application.js'),
  output: {
    path: path.resolve(__dirname, `./public/${productName}`),
    filename: 'bundle.js',
    publicPath: `/${productName}/`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      path.resolve(__dirname, 'client/'),
      'node_modules',
    ],
  },
  externals: {
    jquery: 'jQuery',
    numeral: 'numeral',
    'whatwg-fetch': 'fetch',
  },
  module: {
    rules: [
      {
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        test: /\.scss$/,
        include: path.join(__dirname, 'client/stylesheets'),
      },
      {
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'test/client'),
        ],
      },
      {
        use: ['json-loader'],
        test: /\.(json)$/,
        include: path.join(__dirname, 'client'),
      },
      {
        use: ['url-loader'],
        test: /\.svg/,
        include: path.join(__dirname, 'client/stylesheets/'),
      },
      {
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        test: /\.(jpe?g|png|gif|ttf)$/,
        include: path.join(__dirname, 'client/'),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      },
    }),
    isProduction ?
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,
          comparisons: false,
        },
      })
      : null,
    !isProduction ? new ProgressBarPlugin() : null,
    !isProduction ? new WebpackNotifierPlugin({ alwaysNotify: true }) : null,
  ].filter(i => i),
};

if (isProduction) {
  // Hashing of this kind happens only in prod.
  module.exports.output.filename = 'bundle-[name]-[hash].js';
}
