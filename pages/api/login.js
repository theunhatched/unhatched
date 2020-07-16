import auth0 from '../../lib/auth0'
import config from '../../lib/config'

export default async function login(request, response) {
  try {
    console.log('LOGIN')
    console.log(config)
    console.log('REQ')
    console.log(request.host)
    console.log(request.protocol)
    console.log(request.method)
    console.log(request.path)
    console.log('ENV')
    console.log(process.env)
    console.log('END')
    await auth0.handleLogin(request, response)
  } catch (error) {
    console.error(error)
    response.status(error.status || 500).end(error.message)
  }
}
