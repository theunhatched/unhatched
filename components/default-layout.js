import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const DefaultLayout = ({ children }) => (
  <div className="DefaultLayout">
    <Head>
      <title>Unhatched</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
    </Head>
    <Header style={{ fontSize: 'large' }} />
    <div className="Content">{children}</div>
    <Footer />
    <style jsx>{`
      .DefaultLayout {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template:
          'head' 77px
          'main' 1fr
          'foot' 30px
          / 1fr;
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default DefaultLayout