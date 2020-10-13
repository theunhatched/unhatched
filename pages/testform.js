import React from 'react'
// import gql from 'graphql-tag'
// import { Frontier } from 'frontier-forms'
// import { myApplicationKit } from './uiKit'
// import { client } from './apollo-client'
import TestNav from '../components/test-nav'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

// const mutation = gql`
//   mutation($user: User!) {
//     createUser(user: $user) {
//       id
//     }
//   }
// `

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

      {/* <Frontier client={client} mutation={mutation} uiKit={myApplicationKit} /> */}
    </>
  )
}

export default withApollo()(Dashboard)
