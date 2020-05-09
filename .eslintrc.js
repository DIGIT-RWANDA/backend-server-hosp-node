module.exports = {
    ignorePatterns: ['bin'],
    extends: [
        'plugin: @typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: [',/tsconfig.json', './test/tsconfig.json', './src/db/tsconfig.json'],
        tsconfigRootDir: '/'
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'arrow-body-style': ['warn', 'as-needed'],
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        "no-param-reassign": ['error', { props: false }],
        'import/prefer-default-export': 'off',
        curly: ['error', 'all'],
        'eol-last': ['error', 'always'],
        'no-debugger': 'error',
        'import/no-unresolved': 'off',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off'

    }
}
