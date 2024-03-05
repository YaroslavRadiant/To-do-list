module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@wemake-services/javascript'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs,jsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['unicorn'],
  rules: {
    'unicorn/filename-case': [
      'error',
      { cases: { pascalCase: true, camelCase: true } },
    ],
  },
}
