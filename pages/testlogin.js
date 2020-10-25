import React from 'react'
import Router from 'next/router'

import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const IndexPage = () => {
  const { user, loading } = useFetchUser({ required: true })
  if (!loading && !user) {
    return 'not logged in '
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          Router.push('/api/login')
        }}
      >
        Log In
      </button>
      {JSON.stringify(user)}
    </div>
  )
}

export default withApollo({ ssr: true })(IndexPage)

// enable the line below for client side rendering of <TodoPrivateWrapper />
// export default withApollo()(IndexPage)
