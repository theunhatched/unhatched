import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import load from '../lib/load'

const DonorProfile = () => {
  const { user, loading } = useFetchUser()
  const { data: donors, error } = load('/api/donors')

  if (error) return <div>{error}</div>
  if (!donors) return <div>...</div>

  return (
    <Layout user={user} loading={loading}>
      <h2>Donor Profile</h2>
      <div>
        For users who have been approved as donors, shows requests, etc.
      </div>
      <pre>{JSON.stringify(donors, undefined, 2)}</pre>
    </Layout>
  )
}

export default DonorProfile
