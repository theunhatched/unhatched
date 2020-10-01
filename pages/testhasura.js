import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const QUERY = gql`
  {
    donor {
      id
      height
      hairColor: hair_color
      eyeColor: eye_color
      user {
        name
      }
    }
  }
`

const Dashboard = () => {
  const { user, loading: userLoading } = useFetchUser()
  const { data, loading: donorLoading, error } = useQuery(QUERY)

  // if (userLoading || donorLoading) {
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
        `}
      </pre>
    </>
  )
}

export default withApollo()(Dashboard)
