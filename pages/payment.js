import React from 'react'
import Layout from '../components/layout'
import ProfileSteps from '../components/profile-steps'

const Payment = () => {
  return (
    <Layout>
      <form action="#" method="POST">
        <ProfileSteps active="payment" />
        <h1>Payment information</h1>
        <p>
          Before you can accept payment from your matched parties, you’ll need
          to provide a way for us to pay you.
        </p>
        <p>
          <a href="/">How is this information used?</a>
        </p>
        <div style={{ backgroundColor: '#7f7f7f' }}>TBD</div>
        <input type="submit" value="Save and continue" />
      </form>
    </Layout>
  )
}

export default Payment
