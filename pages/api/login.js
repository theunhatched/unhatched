import auth0 from '../../lib/auth0'
import config from '../../lib/config'
import absoluteUrl from 'next-absolute-url'

export default async function login(request, response) {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
    const requestUrl = absoluteUrl(request).origin
    console.log('=============')
    console.log({ baseUrl })
    console.log({ requestUrl })
    console.log('=======')
    await auth0.handleLogin(request, response)
  } catch (error) {
    console.error(error)
    response.status(error.status || 500).end(error.message)
  }
}
