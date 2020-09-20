import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const BecomeADonor = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Become a Donor</h1>
    </Layout>
  )
}

export default BecomeADonor
