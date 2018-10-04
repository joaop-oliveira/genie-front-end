module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'inline-react-svg',
      [
        'transform-assets',
        {
          extensions: ['svg', 'png', 'jpg', 'jpeg'],
          name: '[name].[ext]?[sha512:hash:base64:7]',
        },
      ],
    ],
  };
};
