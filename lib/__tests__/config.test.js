import config from '../config'

describe('config', () => {
  it('always gives a config', () => {
    expect.assertions(5)
    expect(config).toHaveProperty('AUTH0_CLIENT_ID')
    expect(config).toHaveProperty('AUTH0_DOMAIN', 'philihp.us.auth0.com')
    expect(config).toHaveProperty(
      'AUTH0_SCOPE',
      'openid profile read:shows offline_access'
    )
    expect(config).toHaveProperty('POST_LOGOUT_REDIRECT_URI')
    expect(config).toHaveProperty('REDIRECT_URI')
  })
})
