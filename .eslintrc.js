module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                moduleDirectory: ['node_modules', 'src'],
                alias: {
                    _atoms: './src/_atoms',
                    _molecules: './src/_molecules',
                    _organisms: './src/_organisms',
                    _pages: './src/_pages',
                    _templates: './src/_templates',
                    components: './src/components',
                    containers: './src/containers',
                    utils: './src/utils',
                    interfaces: './src/interfaces',
                },
            },
        },
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier

        // WARNING: Let this last line at the bottom of extends
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    // root: true,
    env: {
        node: true,
        jest: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                'react-hooks/exhaustive-deps': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                'react/prop-types': 'off',
                'prettier/prettier': ['error'],
                'react/display-name': 'off',
            },
        },
    ],
}
