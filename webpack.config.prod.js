const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// App directory
const appDirectory = fs.realpathSync(process.cwd());
// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
// Host
// const host = process.env.HOST || 'localhost';
// // Required for babel-preset-react-app

module.exports = {
  mode: 'production',
  entry: resolveAppPath('src', 'index.html'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.[contenthash].html',
      inject: false,
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: true
    }),
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "style.[contenthash].css",
      chunkFilename: "[id].css",
    }),
    new CssMinimizerPlugin({
      parallel: true,
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),
  ]
};
