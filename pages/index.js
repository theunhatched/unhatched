import React from 'react'

import { useFetchUser } from '../lib/user'
import { withApollo } from '../lib/withApollo'

const Index = () => {
  const { user, loading } = useFetchUser()
  if (loading) return <>loading</>
  if (!loading && !user) return <>logged out</>
  return <div>Hello</div>
}

export default Index
