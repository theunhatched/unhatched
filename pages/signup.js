import React from 'react'
import Layout from '../components/layout'

const Profile = () => {
  return (
    <Layout>
      <form action="#" method="POST">
        <h1>Sign up</h1>
        <p>Sign up for an account to begin your matching process</p>
        <h2>What&lsquo;s your primary goal?</h2>
        <label htmlFor="sponsor">
          Sponsor
          <input type="radio" name="intent" id="sponsor" value="sponsor" />
        </label>
        <label htmlFor="donor">
          Donor
          <input type="radio" name="intent" id="donor" value="donor" />
        </label>
        <h2>About you</h2>
        <div>
          <label htmlFor="email">
            Email address
            <input type="text" name="email" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="givenname">
            First name
            <input type="text" name="givenname" id="givenname" />
          </label>
        </div>
        <div>
          <label htmlFor="surname">
            Last name
            <input type="text" name="surname" id="surname" />
          </label>
        </div>
        <input type="submit" value="Create your account" />
      </form>
    </Layout>
  )
}

export default Profile
