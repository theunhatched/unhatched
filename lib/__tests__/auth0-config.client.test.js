/**
 * @jest-environment jsdom
 */

describe('auth0-config', () => {
  const ORIGINAL_ENV = process.env
  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ORIGINAL_ENV }
  })
  afterAll(() => {
    process.env = ORIGINAL_ENV
  })
  it('has the required keys', () => {
    process.env.AUTH0_CLIENT_ID = 'client_id'
    process.env.AUTH0_CLIENT_SECRET = 'client_secret'
    process.env.AUTH0_AUDIENCE = 'audience'
    process.env.AUTH0_SCOPE = 'scope'
    process.env.AUTH0_DOMAIN = 'domain'
    process.env.REDIRECT_URI = 'redirect_uri'
    process.env.POST_LOGOUT_REDIRECT_URI = 'redirect_uri'
    process.env.SESSION_COOKIE_SECRET = 'cookie_secret'
    process.env.SESSION_COOKIE_LIFETIME = 'cookie_lifetime'

    // eslint-disable-next-line global-require
    const auth0Config = require('../auth0-config')

    expect(auth0Config).toMatchObject({
      AUTH0_CLIENT_ID: 'client_id',
      AUTH0_AUDIENCE: 'audience',
      AUTH0_SCOPE: 'scope',
      AUTH0_DOMAIN: 'domain',
      REDIRECT_URI: 'redirect_uri',
      POST_LOGOUT_REDIRECT_URI: 'redirect_uri',
    })
  })
  it('does not have expose secrets to the client bundle', () => {
    process.env.AUTH0_CLIENT_SECRET = 'client_secret'
    process.env.SESSION_COOKIE_SECRET = 'cookie_secret'
    process.env.SESSION_COOKIE_LIFETIME = 'cookie_lifetime'
    // eslint-disable-next-line global-require
    const auth0Config = require('../auth0-config')

    expect(auth0Config).not.toHaveProperty('AUTH0_CLIENT_SECRET')
    expect(auth0Config).not.toHaveProperty('SESSION_COOKIE_SECRET')
    expect(auth0Config).not.toHaveProperty('SESSION_COOKIE_LIFETIME')
  })
})
