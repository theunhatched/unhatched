import React from 'react'

import Layout from '../../components/layout'
import withAuth from '../../components/with-auth'

// eslint-disable-next-line react/prop-types
const Profile = ({ user }) => (
  <Layout user={user}>
    <h1>Profile</h1>

    <div>
      <h3>Profile (server rendered)</h3>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  </Layout>
)

export default withAuth(Profile)