import React from 'react'
import hello from '../hello'

it('runs a test', () => {
  const req = {}
  const res = {
    statusCode: 0,
    json: jest.fn(),
  }
  hello(req, res)
  expect(res.statusCode).toBe(200)
})
