import auth0 from '../auth0'

describe('auth0', () => {
  it('returns result of initAuth0', () => {
    expect.assertions(1)
    expect(auth0).toHaveProperty('isBrowser', true)
  })
})
