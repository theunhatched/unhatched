module.exports = {
  target: 'serverless',
  webpack: (config) => ({
    ...config,
    // Fixes npm packages that depend on `fs` module
    node: {
      fs: 'empty',
    },
  }),
}
