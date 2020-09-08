import login from '../login'
import * as auth0 from '../../../lib/auth0'

describe('auth0', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const handleLogin = jest.fn()
    auth0.default = { handleLogin }
    login()
    expect(handleLogin).toHaveBeenCalled()
  })
})
