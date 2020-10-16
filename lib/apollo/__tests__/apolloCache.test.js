import { InMemoryCache } from '@apollo/client'
import apolloCache from '../apolloCache'

jest.mock('@apollo/client')

describe('apolloCache', () => {
  beforeEach(() => {
    InMemoryCache.mockImplementation(() => ({}))
  })

  subject(() => apolloCache)

  it('instantiates a cache', () => {
    expect($subject).toBeInstanceOf(InMemoryCache)
  })
})
