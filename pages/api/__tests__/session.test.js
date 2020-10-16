import fetch from 'isomorphic-unfetch'
import http from 'http'
import listen from 'test-listen'
import { apiResolver } from 'next/dist/next-server/server/api-utils'
import handler from '../session'
import * as auth0 from '../../../lib/auth0'

describe('api/session', () => {
  let server
  let url

  beforeAll(async () => {
    server = http.createServer((req, res) =>
      apiResolver(req, res, undefined, handler)
    )
    url = await listen(server)
  })

  afterAll(() => {
    server.close()
  })

  it('spits back our access token', async () => {
    expect.assertions(2)

    const accessToken = 'ACCESS_TOKEN'
    const getAccessToken = jest.fn()
    getAccessToken.mockReturnValue({ accessToken })
    auth0.default = {
      tokenCache: () => ({
        getAccessToken,
      }),
    }

    const response = await fetch(url)
    const jsonResult = await response.json()
    expect(response.status).toBe(200)
    expect(jsonResult).toMatchObject({ accessToken })
  })
})
