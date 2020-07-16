import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const DonorProfile = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>Donor Profile</h2>
      <div>
        For users who have been approved as donors, shows requests, etc.
      </div>
    </Layout>
  )
}

export default DonorProfile
