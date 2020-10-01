import logout from '../logout'
import * as auth0 from '../../../lib/auth0'

describe('api/logout', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const handleLogout = jest.fn()
    auth0.default = { handleLogout }
    logout()
    expect(handleLogout).toHaveBeenCalled()
  })
})
