import fetch from 'isomorphic-unfetch'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import './auth0'

let accessToken

const requestAccessToken = async () => {
  if (accessToken !== undefined) return
  const res = await fetch(`${process.env.APP_HOST}/api/session`)
  if (res.ok) {
    const json = await res.json()
    accessToken = json.accessToken
  } else {
    accessToken = 'public'
  }
}

// remove cached token on 401 from the server
// const resetTokenLink = onError(({ networkError }) => {
//   if (
//     networkError &&
//     networkError.name === 'ServerError' &&
//     networkError.statusCode === 401
//   ) {
//     accessToken = null
//   }
// })

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: 'https://communal-starling-83.hasura.app/v1/graphql',
    credentials: 'include',
    headers, // auth token is fetched on the server side
    fetch,
  })
  return httpLink
}

const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient('wss://communal-starling-83.hasura.app/v1/graphql', {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken() // happens on the client
        return {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        }
      },
    })
  )
}

const createApolloClient = (initialState, headers) => {
  const ssrMode = typeof window === 'undefined'
  let link
  console.log({ ssrMode })
  if (ssrMode) {
    link = createHttpLink(headers)
  } else {
    link = createWSLink()
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  })
}

export default createApolloClient
