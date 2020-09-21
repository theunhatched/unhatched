import callback from '../callback'
import * as auth0 from '../../../lib/auth0'

describe('auth0', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const handleCallback = jest.fn()
    auth0.default = () => ({
      handleCallback,
    })
    callback()
    expect(handleCallback).toHaveBeenCalled()
  })
})
