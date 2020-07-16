import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const Dashboard = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>Dashboard</h2>
    </Layout>
  )
}

export default Dashboard
