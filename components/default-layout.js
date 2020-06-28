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

        background: #f0a3a1;
        /*
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(240, 163, 161, 0.4) 0%,
          rgba(255, 121, 121, 0.4) 100%
        );*/
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
