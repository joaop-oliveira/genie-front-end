const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const chalk = require('chalk');
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const babelrc = require('./.babelrc.js')();
const PluginProposalObjRest = require('@babel/plugin-proposal-object-rest-spread').default;
const PluginProposalExportDefault = require('@babel/plugin-proposal-export-default-from').default;
const PluginProposalClassProperties = require('@babel/plugin-proposal-class-properties').default;
const PluginTransformRuntime = require('@babel/plugin-transform-runtime').default;
const config = require('./config');

const env = dotenv.config();

const modeconfig = (env = 'development') => require(`./build-utils/webpack.${env}.js`)(env);
const presetConfig = require('./build-utils/loadPresets');

console.log(
  chalk.blue('Variaveis de ambiente Desenvolvimento ===>, '),
  chalk.magenta(JSON.stringify(env.parsed, null, 2))
);
console.log(
  chalk.bgYellow('Production Directory is set to ===>>, '),
  chalk.bgYellow(path.resolve(config.BASE_DIR, 'production'))
);
module.exports = (
  { mode, presets, variables, analyze } = {
    mode: 'development',
    presets: [],
    variables: {},
  }
) => {
  console.log(chalk.blue('Modo de execução ====>>, '), chalk.red(mode));
  return webpackMerge(
    {
      mode,
      entry: './src/index.jsx',
      resolve: {
        extensions: ['json', '.jsx', '.js'],
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /(src).+(\.js|\.jsx)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            loader: 'eslint-loader',
          },
          {
            test: /(src).+(\.js|\.jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader?cacheDirectory=true',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
                plugins: [
                  PluginProposalClassProperties,
                  PluginProposalExportDefault,
                  PluginProposalObjRest,
                  PluginTransformRuntime,
                ],
              },
            },
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin([path.resolve(config.BASE_DIR, 'production')]),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
          'process.env.mode': JSON.stringify(mode),
          'process.env.MODULE_ID': JSON.stringify(env.parsed.MODULE_ID),
          'process.env.MODULE_NAME': JSON.stringify(env.parsed.MODULE_NAME),
          'process.env.VERSION': JSON.stringify(env.parsed.VERSION),
        }),
      ],
    },
    modeconfig(mode),
    presetConfig({ mode, presets })
  );
};
