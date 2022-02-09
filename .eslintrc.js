module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        indent: [1, 4],
        'space-unary-ops': 2,
        'react/prop-types': 'off',
        'no-return-await': 'off',
        'no-underscore-dangle': 'off',
        'max-len': [
            'warn',
            2000,
        ],
    },
}
