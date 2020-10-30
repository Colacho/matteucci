module.exports = {
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
  globals: {
    // cloudinary: true,
  },
  plugins: ['import'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['app', './src'],
        ['@', './src'],
      ],
    },
    'import/extensions': ['.js', '.jsx'],
  },
};
