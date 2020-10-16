import { useState, useEffect } from 'react'

export const fetchUser = async () => {
  if (typeof window !== 'undefined' && window.__user) {
    return window.__user
  }

  const res = await fetch('/api/me', {})

  if (!res.ok) {
    delete window.__user
    return null
  }

  const json = await res.json()
  if (typeof window !== 'undefined') {
    window.__user = json
  }
  return json
}

export function useFetchUser({ required } = {}) {
  const [loading, setLoading] = useState(
    () => !(typeof window !== 'undefined' && window.__user)
  )
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return null
    }

    return window.__user || null
  })

  useEffect(() => {
    if (!loading && user) return () => {}

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

    return () => {
      isMounted = false
    }
  }, [loading, required, user])

  return { user, loading }
}
