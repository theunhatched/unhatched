import React from 'react'
import { withApollo } from '../lib/withApollo'

const TestSignup = () => {
  return (
    <>
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
