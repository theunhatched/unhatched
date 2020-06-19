import hello from '../hello'

describe('hello', () => {
  it('runs a test', () => {
    expect.assertions(1)
    const request = {}
    const response = {
      statusCode: 0,
      json: jest.fn(),
    }
    hello(request, response)
    expect(response.statusCode).toBe(200)
  })
})
