import React from 'react'
import TestNav from '../components/test-nav'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const Dashboard = () => {
  const { user, loading: userLoading, error } = useFetchUser()

  if (userLoading) {
    return <div>user loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <TestNav />
      {JSON.stringify(user)}
      <h1>Form</h1>
    </>
  )
}

export default withApollo()(Dashboard)
