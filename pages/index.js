import React from 'react'
import HeroLayout from '../components/hero-layout'
import style from './index.module.css'

export default function Home() {
  return (
    <HeroLayout>
      <div className={style.h1}>
        We&rsquo;re a women–first
        <br />
        fertility service.
      </div>
      <div className={style.p}>
        We&rsquo;re run by WoMen for women. We educate, prioritize, and match
        egg
        <br />
        donors and potential families in a totally transparent, step-by-step
        <br />
        process.
      </div>
      <button type="button">Got eggs?</button>
      <button type="button">Learn more</button>
    </HeroLayout>
  )
}
