const { mergeConfigs } = require('../src/utils');

test('mergeConfigs', () => {
  expect(
    mergeConfigs(
      {
        extends: ['airbnb'],
        rules: {
          semi: ['error', 'never'],
        },
      },
      {
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
      },
      {
        plugins: ['react', 'react-hooks'],
        rules: {
          'react/jsx-filename-extension': 'off',
        },
      },
    ),
  ).toEqual({
    extends: ['airbnb'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
      semi: ['error', 'never'],
      'react/jsx-filename-extension': 'off',
    },
  });
});
