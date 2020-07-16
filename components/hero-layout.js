import React from 'react'
import Layout from './layout'

const HeroLayout = (properties) => {
  const { style } = properties
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Layout style={{ ...style, backgroundColor: '#f0a3a1' }} {...properties} />
  )
}

export default HeroLayout
