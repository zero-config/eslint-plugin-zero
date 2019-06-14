module.exports = {
  configs: {
    react: {
      extends: 'airbnb',
      plugins: ['react', 'react-hooks'],
      rules: {
        semi: ['error', 'never'],
        'react/jsx-filename-extension': 'off',
        'react/destructuring-assignment': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react/button-has-type': 'off',
        'prefer-promise-reject-errors': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
    },
  },
};
