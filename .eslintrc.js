module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    // parser: '@typescript-eslint/parser',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
    'import',

  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:eslint-comments/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:node/recommended',
  ],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off', //broken
    'node/no-missing-import': 'off', // broken
  }
};
