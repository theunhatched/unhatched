// import React from 'react'
// import { shallow } from 'enzyme'
import { ApolloClient } from '@apollo/client'

import { initOnContext, withApollo } from '../withApollo'

describe('withApollo', () => {
  describe('initOnContext', () => {
    const apolloState = { ok: true }
    const ctx = { apolloState }

    subject(() => initOnContext)
    it('retains state in context', () => {
      expect.assertions(1)
      $subject(ctx)
      expect(ctx.apolloState).toEqual(apolloState)
    })
    it('creates an ApolloClient in context', () => {
      expect.assertions(1)
      $subject(ctx)
      expect(ctx.apolloClient).toBeInstanceOf(ApolloClient)
    })
  })

  describe('withApollo', () => {
    subject(() => withApollo)
    // come back to this later... this doesn't seem to wanna work.
    //
    // it('works', () => {
    //   const BaseComponent = () => <p>base</p>
    //   const WrappedComponent = withApollo()(BaseComponent)()
    //   const wrapper = shallow(WrappedComponent)
    //   expect(wrapper.find(BaseComponent)).toHaveLength(1)
    // })
  })
})
