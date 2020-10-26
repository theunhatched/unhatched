// import App from 'next/app'
import Router from 'next/router'
import { pageview } from '../lib/gtag'
import '../lib/tailwind.css'

Router.events.on('routeChangeComplete', pageview)

const App = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Component {...pageProps} />
)

export default App
