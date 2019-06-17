module.exports = {
  extends: ['airbnb'],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: [],
  rules: {
    semi: ['error', 'never'],
    'import/prefer-default-export': false,
    'import/no-extraneous-dependencies': false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
