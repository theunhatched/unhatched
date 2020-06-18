import hello from '../hello'

describe('hello', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const req = {}
    const res = {
      statusCode: 0,
      json: jest.fn(),
    }
    hello(req, res)
    expect(res.statusCode).toBe(200)
  })
})
