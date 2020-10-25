import React, { useState } from 'react'
import { gql, useMutation, useSubscription } from '@apollo/client'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const mutation = gql`
  mutation(
    $userId: uuid!
    $hairColor: String!
    $eyeColor: String!
    $birthdate: date!
  ) {
    insert_disclosure_initial_one(
      object: {
        user_id: $userId
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
  subscription {
    disclosure_initial {
      disclosure_id
      hair_color
      eye_color
      created_at
      birthdate
      user_id
      updated_at
    }
  }
`

const TestForm = () => {
  const { user, loading: userLoading, error: userError } = useFetchUser()

  const [userIdInput, setUserId] = useState(
    '9bf03504-bedb-4fe9-832b-cce5c693458e'
  )
  const [hairColorInput, setHairColor] = useState('Blonde')
  const [eyeColorInput, setEyeColor] = useState('Blue')
  const [birthdateInput, setBirthdate] = useState('1984-02-29')

  const [
    addDonor,
    { loading: mutateLoading, error: mutateError },
  ] = useMutation(mutation, {
    onCompleted: (_data) => {
      // console.log('onCompleted', data)
    },
  })
  const {
    loading: donorsLoading,
    error: donorsError,
    data: donorData,
  } = useSubscription(query)

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
    return <div>{donorsError}</div>
  }
  if (mutateError) {
    return <div>{mutateError}</div>
  }

  return (
    <>
      User: {JSON.stringify(user)}
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addDonor({
            variables: {
              userId: userIdInput,
              hairColor: hairColorInput,
              eyeColor: eyeColorInput,
              birthdate: birthdateInput,
            },
          })
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
        <br />
        submitting: {mutateLoading}
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
