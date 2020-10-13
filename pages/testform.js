import React from 'react'
import gql from 'graphql-tag'
import { Frontier } from 'frontier-forms'
import { ApolloConsumer } from '@apollo/client'
import TestNav from '../components/test-nav'
import { withApollo } from '../lib/withApollo'
import { useFetchUser } from '../lib/user'

const mutation = gql`
  mutation(
    $user_id: String!
    $profile: String!
    $hair_color: String!
    $eye_color: String!
    $birthdate: String!
  ) {
    insert_donors_one(
      object: {
        user_id: $user_id
        profile: $profile
        eye_color: $eye_color
        hair_color: $hair_color
        birthdate: $birthdate
      }
    ) {
      id
    }
  }
`

const TestForm = () => {
  const { user, loading: userLoading, error } = useFetchUser()

  if (userLoading) {
    return <div>user loading</div>
  }
  if (error) {
    return <div>{error}</div>
  }

  return (
    <ApolloConsumer>
      {(client) => (
        <>
          <TestNav />
          User: {JSON.stringify(user)}
          <h1>Form</h1>
          <Frontier client={client} mutation={mutation}>
            {({ state, modifiers }) => {
              return (
                <form onSubmit={() => modifiers.save()}>
                  <div>
                    <input
                      type="text"
                      name="user_id"
                      value={state.values.user_id}
                      onChange={modifiers.user_id.change}
                    />
                    {state.errors.user_id && (
                      <p>Error: {state.errors.user_id}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="profile"
                      value={state.values.profile}
                      onChange={modifiers.profile.change}
                    />
                    {state.errors.profile && (
                      <p>Error: {state.errors.profile}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="hair_color"
                      value={state.values.hair_color}
                      onChange={modifiers.hair_color.change}
                    />
                    {state.errors.hair_color && (
                      <p>Error: {state.errors.hair_color}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="eye_color"
                      value={state.values.eye_color}
                      onChange={modifiers.eye_color.change}
                    />
                    {state.errors.eye_color && (
                      <p>Error: {state.errors.eye_color}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="birthdate"
                      value={state.values.birthdate}
                      onChange={modifiers.birthdate.change}
                    />
                    {state.errors.birthdate && (
                      <p>Error: {state.errors.birthdate}</p>
                    )}
                  </div>
                  <input type="submit" value="Save" />
                </form>
              )
            }}
          </Frontier>
        </>
      )}
    </ApolloConsumer>
  )
}

export default withApollo()(TestForm)
