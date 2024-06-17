'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['dist'],
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
    wx: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
  },
};
