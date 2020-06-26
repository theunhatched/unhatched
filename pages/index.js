import React from 'react'
import { getLayout } from '../components/default-layout'

const Index = () => (
  <div className="Index">
    <h2 className="womenFirstContentHeader">
      We&apos;re a woman-first fertility service.
    </h2>
    <p className="womenSecondContentHeader">
      We’re run by by a team of WoMen for women. Our mission is to educate,
      prioritize, and match egg donors and potential families in a totally
      transparent, step-by-step process.
    </p>
    <button type="button" className="gotEggsbtn">
      Got Eggs?
    </button>
    <button type="button" className="learnMorebtn">
      Learn More
    </button>
    <style jsx>{`
      .Index {
        padding: 80px 120px;
      }
      .womenFirstContentHeader {
        /* We’re a woman-first fertility service. */
        font-family: Playfair Display;
        font-style: normal;
        font-weight: 900;
        font-size: 76px;
        line-height: 101px;
        color: #ffffff;

        position: absolute;
        width: 720px;
        height: 202px;
        left: 120px;
        top: 166px;
      }
      .womenSecondContentHeader {
        padding: 20px 0;
        font-family: Ruda;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 180%;
        /* or 36px */
        color: #ffffff;

        position: absolute;
        width: 671px;
        height: 108px;
        left: 120px;
        top: 399px;
      }
      .gotEggsbtn {
        padding: 10px 50px;

        background: #0d1c66;
        box-shadow: 0px 4px 14px rgba(13, 28, 102, 0.38);
        border-radius: 4px;

        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 31px;

        color: #ffffff;

        position: absolute;
        width: 217px;
        height: 57px;
        left: 125px;
        top: 551px;
      }
      .learnMorebtn {
        margin-left: 30px;
        padding: 10px 50px;

        background: #ffd7d7;
        border: 1.5px solid #ffffff;
        box-sizing: border-box;
        border-radius: 4px;

        font-family: Oswald;
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 31px;

        color: #0d1c66;

        position: absolute;
        width: 217px;
        height: 57px;
        left: 365px;
        top: 551px;
      }
    `}</style>
  </div>
)
Index.getLayout = getLayout

export default Index
