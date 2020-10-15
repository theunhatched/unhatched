import { InMemoryCache } from '@apollo/client'
import apolloCache from '../apolloCache'

jest.mock('@apollo/client')

describe('apolloCache', () => {
  beforeEach(() => {
    InMemoryCache.mockImplementation(() => ({}))
  })

  it('instantiates a cache', () => {
    expect(apolloCache).toBeInstanceOf(InMemoryCache)
  })
})
