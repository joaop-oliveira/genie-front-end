const config = require("../config");
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = () => {
  return {
    devtool: "source-map",
    entry: './src/index.jsx',
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(config.BASE_DIR, "production")
    },
    externals: [nodeExternals()],
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]
  };
};
