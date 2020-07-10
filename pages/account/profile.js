import React from 'react'
import fetch from 'isomorphic-unfetch'
import { getLayout } from '../../components/default-layout'

class Clock extends React.Component {
  constructor(properties) {
    super(properties)
    this.state = { date: new Date(), session: 'xxx' }
  }

  async componentDidMount() {
    const response = await fetch('/api/me')
    if (response.ok) {
      this.setState({
        session: await response.json(),
      })
    }
  }

  componentWillUnmount() {}

  render() {
    const { date, session } = this.state
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        <pre>{JSON.stringify(session, undefined, 2)}</pre>
      </div>
    )
  }
}

const AccountProfile = () => (
  <div>
    <Clock />
  </div>
)
AccountProfile.getLayout = getLayout

export default AccountProfile
