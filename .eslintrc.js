module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'import/first': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': 0,
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-fragments': 'off',
    'react/prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 0,
    'import/export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'new-cap': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
};
