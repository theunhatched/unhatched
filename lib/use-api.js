import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'

function initialState(parameters) {
  return {
    responseponse: undefined,
    error: undefined,
    isLoading: true,
    ...parameters,
  }
}

export default (url, options = {}) => {
  const [state, setState] = useState(() => initialState())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...options,
        })

        if (response.status >= 400) {
          setState(
            initialState({
              error: await response.json(),
              isLoading: false,
            })
          )
        } else {
          setState(
            initialState({
              response: await response.json(),
              isLoading: false,
            })
          )
        }
      } catch (error) {
        setState(
          initialState({
            error: {
              error: error.message,
            },
            isLoading: false,
          })
        )
      }
    }
    fetchData()
  })
  return state
}
