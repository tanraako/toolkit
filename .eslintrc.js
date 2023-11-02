module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'no-only-tests',
    'jest',
    'jest-formatting',
    'unused-imports',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': ['error', 'only-multiline']
  },
}
