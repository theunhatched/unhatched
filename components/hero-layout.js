import React from 'react'
import Layout from './layout'

const HeroLayout = (properties) => (
  <Layout
    style={{
      ...properties.style,
      backgroundColor: '#f0a3a1',
      color: '#fdfdfd',
    }}
    {...properties}
  />
)

export default HeroLayout
