import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../lib/apollo'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'

const QUERY = gql`
  {
    donor {
      id
      height
      hairColor: hair_color
      eyeColor: eye_color
      user {
        name
      }
    }
  }
`

const Dashboard = () => {
  const { loading: userLoading } = useFetchUser()
  const { loading: donorLoading, data } = useQuery(QUERY)

  if (userLoading || donorLoading) {
    return <div>...</div>
  }

  return (
    <Layout>
      <h1>Dashboard</h1>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Hair Color</th>
          <th>Eye Color</th>
        </tr>
        {data.donor.map(
          ({ id, height, hairColor, eyeColor, user: { name } }) => (
            <tr>
              <th>
                <a href={`donor/${id}`}>{name}</a>
              </th>
              <td>{height} cm</td>
              <td>{hairColor}</td>
              <td>{eyeColor}</td>
            </tr>
          )
        )}
      </table>
    </Layout>
  )
}

export default withApollo(Dashboard, { ssr: false })
