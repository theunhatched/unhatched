import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const Community = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Community</h1>
      <p>Message board, support networks, open to everyone</p>
    </Layout>
  )
}

export default Community
