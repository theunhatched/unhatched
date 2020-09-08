import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

const BecomeADonor = () => {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2 className="donorTitle">Become a Donor</h2>
      <div className="donorSubtitle">
        Welcome Empress. Let&apos;s get to know you and your goals.
      </div>

      <div className="deliverSubtitle">
        On my consent, I can contribute:
        <br /> <input type="checkbox" id="eggs" value="eggs" />
        <text className="tipFont"> Eggs </text>
        <br /> <input type="checkbox" id="embryos" value="embryos" />
        <text className="tipFont"> Embryos </text>
        <br /> <input type="checkbox" id="surrogacy" value="surrogacy" />
        <text className="tipFont"> Surrogacy </text>
      </div>

      <div className="geneticProfileSubtitle">
        My genetic profile:
        <div className="geneticProfileTable" />
      </div>

      <style jsx>{`
        .Index {
          padding: 50px 20px;
        }
        .donorTitle {
          position: absolute;
          width: 426px;
          height: 43px;
          left: 118px;
          top: 173px;
          font-family: Playfair Display;
          font-style: normal;
          font-weight: 900;
          font-size: 32px;
          line-height: 43px;
          /* identical to box height */
          color: rgba(0, 0, 0, 0.87);
        }
        .donorSubtitle {
          position: absolute;
          width: 894px;
          height: 87px;
          left: 118px;
          top: 220px;
          font-family: Ruda;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 180%;
          /* or 29px */
          color: rgba(0, 0, 0, 0.6);
        }
        .deliverSubtitle {
          /* About you */
          position: absolute;
          width: 671px;
          height: 32px;
          left: 117px;
          top: 305px;
          font-family: Ruda;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 180%;
          /* or 32px */
          color: rgba(0, 0, 0, 0.87);
        }
        .geneticProfileSubtitle {
          /* About you */
          position: absolute;
          width: 671px;
          height: 32px;
          left: 117px;
          top: 450px;
          font-family: Ruda;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 180%;
          /* or 32px */
          color: rgba(0, 0, 0, 0.87);
        }
        .geneticProfileTable {
          position: absolute;
          width: 1190px;
          height: 833px;
          left: 0;
          top: 50px;
          background: #ffffff;
          border: 1.5px solid #d9d9d9;
          box-sizing: border-box;
          border-radius: 4px;
        }
        .tipFont {
          font-family: Ruda;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 14px;
          /* identical to box height, or 87% */
          letter-spacing: 0.01em;
          color: rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </Layout>
  )
}

export default BecomeADonor
