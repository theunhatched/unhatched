import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const SiteLayout = ({ children }) => (
  <div className="SiteLayout">
    <Head>
      <title>Unhatched</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
    </Head>

    <Header />
    <div className="Content">{children}</div>
    <Footer />

    <style jsx>{`
      .SiteLayout {
        background-color: #c6e2e9;
        height: 100%;
        width: 100%;
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>

export default SiteLayout
