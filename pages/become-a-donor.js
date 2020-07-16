import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const BecomeADonor = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>Become a Donor</h2>
      <div>Entry to donor signup flow</div>
    </Layout>
  )
}

export default BecomeADonor
