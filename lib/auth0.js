import { initAuth0 } from '@auth0/nextjs-auth0'
import absoluteUrl from 'next-absolute-url'
import config from './config'

const getConfigWith = (baseUrl) => {
  const generatedConfig = config(baseUrl)
  return {
    audience: generatedConfig.API_AUDIENCE,
    clientId: generatedConfig.AUTH0_CLIENT_ID,
    clientSecret: generatedConfig.AUTH0_CLIENT_SECRET,
    scope: generatedConfig.AUTH0_SCOPE,
    domain: generatedConfig.AUTH0_DOMAIN,
    redirectUri: generatedConfig.REDIRECT_URI,
    postLogoutRedirectUri: generatedConfig.POST_LOGOUT_REDIRECT_URI,
    session: {
      // The secret used to encrypt the cookie.
      cookieSecret: generatedConfig.SESSION_COOKIE_SECRET,
      // The cookie lifetime (expiration) in seconds.
      cookieLifetime: generatedConfig.SESSION_COOKIE_LIFETIME,
      storeIdToken: false,
      storeRefreshToken: false,
      storeAccessToken: true,
    },
  }
}

export default (request) => {
  const requestUrl = absoluteUrl(request).origin
  return initAuth0(getConfigWith(requestUrl))
}
