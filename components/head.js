import React from 'react'
import NextHead from 'next/head'

const Head = () => (
  <NextHead>
    <title>Unhatched</title>
    <link href="http://www.theunhatched.com" rel="canonical" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Oswald&family=Ruda&family=Playfair+display"
    />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
  </NextHead>
)

export default Head
