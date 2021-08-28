const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// App directory
const appDirectory = fs.realpathSync(process.cwd());
// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: 'development',
  entry: resolveAppPath('src'),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
			{ loader: "style-loader",},
			{ loader: "css-loader", },
			{ loader: "sass-loader", },
		],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "src", "index.html"),
      minify: true,
    }),

  ],
};
