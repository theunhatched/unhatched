import React from 'react'
import Layout from './layout'

const HeroLayout = (properties) => {
  const { style } = properties

  return (
    <div className="HeroLayout">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Layout style={{ ...style }} {...properties} />
      <style jsx>{`
        .HeroLayout {
          color: #fdfdfd;
          background: #f0a3a1;
          background-image: url('/woman-illustration.svg');
          background-repeat: no-repeat;
          background-position: 50% 50px;
        }
      `}</style>
    </div>
  )
}

export default HeroLayout
