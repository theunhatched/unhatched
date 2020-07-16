import config from '../config'

describe('config', () => {
  it('has a client id', () => {
    expect.assertions(1)
    expect(config).toHaveProperty(
      'AUTH0_CLIENT_ID',
      process.env.AUTH0_CLIENT_ID
    )
  })
  it('has an auth0 domain', () => {
    expect.assertions(1)
    expect(config).toHaveProperty('AUTH0_DOMAIN', process.env.AUTH0_DOMAIN)
  })
  it('has an auth0 scope', () => {
    expect.assertions(1)
    expect(config).toHaveProperty('AUTH0_SCOPE', process.env.AUTH0_SCOPE)
  })
  it('has a post logout redirect URI', () => {
    expect.assertions(1)
    expect(config).toHaveProperty('POST_LOGOUT_REDIRECT_URI')
  })
  it('has a redirect URI', () => {
    expect.assertions(1)
    expect(config).toHaveProperty('REDIRECT_URI')
  })

  it('has a cooke lifetime', () => {
    expect.assertions(1)
    expect(config).toHaveProperty(
      'SESSION_COOKIE_LIFETIME',
      process.env.SESSION_COOKIE_LIFETIME
    )
  })
})
