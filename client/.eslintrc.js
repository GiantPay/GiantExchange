module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'arrow-parens': 'off',
    'linebreak-style': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
  },
};
