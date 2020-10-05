import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const IndexPage = () => {
  const { user, loading } = useFetchUser({ required: true })
  if (!loading && !user) {
    return 'not logged in '
  }
  return (
    <div>
      <ul>
        <li>
          <Link href="/testlogin">
            <a>testlogin</a>
          </Link>
        </li>
        <li>
          <Link href="/api/logout">
            <a>testlogout</a>
          </Link>
        </li>
        <li>
          <Link href="/testhasura">
            <a>testhasura</a>
          </Link>
        </li>
      </ul>
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
