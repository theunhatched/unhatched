import http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { apiResolver } from 'next/dist/next-server/server/api-utils'
import handler from '../donors'

describe('donors', () => {
  let server
  let url
  beforeAll(async (done) => {
    server = http.createServer((req, res) =>
      apiResolver(req, res, undefined, handler)
    )
    url = await listen(server)
    done()
  })
  afterAll((done) => {
    server.close(done)
  })

  test('200', async () => {
    const response = await fetch(url)
    // const jsonResult = await response.json()
    expect(response.status).toBe(200)
    // expect(jsonResult).toBe({})
  })
})
