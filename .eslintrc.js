module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-tabs': 'off',
    'indent': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'eol-last': 'off'
  }
}
