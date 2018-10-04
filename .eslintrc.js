module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 0,
    'max-len': [2, 100, 2, { ignoreComments: true, ignoreUrls: true, ignorePattern: '(!?\s)' }],
    'jsx-a11y/label-has-for': [ 2, {
      'components': [ 'Label' ],
      'required': {
        'every': null
      },
      'allowChildren': false,
    }],
  },
  globals: {
    'document': true,
    'proccess': true,
    'error': true,
    'sessionStorage': true,
    'setTimeout': true,
    'window': true,
  }
};
