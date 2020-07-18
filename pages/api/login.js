import absoluteUrl from 'next-absolute-url'
import auth0 from '../../lib/auth0'

export default async function login(request, response) {
  try {
    // TODO: this should happen at every URL to redirect to canonical URLs.
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
    const requestUrl = absoluteUrl(request).origin
    if (baseUrl !== requestUrl) {
      response.writeHead(301, { Location: `${baseUrl}${request.url}` })
      response.end()
    } else {
      await auth0.handleLogin(request, response)
    }
  } catch (error) {
    console.error(error)
    response.status(error.status || 500).end(error.message)
  }
}
