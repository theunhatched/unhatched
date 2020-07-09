module.exports = {
  webpack: (config, { webpack }) => ({
    ...config,
    plugins: [...config.plugins, new webpack.IgnorePlugin(/__tests__\/.*/)],
  }),
}
