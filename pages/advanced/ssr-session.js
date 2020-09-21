import React from 'react'
import PropTypes from 'prop-types'

// This import is only needed when checking authentication status directly from getInitialProps
import auth0 from '../../lib/auth0'
import { fetchUser } from '../../lib/user'
import Layout from '../../components/layout'

const Session = ({ user }) => {
  const { picture, nickname, name } = user
  return (
    <Layout user={user}>
      <h1>Session</h1>

      <div>
        <h3>Session (server rendered)</h3>
        <img src={picture} alt="user" />
        <p>nickname: {nickname}</p>
        <p>name: {name}</p>
      </div>
    </Layout>
  )
}

Session.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

Session.defaultProps = {
  user: {
    picture: undefined,
    nickname: undefined,
    name: undefined,
  },
}

Session.getInitialProps = async ({ req, res }) => {
  // On the server-side you can check authentication status directly
  // However in general you might want to call API Routes to fetch data
  // An example of directly checking authentication:
  if (typeof window === 'undefined') {
    const { user } = await auth0().getSession(req)
    if (!user) {
      res.writeHead(302, {
        Location: '/api/login',
      })
      res.end()
      return { user: undefined }
    }
    return { user }
  }

  // To do fetches to API routes you can pass the cookie coming from the incoming request on to the fetch
  // so that a request to the API is done on behalf of the user
  // keep in mind that server-side fetches need a full URL, meaning that the full url has to be provided to the application
  const cookie = req && req.headers.cookie
  const user = await fetchUser(cookie)

  // A redirect is needed to authenticate to Auth0
  if (!user) {
    if (typeof window === 'undefined') {
      res.writeHead(302, {
        Location: '/api/login',
      })
      return res.end()
    }

    window.location.href = '/api/login'
  }

  return { user }
}

export default Session
