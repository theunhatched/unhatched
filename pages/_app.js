import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/site-layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const getLayout =
      Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

    // eslint-disable-next-line react/jsx-props-no-spreading
    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp
