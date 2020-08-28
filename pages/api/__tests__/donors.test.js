import http from 'http'
import fetch from 'isomorphic-unfetch'
import listen from 'test-listen'
import { apiResolver } from 'next/dist/next-server/server/api-utils'
import handler from '../donors'
import db from '../../../lib/db'

describe('donors', () => {
  let server
  let url
  beforeAll(async (done) => {
    await db.migrate.latest()
    await db.seed.run()
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
    const jsonResult = await response.json()
    expect(response.status).toBe(200)
    expect(jsonResult[0]).toEqual(
      expect.objectContaining({ id: 1, name: 'alice' })
    )
    expect(jsonResult[1]).toEqual(
      expect.objectContaining({ id: 2, name: 'betty' })
    )
    expect(jsonResult[2]).toEqual(
      expect.objectContaining({ id: 3, name: 'cindy' })
    )
  })
})
