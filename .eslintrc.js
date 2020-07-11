module.exports = {
  extends: ['@philihp'],
  env: {
    browser: true,
  },
  rules: {
    'react/forbid-prop-types': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
}
