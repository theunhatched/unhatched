import React from 'react'
import TestNav from '../components/test-nav'
import { withApollo } from '../lib/withApollo'

const TestSignup = () => {
  return (
    <>
      <TestNav />
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="confirm" placeholder="Confirm" />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </>
  )
}

export default withApollo()(TestSignup)
