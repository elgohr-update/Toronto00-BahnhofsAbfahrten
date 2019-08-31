module.exports = {
  extends: ['marudor'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    SERVER: false,
  },
  rules: {
    'require-atomic-updates': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  overrides: require('eslint-config-marudor/typescript').overrides,
};
