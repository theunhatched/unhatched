import React from 'react'
import { getLayout } from '../components/default-layout'

const Index = () => (
  <>
    <h2>We&apos;re a woman-first fertility service.</h2>
    <p>
      We’re run by WoMen for women. We educate, prioritize, and match egg donors
      and potential families in a totally transparent, step-by-step process.
    </p>
    <button type="button">Got Eggs?</button>
    <button type="button">Learn More</button>
  </>
)
Index.getLayout = getLayout

export default Index
