module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': [
          1,
          {
            extensions: ['.ts', '.tsx'],
          },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        'import/extensions': ['error', 'never'],
        'react/prop-types': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
  ],
};
