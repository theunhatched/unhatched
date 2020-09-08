import React from 'react'
import Layout from '../components/layout'

const AboutUs = () => {
  return (
    <Layout>
      <h2 className="title">Our Story</h2>
      <div className="subtitle">
        We&apos;re a team of Feminists who are out to change the world, who
        won&apos;t take no for an answer, and who are building women a global
        platform where we make our own rules.
      </div>

      <div className="subtitle">
        We started Unhatched because, quite frankly, fertility centers
        don&apos;t always have our best interest at heart. In some states, eggs
        have more rights than women. How f*cked up is that?
      </div>
      <div className="subtitle">
        We believe in a future where creating families is a non-exploited,
        ethical, and trusted opportunity that both Sponsors and Donors can feel
        good about; where the impact of Invitro Fertilization (IVF) on
        womens&apos; bodies is heavily documented, well researched, and where
        all impact on womens&apos; bodies is understood. Most of all, we believe
        in a future where women are taxed fairly (goodbye Pink tax) after
        creating potential life in our ovaries.
      </div>
      <div className="subtitle">
        We&apos;ve gone through Invitro Fertilization (IVF) and believe that the
        process could be better, that women should have a global network of
        options, on what to do with their eggs, embryos, and/or bodies.
      </div>
      <div className="subtitle">
        That&apos;s why Unhatched has to exist. We&apos;re here to be your big
        sister, your cool aunt, your big brother (who did his best), basically
        that one person in your life who taught you the fundamentals in life -
        how to find coupons, how to put in a tampon, how to change a tire… but
        this time, on fertility, cryopreservation, surrogacy, finances, taxes,
        and more.
      </div>
      <div className="subtitle">
        We hope that you&apos;ll join us in this mission to take back power and
        smash the patriarchy.
      </div>
      <div className="subtitle">
        <div>For women everywhere,</div>
        Victoria, Philihp, and the rest of the team
      </div>

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
          width: 700px;
          font-family: Ruda;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 180%;
          /* or 36px */
          padding: 20px 0;
        }
      `}</style>
    </Layout>
  )
}

export default AboutUs
