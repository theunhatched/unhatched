import React from 'react'
import Layout from '../components/layout'

const Dashboard = () => {
  return (
    <Layout>
      <h1>Your dashboard</h1>
      <div>5 Recipient requests</div>
      <div>4 Recipient bids</div>
      <div>1 Accepted application</div>
      <div>$1,213 Payment pending</div>
      <p>
        <span role="img" aria-label="Thumbs-up">
          👍
        </span>{' '}
        You’re doing great! You’re hitting 2% above market rate.
      </p>
      <ul>
        <li>Active recipient requests</li>
        <li>Closed requests</li>
      </ul>
      <table border="1">
        <thead>
          <tr>
            <th>Recipient name</th>
            <th>Location</th>
            <th>Starting bid</th>
            <th>Donor match</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amy Geist</td>
            <td>Fostor City, CA</td>
            <td>$5,000.00</td>
            <td>80%</td>
            <td>
              <a href="/">View application</a>
            </td>
          </tr>
          <tr>
            <td>Tori Caldwell</td>
            <td>Boston, MA</td>
            <td>$3,124.99</td>
            <td>50%</td>
            <td>
              <a href="/">View application</a>
            </td>
          </tr>
          <tr>
            <td>Daniella R. Johnson</td>
            <td>New York City, NY</td>
            <td>$6.302.23</td>
            <td>10%</td>
            <td>
              <a href="/">View application</a>
            </td>
          </tr>
          <tr>
            <td>Chun-hwa Park</td>
            <td>San Mateo, CA</td>
            <td>$4,000.00</td>
            <td>95%</td>
            <td>
              <a href="/">View application</a>
            </td>
          </tr>
          <tr>
            <td>Chrissie Stephenson</td>
            <td>Puget Sound, WA</td>
            <td>Negotiable</td>
            <td>64%</td>
            <td>
              <a href="/">View application</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div>&lt; Page 1 of 1 &gt;</div>
    </Layout>
  )
}

export default Dashboard
