const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 8888,
      openAnalyzer: true
    })
  ]
});
