const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '../src', 'index.js'),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [new webpack.ProgressPlugin()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Pages: path.resolve(__dirname, '../src/pages/'),
      Services: path.resolve(__dirname, '../src/services/'),
      Store: path.resolve(__dirname, '../src/store/'),
      Root: path.resolve(__dirname, '../src/')
    }
  }
};
