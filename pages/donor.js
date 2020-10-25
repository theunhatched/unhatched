import React from 'react'
import Layout from '../components/layout'
import ProfileSteps from '../components/profile-steps'

const Donor = () => {
  const name = 'Lydia'

  return (
    <Layout>
      <form action="#" method="POST">
        <ProfileSteps active="basic" />
        <h1>Complete your donor profile</h1>
        <p>
          Welcome, {name}! Welcome, Lydia! Before we can start matching you with
          the right potential parties, we&lsquo;ll need to know more about you.
        </p>
        <p>
          <a href="/">Looking for donors instead?</a>
        </p>
        <h2>About you</h2>
        <p>
          Please provide your full legal name below. We&lsquo;ll only share this
          information when you accept a contact request from a recipient.
        </p>
        <div>
          <label htmlFor="givenname">
            First name
            <input type="text" id="givenname" name="givenname" value="Lydia" />
          </label>
        </div>
        <div>
          <label htmlFor="middlename">
            Middle name
            <input type="text" id="middlename" name="middlename" value="" />
            If no middle name, leave empty
          </label>
        </div>
        <div>
          <label htmlFor="surname">
            Last name
            <input type="text" id="surname" name="surname" value="Jiang" />
          </label>
        </div>
        <h2>Your address</h2>
        <p>
          Please provide your mailing address. We&lsquo;ll need this for legal
          reasons, and we won&lsquo;t share this with anyone without your
          consent.
        </p>
        <div>
          <label htmlFor="address1">
            Street address
            <input type="text" id="address1" name="address1" value="Jiang" />
          </label>
        </div>
        <div>
          <label htmlFor="address2">
            Street address line 2
            <input type="text" id="address2" name="address2" value="Jiang" />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" value="Jiang" />
          </label>
        </div>
        <div>
          <label htmlFor="state">
            State
            <input type="text" id="state" name="state" value="Jiang" />
          </label>
        </div>
        <div>
          <label htmlFor="postalcode">
            Zip code
            <input
              type="text"
              id="postalcode"
              name="postalcode"
              value="Jiang"
            />
          </label>
        </div>
        <div>
          <label htmlFor="certify">
            <input type="checkbox" name="certify" />I certify that the
            information I have provided above is true.
          </label>
        </div>
        <input type="submit" value="Save and continue" />
      </form>
    </Layout>
  )
}

export default Donor
