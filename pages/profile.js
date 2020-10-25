import React from 'react'
import Layout from '../components/layout'
import ProfileSteps from '../components/profile-steps'

const Profile = () => {
  return (
    <Layout>
      <form action="#" method="POST">
        <ProfileSteps active="profile" />
        <h1>Provide your genetic profile</h1>
        <p>
          To match you with the right parties, we&lsquo;ll need to know more
          about your genetic profile, such as your height, eye color, medical
          history, and any hereditary diseases you might have.
        </p>
        <p>
          <a href="/">How is this information used?</a>
        </p>

        <div>Your Profile...</div>

        <div>
          <label htmlFor="certify">
            <input type="checkbox" name="certify" />I certify that the
            information I have provided above is true.
          </label>
        </div>
        <input type="submit" value="Save and continue" />
        <input type="button" value="Go back" />
      </form>
    </Layout>
  )
}

export default Profile
