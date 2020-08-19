module.exports = {
    env: {
        es2020: true,
        browser: true,
        jest: true
    },
    extends: ['airbnb', 'airbnb/hooks'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'no-console': 0,
        semi: 'off',
        'no-unused-vars': 'warn',
        indent: ['error', 4],
        'comma-dangle': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': [1, 4],
        'import/no-unresolved': 'off',
        'object-curly-newline': 'off',
        'arrow-body-style': 'warn',
        'react/jsx-indent-props': 'off'
    }
};
