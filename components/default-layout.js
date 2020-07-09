import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const DefaultLayout = ({ children, styles }) => (
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

        } 

        background: ${styles?.background || '#f0a3a1'};
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
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  styles: PropTypes.shape({
    background: PropTypes.string,
  }).isRequired,
}

export const getLayout = (page, styles = {}) => (
  <DefaultLayout styles={styles}>{page}</DefaultLayout>
)

export default DefaultLayout
