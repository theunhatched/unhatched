import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export async function fetchUser(cookie = '') {
  // eslint-disable-next-line no-underscore-dangle
  if (typeof window !== 'undefined' && window.__user) {
    // eslint-disable-next-line no-underscore-dangle
    return window.__user
  }

  const res = await fetch(
    '/api/me',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {}
  )

  if (!res.ok) {
    // eslint-disable-next-line no-underscore-dangle
    delete window.__user
    return null
  }

  const json = await res.json()
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    window.__user = json
  }
  return json
}

export function useFetchUser({ required } = {}) {
  const [loading, setLoading] = useState(
    // eslint-disable-next-line no-underscore-dangle
    () => !(typeof window !== 'undefined' && window.__user)
  )
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    // eslint-disable-next-line no-underscore-dangle
    return window.__user || null
  })

  useEffect(
    () => {
      if (!loading && user) {
        return
      }
      setLoading(true)
      let isMounted = true

      fetchUser().then((uuser) => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          // When the user is not logged in but login is required
          if (required && !uuser) {
            window.location.href = '/api/login'
            return
          }
          setUser(uuser)
          setLoading(false)
        }
      })

      // eslint-disable-next-line consistent-return
      return () => {
        isMounted = false
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return { user, loading }
}
