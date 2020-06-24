import React from 'react'
import { getLayout } from '../components/default-layout'

const Index = () => (
  <>
    <h2 className="womenFirstContentHeader">We&apos;re a woman-first fertility service.</h2>
    <p className="womenSecondContentHeader">
      We’re run by by a team of WoMen for women. 
      Our mission is to educate, prioritize, and match egg donors
      and potential families in a totally transparent, step-by-step process.
    </p>
    <button type="button" className="gotEggsbtn">Got Eggs?</button>
    <button type="button" className="learnMorebtn">Learn More</button>
  </>
)
Index.getLayout = getLayout

export default Index
