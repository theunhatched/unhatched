// import App from 'next/app'
import Router from 'next/router'
import { pageview } from '../lib/gtag'
import '../styles/index.css'

Router.events.on('routeChangeComplete', pageview)

const App = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Component {...pageProps} />
)

export default App
