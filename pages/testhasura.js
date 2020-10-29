import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const QUERY = gql`
  {
    user {
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
