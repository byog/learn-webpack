module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        // 'eslint:recommended',
        'plugin:vue/recommended',
        'airbnb',
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
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}
