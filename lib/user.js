import React from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState

const User = React.createContext({ user: undefined, loading: false })

export const fetchUser = async () => {
  if (userState !== undefined) {
    return userState
  }

  const response = await fetch('/api/me')
  userState = response.ok ? await response.json() : undefined
  return userState
}

export const UserProvider = ({ value, children }) => {
  // If the user was fetched in SSR add it to userState so we don't fetch it again
  const { user } = value
  React.useEffect(() => {
    if (!userState && user) {
      userState = user
    }
  }, [user])

  return <User.Provider value={value}>{children}</User.Provider>
}
UserProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.shape({ user: PropTypes.any.isRequired }).isRequired,
  children: PropTypes.element.isRequired,
}

export const useUser = () => React.useContext(User)

export const useFetchUser = () => {
  const [data, setUser] = React.useState({
    user: userState || undefined,
    loading: userState === undefined,
  })

  React.useEffect(() => {
    if (userState !== undefined) {
      return
    }

    let isMounted = true

    fetchUser().then((user) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        setUser({ user, loading: false })
      }
    })

    // TODO look at this later
    // eslint-disable-next-line consistent-return
    return () => {
      isMounted = false
    }
    // TODO look at this later
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState])

  return data
}
