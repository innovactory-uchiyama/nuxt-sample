module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  ignorePatterns: ['*test.js'],
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'arrow-parens': 'off',
    'space-before-function-paren': 'off'
  }
}
