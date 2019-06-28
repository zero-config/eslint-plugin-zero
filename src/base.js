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
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
