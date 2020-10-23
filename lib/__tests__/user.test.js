import React from 'react'
import { shallow } from 'enzyme'
import { fetchUser, useFetchUser } from '../user'

describe('user', () => {
  beforeEach(() => {
    window.__user = undefined
  })

  describe('fetchUser', () => {
    subject(fetchUser)
    it('returns window.__user, if it exists', async () => {
      expect.assertions(1)
      window.__user = 'USER'
      await expect($subject).resolves.toBe('USER')
    })
    it('returns null if not ok', async () => {
      expect.assertions(3)
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
      })
      await expect($subject).resolves.toBeUndefined()
      expect(fetch).toHaveBeenCalledWith('/api/me')
      expect(window.__user).toBeUndefined()
    })
    it('returns what the fetch returned', async () => {
      expect.assertions(3)
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => 'RESPONSE',
      })
      await expect($subject).resolves.toBe('RESPONSE')
      expect(fetch).toHaveBeenCalledWith('/api/me')
      expect(window.__user).toBe('RESPONSE')
    })
  })

  describe('useFetchUser', () => {
    let useEffect
    let useState

    const Harness = () => {
      useFetchUser()
      return <div />
    }

    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => 'RESPONSE',
      })
      useEffect = jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
      useState = jest
        .spyOn(React, 'useState')
        .mockImplementation((s) => [s, () => {}])
    })

    it('calls useState and useEffect', () => {
      expect.assertions(2)
      shallow(<Harness />)
      expect(useEffect).toHaveBeenCalled()
      expect(useState).toHaveBeenCalledTimes(2)
    })
  })
})
