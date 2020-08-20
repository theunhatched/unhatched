import React from 'react'
import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const fetcher = async (path) => {
  const res = await fetch(path)
  return res.json()
}

const Community = () => {
  const { user, loading } = useFetchUser()
  const { data: donors, error } = useSWR('/api/donors', fetcher)

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
