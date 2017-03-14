const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app', 'app.js'),
  output: {
    path: path.join(__dirname, 'app', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      beautify: false,
      dead_code: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};
