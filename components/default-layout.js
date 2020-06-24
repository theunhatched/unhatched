import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const DefaultLayout = ({ children }) => (
  <div className="DefaultLayout">
    <Head>
      <title>Unhatched</title>
      <link rel="icon" href="/favicon.ico" />
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

      background: radial-gradient(50% 50% at 50% 50%, 
      rgba(240, 163, 161, 0.4) 0%, rgba(255, 121, 121, 0.4) 100%);
      position: absolute;
      width: 1440px;
      height: 810px;
      left: 0px;
      top: 0px;

      background: #F0A3A1;
      }

      
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

    .womenFirstContentHeader{
        /* We’re a woman-first fertility service. */
        position: absolute;
        width: 720px;
        height: 202px;
        left: 120px;
        top: 166px;

        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 76px;
        line-height: 101px;

        color: #FFFFFF;
        
      }
    .womenSecondContentHeader{

      position: absolute;
      width: 671px;
      height: 108px;
      left: 120px;
      top: 399px;

      font-family: Ruda;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 180%;
      /* or 36px */
      color: #FFFFFF;
    }
    .gotEggsbtn{
          position: absolute;
          width: 217px;
          height: 57px;
          left: 125px;
          top: 531px;

          background: #0D1C66;
          box-shadow: 0px 4px 14px rgba(13, 28, 102, 0.38);
          border-radius: 4px;

          font-family: Oswald;
          font-style: normal;
          font-weight: normal;
          font-size: 21px;
          line-height: 31px;

          color: #FFFFFF;
      }
    .learnMorebtn{
        position: absolute;
        width: 217px;
        height: 57px;
        left: 365px;
        top: 531px;

        background: #FFD7D7;
        border: 1.5px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 31px;

        color: #0D1C66;
      }
    `}</style>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default DefaultLayout
