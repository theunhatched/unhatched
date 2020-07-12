const AUTH0_DOMAIN = 'philihp.us.auth0.com'
const AUTH0_SCOPE = 'openid profile read:shows offline_access'
const AUTH0_CLIENT_ID = '8zIW7bwGMi8lxzhvK4AZc5OU8JS2Cw7b'

if (typeof window === 'undefined') {
  /**
   * Settings exposed to the server.
   */
  module.exports = {
    AUTH0_CLIENT_ID,
    AUTH0_SCOPE,
    AUTH0_DOMAIN,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    API_AUDIENCE: process.env.API_AUDIENCE,
    API_BASE_URL: process.env.API_BASE_URL,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    SESSION_COOKIE_SECRET: process.env.SESSION_COOKIE_SECRET,
    SESSION_COOKIE_LIFETIME: process.env.SESSION_COOKIE_LIFETIME,
  }
} else {
  /**
   * Settings exposed to the client.
   */
  module.exports = {
    AUTH0_CLIENT_ID,
    AUTH0_SCOPE,
    AUTH0_DOMAIN,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
  }
}
