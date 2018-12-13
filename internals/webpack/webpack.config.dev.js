const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');


module.exports = require('./webpack.config.base')({
  mode: 'development',

  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reloat=true',
    path.join(process.cwd(),"src/index.tsx")
  ],

  output: {
    filename: "[name].js",
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
        chunks: 'all',
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(process.cwd(),'src/index.html')
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    })
  ],
  devtool: "eval-source-map",
  performance: {
      hints: false,
  }
});
