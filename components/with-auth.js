import React, { Component } from 'react'

import auth0 from '../lib/auth0'
import { fetchUser } from '../lib/user'
import createLoginUrl from '../lib/url-helper'
import RedirectToLogin from './login-redirect'

export default function withAuth(InnerComponent) {
  return class Authenticated extends Component {
    static async getInitialProps(context) {
      if (!context.req) {
        const user = await fetchUser()
        return {
          user,
        }
      }

      const session = await auth0.getSession(context.req)
      if (!session || !session.user) {
        context.res.writeHead(302, {
          Location: createLoginUrl(context.req.url),
        })
        context.res.end()
        return { user: undefined }
      }

      return { user: session.user }
    }

    render() {
      // eslint-disable-next-line react/prop-types
      const { user } = this.props
      if (!user) {
        return <RedirectToLogin />
      }

      return (
        <div>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <InnerComponent {...this.props} user={user} />
        </div>
      )
    }
  }
}
