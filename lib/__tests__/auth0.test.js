import * as sdk from '@auth0/nextjs-auth0'
import auth0 from '../auth0'

describe('auth0', () => {
  beforeEach(() => {
    sdk.initAuth0 = jest.fn()
    sdk.initAuth0.mockReturnValue({ ok: 'ok' })
  })

  it('returns result of initAuth0', () => {
    expect.assertions(1)
    auth0()
    expect(sdk.initAuth0).toHaveBeenCalled()
  })
})
