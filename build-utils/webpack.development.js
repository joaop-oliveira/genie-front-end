const path = require('path');
const config = require('../config');
const fs  = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEnv = () => fs.readFileSync(path.resolve(__dirname, 'assets/development/env.development.json'));

module.exports = env => {
  return {
    devtool: 'cheap-source-map',
    output: {
      path: path.resolve(config.BASE_DIR, "development"),
      publicPath: '/',
    },
    devServer: {
      before(app) {
        const ENV = JSON.parse(getEnv());
        app.get('/assets/env', (req, res) => {
          res.status(202).json(ENV);
        })
      },
      port: 8080,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Production',
        template: './index.html',
      }),
    ]
  };
};
