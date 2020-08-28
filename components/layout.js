import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { UserProvider } from '../lib/user'

const Layout = ({ user, loading, style, children }) => (
  <>
    <div className="Layout">
      <UserProvider value={{ user, loading }}>
        <Head>
          <title>Unhatched</title>
          <link href="http://www.theunhatched.com" rel="canonical" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Oswald&family=Ruda&family=Playfair+display"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
        </Head>
        <Header style={style} />
        <div className="Content">{children}</div>
        <Footer style={style} />
      </UserProvider>
    </div>
    <style jsx>{`
      .Layout {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template:
          'head' 77px
          'main' 1fr
          'foot' 30px
          / 1fr;
        background-color: ${style?.backgroundColor};
      }
      .Content {
        margin: 10px auto;
        width: 1200px;
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      a {
        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </>
)

Layout.propTypes = {
  user: PropTypes.any,
  loading: PropTypes.bool,
  children: PropTypes.any.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
}

Layout.defaultProps = {
  user: undefined,
  loading: false,
  style: {
    backgroundColor: undefined,
  },
}

export default Layout
