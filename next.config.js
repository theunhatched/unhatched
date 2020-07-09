require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config, { webpack }) => ({
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.IgnorePlugin(/__tests__\/.*/),
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ],
  }),
}
