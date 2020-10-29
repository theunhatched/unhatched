import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Header from './header'
// import Footer from './footer'

const Layout = ({ style, children }) => (
  <>
    <div className="Layout">
      <Head />
      <Header style={style} />
      <main className="container mx-auto pt-8">{children}</main>
      {/* <Footer style={style} /> */}
    </div>
    <style jsx>{`
      .Layout {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template:
          'head' 77px
          'main' 1fr
          'foot' 30px
          / 1fr;
        background-color: ${style.backgroundColor};
      }
    `}</style>
  </>
)

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
}

Layout.defaultProps = {
  style: {
    backgroundColor: '#ffffff',
  },
}

export default Layout
