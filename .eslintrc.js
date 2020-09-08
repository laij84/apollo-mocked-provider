module.exports = {
    extends: [
        'prettier',
        'react-app',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
    ],
    plugins: [
        'prettier', //
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    rules: {
        'prettier/prettier': 'error',
        semi: ['error', 'never'],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        'import/no-commonjs': 'off',
        'import/no-default-export': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
            'error',
            {
                'newlines-between': 'always-and-inside-groups',
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal'],
            },
        ],
        'import/prefer-default-export': 'off',
        'import/no-namespace': 'off',
        'import/no-nodejs-modules': 'off',
        'import/named': 'off',
        'no-empty': 'warn',
        'no-console': 'warn',
        'react-native/no-inline-styles': 'off',
        'react/jsx-no-bind': 'off',
        'react/prop-types': 'off',
        'react/jsx-handler-names': 'off',
        'react/display-name': 'off',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['block-like'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['function'],
            },
        ],
        'max-len': 'off',
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'padded-blocks': ['error', { classes: 'always' }],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'react/jsx-closing-bracket-location': [1, 'line-aligned'],
        'react-native/no-color-literals': 1,
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'multiline-ternary': ['error', 'always-multiline'],
        'class-methods-use-this': 'off',
        'no-invalid-this': 'off',
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    parser: 'babel-eslint',
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true,
                    },
                ],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'none',
                        ignoreRestSiblings: true,
                    },
                ],
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
                // typescript-eslint specific options
                warnOnUnsupportedTypeScriptVersion: true,
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}