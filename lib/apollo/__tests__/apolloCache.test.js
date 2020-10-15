import { InMemoryCache } from '@apollo/client'
import apolloCache from '../apolloCache'

jest.mock('@apollo/client')

describe('apolloCache', () => {
  beforeEach(() => {
    InMemoryCache.mockImplementation(() => ({}))
  })

  subject(() => apolloCache)

  it('instantiates a cache', () => {
    expect(apolloCache).not.toBeUndefined()
    expect(InMemoryCache.mock.calls).toHaveLength(1)
  })
})
