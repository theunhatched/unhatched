import React from 'react'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const QUERY = gql`
  {
    users {
      name
      id
    }
  }
`

const Dashboard = () => {
  const { user, loading: userLoading } = useFetchUser()
  const { data, loading: donorLoading, error } = useQuery(QUERY)

  if (userLoading) {
    return <div>user loading</div>
  }
  if (donorLoading) {
    return <div>donor loading</div>
  }
  if (error) {
    console.error(error)
    return <div>{error}</div>
  }

  return (
    <>
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
      <h1>Dashboard</h1>
      <pre>
        {`
userLoading: ${userLoading}
user: ${JSON.stringify(user, undefined, 2)}
donorLoading: ${donorLoading}
data: ${JSON.stringify(data, undefined, 2)}
error: ${JSON.stringify(error, undefined, 2)}

        `}
      </pre>
    </>
  )
}

export default withApollo()(Dashboard)
