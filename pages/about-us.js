import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const BecomeADonor = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>About Us</h2>
      <div>Placeholder text here</div>
    </Layout>
  )
}

export default BecomeADonor
