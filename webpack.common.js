const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',

      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintPlugin()
  ],
};