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

      .startTitle {
        position: absolute;
        width: 152px;
        height: 56px;
        left: 118px;
        top: 143px;

        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 56px;
        /* identical to box height */

        color: rgba(0, 0, 0, 0.87);
      }
      .secondaryContent {
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 180%;
        /* identical to box height, or 29px */
        color: rgba(0, 0, 0, 0.6);
      }

      .secondaryTitle {
        font-family: Ruda;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
        color: rgba(0, 0, 0, 0.87);
      }
    `}</style>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  styles: PropTypes.string.isRequired,
}

export const getLayout = (page, styles = {}) => (
  <DefaultLayout styles={styles}>{page}</DefaultLayout>
)

export default DefaultLayout
