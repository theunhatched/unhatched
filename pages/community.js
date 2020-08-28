import React from 'react'
import { Formik, Field } from 'formik'
import Layout from '../components/layout'
// import Input from '../components/form/input'
// import Form from '../components/form/form'
// import Submit from '../components/form/submit'
import { useFetchUser } from '../lib/user'
import load from '../lib/load'

const AddDonorForm = () => {
  return (
    <Formik
      initialValues={{ name: 'alice' }}
      onSubmit={async (values) => {
        await fetch('/api/donors/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        })
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name" />
        </form>
      )}
    </Formik>
  )
}

const Community = () => {
  const { user, loading } = useFetchUser()
  const { data: donors, error } = load('/api/donors')

  if (error) {
    return <pre>{error}</pre>
  }
  if (!donors) {
    return <div>...</div>
  }
  return (
    <Layout user={user} loading={loading}>
      <h1>Community</h1>
      <AddDonorForm />
      <pre>{JSON.stringify(donors, undefined, 2)}</pre>
    </Layout>
  )
}

export default Community
