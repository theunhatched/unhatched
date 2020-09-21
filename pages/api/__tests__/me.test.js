import me from '../me'
import * as auth0 from '../../../lib/auth0'

describe('auth0', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const handleProfile = jest.fn()
    auth0.default = () => ({
      handleProfile,
    })
    me()
    expect(handleProfile).toHaveBeenCalled()
  })
})
