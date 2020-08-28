import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import load from '../lib/load'

const Community = () => {
  const { user, loading } = useFetchUser()
  const { data: donors, error } = load('/api/donors')

  if (error) {
    return <pre>{error}</pre>
  }
  if (!donors) {
    return <div>...</div>
  }
  return (
    <Layout user={user} loading={loading}>
      <h1>Community</h1>
      {donors}
    </Layout>
  )
}

export default Community
