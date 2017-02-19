const path = require('path');

const DIST = path.resolve(__dirname, 'dist');
const SRC = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    bundle: ['index.web.js']
  },

  output: {
    path: DIST,
    filename: '[name].js'
  },

  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    modules: [
      __dirname,
      SRC,
      "node_modules"
    ]
  },

  module: {
    loaders: [
      {
        // transpile to ES5
        test: /\.js?$/,
        include: [
          __dirname,
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-native-something')
        ],
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },

  devServer: {
    contentBase: DIST,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: { colors: true }
  }
};
