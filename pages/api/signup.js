import fetch from 'isomorphic-unfetch'
import config from '../../lib/auth0-config'

export default async function signup(req, res) {
  const { email, password } = req.query
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const signedup = await fetch(
    `https://${config.AUTH0_DOMAIN}/dbconnections/signup`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        client_id: config.AUTH0_CLIENT_ID,
        connection: 'Username-Password-Authentication',
        email,
        password,
      }),
    }
  )
  const body = await signedup.json()
  res.end(JSON.stringify(body, undefined, 2))
}
