module.exports = {
  target: 'serverless',
  excludeFile: (path) => /\*.{spec,test}.js/.test(path),
  webpack: (config) => ({
    ...config,
    // Fixes npm packages that depend on `fs` module
    node: {
      fs: 'empty',
    },
  }),
}
