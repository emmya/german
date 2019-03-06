const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'eval-source-map',
  target: 'node',
  entry: ['babel-polyfill', './src/index'],
  externals: [
    nodeExternals({
      modulesFromFile: true,
    }),
  ],
  output: {
    publicPath: '/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new webpack.DefinePlugin({ 'global.GENTLY': false }),
    // Set this special variable so we know when we're building in webpack
    new webpack.DefinePlugin({
      'process.env.IN_WEBPACK': true,
    }),
  ],
  module: {
    noParse: [
      /.*\.test(s)?\.js/,
      /test-helpers\.js/,
    ],
    rules: [
      {
        test: /.*\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // '/settings': path.resolve(__dirname, '../../settings'),
      // '/imports/shared-kit': path.resolve(__dirname, '../shared-kit'),
      // './shared-kit': path.resolve(__dirname, '../shared-kit'),
      // '/imports/resource-kit': path.resolve(__dirname, '../resource-kit'),
      // './resource-kit': path.resolve(__dirname, '../resource-kit'),
      // '././resource-kit': path.resolve(__dirname, '../resource-kit'),
      // '/super-secret-db': path.resolve(__dirname, '../src/db.js'),
      // Add workaround for bad module extensions: see https://github.com/bitinn/node-fetch/issues/493#issuecomment-414111024
      // 'node-fetch$': 'node-fetch/lib/index.js',
      // Workaround for bad import: see https://github.com/KyleAMathews/deepmerge#webpack-bug
      // deepmerge$: 'deepmerge/dist/umd.js',
    },
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
};
