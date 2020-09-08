import React from 'react'

import HeroLayout from '../components/hero-layout'
import Button from '../components/button'

export default function Home() {
  return (
    <HeroLayout>
      <div className="Index">
        {/* <img src="/woman-illustration.svg" className="illustration" alt="" /> */}
        <h2 className="title">We&apos;re a woman-first fertility service.</h2>
        <p className="subtitle">
          We’re run by by a team of WoMen for women. Our mission is to educate,
          prioritize, and match Egg, Embryo, and Surrogacy donors and potential
          families in a totally transparent, step-by-step process.
        </p>
        <Button href="/become-a-donor" primary>
          Got Eggs?
        </Button>
        <Button href="/about-us">Learn More</Button>
        <style jsx>{`
          .Index {
            padding: 50px 20px;
          }
          .title {
            /* We’re a woman-first fertility service. */
            font-family: Playfair Display;
            font-style: normal;
            font-weight: 900;
            font-size: 76px;
          }
          .subtitle {
            width: 520px;
            font-family: Ruda;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 180%;
            /* or 36px */
            padding: 20px 0;
          }
        `}</style>
      </div>
    </HeroLayout>
  )
}
