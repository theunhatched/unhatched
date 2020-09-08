import me from '../me'
import * as auth0 from '../../../lib/auth0'

describe('auth0', () => {
  it('runs a test', () => {
    const handleProfile = jest.fn()
    auth0.default = { handleProfile }
    me('REQ', 'RES')
    // expect(auth0.default).toBeCalledWith({})

    // expect.assertions(1)
    // const request = {}
    // const response = {
    //   statusCode: 0,
    //   json: jest.fn(),
    // }
    // hello(request, response)
    // expect(response.statusCode).toBe(200)
  })
})

// import auth0 from '../../lib/auth0'

// export default async function me(req, res) {
//   try {
//     await auth0.handleProfile(req, res)
//   } catch (error) {
//     console.error(error)
//     res.status(error.status || 500).end(error.message)
//   }
// }
