import React from 'react'
import App from 'next/app'
import DefaultLayout from '../components/default-layout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    const getLayout =
      Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

    // eslint-disable-next-line react/jsx-props-no-spreading
    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp
