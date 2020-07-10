import auth0 from '../../lib/auth0'

export default async function me(request, response) {
  try {
    await auth0.handleProfile(request, response)
  } catch (error) {
    console.error(error)
    response.status(error.status || 500).end(error.message)
  }
}
