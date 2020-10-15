import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'
import TestNav from '../components/test-nav'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const mutation = gql`
  mutation(
    $userId: uuid!
    $profile: String!
    $hairColor: String!
    $eyeColor: String!
    $birthdate: date!
  ) {
    insert_donors_one(
      object: {
        user_id: $userId
        profile: $profile
        eye_color: $eyeColor
        hair_color: $hairColor
        birthdate: $birthdate
      }
    ) {
      id
    }
  }
`

const query = gql`
  query {
    donors {
      id
      hair_color
      eye_color
      created_at
      birthdate
      user_id
      updated_at
      profile
    }
  }
`

const TestForm = () => {
  const { user, loading: userLoading, error: userError } = useFetchUser()

  const [userIdInput, setUserId] = useState(
    '9bf03504-bedb-4fe9-832b-cce5c693458e'
  )
  const [profileInput, setProfile] = useState('## My Profile')
  const [hairColorInput, setHairColor] = useState('Blonde')
  const [eyeColorInput, setEyeColor] = useState('Blue')
  const [birthdateInput, setBirthdate] = useState('1984-02-29')

  const [addDonor] = useMutation(mutation)
  const {
    loading: donorsLoading,
    error: donorsError,
    data: donorData,
  } = useQuery(query)

  if (userLoading) {
    return <div>user loading</div>
  }
  if (donorsLoading) {
    return <div>donors loading</div>
  }
  if (userError) {
    return <div>{userError}</div>
  }
  if (donorsError) {
    return <pre>{donorsError}</pre>
  }

  return (
    <>
      <TestNav />
      User: {JSON.stringify(user)}
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          console.log('submit')
          e.preventDefault()
          addDonor({
            variables: {
              userId: userIdInput,
              profile: profileInput,
              hairColor: hairColorInput,
              eyeColor: eyeColorInput,
              birthdate: birthdateInput,
            },
          })
          console.log('done')
        }}
      >
        <div>
          <input
            type="text"
            name="userId"
            value={userIdInput}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="profile"
            value={profileInput}
            onChange={(e) => setProfile(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="hairColor"
            value={hairColorInput}
            onChange={(e) => setHairColor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="eyeColor"
            value={eyeColorInput}
            onChange={(e) => setEyeColor(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="birthdate"
            value={birthdateInput}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <input type="submit" value="Save" />
      </form>
      <h3>Donors</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre>{JSON.stringify(donorData, undefined, 2)}</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default withApollo()(TestForm)
