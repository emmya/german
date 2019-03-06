const webpack = require('webpack');
const merge = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new NodemonPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
