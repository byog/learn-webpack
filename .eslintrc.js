module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        // 'eslint:recommended',
        'plugin:vue/recommended',
        'airbnb-base',
        'prettier',
    ],
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        semi: ['error', 'never'],
        indent: ['error', 4],
    },
}
