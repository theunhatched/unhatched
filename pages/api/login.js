import auth0 from '../../lib/auth0'
import config from '../../lib/config'
import absoluteUrl from 'next-absolute-url'

export default async function login(request, response) {
  try {
    console.log('LOGIN')
    console.log(absoluteUrl(request).origin)
    console.log('END')
    await auth0.handleLogin(request, response)
  } catch (error) {
    console.error(error)
    response.status(error.status || 500).end(error.message)
  }
}
