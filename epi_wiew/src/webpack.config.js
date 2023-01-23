const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: { "querystring": require.resolve("querystring-es3") }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
