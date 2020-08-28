import React from 'react'
import { useFormik } from 'formik'
import Layout from '../components/layout'
// import Input from '../components/form/input'
// import Form from '../components/form/form'
// import Submit from '../components/form/submit'
import { useFetchUser } from '../lib/user'
import load from '../lib/load'

const AddDonorForm = () => {
  const formik = useFormik({
    initialValues: {
      name: 'alice',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </label>
      <button type="submit">Add</button>
    </form>
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
