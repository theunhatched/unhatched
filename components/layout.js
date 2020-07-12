import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { UserProvider } from '../lib/user'

const Layout = ({ user, loading, children }) => (
  <UserProvider value={{ user, loading }}>
    <div className="Layout">
      <Head>
        <title>Unhatched</title>
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
      <Header style={{ fontSize: 'large' }} />
      <div className="Content">{children}</div>
      <Footer />
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

        } 
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
  </UserProvider>
)

Layout.propTypes = {
  user: PropTypes.any,
  loading: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

Layout.defaultProps = {
  user: undefined,
  loading: false,
}

export const getLayout = (page, styles = {}) => (
  <Layout styles={styles}>{page}</Layout>
)

export default Layout
